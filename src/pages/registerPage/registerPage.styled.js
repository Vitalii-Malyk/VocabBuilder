import styled from "styled-components";
import vector from "helpers/img/Vector-min.jpg";
import mobileImg from "helpers/img/registration-mobile.png";
import desktopImg from "helpers/img/registration-desktop.png";
import eye from "helpers/icons/eye.svg";
import eye_off from "helpers/icons/eye-off.svg";
import correct from "helpers/icons/correct.svg";
import error from "helpers/icons/error.svg";

export const RegisterPageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  display: grid;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    background-image: url(${vector});
    background-size: cover;
  }

  @media only screen and (min-width: 1440px) {
    margin-top: 50px;
    display: grid;
    grid-template-areas:
      "f i"
      "f l"
      "f l"
      "f l";
  }

  .ImgContainer {
    display: grid;
    justify-content: center;

    @media only screen and (min-width: 768px) {
      display: none;
    }

    @media only screen and (min-width: 1440px) {
      display: flex;
    }
  }

  .RegisterImg {
    background-image: url(${mobileImg});
    width: 247px;
    height: 191px;

    @media only screen and (min-width: 1440px) {
      width: 498px;
      height: 475px;
      grid-area: i;
      background-image: url(${desktopImg});
    }
  }

  .FormContainer {
    padding: 15px 30px;
    border-radius: 25px 25px 0 0;
    background: rgba(133, 170, 159, 0.1);
    height: 100vh;

    @media only screen and (min-width: 768px) {
      margin-top: 150px;
      padding: 40px 60px;
      border-radius: 30px;
      width: 627px;
      height: 591px;
    }

    @media only screen and (min-width: 1440px) {
      grid-area: f;
      margin-right: 70px;
      margin-top: 0;
    }
  }

  .Title {
    font-weight: 600;
    font-size: 30px;
    line-height: 107%;
    letter-spacing: -0.02em;
    color: #121417;

    @media only screen and (min-width: 768px) {
      font-size: 53px;
      line-height: 120%;
    }
  }

  .Text {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: rgba(18, 20, 23, 0.8);
    margin-top: 16px;

    @media only screen and (min-width: 768px) {
      font-size: 27px;
      margin-top: 20px;
    }
  }

  .Form {
    margin-top: 16px;
    display: grid;
    gap: 18px;

    @media only screen and (min-width: 768px) {
      margin-top: 36px;
    }
  }

  input {
    box-sizing: border-box;
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 15px;
    padding: 16px 18px;
    width: 100%;

    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #121417;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  .ButtonSubmit {
    margin-top: 16px;
    border-radius: 30px;
    padding: 16px 18px;
    background: #85aa9f;
    border: none;

    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #fcfcfc;

    @media only screen and (min-width: 768px) {
      margin-top: 36px;
    }

    &:hover {
      color: #85aa9f;
      background: #fcfcfc;
    }
  }

  .NavLogIn {
    justify-content: center;
    display: flex;
    margin-top: 32px;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: rgba(18, 20, 23, 0.5);

    &:hover {
      color: #85aa9f;
    }
  }

  .SkilsList {
    display: none;

    @media only screen and (min-width: 768px) {
      margin-top: 220px;
      display: flex;
      justify-content: center;

      & li {
        display: inline-block;
        margin-right: 15px;
      }

      & li:not(:last-child)::after {
        content: "·";
        margin-left: 15px;
      }
    }

    @media only screen and (min-width: 1440px) {
      margin-top: 0;
      grid-area: l;
    }
  }

  .Skil {
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    text-align: center;
    color: rgba(18, 20, 23, 0.8);
  }

  .DivInput {
    position: relative;
  }

  .DivInput:hover .ShowPassword,
  .DivInput:hover .HidePassword {
    display: block;
  }

  .ErrorInput {
    border: 1px solid #e74a3b;
  }

  .SuccessInput {
    border: 1px solid #3cbc81;
  }

  .ShowPassword {
    display: none;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-image: url(${eye_off});
  }

  .HidePassword {
    display: none;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-image: url(${eye});
  }

  .ErrorText {
    position: absolute;
    color: red;
    top: 60px;
    left: 20px;
    font-size: 12px;
    align-items: flex-start;
    display: flex;

    &::before {
      content: url(${error});
      display: inline-block;
      margin-right: 5px;
    }
  }

  .SuccessText {
    position: absolute;
    color: green;
    top: 60px;
    left: 20px;
    font-size: 12px;
    align-items: flex-start;
    display: flex;

    &::before {
      content: url(${correct});
      display: inline-block;
      margin-right: 5px;
    }
  }
`;
