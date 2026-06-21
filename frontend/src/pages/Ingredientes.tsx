import React, { useEffect, useState } from 'react';
import { Ingrediente } from '../interfaces/Ingrediente';

function Ingredientes() {
    const [ingredientes, setIngredientes] = useState<Ingrediente[]>([]);
    const [nome, setNome] = useState('');
    const [unidade, setUnidade] = useState('');
    const [erro, setErro] = useState('');

    useEffect(() => {
        buscarIngredientes();
    }, []);

    function buscarIngredientes() {
        fetch('http://localhost:5000/ingredientes')
            .then(res => res.json())
            .then(data => setIngredientes(data))
            .catch(() => setErro('Erro ao carregar ingredientes'));
    }

    function cadastrar(e: any) {
        e.preventDefault();

        if (!nome || !unidade) {
            setErro('Preencha todos os campos!');
            return;
        }

        fetch('http://localhost:5000/ingredientes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, unidade })
        })
            .then(() => {
                setNome('');
                setUnidade('');
                setErro('');
                buscarIngredientes();
            })
            .catch(() => setErro('Erro ao cadastrar ingrediente'));
    }

    function deletar(id: number) {
        fetch(`http://localhost:5000/ingredientes/${id}`, {
            method: 'DELETE'
        })
            .then(() => buscarIngredientes())
            .catch(() => setErro('Erro ao deletar ingrediente'));
    }

    return (
        <div>
            <h2 className="mb-4">🥕 Ingredientes</h2>

            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">Novo Ingrediente</h5>

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
                            <label className="form-label">Unidade</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="kg, g, ml, unidade..."
                                value={unidade}
                                onChange={e => setUnidade(e.target.value)}
                            />
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
                        <th>Unidade</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {ingredientes.map(i => (
                        <tr key={i.id}>
                            <td>{i.id}</td>
                            <td>{i.nome}</td>
                            <td>{i.unidade}</td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deletar(i.id)}
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

export default Ingredientes;