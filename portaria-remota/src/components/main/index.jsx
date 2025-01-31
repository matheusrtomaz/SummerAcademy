import style from "./Main.module.css";

export function Main({ children, isCadastro }) {
    return (
        <div
            className={`${style.container} ${
                isCadastro ? style.cadastroContainer : ""
            }`}
        >
            <div
                className={`${style.content} ${
                    isCadastro ? style.cadastroContent : ""
                }`}
            >
                {children}
            </div>
        </div>
    );
}
