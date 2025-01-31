import { Link } from "react-router";
import Logo from "../../assets/logo.png";
import Avatar from "../../assets/perfil.jpeg";
import styles from "./Header.module.css";

export function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.content}>
                <Link to="/" className={styles.link}>
                    <img className={styles.logo} src={Logo} alt="Logo" />
                </Link>
                
                <div className={styles.user}>
                    <span className={styles.name}>Matheus</span>
                    <img className={styles.avatar} src={Avatar} alt="Avatar" />
                    <button className={styles.btn_header}>Sair</button>
                </div>
            </div>
        </div>
    );
}
