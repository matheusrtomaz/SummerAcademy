import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router";
import { VisitasContext } from "../../context/VisitasContext";
import styles from "./Editando.module.css";

export default function Editando() {
    const { state } = useLocation();
    const { editarVisita } = useContext(VisitasContext);
    const navigate = useNavigate();

    const [nome, setNome] = useState(state?.nome || "");
    const [data, setData] = useState(state?.data || "");
    const [hora, setHora] = useState(state?.hora || "");
    const [tipoDocumento, setTipoDocumento] = useState(
        state?.tipoDocumento || ""
    );
    const [numeroDocumento, setNumeroDocumento] = useState(
        state?.numeroDocumento || ""
    );
    const [observacao, setObservacao] = useState(state?.observacao || "");

    const handleSalvar = () => {
        const visitaEditada = {
            nome,
            data,
            hora,
            tipoDocumento,
            numeroDocumento,
            observacao,
        };

        editarVisita(state.index, visitaEditada);

        navigate("/");
    };

    return (
        <div className={styles.geral}>
            <div className={styles.title}>
                <h1>Editar visita</h1>
            </div>
            <div className={styles.container}>
                <form className={styles.form}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>
                            Nome do visitante
                        </label>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className={styles.input}
                            placeholder="Digite o nome do visitante"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Data</label>
                        <input
                            type="date"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                            className={styles.input}
                            placeholder="Selecione a data"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Hora</label>
                        <input
                            type="time"
                            value={hora}
                            onChange={(e) => setHora(e.target.value)}
                            className={styles.input}
                            placeholder="Selecione a hora"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>
                            Tipo de documento
                        </label>
                        <input
                            type="text"
                            value={tipoDocumento}
                            onChange={(e) => setTipoDocumento(e.target.value)}
                            className={styles.input}
                            placeholder="Digite o tipo de documento"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>
                            Número do documento
                        </label>
                        <input
                            type="text"
                            value={numeroDocumento}
                            onChange={(e) => setNumeroDocumento(e.target.value)}
                            className={styles.input}
                            placeholder="Digite o número do documento"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>
                            Observação (opcional)
                        </label>
                        <textarea
                            value={observacao}
                            onChange={(e) => setObservacao(e.target.value)}
                            className={styles.textarea}
                            placeholder="Digite a observação"
                        />
                    </div>
                    <div className={styles.divdosbotoes}>
                        <div className={styles.divdosbotoesinterna}>
                            <button
                                type="button"
                                onClick={() => navigate("/")}
                                className={styles.button2}
                            >
                                Voltar
                            </button>
                            <button
                                type="button"
                                onClick={handleSalvar}
                                className={styles.button}
                            >
                                Salvar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
