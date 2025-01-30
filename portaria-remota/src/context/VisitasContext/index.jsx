import React, { createContext, useState, useEffect } from 'react';

export const VisitasContext = createContext();

export const VisitasProvider = ({ children }) => {
  // Carrega as visitas do LocalStorage ao inicializar
  const [visitas, setVisitas] = useState(() => {
    const visitasSalvas = localStorage.getItem('visitas');
    return visitasSalvas ? JSON.parse(visitasSalvas) : [];
  });

  // Salva as visitas no LocalStorage sempre que o estado é atualizado
  useEffect(() => {
    localStorage.setItem('visitas', JSON.stringify(visitas));
  }, [visitas]);

  const adicionarVisita = (novaVisita) => {
    setVisitas([...visitas, novaVisita]);
  };
  
  const editarVisita = (index) => {
    // Lógica para editar a visita
    const novasVisitas = [...visitas];
    novasVisitas[index].status = 'Editada';
    setVisitas(novasVisitas);
  };

  const cancelarVisita = (index) => {
    // Lógica para cancelar a visita
    const novasVisitas = [...visitas];
    novasVisitas[index].status = 'Cancelada';
    setVisitas(novasVisitas);
  };

  return (
    <VisitasContext.Provider value={{ visitas, adicionarVisita, editarVisita, cancelarVisita }}>
      {children}
    </VisitasContext.Provider>
  );
};