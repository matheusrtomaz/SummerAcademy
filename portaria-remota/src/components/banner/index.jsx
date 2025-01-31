import BannerMain from '../../assets/bannerMain.png';
import ButtonVoltar from '../buttonvoltar';
import style from './Banner.module.css';

export function Banner() {
  return (
    <div className={style.banner}>
      <img className={style.img} src={BannerMain} alt="Banner" />
      <div className={style.blurBottom}></div> {/* Div para o blur na parte de baixo */}
      
      <div className={style.divbtn}><ButtonVoltar className={style.buttonvoltar} /></div>
    </div>
  );
}