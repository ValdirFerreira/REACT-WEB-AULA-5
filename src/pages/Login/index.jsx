// instalação npm install eslint-plugin-react-hooks --save-dev

import '../../App.css';


import { useState, useEffect, useContext } from 'react';

import { Navigate, Outlet, Redirect } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthContext";




export const Login = () => {

    let navigate = useNavigate();

    const { signIn, signed } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!email || !senha) {
            alert("Digite email e senha ")
            return;
        }

        const data = {
            email,
            senha,
        };
        await signIn(data);
    };

    if (!signed) {

        return (

            <div className='container'>

                <form onSubmit={handleSubmit} >
                    <div className="container-login">
                        <h1>Login</h1>
                        <input className='input-text'
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                        <input className='input-text'
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} />

                        <button className='btn-criar' type="submit" >
                            Acessar
                        </button>
                    </div>

                </form>
            </div>

        );
    }
    else {
        return <Navigate to="/lista" />;
    }
};
