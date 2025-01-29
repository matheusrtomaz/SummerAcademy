import Styled from "styled-components";

const HeaderStyles = Styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 88px;
  background-color: white;
  color: black;
  padding: 0px 8rem;

  div {
    justify-content: space-between;
    .logo {
      img {
        height: 37px;
        width: auto;
      }
    }
    .user {
      margin-right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 32px;
        height: 32px;
        border-radius: 16px;
      }
    }
  }
`;

export default HeaderStyles;
