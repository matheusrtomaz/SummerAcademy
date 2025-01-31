import { useContext } from "react";
import { VisitasContext } from "../../context/VisitasContext";
import BtnAddVisita from "../addvisita";
import style from "./Listagem.module.css";
import { useNavigate } from "react-router"; // Corrigido aqui
import { Pencil, Trash2, Eraser } from "lucide-react";

export default function Listagem() {
    const { visitas, cancelarVisita, cancelar2Visita } =
        useContext(VisitasContext);
    const navigate = useNavigate(); // Corrigido aqui

    // Garante que haja sempre 7 linhas no tbody
    const linhasPreenchidas = [...visitas];
    while (linhasPreenchidas.length < 7) {
        linhasPreenchidas.push({}); // Adiciona objetos vazios para preencher as linhas
    }

    const handleEditar = (index) => {
        // Navega para a tela de edição com os dados da visita selecionada
        navigate("/editar", { state: { ...visitas[index], index } }); // Corrigido aqui
    };

    const formatarData = (data) => {
        if (!data) return "";
        const [ano, mes, dia] = data.split("-");
        return `${dia}/${mes}/${ano}`;
    };

    // Função para determinar o status da visita
    const getStatusVisita = (visita) => {
        if (!visita || !visita.data || !visita.hora) return ""; //Retornava "Sem informação" no Status

        if (visita.status === "Cancelada") return "Cancelada";

        const dataHoraVisita = new Date(`${visita.data}T${visita.hora}`);
        const agora = new Date();

        return agora > dataHoraVisita
            ? "Visita realizada"
            : "Visita não realizada";
    };

    // Função para definir a classe do status
    const getStatusClass = (status) => {
        switch (status) {
            case "Visita realizada":
                return style.realizada;
            case "Visita não realizada":
                return style.naoRealizada;
            case "Cancelada":
                return style.cancelada;
            default:
                return "";
        }
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
                        {linhasPreenchidas.map((visita, index) => (
                            <tr className={style.trbody} key={index}>
                                <td className={style.td1}>
                                    {visita.nome || ""}
                                </td>
                                <td className={style.td2}>
                                    {formatarData(visita.data) || ""}
                                </td>
                                <td className={style.td3}>
                                    {visita.hora || ""}
                                </td>
                                <td>
                                    {visita.nome ? ( // Mostra os botões apenas se houver uma visita válida
                                        <>
                                            <button
                                                className={`${style.button} ${style.edit}`}
                                                onClick={() =>
                                                    handleEditar(index)
                                                }
                                            >
                                                Editar
                                                <Pencil
                                                    className={style.icons}
                                                />
                                            </button>

                                            {visita.status !== "Cancelado" && ( // Mostra o botão "Cancelar2" apenas se o status NÃO for "Cancelado"
                                                <button
                                                    className={`${style.button} ${style.cancel}`}
                                                    onClick={() =>
                                                        cancelar2Visita(index)
                                                    }
                                                >
                                                    Cancelar visita
                                                    <Trash2 className={style.icons}/>
                                                </button>
                                            )}

                                            <button
                                                className={`${style.button} ${style.cancel}`}
                                                onClick={() =>
                                                    cancelarVisita(index)
                                                }
                                            >
                                                Apagar visita
                                                <Eraser className={style.icons}/>
                                            </button>
                                        </>
                                    ) : null}
                                </td>
                                <td>
                                    <span
                                        className={getStatusClass(
                                            getStatusVisita(visita)
                                        )}
                                    >
                                        {getStatusVisita(visita)}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
