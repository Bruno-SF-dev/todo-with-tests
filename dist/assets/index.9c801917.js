import{W as g,s as l,j as p,r as u,R as f,a as x,F as h}from"./vendor.1905cb1f.js";const b=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};b();const y=g`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,300&display=swap');

* {
  margin: 0;
  padding: 0;
  border:none;
  box-sizing: border-box;
  outline: 0;
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
}

body {
  background-color: ${({theme:o})=>o.colors.darkPrimary};
}

button {
  background-color: transparent;
  cursor: pointer;
}

#root {
  min-height: 100vh;
}
`,v={colors:{darkPrimary:"#2D3142",darkSecondary:"#555b6e",danger:"#FF595E",success:"#73FBD3",textPrimary:"#ffffff"}},k=l.div`
  min-height: 100vh;

  .bg-header {
    width: 100%;
    height: 120px;
    background-color: rgba(0, 0, 0, 0.2);
  }
`,w=l.div`
  width: 90%;
  max-width: 700px;
  min-height: 400px;
  margin: -20px auto 0px;
  background-color: ${({theme:o})=>o.colors.darkPrimary};
`,I=l.div`
  display: flex;

  input {
    flex: 1;
    background-color: rgba(250, 250, 250, 0.9);
    padding: 10px 5px;
    border-radius: 4px 0 0 4px;
    font-size: 16px;
  }

  button {
    background-color: ${({theme:o})=>o.colors.success};
    padding: 4px 12px;
    border-radius: 0 4px 4px 0;
  }
`,P=l.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,j=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  padding: 0px 8px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  color: ${({theme:o})=>o.colors.textPrimary};

  button {
    background-color: ${({theme:o})=>o.colors.danger};
    color: ${({theme:o})=>o.colors.textPrimary};
    padding: 4px 8px;
    border-radius: 4px;
  }
`,r=p.exports.jsx,c=p.exports.jsxs,C=()=>Math.floor(Math.random()*(2e4-1e4)+1e4),F=()=>{const[o,i]=u.exports.useState(""),[s,a]=u.exports.useState([]),e=n=>{i(n.target.value)},t=()=>{a([...s,{id:C(),value:o}]),i("")},d=n=>{a(s.filter(m=>m.id!==n))};return c(w,{children:[c(I,{children:[r("input",{type:"text","aria-label":"new-todo-value",value:o,onChange:e}),r("button",{onClick:t,children:"Adicionar"})]}),s.length>0&&r(P,{children:s.map(n=>c(j,{role:"todo-item",children:[n.value,r("button",{onClick:()=>d(n.id),"data-testid":"remove-todo-item",children:"Excluir"})]},n.id))})]})},L=()=>c(k,{children:[r("div",{className:"bg-header"}),r(F,{})]});f.render(r(x.StrictMode,{children:c(h,{theme:v,children:[r(y,{}),r(L,{})]})}),document.getElementById("root"));
