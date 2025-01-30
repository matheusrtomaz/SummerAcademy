import { Link } from "react-router";
import style from "./Addvisita.module.css";
import { UserPlus } from 'lucide-react';

export default function BtnAddVisita() {
  return (
    // <div>
      <div className={style.list}>
        <Link to="/cadastro" className={style.btnvisita}>Adicionar nova visita <UserPlus className={style.useradd} /></Link>
      </div>
    // </div>
  );
}