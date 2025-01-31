import { useState, useContext } from "react";
import { VisitasContext } from "../../context/VisitasContext";
import styles from "./Cadastrando.module.css";
import { useNavigate } from "react-router";

export default function Cadastrando() {
    const { adicionarVisita } = useContext(VisitasContext);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [typedoc, setTipoDocumento] = useState("");
    const [numdoc, setNumeroDocumento] = useState("");
    const [obs, setObservacao] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const now = new Date();
        const selectedDate = new Date(`${date}T${time}`);

        if (selectedDate < now) {
            alert(
                "Não é possível agendar uma visita para uma data ou hora anterior à atual."
            );
            return;
        }

        const novaVisita = {
            nome: name,
            data: date,
            hora: time,
            tipoDocumento: typedoc,
            numeroDocumento: numdoc,
            observacao: obs,
        };
        adicionarVisita(novaVisita);

        setName("");
        setDate("");
        setTime("");
        setTipoDocumento("");
        setNumeroDocumento("");
        setObservacao("");
        navigate("/");
    };

    return (
        <div className={styles.geral}>
            <div className={styles.title}>
                <h1>Adicionar nova visita</h1>
            </div>
            <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>
                            Nome do visitante
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={styles.input}
                            placeholder="Digite o nome do visitante"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Data</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className={styles.input}
                            placeholder="Selecione a data"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Hora</label>
                        <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
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
                            value={typedoc}
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
                            value={numdoc}
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
                            value={obs}
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
                            <button type="submit" className={styles.button}>
                                Salvar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
