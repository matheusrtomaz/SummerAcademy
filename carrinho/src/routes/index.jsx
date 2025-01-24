import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Produtos } from "../pages/produtos";
import { Home } from "../pages/home";
import { Sobre } from "../pages/sobre";
import { Carrinho } from "../pages/carrinho";

export function AppRoutes() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </Router>
  );
}
