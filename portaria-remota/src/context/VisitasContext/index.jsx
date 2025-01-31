import { createContext, useState, useEffect } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const VisitasContext = createContext();

// eslint-disable-next-line react/prop-types
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
  
  const editarVisita = (index, visitaEditada) => {
    const novasVisitas = [...visitas];
    novasVisitas[index] = visitaEditada; // Atualiza a visita no índice especificado
    setVisitas(novasVisitas);
  };

  const cancelarVisita = (index) => {
    // Remove o agendamento da lista
    const novasVisitas = visitas.filter((_, i) => i !== index);
    setVisitas(novasVisitas);
  };

  const cancelar2Visita = (index) => {
    setVisitas((prevVisitas) =>
        prevVisitas.map((visita, i) =>
            i === index ? { ...visita, status: "Cancelada" } : visita
        )
    );
};


  return (
    <VisitasContext.Provider value={{ visitas, adicionarVisita, editarVisita, cancelarVisita, cancelar2Visita }}>
      {children}
    </VisitasContext.Provider>
  );
};