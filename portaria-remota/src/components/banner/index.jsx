import BannerMain from '../../assets/bannerMain.png';
import style from './Banner.module.css';

export function Banner() {
  return (
    <div className={style.banner}>
      <img className={style.img} src={BannerMain} alt="Banner" />
      <div className={style.blurBottom}></div> {/* Div para o blur na parte de baixo */}
    </div>
  );
}