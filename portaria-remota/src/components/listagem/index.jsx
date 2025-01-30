import React, { useContext } from 'react';
import { VisitasContext } from '../../context/VisitasContext';

export default function Listagem() {
  const { visitas } = useContext(VisitasContext);

  return (
    <div>
      <h2>Listagem de Visitas</h2>
      <table>
        <thead>
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
  );
}