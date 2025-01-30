import React, { useContext } from "react";
import { VisitasContext } from "../../context/VisitasContext";
import BtnAddVisita from "../addvisita";
import style from "./Listagem.module.css";

export default function Listagem() {
  const { visitas, editarVisita, cancelarVisita } = useContext(VisitasContext);

  const handleEditar = (index) => {
    // Lógica para editar a visita
    editarVisita(index);
  };

  const handleCancelar = (index) => {
    // Lógica para cancelar a visita
    cancelarVisita(index);
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2 className={style.gerencie}>Gerencie as suas visitas</h2>
        <BtnAddVisita />
      </div>
      <div>
        <table className={style.table}>
          <thead className={style.thead}>
            <tr>
              <th className={style.th1}>VISITANTE</th>
              <th>DATA</th>
              <th>HORA</th>
              <th className={style.thvazia}></th>
              <th className={style.th2}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {visitas.map((visita, index) => (
              <tr key={index}>
                <td>{visita.nome}</td>
                <td>{visita.data}</td>
                <td>{visita.hora}</td>
                <td>
                <button className={`${style.button} ${style.edit}`} onClick={() => handleEditar(index)}>Editar ✅</button>
                <button className={`${style.button} ${style.cancel}`} onClick={() => handleCancelar(index)}>Cancelar visita 🌟</button>
              </td>
                <td>{visita.status || 'Visita não realizada'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
