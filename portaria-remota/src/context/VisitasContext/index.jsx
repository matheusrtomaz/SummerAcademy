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

  return (
    <VisitasContext.Provider value={{ visitas, adicionarVisita }}>
      {children}
    </VisitasContext.Provider>
  );
};