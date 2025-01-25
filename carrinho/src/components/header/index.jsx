import React, { useContext } from "react";
import { HeaderContainer } from "./styles";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

export function Header() {
  const { getItemCount } = useContext(CartContext);
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
        <span><Link to="/carrinho">CARRINHO</Link>
        <span>({getItemCount()})</span>
        </span>
      </div>
    </HeaderContainer>
  );
}
