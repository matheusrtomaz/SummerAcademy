import Logo from "../../assets/logo.png";
import "./Header.module.css";

export function Header() {
    return (
        <div className="header">
            <div className="mother">
                <img className="logo" src={Logo} alt="Logo" />
                <div className="user">
                    <span>Roberto</span>
                    <img
                        className="avatar"
                        src="https://github.com/matheusrtomaz.png"
                        alt="Avatar"
                    />
                    <button>Sair</button>
                </div>
            </div>
        </div>
    );
}
