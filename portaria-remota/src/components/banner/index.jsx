import BannerMain from '../../assets/bannerMain.png';
import BannerStyles from './styles';

export function Banner() {
  return (
    <BannerStyles>
      <img src={BannerMain} alt="Banner" />
    </BannerStyles>
  )
}