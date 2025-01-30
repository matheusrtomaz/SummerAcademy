import React, { useContext } from "react";
import { VisitasContext } from "../../context/VisitasContext";
import BtnAddVisita from "../addvisita";
import style from "./Listagem.module.css";

export default function Listagem() {
  const { visitas } = useContext(VisitasContext);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2 className={style.gerencie}>Gerencie as suas visitas</h2>
        <BtnAddVisita />
      </div>
      <div className={style.table}>
        <table>
          <thead className={style.thead}>
            <tr>
              <th>Visitante</th>
              <th>Data</th>
              <th>Hora</th>
              <th>Tipo de Documento</th>
              <th>Número do Documento</th>
              <th>Observação</th>
            </tr>
          </thead>
          <tbody>
            {visitas.map((visita, index) => (
              <tr key={index}>
                <td>{visita.nome}</td>
                <td>{visita.data}</td>
                <td>{visita.hora}</td>
                <td>{visita.tipoDocumento}</td>
                <td>{visita.numeroDocumento}</td>
                <td>{visita.observacao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
