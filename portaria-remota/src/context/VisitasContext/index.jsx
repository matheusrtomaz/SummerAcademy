import { createContext, useState, useEffect } from "react";

export const VisitasContext = createContext();

export const VisitasProvider = ({ children }) => {
    const [visitas, setVisitas] = useState(() => {
        const visitasSalvas = localStorage.getItem("visitas");
        return visitasSalvas ? JSON.parse(visitasSalvas) : [];
    });

    useEffect(() => {
        localStorage.setItem("visitas", JSON.stringify(visitas));
    }, [visitas]);

    const adicionarVisita = (novaVisita) => {
        setVisitas([...visitas, novaVisita]);
    };

    const editarVisita = (index, visitaEditada) => {
        const novasVisitas = [...visitas];
        novasVisitas[index] = visitaEditada;
        setVisitas(novasVisitas);
    };

    const cancelarVisita = (index) => {
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
        <VisitasContext.Provider
            value={{
                visitas,
                adicionarVisita,
                editarVisita,
                cancelarVisita,
                cancelar2Visita,
            }}
        >
            {children}
        </VisitasContext.Provider>
    );
};
