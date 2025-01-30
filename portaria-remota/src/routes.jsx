import { BrowserRouter as Router, Route, Routes } from "react-router";
import { Home } from "lucide-react";
import Cadastro from "./pages/Cadastro";

export default function Rotas() {
    return (
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </Router>
    );
}
