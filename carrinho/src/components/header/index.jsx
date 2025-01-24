import React from "react";
import { HeaderContainer } from "./styles";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <span>LOGO</span>
        <nav>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/produtos">PRODUTOS</Link></li>
            <li><Link to="/sobre">SOBRE NÓS</Link></li>
          </ul>
        </nav>
        <span><Link to="/carrinho">CARRINHO</Link></span>
      </div>
    </HeaderContainer>
  );
}
