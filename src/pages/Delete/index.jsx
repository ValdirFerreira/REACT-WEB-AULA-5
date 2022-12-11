import '../../App.css';
import { Link, useNavigate, useParams } from "react-router-dom";

import React, { useState, useEffect } from 'react'
import api from '../../services/api';

export const Delete = () => {

    let navigate = useNavigate();
    const [titulo, setTitulo] = useState("");
    const [mensagem, setMensagem] = useState({});

    const { id } = useParams();


    useEffect(() => {

        const param = {
            "id": id,
            "titulo": titulo,
            "ativo": false,
            "dataCadastro": "2022-08-05T01:30:24.5805304",
            "dataAlteracao": "2022-08-06T00:24:56.2500819",
            "userId": "4b845330-4d85-4ad2-9d34-ac313fbcde68"
        };

        api.post('GetEntityById', param).then(({ data }) => {
            setMensagem(data);
            setTitulo(data.titulo);
        })
    },{})


    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            "id":mensagem.id,
            "titulo": titulo,
            "ativo": mensagem.ativo,
            "dataCadastro": mensagem.dataCadastro,
            "dataAlteracao": mensagem.dataAlteracao,
            "userId": mensagem.userId
        };

        await api.post("/Delete", data);
        alert("Deletado com sucesso!");
        setTitulo("");
        navigate('/lista');

    };

    return (
        <div className='container' >
            <h1 className='titulo'>Desejá realmente deletar?</h1>

            <form onSubmit={handleSubmit}>
                <input className='input-text' type="text" value={titulo}
                    onChange={(e) => setTitulo(e.target.value)} readOnly />

                <button className='btn-deletar' type='submit'>
                   Deletar Registro
                </button>

                <Link className='btn-voltar' to="/lista">
                    Cancelar
                </Link>

            </form>

        </div>

    );


}