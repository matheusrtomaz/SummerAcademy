import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Editar from "./pages/Editar";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/editar" element={<Editar />} />
            </Routes>
        </BrowserRouter>
    );
}
