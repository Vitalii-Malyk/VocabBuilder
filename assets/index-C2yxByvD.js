import{u as v,r as s,a as I,b as n,C as g,w as N,D as k,j as e,A as B,N as L}from"./index-C-80DDQy.js";import{s as z,u as R,l as S,T as W,P as D}from"./index-Bnm9qDE0.js";import{t as A}from"./toggle-CSloHlzE.js";import{S as E}from"./index-FAxV1asL.js";import"./united kingdom-Cr7l-d-c.js";const F=v.div`
  height: 80vh;
  padding: 32px 16px;

  @media only screen and (min-width: 768px) {
    padding: 64px 32px;
  }

  .FilterContainer {
    @media only screen and (min-width: 1440px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .Form {
    position: relative;
    display: grid;
    gap: 8px;

    @media only screen and (min-width: 768px) {
      display: flex;
    }
  }

  .CountContainer {
    @media only screen and (min-width: 768px) {
      display: flex;
      align-items: end;
      gap: 16px;

      margin-top: 30px;
    }

    @media only screen and (min-width: 1440px) {
      margin-top: 0;
      align-items: center;
    }
  }

  .SearchContainer {
    position: relative;

    &::after {
      content: url(${z});
      position: absolute;
      top: 14px;
      right: 24px;
    }
  }

  .custom-input {
    position: relative;

    &::after {
      content: url(${A});
      position: absolute;
      top: 14px;
      right: 24px;
    }
  }

  .Input {
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 15px;
    padding: 12px 24px;
    width: 100%;
    height: 48px;
    box-sizing: border-box;

    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;

    &:focus {
      border-color: transparent;
      outline: none;
    }
  }

  .Input[id="filters"] {
    @media only screen and (min-width: 768px) {
      width: 274px;
    }
  }

  .Input[id="statistics"] {
    @media only screen and (min-width: 768px) {
      width: 164px;
    }
  }

  .dropdown {
    z-index: 1000;
    position: absolute;
    margin-top: 5px;
    display: none;
    gap: 8px;

    border-radius: 15px;
    padding: 12px 24px;
    width: 343px;
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

  .CountWord {
    margin-top: 50px;
    font-weight: 500;
    font-size: 14px;
    color: rgba(18, 20, 23, 0.5);

    align-items: center;
    display: flex;
    gap: 8px;

    @media only screen and (min-width: 768px) {
      margin-top: 0px;
    }
  }

  .NumberCountWord {
    font-weight: 500;
    font-size: 20px;
    color: #121417;
  }

  .ButtonList {
    margin-top: 16px;
    display: flex;
    gap: 16px;

    @media only screen and (min-width: 1440px) {
      margin-top: 0;
    }
  }

  .ButtonItem {
    text-decoration: none;
    display: flex;
    gap: 8px;
    cursor: pointer;
    color: #121417;

    &:hover {
      color: #85aa9f;
    }

    &:hover .IconButton {
      path {
        stroke: #686868;
        transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  .RadioButtonList {
    position: absolute;
    top: 120px;
    display: grid;
    gap: 34px;
    left: 14px;

    @media only screen and (min-width: 768px) {
      position: static;
      margin-left: 20px;
    }
  }

  .RadioButtonItem {
    position: relative;
    display: flex;
    gap: 8px;

    font-weight: 400;
    font-size: 12px;
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
      background-color: #fff;
      border: 3px solid #8a8a89;
    }

    &:checked:before {
      border-color: #85aa9f;
    }

    &:checked::after {
      content: "";
      position: absolute;
      top: 50%;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #85aa9f;
      transform: translate(-50%, -50%);
      visibility: visible;
    }
  }

  .TableContainer {
    margin-top: 40px;
    height: 457px;
    @media only screen and (min-width: 768px) {
      padding: 18px;
      background: #fcfcfc;
      border-radius: 15px;
      margin-top: 24px;
    }
  }
`,P=i=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",...i},s.createElement("path",{stroke:"#85AA9F",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M10 4.167v11.666M4.167 10h11.666"})),Y=()=>{const i=I(),[a,d]=s.useState({filters:"",statistics:"",isIrregular:void 0,page:1}),[h,l]=s.useState(!1),{categories:f}=R(),o=n(t=>t.data.words),b=n(t=>t.data.statistics),w=n(t=>t.data.isLoadingCategories),y=n(t=>t.data.isLoadingStatistics),c=n(t=>t.data.isDeleteWord),p=n(t=>t.data.isAddWord);s.useEffect(()=>{i(g(c||p)),i(N()),i(k())},[i,c,p]);const j=s.useRef(S.debounce(t=>{i(g(t))},300));s.useEffect(()=>{j.current(a)},[a]);const x=t=>{const{name:r,value:C}=t.target;d({...a,[r]:C.trim()})},u=t=>{d(r=>({...r,statistics:t})),l(t==="verb")},m=t=>{d(r=>({...r,isIrregular:t}))};return e.jsxs(F,{children:[e.jsxs("div",{className:"FilterContainer",children:[e.jsxs("form",{className:"Form",children:[e.jsx("div",{className:"SearchContainer",children:e.jsx("input",{id:"filters",className:"Input",type:"text",placeholder:"Find the word",name:"filters",value:a.filters,onChange:x})}),e.jsxs("div",{className:"custom-input",children:[e.jsx("input",{id:"statistics",name:"statistics",className:"Input",type:"text",placeholder:"Categories",value:a.statistics,onChange:x}),e.jsxs("ul",{className:"dropdown",children:[e.jsx("li",{className:"ListItem",onClick:()=>u(""),children:"categories"}),w?e.jsx("div",{children:"Loading..."}):f.map(t=>e.jsx("li",{className:"ListItem",onClick:()=>u(t),children:t},t))]})]}),e.jsxs("ul",{className:"RadioButtonList",style:{display:h?"flex":"none"},children:[e.jsxs("li",{className:"RadioButtonItem",children:[e.jsx("input",{className:"RadioButton",id:"regular",name:"regular",type:"radio",onChange:()=>m(!1),checked:a.isIrregular===!1}),"Regular"]}),e.jsxs("li",{className:"RadioButtonItem",children:[e.jsx("input",{className:"RadioButton",id:"irregular",name:"irregular",type:"radio",onChange:()=>m(!0),checked:a.isIrregular===!0}),"Irregular"]})]})]}),e.jsxs("div",{className:"CountContainer",children:[e.jsxs("p",{className:"CountWord",children:["To study:",e.jsx("span",{className:"NumberCountWord",children:!y&&b.totalCount})]}),e.jsxs("ul",{className:"ButtonList",children:[e.jsxs("li",{className:"ButtonItem",onClick:()=>i(B()),children:["Add word ",e.jsx(P,{className:"IconButton"})]}),e.jsx("li",{children:e.jsxs(L,{className:"ButtonItem",to:"/training",children:["Train oneself ",e.jsx(E,{className:"IconButton"})]})})]})]})]}),e.jsx("div",{className:"TableContainer",children:o.results&&o.results.length!==0?e.jsx(W,{data:o}):e.jsx("p",{style:{fontSize:"20px",textAlign:"center"},children:"You dont have own words"})}),o.totalPages>1&&e.jsx(D,{data:o,formData:a,setFormData:d})]})};export{Y as default};
