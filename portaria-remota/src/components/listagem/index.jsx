import { useContext } from "react";
import { VisitasContext } from "../../context/VisitasContext";
import BtnAddVisita from "../addvisita";
import style from "./Listagem.module.css";

export default function Listagem() {
    const { visitas, editarVisita, cancelarVisita } =
        useContext(VisitasContext);

    const handleEditar = (index) => {
        // Lógica para editar a visita
        editarVisita(index);
    };

    // Garante que haja sempre 7 linhas no tbody
    const linhasPreenchidas = [...visitas];
    while (linhasPreenchidas.length < 7) {
        linhasPreenchidas.push({}); // Adiciona objetos vazios para preencher as linhas
    }

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
                        {linhasPreenchidas.map((visita, index) => (
                            <tr className={style.trbody} key={index}>
                                <td className={style.td1}>
                                    {visita.nome || ""}
                                </td>
                                <td>{visita.data || ""}</td>
                                <td>{visita.hora || ""}</td>
                                <td>
                                    {visita.nome ? ( // Mostra os botões apenas se houver uma visita válida
                                        <>
                                            <button
                                                className={`${style.button} ${style.edit}`}
                                                onClick={() =>
                                                    editarVisita(index)
                                                }
                                            >
                                                Editar ✅
                                            </button>
                                            <button
                                                className={`${style.button} ${style.cancel}`}
                                                onClick={() =>
                                                    cancelarVisita(index)
                                                }
                                            >
                                                Cancelar visita 🌟
                                            </button>
                                        </>
                                    ) : null}
                                </td>
                                <td>{visita.status || ""}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
