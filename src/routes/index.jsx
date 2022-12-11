import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Lista } from "../pages/List"
import { Cadastro } from "../pages/Cadastro"
import { Edicao } from "../pages/Edicao";
import { Delete } from "../pages/Delete";
import { Login } from "../pages/Login";
import { PrivateRoute } from '../routes/PrivateRoute';


export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/Cadastro" element={<PrivateRoute />} >
                    <Route path="/Cadastro" element={<Cadastro />} />
                </Route>

                <Route path="/lista" element={<PrivateRoute />}>
                    <Route path="/lista" element={<Lista />} />
                </Route>

                <Route path="/edicao/:id" element={<PrivateRoute />}>
                    <Route path="/edicao/:id" element={<Edicao />} />
                </Route>


                <Route path="/delete/:id" element={<PrivateRoute />}>
                    <Route path="/delete/:id" element={<Delete />} />
                </Route>

            </Routes>
        </Router>
    );
}