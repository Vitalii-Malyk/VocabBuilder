import{u,a as f,p as b,j as e,N as w,s as y}from"./index-C-80DDQy.js";import{m as v,e as k,c as j,u as I,S as N,b as S}from"./validationSchemas-CDcfdW50.js";import{v as z,d as P,e as C,a as L}from"./eye-off-D1NXKXa1.js";const T=u.div`
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  display: grid;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    background-image: url(${z});
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
    order: 1;
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
    background-image: url(${v});
    width: 247px;
    height: 191px;

    @media only screen and (min-width: 1440px) {
      width: 498px;
      height: 475px;
      grid-area: i;
      background-image: url(${P});
    }
  }

  .FormContainer {
    margin-top: 40px;
    order: 3;
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

    &:hover {
      background: #fcfcfc;
      color: #85aa9f;
    }

    @media only screen and (min-width: 768px) {
      margin-top: 36px;
    }
  }

  .SkilsList {
    margin-top: 16px;
    order: 2;
    display: flex;
    justify-content: center;
    & li {
      display: inline-block;
      margin-right: 7px;
    }

    & li:not(:last-child)::after {
      content: "·";
      margin-left: 7px;
    }

    @media only screen and (min-width: 768px) {
      margin-top: 220px;
      order: 3;
      & li {
        margin-right: 15px;
      }

      & li:not(:last-child)::after {
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
    font-size: 14px;
    text-align: center;
    color: rgba(18, 20, 23, 0.8);

    @media only screen and (min-width: 768px) {
      font-size: 22px;
      line-height: 150%;
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
    background-image: url(${C});
  }

  .HidePassword {
    display: none;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-image: url(${L});
  }

  input::placeholder {
    color: #121417;
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
      content: url(${k});
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
      content: url(${j});
      display: inline-block;
      margin-right: 5px;
    }
  }
`,E=()=>{const r=f(),s=b(),{values:i,errors:l,touched:d,isValid:p,handleBlur:n,handleChange:a,handleSubmit:c}=I({initialValues:{email:"",password:""},validationSchema:S,onSubmit:x=>{r(y.logIn(x)).then(h=>{h.payload.name&&s("/dictionary")})}}),{showPassword:g,getInputAlert:t,getHidePassword:m,getInputClass:o}=N(i,d,l);return e.jsxs(T,{children:[e.jsx("div",{className:"ImgContainer",children:e.jsx("div",{className:"RegisterImg"})}),e.jsxs("div",{className:"FormContainer",children:[e.jsx("h2",{className:"Title",children:"Login"}),e.jsx("p",{className:"Text",children:"Please enter your login details to continue using our service:"}),e.jsxs("form",{className:"Form",children:[e.jsxs("div",{className:"DivInput",children:[e.jsx("input",{id:"logInEmail",name:"email",type:"email",placeholder:"Email",className:o("email"),onChange:a,value:i.email,onBlur:n}),t("email")]}),e.jsxs("div",{className:"DivInput",id:"password",children:[e.jsx("input",{id:"logInPassword",name:"password",placeholder:"Password",type:g?"text":"password",className:o("password"),onChange:a,value:i.password,onBlur:n}),t("password"),i.password&&m()]}),e.jsx("button",{className:"ButtonSubmit",type:"submit",disabled:!p,onClick:c,children:"Login"})]}),e.jsx(w,{className:"NavLogIn",to:"/register",children:"Register"})]}),e.jsxs("ul",{className:"SkilsList",children:[e.jsx("li",{className:"Skil",children:"Word"}),e.jsx("li",{className:"Skil",children:"Translation"}),e.jsx("li",{className:"Skil",children:"Grammar"}),e.jsx("li",{className:"Skil",children:"Progress"})]})]})};export{E as default};
