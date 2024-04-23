import{u as W,a as g,p as S,b as T,r as p,j as e,y as F,z as _,A as D,B as U}from"./index-C-80DDQy.js";import{C as M,S as I}from"./index-FAxV1asL.js";import{S as $,a as V}from"./united kingdom-Cr7l-d-c.js";const Y=W.div`
  background: #f8f8f8;
  width: 100%;
  height: 100vh;
  padding: 32px 16px;
  box-sizing: border-box;

  @media only screen and (min-width: 768px) {
    padding: 64px 32px;
  }

  .CicleContainer {
    position: relative;
    display: flex;
    justify-content: end;
  }
  .Circle {
    width: 44px;
    height: 44px;

    @media only screen and (min-width: 768px) {
      width: 58px;
      height: 58px;
    }
  }
  .Percent {
    position: absolute;
    right: 13px;
    top: 10px;
    width: 20px;
    height: 20px;
    text-align: center;

    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-align: center;

    @media only screen and (min-width: 768px) {
      right: 20px;
      top: 16px;
    }
  }

  .Form {
    margin-top: 16px;
  }

  .FormContainer {
    display: grid;
    @media only screen and (min-width: 768px) {
      border-radius: 15px;
      padding: 18px;
      background: #fff;
    }

    @media only screen and (min-width: 1440px) {
      display: flex;
    }
  }

  .InputContainer {
    box-sizing: border-box;
    border-radius: 8px 8px 0 0;
    padding: 22px;
    width: 100%;
    height: 195px;
    background: #fcfcfc;
    display: grid;
    grid-template-areas:
      "i i i i"
      "b b n n";

    @media only screen and (min-width: 768px) {
      height: 282px;
      grid-template-areas:
        "i i n n "
        "b b _ _ ";
    }

    @media only screen and (min-width: 1440px) {
      height: 302px;
    }
  }

  .InputContainer[id="ukrainian"] {
    border-bottom: 1px solid #dbdbdb;
    @media only screen and (min-width: 1440px) {
      border-bottom: none;
      border-right: 1px solid #dbdbdb;
    }
  }

  input {
    grid-area: i;
    border: none;
    background: #fcfcfc;
    width: 100%;

    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
    margin-bottom: auto;

    &:focus {
      outline: none;
    }
  }

  .LangueButton {
    cursor: pointer;
    grid-area: b;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: auto;

    background: none;
    border: none;

    &:hover {
      color: #85aa9f;
    }
  }

  .LangueName {
    grid-area: n;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: auto;
    margin-left: auto;

    @media only screen and (min-width: 768px) {
      margin-top: 0;
      margin-bottom: auto;
    }
  }

  .ButtonList {
    display: grid;
    margin-top: 150px;
    justify-content: center;

    @media only screen and (min-width: 768px) {
      display: flex;
      gap: 8px;
      margin-top: 50px;
      justify-content: start;
    }
  }

  .SaveButton {
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 30px;
    padding: 16px;
    width: 343px;
    height: 56px;
    background: #85aa9f;

    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #fcfcfc;

    text-align: center;

    &:hover {
      color: #85aa9f;
      background: #f8f8f8;
    }

    @media only screen and (min-width: 768px) {
      width: 203px;
      padding: 14px;
      font-size: 18px;
      line-height: 156%;
    }
  }

  .CanselButton {
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    color: rgba(18, 20, 23, 0.5);
    padding: 16px;
    display: flex;
    justify-content: center;

    @media only screen and (min-width: 768px) {
      box-sizing: border-box;
      border: 1px solid #85aa9f;
      border-radius: 30px;
      padding: 14px;
      width: 203px;
      height: 56px;

      font-size: 18px;
      line-height: 156%;
      color: #85aa9f;

      &:hover {
        background: #85aa9f;
        color: #f8f8f8;
      }
    }
  }
`,q=({tasks:i})=>{var j,C,N,z;const o=g(),s=S(),d=T(n=>n.data.words),[a,P]=p.useState(0),[m,L]=p.useState([]),[t,u]=p.useState({_id:(j=i[a])==null?void 0:j._id,en:((C=i[a])==null?void 0:C.en)||"",ua:((N=i[a])==null?void 0:N.ua)||"",task:(z=i[a])==null?void 0:z.task}),A=d.results.reduce((n,r)=>n+r.progress,0),f=Math.round(A/d.results.length),b=(n,r)=>{const{value:l}=n.target;u(c=>({...c,[r]:l}))},x=()=>{i.length>a&&(P(n=>n+1),u(n=>{var r,l,c,B;return{...n,_id:(r=i[a+1])==null?void 0:r._id,en:((l=i[a+1])==null?void 0:l.en)||"",ua:((c=i[a+1])==null?void 0:c.ua)||"",task:(B=i[a+1])==null?void 0:B.task}}),t[t.task]!==""&&L(n=>[...n,t]))},E=()=>{window.history.back()},h=()=>{x();const n=t[t.task]===""?[...m,t]:m;o(F(n)).then(r=>{isNaN(r.payload)?o(_())&&s("/dictionary"):s("/dictionary")})},w=n=>n==="en"?2:1,y=n=>n==="ua"?2:1,k=()=>{if(!/^[A-Za-z]*$/.test(t.en.replace(" ","")))return e.jsx("p",{style:{color:"red"},children:"Please enter only English letters"})},v=()=>{if(!/^[А-ЩЬЮЯҐЄІЇа-щьюяґєії]*$/.test(t.ua.replace(" ","")))return e.jsx("p",{style:{color:"red"},children:"Будь ласка, введіть лише українські літери"})};return i.length>0&&e.jsxs(Y,{children:[e.jsxs("div",{className:"CicleContainer",children:[e.jsx(M,{className:"Circle",gapPosition:"bottom",percent:f,strokeWidth:8,trailWidth:8,strokeColor:{"0%":"#c9cdcc","100%":"#85aa9f"},strokeLinecap:"round",gapDegree:0}),e.jsx("div",{className:"Percent",children:f})]}),e.jsxs("form",{className:"Form",children:[e.jsxs("div",{className:"FormContainer",children:[e.jsxs("div",{id:"ukrainian",className:"InputContainer",style:{order:y(t.task)},children:[e.jsx("input",{name:"ukrainian",type:"text",className:"Input",placeholder:"Введіть переклад",value:t.ua,onChange:n=>b(n,"ua")}),v&&v(),i.length>a?e.jsxs("div",{className:"LangueButton",onClick:x,style:{display:y(t.task)===1?"flex":"none"},children:["Next ",e.jsx(I,{})]}):h(),e.jsxs("div",{className:"LangueName",children:[e.jsx($,{}),"Ukrainian"]})]}),e.jsxs("div",{id:"english",className:"InputContainer",style:{order:w(t.task)},children:[e.jsx("input",{name:"english",type:"text",className:"Input",placeholder:"Break in",value:t.en,onChange:n=>b(n,"en")}),k&&k(),i.length>a?e.jsxs("div",{className:"LangueButton",onClick:x,style:{display:w(t.task)===1?"flex":"none"},children:["Next ",e.jsx(I,{})]}):h(),e.jsxs("div",{className:"LangueName",children:[e.jsx(V,{}),"English"]})]})]}),e.jsxs("ul",{className:"ButtonList",children:[e.jsx("li",{className:"SaveButton",onClick:h,children:"Save"}),e.jsx("li",{className:"CanselButton",onClick:E,children:"Cancel"})]})]})]})},H="/VocabBuilder/assets/blood-report-mobile-Bazgq195.png",K="/VocabBuilder/assets/blood-report-desktop-D3YvO9Pk.png",O=W.div`
  background: #f8f8f8;
  width: 100%;
  height: 100vh;
  padding: 32px 16px;
  display: grid;
  justify-content: center;

  @media only screen and (min-width: 1440px) {
    align-items: center;
  }

  .ContentContainer {
    margin-top: 30px;
    width: 343px;

    @media only screen and (min-width: 768px) {
      margin-top: 100px;
      width: 581px;
    }

    @media only screen and (min-width: 1440px) {
      width: 902px;
      height: 289px;
      display: grid;
      grid-template-areas:
        "t t i"
        "b b i";
      margin-top: 0px;
    }
  }

  .ImgContainer {
    display: flex;
    justify-content: center;
    @media only screen and (min-width: 1440px) {
      grid-area: i;
      margin-right: 32px;
    }
  }

  .Img {
    width: 189px;
    height: 203px;
    background-image: url(${H});
    @media only screen and (min-width: 768px) {
      width: 250px;
      height: 290px;
      background-image: url(${K});
    }
  }

  .TextContainer {
    @media only screen and (min-width: 1440px) {
      grid-area: t;
    }
  }

  .Title {
    margin-top: 20px;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;

    @media only screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  .Text {
    margin-top: 20px;
    font-weight: 400;
    font-size: 14px;

    @media only screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 150%;
    }
  }

  .ButtonList {
    margin-top: 140px;

    @media only screen and (min-width: 768px) {
      margin-top: 60px;
      display: flex;
      gap: 8px;
    }

    @media only screen and (min-width: 1440px) {
      grid-area: b;
    }
  }

  .AddWordButton {
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 30px;
    padding: 16px;
    width: 343px;
    height: 56px;
    background: #85aa9f;

    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #fcfcfc;

    text-align: center;

    &:hover {
      color: #85aa9f;
      background: #f8f8f8;
    }

    @media only screen and (min-width: 768px) {
      width: 203px;
      padding: 14px;
      font-size: 18px;
      line-height: 156%;

      &:hover {
        border: 1px solid #85aa9f;
      }
    }
  }

  .CancelButton {
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    color: rgba(18, 20, 23, 0.5);
    padding: 16px;
    display: flex;
    justify-content: center;

    &:hover {
      color: #85aa9f;
    }

    @media only screen and (min-width: 768px) {
      box-sizing: border-box;
      border: 1px solid #85aa9f;
      border-radius: 30px;
      padding: 14px;
      width: 203px;
      height: 56px;

      font-size: 18px;
      line-height: 156%;
      color: #85aa9f;

      &:hover {
        background: #85aa9f;
        color: #fcfcfc;
      }
    }
  }
`,R=()=>{const i=S(),o=g(),s=()=>{i("/dictionary"),o(D())},d=()=>{window.history.back()};return e.jsx(O,{children:e.jsxs("div",{className:"ContentContainer",children:[e.jsx("div",{className:"ImgContainer",children:e.jsx("div",{className:"Img"})}),e.jsxs("div",{className:"TextContainer",children:[e.jsxs("h2",{className:"Title",children:["You don't have a single word to learn right now."," "]}),e.jsx("p",{className:"Text",children:"Please create or add a word to start the workout. We want to improve your vocabulary and develop your knowledge, so please share the words you are interested in adding to your study."})]}),e.jsxs("ul",{className:"ButtonList",children:[e.jsx("li",{className:"AddWordButton",onClick:s,children:"Add word"}),e.jsx("li",{className:"CancelButton",onClick:d,children:"Cancel"})]})]})})},Q=()=>{const i=g(),o=T(s=>s.data.tasks);return p.useEffect(()=>{i(U())},[i]),e.jsx(e.Fragment,{children:o.tasks!==void 0&&o.tasks.length!==0?e.jsx(q,{tasks:o.tasks}):e.jsx(R,{})})};export{Q as default};
