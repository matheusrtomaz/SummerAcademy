import Styled from 'styled-components';

const BannerStyles = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
  background-color: #f5f5f5;
  img {
    height: 450px;
    width: 100vw;
    object-fit: cover;
  }
`;

export default BannerStyles;