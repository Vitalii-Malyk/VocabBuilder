import{u as h,a as f,r as s,b,w,x as y,j as e,N as j}from"./index-C-80DDQy.js";import{s as C,u as I,l as N,T as v,P as k}from"./index-Bnm9qDE0.js";import{t as B}from"./toggle-CSloHlzE.js";import{S as R}from"./index-FAxV1asL.js";import"./united kingdom-Cr7l-d-c.js";const z=h.div`
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
      content: url(${C});
      position: absolute;
      top: 14px;
      right: 24px;
    }
  }

  .custom-input {
    position: relative;

    &::after {
      content: url(${B});
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
    @media only screen and (min-width: 768px) {
      padding: 18px;
      background: #fcfcfc;
      border-radius: 15px;
      margin-top: 24px;
    }
  }
`,D=()=>{const r=f(),[a,o]=s.useState({filters:"",statistics:"",isIrregular:void 0,page:1}),[m,l]=s.useState(!1),{categories:d}=I(),i=b(t=>t.data.allWords);s.useEffect(()=>{r(w())},[r]);const u=s.useRef(N.debounce(t=>{r(y(t))},300));s.useEffect(()=>{u.current(a)},[a]);const p=t=>{const{name:n,value:g}=t.target;o({...a,[n]:g.trim()})},c=t=>{o(n=>({...n,statistics:t})),l(t==="verb")},x=t=>{o(n=>({...n,isIrregular:t}))};return e.jsxs(z,{children:[e.jsxs("div",{className:"FilterContainer",children:[e.jsxs("form",{className:"Form",children:[e.jsx("div",{className:"SearchContainer",children:e.jsx("input",{id:"filters",className:"Input",type:"text",placeholder:"Find the word",name:"filters",value:a.filters,onChange:p})}),e.jsxs("div",{className:"custom-input",children:[e.jsx("input",{id:"statistics",name:"statistics",className:"Input",type:"text",placeholder:"Categories",value:a.statistics,onChange:p}),e.jsxs("ul",{className:"dropdown",children:[e.jsx("li",{className:"ListItem",onClick:()=>c(""),children:"categories"}),d&&d.map(t=>e.jsx("li",{className:"ListItem",onClick:()=>c(t),children:t},t))]})]}),e.jsxs("ul",{className:"RadioButtonList",style:{display:m?"flex":"none"},children:[e.jsxs("li",{className:"RadioButtonItem",children:[e.jsx("input",{className:"RadioButton",id:"regular",name:"regular",type:"radio",onChange:()=>x(!1),checked:a.isIrregular===!1}),"Regular"]}),e.jsxs("li",{className:"RadioButtonItem",children:[e.jsx("input",{className:"RadioButton",id:"reason",name:"reason",type:"radio",onChange:()=>x(!0),checked:a.isIrregular===!0}),"Irregular"]})]})]}),e.jsxs("div",{className:"CountContainer",children:[e.jsxs("p",{className:"CountWord",children:["To study:",e.jsx("span",{className:"NumberCountWord",children:i.results&&i.results.length})]}),e.jsx("ul",{className:"ButtonList",children:e.jsx("li",{children:e.jsxs(j,{className:"ButtonItem",to:"/training",children:["Train oneself ",e.jsx(R,{className:"IconButton"})]})})})]})]}),e.jsx("div",{className:"TableContainer",children:i?e.jsx(v,{data:i}):e.jsx("div",{children:"Oooops samething wrong..."})}),i.totalPages>1&&e.jsx(k,{data:i,formData:a,setFormData:o})]})};export{D as default};
