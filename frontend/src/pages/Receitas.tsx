import React, { useEffect, useState } from 'react';
import { Receita } from '../interfaces/Receita';

function Receitas() {
    const [receitas, setReceitas] = useState<Receita[]>([]);
    const [categorias, setCategorias] = useState<any[]>([]);
    const [ingredientes, setIngredientes] = useState<any[]>([]);
    const [nome, setNome] = useState('');
    const [modoPreparo, setModoPreparo] = useState('');
    const [tempoPreparo, setTempoPreparo] = useState(0);
    const [categoriaId, setCategoriaId] = useState(0);
    const [ingredienteId, setIngredienteId] = useState(0);
    const [erro, setErro] = useState('');

    useEffect(() => {
        buscarReceitas();
        fetch('http://localhost:5000/categorias')
            .then(r => r.json())
            .then(setCategorias);

        fetch('http://localhost:5000/ingredientes')
            .then(r => r.json())
            .then(setIngredientes);
    }, []);

    function buscarReceitas() {
        fetch('http://localhost:5000/receitas')
            .then(res => res.json())
            .then(data => setReceitas(data))
            .catch(() => setErro('Erro ao carregar receitas'));
    }

    function cadastrar(e: React.FormEvent) {
        e.preventDefault();

        if (!nome || !modoPreparo || !categoriaId || !ingredienteId) {
            setErro('Preencha todos os campos!');
            return;
        }

        fetch('http://localhost:5000/receitas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome,
                modoPreparo,
                tempoPreparo,
                categoriaId,
                ingredienteId
            })
        })
            .then(() => {
                setNome('');
                setModoPreparo('');
                setTempoPreparo(0);
                setCategoriaId(0);
                setIngredienteId(0);
                setErro('');
                buscarReceitas();
            })
            .catch(() => setErro('Erro ao cadastrar receita'));
    }

    function deletar(id: number) {
        fetch(`http://localhost:5000/receitas/${id}`, {
            method: 'DELETE'
        })
            .then(() => buscarReceitas())
            .catch(() => setErro('Erro ao deletar receita'));
    }

    return (
        <div>
            <h2 className="mb-4">📖 Receitas</h2>

            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">Nova Receita</h5>

                    {erro && (
                        <div className="alert alert-danger">
                            {erro}
                        </div>
                    )}

                    <form onSubmit={cadastrar}>
                        <div className="mb-3">
                            <label className="form-label">Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Modo de Preparo
                            </label>
                            <textarea
                                className="form-control"
                                rows={3}
                                value={modoPreparo}
                                onChange={e => setModoPreparo(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Tempo de Preparo (min)
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                value={tempoPreparo}
                                onChange={e =>
                                    setTempoPreparo(Number(e.target.value))
                                }
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Categoria</label>
                            <select
                                className="form-select"
                                value={categoriaId}
                                onChange={e =>
                                    setCategoriaId(Number(e.target.value))
                                }
                            >
                                <option value={0}>Selecione...</option>

                                {categorias.map(c => (
                                    <option key={c.id} value={c.id}>
                                        {c.nome}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Ingrediente Principal
                            </label>

                            <select
                                className="form-select"
                                value={ingredienteId}
                                onChange={e =>
                                    setIngredienteId(Number(e.target.value))
                                }
                            >
                                <option value={0}>Selecione...</option>

                                {ingredientes.map(i => (
                                    <option key={i.id} value={i.id}>
                                        {i.nome}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-success"
                        >
                            Cadastrar
                        </button>
                    </form>
                </div>
            </div>

            <table className="table table-striped">
                <thead className="table-success">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Tempo (min)</th>
                        <th>Categoria</th>
                        <th>Ingrediente</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {receitas.map(r => (
                        <tr key={r.id}>
                            <td>{r.id}</td>
                            <td>{r.nome}</td>
                            <td>{r.tempoPreparo}</td>
                            <td>{r.categoria?.nome}</td>
                            <td>{r.ingrediente?.nome}</td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deletar(r.id)}
                                >
                                    Deletar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Receitas;