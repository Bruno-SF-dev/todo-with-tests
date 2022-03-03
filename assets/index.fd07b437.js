import{W as f,s as l,j as u,r as p,R as x,a as g,F as h}from"./vendor.caf8f69b.js";const b=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(o){if(o.ep)return;o.ep=!0;const t=a(o);fetch(o.href,t)}};b();const y=f`
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
  background-color: ${({theme:e})=>e.colors.darkPrimary};
}

button {
  background-color: transparent;
  cursor: pointer;
}

#root {
  min-height: 100vh;
}
`,v={colors:{darkPrimary:"#2D3142",darkSecondary:"#555b6e",danger:"#FF595E",success:"#73FBD3",purple:"#7209b7",textPrimary:"#ffffff"}},k=l.div`
  min-height: 100vh;

  .bg-header {
    width: 100%;
    height: 120px;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    padding-top: 40px;
  }

  h2 {
    margin: 0 auto;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`,w=l.div`
  width: 90%;
  max-width: 700px;
  min-height: 400px;
  margin: -20px auto 0px;
  background-color: ${({theme:e})=>e.colors.darkPrimary};
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
    background-color: ${({theme:e})=>e.colors.purple};
    color: ${({theme:e})=>e.colors.textPrimary};
    padding: 4px 12px;
    border-radius: 0 4px 4px 0;
  }
`,P=l.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,$=l.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  padding: 0px 8px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  color: ${({theme:e})=>e.colors.textPrimary};

  button {
    background-color: ${({theme:e})=>e.colors.danger};
    color: ${({theme:e})=>e.colors.textPrimary};
    padding: 4px 8px;
    border-radius: 4px;
  }
`,r=u.exports.jsx,c=u.exports.jsxs,j=()=>Math.floor(Math.random()*(2e4-1e4)+1e4),C=()=>{const[e,i]=p.exports.useState(""),[a,s]=p.exports.useState([]),o=n=>{i(n.target.value)},t=()=>{s([...a,{id:j(),value:e}]),i("")},d=n=>{s(a.filter(m=>m.id!==n))};return c(w,{children:[c(I,{children:[r("input",{type:"text","aria-label":"new-todo-value",value:e,onChange:o}),r("button",{onClick:t,children:"Adicionar"})]}),a.length>0&&r(P,{children:a.map(n=>c($,{role:"todo-item",children:[n.value,r("button",{onClick:()=>d(n.id),"data-testid":"remove-todo-item",children:"Excluir"})]},n.id))})]})},F=()=>c(k,{children:[r("div",{className:"bg-header",children:r("h2",{children:"Tarefas"})}),r(C,{})]});x.render(r(g.StrictMode,{children:c(h,{theme:v,children:[r(y,{}),r(F,{})]})}),document.getElementById("root"));
