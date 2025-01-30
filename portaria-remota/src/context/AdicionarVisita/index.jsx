// import React, { useContext, useState } from 'react';
// import { VisitasContext } from './VisitasContext';
// import { useNavigate } from 'react-router';

// export function AdicionarVisita() {
//     const { adicionarVisita } = useContext(VisitasContext);
//     const navigate = useNavigate();
//     const [novaVisita, setNovaVisita] = useState({
//         nome: '',
//         data: '',
//         hora: '',
//         documento: '',
//         observacao: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setNovaVisita({ ...novaVisita, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         adicionarVisita(novaVisita);
//         navigate('/');
//     };

//     return (
//         <>
//             <h1>Adicionar nova visita</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Nome do visitante:
//                     <input type="text" name="nome" value={novaVisita.nome} onChange={handleChange} />
//                 </label>
//                 <label>
//                     Data:
//                     <input type="date" name="data" value={novaVisita.data} onChange={handleChange} />
//                 </label>
//                 <label>
//                     Hora:
//                     <input type="time" name="hora" value={novaVisita.hora} onChange={handleChange} />
//                 </label>
//                 <label>
//                     Tipo de documento:
//                     <input type="text" name="documento" value={novaVisita.documento} onChange={handleChange} />
//                 </label>
//                 <label>
//                     Observação:
//                     <textarea name="observacao" value={novaVisita.observacao} onChange={handleChange} />
//                 </label>
//                 <button type="submit">Salvar</button>
//             </form>
//         </>
//     );
// }