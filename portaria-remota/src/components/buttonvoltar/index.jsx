import { useNavigate } from "react-router";
import styles from "./Buttonvoltar.module.css";

export default function ButtonVoltar() {
  const navigate = useNavigate();

  console.log("ButtonVoltar está sendo renderizado"); // Verifique no console

    return (
        <div>
            <button
                type="button"
                onClick={() => navigate("/")}
                className={styles.button2}
            >
                Voltar
            </button>
        </div>
    );
}
