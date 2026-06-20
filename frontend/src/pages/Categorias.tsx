import React, { useEffect, useState } from 'react';
import { Categoria } from '../interfaces/Categoria';

function Categorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [erro, setErro] = useState('');

    useEffect(() => {
        buscarCategorias();
    }, []);

    function buscarCategorias() {
        fetch('http://localhost:5000/categorias')
            .then(res => res.json())
            .then(data => setCategorias(data))
            .catch(() => setErro('Erro ao carregar categorias'));
    }

    function cadastrar(e: any) {
        e.preventDefault();
        if (!nome || !descricao) {
            setErro('Preencha todos os campos!');
            return;
        }
        fetch('http://localhost:5000/categorias', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, descricao })
        })
            .then(() => {
                setNome('');
                setDescricao('');
                setErro('');
                buscarCategorias();
            })
            .catch(() => setErro('Erro ao cadastrar categoria'));
    }

    function deletar(id: number) {
        fetch(`http://localhost:5000/categorias/${id}`, { method: 'DELETE' })
            .then(() => buscarCategorias())
            .catch(() => setErro('Erro ao deletar categoria'));
    }

    return (
        <div>
            <h2 className="mb-4">📂 Categorias</h2>
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">Nova Categoria</h5>
                    {erro && <div className="alert alert-danger">{erro}</div>}
                    <form onSubmit={cadastrar}>
                        <div className="mb-3">
                            <label className="form-label">Nome</label>
                            <input type="text" className="form-control"
                                value={nome} onChange={e => setNome(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Descrição</label>
                            <input type="text" className="form-control"
                                value={descricao} onChange={e => setDescricao(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-success">
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
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {categorias.map(c => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.nome}</td>
                            <td>{c.descricao}</td>
                            <td>
                                <button className="btn btn-danger btn-sm"
                                    onClick={() => deletar(c.id)}>
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

export default Categorias;