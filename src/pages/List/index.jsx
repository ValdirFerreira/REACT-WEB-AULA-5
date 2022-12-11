
import '../../App.css';
import { Link } from "react-router-dom";

import React, { useState, useEffect,useContext} from 'react'
import api from '../../services/api';
import { AuthContext } from "../../Auth/AuthContext";

export const Lista = () => {
    const [mensagens, setMen] = useState([]);

    const { singOut } = useContext(AuthContext);

    useEffect(() => {
        api.post('List').then(({ data }) => {
            setMen(data)
        })
    })

    return (
        <div>

            <div className="navbar">
                <Link className='btn-criar' to="/cadastro">
                    Criar Mensagem
                </Link>

                <Link className='btn-sair' onClick={singOut}>
                    Sair
                </Link>
            </div>

            <div className='container'>
                {mensagens.map(item => (

                    <div className='container-mensagem'>
                        <div className='seta-mensagem'> </div>
                        <div className='base-mensagem' key={item.id}>  {item.id} - {item.titulo}  </div>

                        <Link className='btn-editar'
                            to={{ pathname: "/edicao/" + item.id }}>
                            Editar
                        </Link>

                        <Link className='btn-excluir'
                            to={{ pathname: "/delete/" + item.id }}>
                            Excluir
                        </Link>


                    </div>
                ))}

            </div>

        </div>
    );


}