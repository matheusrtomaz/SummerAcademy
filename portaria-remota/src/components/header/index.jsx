import React from "react";
import HeaderStyles from "./styles";
import Logo from "../../assets/logo.png";
import Avatar from "../../assets/avatar.png";

export function Header() {
  return (
    <HeaderStyles>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="user">
        <span>Roberto</span>
        <img src={Avatar} alt="" />
        <button>Sair</button>
      </div>
    </HeaderStyles>
  );
}
