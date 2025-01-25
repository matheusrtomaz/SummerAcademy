import styled from "styled-components";

export const HeaderContainer = styled.div`
  div {
    width: 100vw;
    height: 100px;
    background-color: black;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    /* padding: 10px; */
    /* margin: 10px; */
    span {
      color: white;
      margin: 0 50px;
    }
    nav {
      ul {
        display: flex;
        list-style: none;
        li {
          margin: 0 10px;
          color: white;
          cursor: pointer;
          &:hover {
            color: blue;
          }
        }
      }
    }
  }
`;
