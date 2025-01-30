// import React, { useContext } from 'react';
// import { VisitasContext } from './VisitasContext';
// import { useNavigate } from 'react-router';

// export function ListaVisitas() {
//     const { visitas } = useContext(VisitasContext);
//     const navigate = useNavigate();

//     return (
//         <>
//             <h1>Gerencie as suas visitas</h1>
//             <button onClick={() => navigate('/adicionar-visita')}>Adicionar nova visita</button>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Visitante</th>
//                         <th>Data</th>
//                         <th>Hora</th>
//                         <th>Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {visitas.map((visita, index) => (
//                         <tr key={index}>
//                             <td>{visita.nome}</td>
//                             <td>{visita.data}</td>
//                             <td>{visita.hora}</td>
//                             <td>{visita.status}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </>
//     );
// }