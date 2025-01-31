import style from "./Logopredio.module.css";
import LogoCondominio from "../../assets/logocondominio.png";

export default function LogoPredio() {
    return (
        <div className={style.container}>
            <div className={style.logo}>
                <img src={LogoCondominio} alt="Logo do Condomínio" />
            </div>
            <div className={style.title}>
                <span>Apartamento 405, Bloco A</span>
            </div>
        </div>
    );
}
