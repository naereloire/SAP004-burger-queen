import styled, { createGlobalStyle } from "styled-components";
import BurgerQueen from "../img-documents/Making-Lettering-Tall_demo.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Burger Queen';
    src: url(${BurgerQueen});
  }

  html {
    height: 100%;
    width: 100%;
    touch-action: auto;
  }

  body {
    background-color: #FED08F;
    height: 100%;
    width: 100%;
    margin: 0px;
  }
`;

const borderAndRadius = `
  border: 1px solid #A04835;
  border-radius: 5px;
`;

const displayFlexAndColumn = `
  display: flex;
  flex-direction: column;
`;

const displayFlexAndRow = `
  display: flex;
  flex-direction: row;
`;

const fontSizeAndFamily = `
  font-size: 30px;
  font-family: "helvetica";

  @media(max-width: 400px) {
    font-size: 20px;
  }
`;

export const StyleInput = styled.input`
  height: 70px;
  width: ${(props) => props.width ? "30%" : "60%" };
  margin: 10px;
  font-size: 20px;
  outline: none;
  color: #a04835;
  ${borderAndRadius}

  &::placeholder {
    color: #a04835;
  }

  @media (max-width: 400px) {
    height: 50px;
    width: 85%;
  }
`;

export const StyleButton = styled.button`
  height: 50px;
  width: ${(props) => props.width ? "70%" : "20%"};
  margin: 5px;
  background-color: #a04835;
  color: black;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  ${borderAndRadius}
  @media(max-width: 400px) {
    height: 40px;
    width: 40%;
  }
`;

export const TitleLogo = styled.p`
  font-family: Burger Queen;
  font-size: ${(props) => (props.size ? "80px" : "70px")};
  margin: 5px;

  @media (max-width: 400px) {
    font-size: ${(props) => (props.size ? "60px" : "45px")};
  }
`;

export const ImgLogo = styled.img`
  margin-top: 30px;
  width: 30%;
`;

export const StyleSection = styled.section`
  ${displayFlexAndColumn}
  text-align: center;
  align-items: center;
  width: 100%;
`;

export const StyleForm = styled.form`
  ${displayFlexAndColumn}
  align-items: center;
  width: 100%;
`;

export const NewMember = styled.p`
  margin: 10px;
  ${fontSizeAndFamily}
`;

export const RegisterMember = styled.p`
  margin: 10px;
  font-weight: bold;
  cursor: pointer;
  ${fontSizeAndFamily}
`;

export const StyleError = styled.p`
  color: darkred;
  ${fontSizeAndFamily}
`;

export const CheckboxRegister = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const CheckboxLabel = styled.label`
  &:before {
    content: "";
    width: 30px;
    height: 30px;
    display: inline-block;
    border: solid 1px #a04835;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: ${(props) => (props.checked ? "#A04835" : "white")};
  }

  @media (max-width: 400px) {
    &:before {
      width: 20px;
      height: 20px;
    }
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 85%;
  ${fontSizeAndFamily}
`;

export const BtnsRegisterContainer = styled.p`
  width: 85%;
  justify-content: center;
  ${displayFlexAndRow}
  ${fontSizeAndFamily}
`;

export const Title = styled.h1`
  ${fontSizeAndFamily}
  font-weight: bold;
`;

export const RegisterTitleFlex = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgLogoRegister = styled.img`
  width: 20%;
`;

export const MenusContainer = styled.div`
  display: ${(props) => props.display};
  align-items: center;
  justify-content: center;
  margin-bottom: 1em;
`;

export const ItensContainer = styled.div`
  width: 100%;
`;

export const MenusImg = styled.img`
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const StyleFigure = styled.figure`
  text-align: center;
  margin: 0px;
`;

export const ContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 3em;
`;

export const FlexUmContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  flex: 1;
  flex-grow: 1;
`;

export const StyleSectionMenu = styled.section`
  width: ${(props) => props.width};
`;

export const StyleAsideMenu = styled.aside`
  display: ${(props) => props.display};
  width: 30%;
  justify-content: center;
  align-items: start;
`;

export const StyleDivMenu = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
`;

export const StyleDivProducts = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-flow: wrap;
`;

export const StyleDivItensMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 22%;
  border: 2px solid #A04835;
  border-radius: 5px;
  margin: 2px;
  text-align: center;
  background-color: rgba(160, 72, 53, 0.4);
  font-family: "helvetica";
  padding: 2px;
`;

export const StyleImgDeleteIcon = styled.img`
  width: 30px;
  cursor: pointer;
`;

export const StylePResume = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1px;
`;

export const StyleDivResume = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  border: 2px solid #A04835;
  border-radius: 5px;
  margin: 2px;
  text-align: center;
  background-color: rgba(160, 72, 53, 0.4);
  font-family: "helvetica";
  padding: 2px;
`;

export const StyleItensResume = styled.div`
  background-color: rgba(160, 72, 53, 0.7);
  border-radius: 2px;
  padding: 5px;
  width: 80%;
  margin-bottom: 5px;
`;