
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import api from '../services/api';


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadData = () => {
            const storageUser = localStorage.getItem("@Context:user");
            const storageToken = localStorage.getItem("@Context:token");

            if (storageUser && storageToken) {
                setUser(storageUser);
            }
        };
        loadData();
    }, []);


    const signIn = async ({ email, senha }) => {
        try {
            const response = await api.post("/CriarTokenIdentity", { email: email, senha: senha, cpf: "" });

            if (response.data.error) {
                alert(response.data.error);
            } else {
                setUser(response.data);
                api.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${response.data}`;

                localStorage.setItem("@Context:user", JSON.stringify({ email: email, senha: "", cpf: "" }));
                localStorage.setItem("@Context:token", response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const singOut = () => {
        localStorage.clear();
        setUser(null);
        return <Navigate to="/" />;
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                signIn,
                singOut,
                signed: !!user,
            }}>

            {children}
        </AuthContext.Provider>
    );


}