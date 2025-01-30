import React, { createContext, useState } from 'react';

export const VisitasContext = createContext();

export const VisitasProvider = ({ children }) => {
  const [visitas, setVisitas] = useState([]);

  const adicionarVisita = (novaVisita) => {
    setVisitas([...visitas, novaVisita]);
  };

  return (
    <VisitasContext.Provider value={{ visitas, adicionarVisita }}>
      {children}
    </VisitasContext.Provider>
  );
};





















// import React, { createContext, useState } from 'react';

// export const VisitasContext = createContext();

// export const VisitasProvider = ({ children }) => {
//     const [visitas, setVisitas] = useState([]);

//     const adicionarVisita = (novaVisita) => {
//         setVisitas([...visitas, novaVisita]);
//     };

//     return (
//         <VisitasContext.Provider value={{ visitas, adicionarVisita }}>
//             {children}
//         </VisitasContext.Provider>
//     );
// };