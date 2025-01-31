import BannerMain from "../../assets/bannerMain.png";
import ButtonVoltar from "../buttonvoltar";
import LogoPredio from "../logopredio";
import style from "./Banner.module.css";

export function Banner({ showButtonVoltar, showLogoPredio }) {
    return (
        <div className={style.banner}>
            <img className={style.img} src={BannerMain} alt="Banner" />
            <div className={style.blurBottom}></div>{" "}
            {showButtonVoltar && (
                <div className={style.divbtn}>
                    <ButtonVoltar className={style.buttonvoltar} />
                </div>
            )}
            {showLogoPredio && (
                <div className={style.divbtn2}>
                    <LogoPredio className={style.buttonvoltar} />
                </div>
            )}
        </div>
    );
}
