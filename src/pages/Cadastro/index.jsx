import '../../App.css';
import { Link, useNavigate } from "react-router-dom";

import React, { useState, useEffect } from 'react'
import api from '../../services/api';

export const Cadastro = () => {

    let navigate = useNavigate();

    const [titulo, setTitulo] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            "titulo": titulo,
            "ativo": false,
            "dataCadastro": "2022-08-05T01:30:24.5805304",
            "dataAlteracao": "2022-08-06T00:24:56.2500819",
            "userId": "4b845330-4d85-4ad2-9d34-ac313fbcde68"
        };

        await api.post("/Add", data);
        alert("Mensagem criado com sucesso!");
        setTitulo("");
        navigate('/lista');

    };

    return (
        <div className='container' >
            <h1 className='titulo'>Cadastro</h1>

            <form onSubmit={handleSubmit}>
                <input className='input-text' type="text" value={titulo}
                    onChange={(e) => setTitulo(e.target.value)} />

                <button className='btn-criar' type='submit'>
                    Enviar Mensagem
                </button>

                <Link className='btn-voltar' to="/lista">
                    Voltar
                </Link>

            </form>

        </div>

    );


}