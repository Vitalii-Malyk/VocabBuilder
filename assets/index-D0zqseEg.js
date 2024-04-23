import{r,u as m,j as e,N as b,a as w,b as l,c as O,o as S,d as D,e as T,f as F,g as R,h as U,i as $,k as V,l as q,m as Z,n as H,p as G,q as Y,O as K,s as P}from"./index-C-80DDQy.js";import{m as X,e as j,c as z,u as I,A as _,S as B,E as J}from"./validationSchemas-CDcfdW50.js";import{t as Q}from"./toggle-CSloHlzE.js";import{S as L,a as W}from"./united kingdom-Cr7l-d-c.js";const ee=i=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:40,height:40,fill:"none",...i},r.createElement("circle",{cx:20,cy:20,r:20,fill:"#85AA9F"}),r.createElement("path",{fill:"#FCFCFC",fillRule:"evenodd",d:"M20.443 19c5.944-4.483 6.206-7.2 0-12-6.325 4.902-5.51 7.501 0 12ZM19 20.557c-4.483-5.944-7.2-6.206-12 0 4.902 6.325 7.5 5.51 12 0Zm15 0c-4.483-5.944-7.2-6.206-12 0 4.902 6.325 7.5 5.51 12 0ZM20.443 34c5.944-4.483 6.206-7.2 0-12-6.325 4.902-5.51 7.501 0 12Z",clipRule:"evenodd"})),ie=i=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...i},r.createElement("path",{fill:"#FCFCFC",fillOpacity:.7,d:"M9.999 3.333a3.333 3.333 0 1 1 0 6.667 3.333 3.333 0 0 1 0-6.667Zm0 13.334s6.666 0 6.666-1.667c0-2-3.25-4.167-6.666-4.167C6.582 10.833 3.332 13 3.332 15c0 1.667 6.667 1.667 6.667 1.667Z"})),ne=i=>r.createElement("svg",{width:32,height:22,viewBox:"0 0 32 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},r.createElement("line",{x1:5.86914,y1:3.66663,x2:30.9996,y2:3.66663,stroke:"#121417",strokeWidth:2,strokeLinecap:"round"}),r.createElement("line",{x1:5.86914,y1:17,x2:30.9996,y2:17,stroke:"#121417",strokeWidth:2,strokeLinecap:"round"}),r.createElement("line",{x1:13.5215,y1:10.3334,x2:30.9997,y2:10.3334,stroke:"#121417",strokeWidth:2,strokeLinecap:"round"})),te=m.div`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  @media only screen and (min-width: 768px) {
  }

  .NavigationContainer {
    display: none;

    @media only screen and (min-width: 1440px) {
      display: flex;
      gap: 28px;
    }
  }

  .NavElement {
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    color: #121417;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 1;

    &:hover {
      color: #85aa9f;
    }

    &.active {
      color: #f8f8f8;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &.active::after {
      content: "";
      left: -20px;
      bottom: -12px;
      z-index: -1;
      height: 15px;
      width: 100%;
      position: absolute;
      padding: 12px 20px;
      border-radius: 15px;
      background-color: #85aa9f;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .RightSideHeader {
    display: flex;
    align-items: center;
  }

  .LogoContainer {
    display: flex;
    gap: 16px;
    align-items: center;

    text-decoration: none;
    color: inherit;

    &:hover {
      color: #85aa9f;
    }

    &:hover {
      path {
        stroke: #85aa9f;
        fill: #85aa9f;
      }
      circle {
        stroke: #85aa9f;
        fill: none;
        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .UserContainer {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .UserName {
    font-weight: 500;
    font-size: 20px;
  }

  .UserImag {
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 30px;
    width: 36px;
    height: 36px;
    background: #85aa9f;
  }

  .ButtonBurger {
    cursor: pointer;
    margin-left: 8px;

    &:hover {
      line {
        stroke: #85aa9f;
        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    @media only screen and (min-width: 1440px) {
      display: none;
    }
  }

  .ButtonLogOut {
    border: 1px solid #85aa9f;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background: #85aa9f;

    position: fixed;
    bottom: 20px;
    right: 20px;

    font-weight: 700;
    font-size: 14px;
    line-height: 156%;
    color: #fcfcfc;

    &:hover {
      color: #85aa9f;
      background: #f8f8f8;
    }
  }
`,oe="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20fill='none'%3e%3cpath%20stroke='%23FCFCFC'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='3'%20d='M24%208%208%2024M8%208l16%2016'/%3e%3c/svg%3e",ae=m.div`
  background-color: #85aa9f;
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  z-index: 9999;
  transition: right 0.5s ease-in-out;
  padding: 16px;

  .HeaderOfModal {
    display: flex;
    justify-content: space-between;
  }

  .ButtonClose {
    cursor: pointer;
    background-image: url(${oe});

    &:hover {
      path {
        stroke: #121417;
      }
    }
  }

  .NavList {
    display: grid;
    gap: 28px;
    margin-top: 150px;
  }

  .NavElement {
    text-decoration: none;

    font-weight: 500;
    font-size: 14px;
    color: #f8f8f8;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 1;

    &:hover,
    &.active {
      padding: 12px 20px;
      border-radius: 15px;
      background-color: #f8f8f8;
      color: #121417;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .Img {
    width: 100%;
    height: 100%;
    background-image: url(${X});
    background-repeat: no-repeat;
    margin-top: 150px;

    background-position: center;
    height: 700px;
  }
`,v=i=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none",...i},r.createElement("path",{stroke:"#FCFCFC",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:3,d:"M24 8 8 24M8 8l16 16"})),se=({handleClickClose:i})=>e.jsxs(ae,{children:[e.jsxs("div",{className:"HeaderOfModal",children:[e.jsx("div",{className:"UserContainer"}),e.jsx(v,{className:"ButtonClose",onClick:i})]}),e.jsxs("ul",{className:"NavList",children:[e.jsx("li",{children:e.jsx(b,{className:"NavElement",to:"/dictionary",children:"Dictionary"})}),e.jsx("li",{children:e.jsx(b,{className:"NavElement",to:"/recommend",children:"Recommend"})}),e.jsx("li",{children:e.jsx(b,{className:"NavElement",to:"/training",children:"Training"})})]}),e.jsx("div",{className:"Img"})]}),re=m.div`
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1200;

  .ModalDiv {
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
  }
`,de=m.div`
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1200;
`,le=m.div`
  position: relative;
  border-radius: 15px;
  width: 342px;
  height: 621px;

  background: #85aa9f;
  padding: 18px;

  @media only screen and (min-width: 768px) {
    box-sizing: border-box;
    border-radius: 30px;
    width: 627px;
    height: 621px;

    padding: 18px 63px;
  }

  .ButtonClose {
    cursor: pointer;
    position: absolute;
    right: 18px;

    &:hover {
      path {
        stroke: #121417;
      }
    }
  }

  .TextContainer {
    margin-top: 30px;
  }

  .Title {
    font-weight: 600;
    font-size: 30px;
    line-height: 117%;
    letter-spacing: -0.02em;
    color: #f8f8f8;

    @media only screen and (min-width: 768px) {
      font-size: 40px;
      line-height: 120%;
    }
  }

  .Text {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #f8f8f8;

    margin-top: 20px;

    @media only screen and (min-width: 768px) {
      font-size: 25px;
    }
  }

  .Form {
    margin-top: 20px;
    position: relative;
    display: grid;
    gap: 15px;
    @media only screen and (min-width: 768px) {
      gap: 20px;
    }
  }

  input[id="statistics"],
  input[id="ukrainian"],
  input[id="english"] {
    border: 1px solid #d1d5db;
    border-radius: 15px;
    padding: 12px 24px;
    width: 100%;
    height: 48px;

    background: none;
    box-sizing: border-box;

    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #f8f8f8;

    &:focus {
      outline: none;
    }
  }

  input[id="statistics"] {
    @media only screen and (min-width: 768px) {
      width: 204px;
      height: 52px;
    }
  }

  input[id="ukrainian"],
  input[id="english"] {
    @media only screen and (min-width: 768px) {
      width: 353px;
      height: 52px;
    }
  }

  .custom-inputAdd {
    position: relative;

    &::after {
      content: url(${Q});
      position: absolute;
      top: 14px;
      right: 24px;

      @media only screen and (min-width: 768px) {
        left: 170px;
      }
    }
  }

  .custom-inputAdd::after {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(330deg)
      brightness(91%) contrast(92%);
  }

  .dropdownAdd {
    z-index: 1000;
    position: absolute;
    margin-top: 5px;
    display: none;
    gap: 8px;

    border-radius: 15px;
    padding: 12px 24px;
    width: 86%;
    box-shadow: 0 4px 47px 0 rgba(18, 20, 23, 0.08);
    background: #fff;
  }

  .ListItem {
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    border-radius: 6px;

    &:hover {
      background-color: #85aa9f;
    }
  }

  .RadioButtonList {
    position: absolute;
    top: 65px;
    display: flex;
    gap: 34px;
    left: 14px;
  }

  .RadioButtonItem {
    position: relative;
    display: flex;
    gap: 8px;

    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: #fcfcfc;
    text-align: center;
    align-items: center;
  }

  .RadioButton {
    height: 12px;
    width: 12px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    cursor: pointer;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      background-color: #85aa9f;
      border: 3px solid #80808059;
    }

    &:checked:before {
      border-color: #fcfcfc;
    }

    &:checked::after {
      content: "";
      position: absolute;
      top: 50%;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #fcfcfc;
      transform: translate(-50%, -50%);
      visibility: visible;
    }
  }

  .UkrainianContainer[id="ukrainian"] {
    margin-top: 50px;
    @media only screen and (min-width: 768px) {
      margin-top: 40px;
    }
  }

  .UkrainianContainer,
  .EnglishContainer {
    display: grid;
    gap: 8px;
    position: relative;

    @media only screen and (min-width: 768px) {
      display: flex;
      gap: 32px;
    }
  }
  .InputImagContainer {
    display: flex;
    align-items: center;
    gap: 8px;

    font-weight: 500;
    font-size: 14px;
    color: #fcfcfc;
    @media only screen and (min-width: 768px) {
      order: 2;
    }
  }

  .ButtonList {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

    @media only screen and (min-width: 768px) {
      margin-top: 15px;
    }
  }

  .ButtonAdd {
    cursor: pointer;
    border-radius: 30px;
    padding: 12px 63px;
    width: 169px;
    height: 48px;
    background: #fcfcfc;
    box-sizing: border-box;

    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #121417;

    &:hover {
      background: #85aa9f;
      color: #fcfcfc;
      border: 1px solid #d1d5db;
    }

    @media only screen and (min-width: 768px) {
      border-radius: 30px;
      padding: 14px 104px;
      width: 245px;
      height: 56px;

      display: flex;
      align-items: center;

      font-size: 23px;
      line-height: 156%;
    }
  }

  .ButtonCancel {
    cursor: pointer;
    border: 1px solid rgba(252, 252, 252, 0.4);
    border-radius: 30px;
    padding: 12px 45px;
    width: 155px;
    height: 48px;
    box-sizing: border-box;

    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #fcfcfc;

    &:hover {
      background: #fcfcfc;
      color: #85aa9f;
    }

    @media only screen and (min-width: 768px) {
      padding: 14px 92px;
      width: 245px;
      height: 56px;
    }
  }

  .ErrorText {
    position: absolute;
    color: red;
    top: 90px;
    left: 20px;
    font-size: 12px;
    align-items: flex-start;
    display: flex;

    &::before {
      content: url(${j});
      display: inline-block;
      margin-right: 5px;
    }

    @media only screen and (min-width: 768px) {
      top: 54px;
    }
  }

  .SuccessText {
    position: absolute;
    color: green;
    top: 90px;
    left: 20px;
    font-size: 12px;
    align-items: flex-start;
    display: flex;

    &::before {
      content: url(${z});
      display: inline-block;
      margin-right: 5px;
    }

    @media only screen and (min-width: 768px) {
      top: 54px;
    }
  }

  .EnInputMistake {
    position: absolute;
    color: red;
    top: 90px;
    left: 20px;
    font-size: 12px;
    align-items: flex-start;
    display: flex;

    &::before {
      content: url(${j});
      display: inline-block;
      margin-right: 5px;
    }

    @media only screen and (min-width: 768px) {
      top: 54px;
    }
  }
`,ce=({handleClickClose:i})=>{const d=w(),n=l(p=>p.data.categories);r.useEffect(()=>{const p=document.querySelector(".custom-inputAdd"),k=p.querySelector("input"),y=p.querySelector(".dropdownAdd"),C=y.querySelectorAll("li"),N=()=>{y.style.display="grid"},M=f=>{const A=f.textContent;a({target:{name:"category",value:A}}),y.style.display="none"},E=f=>{p.contains(f.target)||(y.style.display="none")};return k.addEventListener("click",N),C.forEach(f=>{f.addEventListener("click",()=>M(f))}),document.addEventListener("click",E),()=>{k.removeEventListener("click",N),C.forEach(f=>f.removeEventListener("click",M)),document.removeEventListener("click",E)}});const{values:t,errors:c,touched:x,isValid:g,handleChange:a,handleSubmit:h}=I({initialValues:{en:"",ua:"",category:"",isIrregular:void 0},validationSchema:_,onSubmit:p=>{console.log(p),d(O(p)).then(k=>{isNaN(k.payload)&&i()})}}),o=()=>{if(t.isIrregular&&t.category==="verb"&&!/^\w+-\w+-\w+$/.test(t.en))return e.jsx("p",{className:"EnInputMistake",children:'Must be example: "know-knew-known"'})},{getInputAlert:s,getInputClass:u}=B(t,x,c);return e.jsxs(le,{children:[e.jsx(v,{className:"ButtonClose",onClick:i}),e.jsxs("div",{className:"TextContainer",children:[e.jsx("h2",{className:"Title",children:"Add word"}),e.jsx("p",{className:"Text",children:"Adding a new word to the dictionary is an important step in enriching the language base and expanding the vocabulary."})]}),e.jsxs("form",{className:"Form",onSubmit:h,children:[e.jsxs("div",{className:"custom-inputAdd",children:[e.jsx("input",{id:"statistics",name:"category",className:u("Category"),type:"text",placeholder:"Categories",value:t.category,onChange:a,required:!0,readOnly:!0}),e.jsx("ul",{className:"dropdownAdd",children:n&&n.map(p=>e.jsx("li",{className:"ListItem",children:p},p))})]}),e.jsxs("ul",{className:"RadioButtonList",style:{display:t.category==="verb"?"flex":"none"},children:[e.jsxs("li",{className:"RadioButtonItem",children:[e.jsx("input",{className:"RadioButton",id:"regular",name:"isIrregular",type:"radio",onChange:()=>a({target:{name:"isIrregular",value:!1}}),value:!1,checked:t.isIrregular===!1}),"Regular"]}),e.jsxs("li",{className:"RadioButtonItem",children:[e.jsx("input",{className:"RadioButton",id:"reason",name:"isIrregular",type:"radio",onChange:()=>a({target:{name:"isIrregular",value:!0}}),value:!0,checked:t.isIrregular===!0}),"Irregular"]})]}),e.jsxs("div",{className:"UkrainianContainer",id:"ukrainian",children:[e.jsxs("div",{className:"InputImagContainer",children:[e.jsx(L,{className:"IconCountry"})," Ukrainian"]}),e.jsx("input",{id:"ukrainian",className:u("Ua"),type:"text",placeholder:"Слово Українською",name:"ua",value:t.ua,onChange:a,required:!0}),s("ua")]}),e.jsxs("div",{className:"EnglishContainer",children:[e.jsxs("div",{className:"InputImagContainer",children:[e.jsx(W,{className:"IconCountry"})," English"]}),e.jsx("input",{id:"english",className:u("En"),type:"text",placeholder:"Word in English",name:"en",value:t.en,onChange:a,required:!0}),o()?o():s("en")]}),e.jsxs("ul",{className:"ButtonList",children:[e.jsx("li",{className:"ButtonAdd",type:"submit",disabled:!g,onClick:h,children:"Add"}),e.jsx("li",{className:"ButtonCancel",onClick:i,children:"Cancel"})]})]})]})},pe=m.ul`
  border-radius: 15px;
  padding: 12px 24px;
  width: 117px;
  height: 70px;

  box-shadow: 0 4px 47px 0 rgba(18, 20, 23, 0.08);
  background: #fff;
  box-sizing: border-box;

  position: absolute;
  top: ${i=>i.y}px;
  left: ${i=>i.x}px;

  display: grid;
  gap: 8px;

  .Element {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;

    font-weight: 500;
    font-size: 14px;

    &:hover {
      color: #85aa9f;
      path {
        stroke: #121417;
      }
    }
  }
`,xe=i=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:17,fill:"none",...i},r.createElement("path",{stroke:"#85AA9F",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.3,d:"M11.334 2.5a1.885 1.885 0 1 1 2.667 2.667l-9 9-3.667 1 1-3.667 9-9Z"})),he=i=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:17,fill:"none",...i},r.createElement("path",{stroke:"#85AA9F",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:.94,strokeWidth:1.3,d:"M2 4.5h12M12.667 4.5v9.333a1.333 1.333 0 0 1-1.333 1.334H4.667a1.333 1.333 0 0 1-1.333-1.334V4.5m2 0V3.167a1.333 1.333 0 0 1 1.333-1.334h2.667a1.333 1.333 0 0 1 1.333 1.334V4.5M6.666 7.833v4M9.334 7.833v4"})),ge=({handleClickClose:i})=>{const d=w(),n=l(x=>x.modal.clickWordCoordinates),t=()=>{i(),d(S())},c=()=>{i(),d(D())};return e.jsxs(pe,{x:n.x,y:n.y,children:[e.jsxs("li",{className:"Element",onClick:c,children:[e.jsx(xe,{}),"Edit"]}),e.jsxs("li",{className:"Element",onClick:t,children:[e.jsx(he,{}),"Delete"]})]})},me=m.div`
  position: relative;
  border-radius: 15px;
  width: 342px;
  height: 359px;
  padding: 16px;

  background: #85aa9f;
  box-sizing: border-box;

  @media only screen and (min-width: 768px) {
    width: 627px;
    height: 345px;
    padding: 30px 60px;
  }

  .ButtonClose {
    cursor: pointer;
    position: absolute;
    right: 18px;

    &:hover {
      path {
        stroke: #121417;
      }
    }
  }

  .Form {
    margin-top: 30px;
    position: relative;
    display: grid;
    gap: 15px;
    @media only screen and (min-width: 768px) {
      gap: 20px;
    }
  }

  input[id="ukrainian"],
  input[id="english"] {
    border: 1px solid #d1d5db;
    border-radius: 15px;
    padding: 12px 176px 12px 24px;
    width: 311px;
    height: 48px;

    background: none;
    box-sizing: border-box;

    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #f8f8f8;

    &:focus {
      outline: none;
    }
  }

  input[id="ukrainian"],
  input[id="english"] {
    @media only screen and (min-width: 768px) {
      padding: 16px 227px 16px 18px;
      width: 354px;
      height: 56px;
    }
  }

  .UkrainianContainer,
  .EnglishContainer {
    display: grid;
    gap: 8px;
    position: relative;

    @media only screen and (min-width: 768px) {
      display: flex;
      gap: 32px;
    }
  }
  .InputImagContainer {
    display: flex;
    align-items: center;
    gap: 8px;

    font-weight: 500;
    font-size: 14px;
    color: #fcfcfc;
    @media only screen and (min-width: 768px) {
      order: 2;
    }
  }

  .ButtonList {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

    @media only screen and (min-width: 768px) {
      margin-top: 15px;
    }
  }

  .ButtonAdd {
    cursor: pointer;
    border-radius: 30px;
    padding: 12px 60px;
    width: 158px;
    height: 48px;
    background: #fcfcfc;
    box-sizing: border-box;

    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #121417;

    &:hover {
      color: #fcfcfc;
      background: #85aa9f;
      border: 1px solid #d1d5db;
    }

    @media only screen and (min-width: 768px) {
      padding: 14px 101px;
      width: 245px;
      height: 56px;

      display: flex;
      align-items: center;

      font-size: 23px;
      line-height: 156%;
    }
  }

  .ButtonCancel {
    border: 1px solid rgba(252, 252, 252, 0.4);
    border-radius: 30px;
    padding: 12px 45px;
    width: 145px;
    height: 48px;
    box-sizing: border-box;

    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #fcfcfc;

    &:hover {
      color: #85aa9f;
      background: #fcfcfc;
    }

    @media only screen and (min-width: 768px) {
      padding: 14px 92px;
      width: 245px;
      height: 56px;
    }
  }

  .ErrorText {
    position: absolute;
    color: red;
    top: 90px;
    left: 20px;
    font-size: 12px;
    align-items: flex-start;
    display: flex;

    &::before {
      content: url(${j});
      display: inline-block;
      margin-right: 5px;
    }

    @media only screen and (min-width: 768px) {
      top: 58px;
    }
  }

  .SuccessText {
    position: absolute;
    color: green;
    top: 90px;
    left: 20px;
    font-size: 12px;
    align-items: flex-start;
    display: flex;

    &::before {
      content: url(${z});
      display: inline-block;
      margin-right: 5px;
    }

    @media only screen and (min-width: 768px) {
      top: 58px;
    }
  }
`,ue=({handleClickClose:i})=>{const d=w(),n=l(u=>u.modal.clickWordId);console.log(n);const{values:t,errors:c,touched:x,isValid:g,handleChange:a,handleSubmit:h}=I({initialValues:{en:`${n.en}`,ua:`${n.ua}`,category:n.category,isIrregular:n.isIrregular},validationSchema:J,onSubmit:u=>{console.log({edit:u,id:n._id}),d(T({edit:u,id:n._id})).then(p=>{!p.error&&i()})}}),{getInputAlert:o,getInputClass:s}=B(t,x,c);return e.jsxs(me,{children:[e.jsx(v,{className:"ButtonClose",onClick:i}),e.jsxs("form",{className:"Form",children:[e.jsxs("div",{className:"UkrainianContainer",id:"ukrainian",children:[e.jsxs("div",{className:"InputImagContainer",children:[e.jsx(L,{className:"IconCountry"})," Ukrainian"]}),e.jsx("input",{id:"ukrainian",className:s("Ua"),type:"text",placeholder:"Слово Українською",name:"ua",value:t.ua,onChange:a,required:!0}),o("ua")]}),e.jsxs("div",{className:"EnglishContainer",children:[e.jsxs("div",{className:"InputImagContainer",children:[e.jsx(W,{className:"IconCountry"})," English"]}),e.jsx("input",{id:"english",className:s("En"),type:"text",placeholder:"Word in English",name:"en",value:t.en,onChange:a,required:!0}),o("en")]}),e.jsxs("ul",{className:"ButtonList",children:[e.jsx("li",{className:"ButtonAdd",type:"submit",disabled:!g,onClick:h,children:"Save"}),e.jsx("li",{className:"ButtonCancel",onClick:i,children:"Cancel"})]})]})]})},fe=m.div`
  border-radius: 15px;
  padding: 30px;
  display: grid;
  gap: 50px;

  background: #85aa9f;
  box-sizing: border-box;

  .Title {
    font-weight: 600;
    font-size: 24px;
    line-height: 117%;
    letter-spacing: -0.02em;
    color: #fff;
  }

  .ListButton {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  .ButtonYes {
    cursor: pointer;
    text-align: center;
    border-radius: 30px;
    padding: 14px 65px;
    background: #fcfcfc;
    box-sizing: border-box;

    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #121417;

    &:hover {
      color: #fcfcfc;
      background: #85aa9f;
      border: 1px solid #d1d5db;
    }
  }

  .ButtonNo {
    cursor: pointer;
    text-align: center;
    border: 1px solid rgba(252, 252, 252, 0.4);
    border-radius: 30px;
    padding: 12px 45px;
    width: 155px;
    height: 48px;
    box-sizing: border-box;

    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #fcfcfc;

    &:hover {
      color: #85aa9f;
      background: #fcfcfc;
    }
  }
`,be=({handleClickClose:i})=>{const d=w(),n=l(c=>c.modal.clickWordId),t=()=>{d(F(n)).then(c=>{isNaN(c.payload)&&i()})};return e.jsxs(fe,{children:[e.jsxs("h2",{className:"Title",children:["Are you sure you want to delete ",n.en,"?"]}),e.jsxs("ul",{className:"ListButton",children:[e.jsx("li",{className:"ButtonYes",onClick:t,children:"Yes"}),e.jsx("li",{className:"ButtonNo",onClick:()=>i(),children:"No"})]})]})},we="/VocabBuilder/assets/open-orange-book-mobile-min-B1pD05Ht.png",ke="/VocabBuilder/assets/open-orange-book-desktop-min-CSLsEEfR.png",ye=m.div`
  border-radius: 15px;
  width: 342px;
  height: 458px;
  padding: 18px;

  background: #85aa9f;
  position: relative;
  box-sizing: border-box;

  @media only screen and (min-width: 768px) {
    border-radius: 30px;
    width: 527px;
    height: 519px;

    padding: 18px 64px;
  }

  .ButtonClose {
    cursor: pointer;
    position: absolute;
    right: 18px;

    &:hover {
      path {
        stroke: #121417;
      }
    }
  }

  .Title {
    margin-top: 30px;
    font-weight: 600;
    font-size: 24px;
    line-height: 117%;
    letter-spacing: -0.02em;
    text-align: center;
    color: #fcfcfc;

    @media only screen and (min-width: 768px) {
      font-size: 40px;
      line-height: 120%;
      letter-spacing: -0.02em;
    }
  }

  .ContentContainer {
    margin-top: 20px;
    display: flex;
    gap: 30px;
    justify-content: start;

    @media only screen and (min-width: 768px) {
      gap: 75px;
    }
  }

  .TitleCorrectAnswer,
  .TitleMistakes {
    font-weight: 400;
    font-size: 14px;
    color: rgba(252, 252, 252, 0.5);

    @media only screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 150%;
    }
  }

  .CorrectAnswerList,
  .MistakesList {
    margin-top: 10px;
    display: grid;
    gap: 8px;
  }

  .CorrectAnswerList {
    overflow: scroll;
    max-height: 300px;

    @media only screen and (min-width: 768px) {
      max-height: 350px;
    }
  }

  .MistakesList {
    max-height: 170px;
    overflow: auto;
  }

  .MistakesItem,
  .CorrectAnswerItem {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #fcfcfc;

    @media only screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  .Img {
    width: 152px;
    height: 121px;
    background-image: url(${we});

    position: absolute;
    bottom: 40px;
    right: 0;

    @media only screen and (min-width: 768px) {
      width: 212px;
      height: 179px;
      background-image: url(${ke});
    }
  }
`,ve=({handleClickClose:i})=>{const d=l(n=>n.data.answers);return d&&e.jsxs(ye,{children:[e.jsx(v,{className:"ButtonClose",onClick:i}),e.jsx("h2",{className:"Title",children:"Well done"}),e.jsxs("div",{className:"ContentContainer",children:[e.jsxs("div",{className:"CorrectAnswerContainer",children:[e.jsx("p",{className:"TitleCorrectAnswer",children:"Сorrect answers: "}),e.jsx("ul",{className:"CorrectAnswerList",children:d.map((n,t)=>n.isDone===!0&&e.jsx("li",{className:"CorrectAnswerItem",children:n[n.task]},t))})]}),e.jsxs("div",{className:"MistakesContainer",children:[e.jsx("p",{className:"TitleMistakes",children:"Mistakes: "}),e.jsx("ul",{className:"MistakesList",children:d.map((n,t)=>n.isDone===!1&&e.jsx("li",{className:"MistakesItem",children:n.task==="en"?n.en:n.ua},t))})]}),e.jsx("div",{className:"Img"})]})]})},je=document.querySelector("#modal-root"),Ce=()=>{const i=w(),d=l(o=>o.modal.isModalOpenMobile),n=l(o=>o.modal.isModalOpenAddWord),t=l(o=>o.modal.isModalOpenClickWord),c=l(o=>o.modal.isModalOpenConfirmation),x=l(o=>o.modal.isModalOpenEdit),g=l(o=>o.modal.isModalOpenWellDone),a=r.useCallback(()=>{i(R()),i(U()),i($()),i(V()),i(q()),i(Z())},[i]),h=o=>{o.target===o.currentTarget&&a()};return r.useEffect(()=>{const o=s=>{s.code==="Escape"&&a()};return document.addEventListener("keydown",o),document.body.style.cssText="overflow: hidden; ",()=>{document.removeEventListener("keydown",o),document.body.style.cssText="overflow: auto; "}},[d,n,t,c,x,g,a,i]),H.createPortal(e.jsxs(e.Fragment,{children:[(d||n||x||c||g)&&e.jsxs(re,{onClick:h,children:[d&&e.jsx(se,{handleClickClose:a}),n&&e.jsx(ce,{handleClickClose:a}),c&&e.jsx(be,{handleClickClose:a}),x&&e.jsx(ue,{handleClickClose:a}),g&&e.jsx(ve,{handleClickClose:a})]}),t&&e.jsx(de,{onClick:h,children:e.jsx(ge,{handleClickClose:a})})]}),je)},Ne=()=>e.jsx("footer",{style:{position:"absolute",left:"50px",bottom:"10px"},children:e.jsx("a",{style:{textDecoration:"none",color:"inherit",cursor:"pointer"},href:"https://github.com/Vitalii-Malyk",children:"© made by Malyk Vitalii"})}),Be=()=>{const i=w(),d=G(),n=l(s=>s.modal.isModalOpenMobile),t=l(s=>s.modal.isModalOpenAddWord),c=l(s=>s.modal.isModalOpenClickWord),x=l(s=>s.modal.isModalOpenConfirmation),g=l(s=>s.modal.isModalOpenEdit),a=l(s=>s.modal.isModalOpenWellDone),h=l(s=>s.auth.name),o=()=>{i(P.logOut()).then(d("/"))};return e.jsxs(e.Fragment,{children:[e.jsxs(te,{children:[e.jsxs(b,{to:"/",className:"LogoContainer",children:[e.jsx(ee,{className:"Logo"}),e.jsx("h2",{children:"VocabBuilder"})]}),h&&e.jsxs("ul",{className:"NavigationContainer",children:[e.jsx("li",{children:e.jsx(b,{className:"NavElement",to:"/dictionary",children:"Dictionary"})}),e.jsx("li",{children:e.jsx(b,{className:"NavElement",to:"/recommend",children:"Recommend"})}),e.jsx("li",{children:e.jsx(b,{className:"NavElement",to:"/training",children:"Training"})})]}),h&&e.jsxs("div",{className:"RightSideHeader",children:[e.jsx("button",{className:"ButtonLogOut",onClick:o,children:"Log Out"}),e.jsxs("div",{className:"UserContainer",children:[e.jsx("p",{className:"UserName",children:h}),e.jsx("span",{className:"UserImag",children:e.jsx(ie,{})})]}),e.jsx(ne,{className:"ButtonBurger",onClick:()=>i(Y())})]})]}),e.jsx(r.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(K,{})}),(n||t||c||x||g||a)&&e.jsx(Ce,{}),e.jsx(Ne,{})]})};export{Be as default};
