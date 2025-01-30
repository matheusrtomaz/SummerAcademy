import { Link } from "react-router";

export default function BtnAddVisita() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/cadastro">Adicionar nova visita</Link>
        </li>
      </ul>
    </div>
  );
}