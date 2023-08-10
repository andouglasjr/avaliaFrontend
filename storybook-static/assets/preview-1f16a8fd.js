import{r as s}from"./index-e03f90b5.js";import{G as g}from"./chunk-5PH6ULNP-3c0a6be7.js";import{j as a}from"./jsx-runtime-2ef3df91.js";import{P as I,T as N,a as V}from"./chunk-NMI5PSXW-ce57a72b.js";import{C as q,h as F,d as _,m as A,r as W}from"./chunk-ZJJGQIVY-971fda8c.js";import{t as B,e as K}from"./index-203f1c1d.js";import{u as U}from"./index-64aed617.js";import{t as j,e as Y}from"./chunk-LIR5QAZY-975c6345.js";import"./_commonjsHelpers-725317a4.js";import"./extends-883199d4.js";import"./index-7e413772.js";import"./motion-2e61867d.js";import"./chunk-2GBDXOMA-532e93b7.js";import"./index-ac92abf8.js";var O=String.raw,L=O`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,Z=()=>a.jsx(g,{styles:L}),H=({scope:e=""})=>a.jsx(g,{styles:O`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${L}
    `}),p={light:"chakra-ui-light",dark:"chakra-ui-dark"};function J(e={}){const{preventTransition:o=!0}=e,r={setDataset:n=>{const t=o?r.preventTransition():void 0;document.documentElement.dataset.theme=n,document.documentElement.style.colorScheme=n,t==null||t()},setClassName(n){document.body.classList.add(n?p.dark:p.light),document.body.classList.remove(n?p.light:p.dark)},query(){return window.matchMedia("(prefers-color-scheme: dark)")},getSystemTheme(n){var t;return((t=r.query().matches)!=null?t:n==="dark")?"dark":"light"},addListener(n){const t=r.query(),i=l=>{n(l.matches?"dark":"light")};return typeof t.addListener=="function"?t.addListener(i):t.addEventListener("change",i),()=>{typeof t.removeListener=="function"?t.removeListener(i):t.removeEventListener("change",i)}},preventTransition(){const n=document.createElement("style");return n.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(n),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(n)})})}}};return r}var Q="chakra-ui-color-mode";function X(e){return{ssr:!1,type:"localStorage",get(o){if(!(globalThis!=null&&globalThis.document))return o;let r;try{r=localStorage.getItem(e)||o}catch{}return r||o},set(o){try{localStorage.setItem(e,o)}catch{}}}}var ee=X(Q),S=()=>{};function T(e,o){return e.type==="cookie"&&e.ssr?e.get(o):o}function z(e){const{value:o,children:r,options:{useSystemColorMode:n,initialColorMode:t,disableTransitionOnChange:i}={},colorModeManager:l=ee}=e,d=t==="dark"?"dark":"light",[u,y]=s.useState(()=>T(l,d)),[x,h]=s.useState(()=>T(l)),{getSystemTheme:w,setClassName:k,setDataset:$,addListener:M}=s.useMemo(()=>J({preventTransition:i}),[i]),f=t==="system"&&!u?x:u,m=s.useCallback(c=>{const b=c==="system"?w():c;y(b),k(b==="dark"),$(b),l.set(b)},[l,w,k,$]);U(()=>{t==="system"&&h(w())},[]),s.useEffect(()=>{const c=l.get();if(c){m(c);return}if(t==="system"){m("system");return}m(d)},[l,d,t,m]);const E=s.useCallback(()=>{m(f==="dark"?"light":"dark")},[f,m]);s.useEffect(()=>{if(n)return M(m)},[n,M,m]);const D=s.useMemo(()=>({colorMode:o??f,toggleColorMode:o?S:E,setColorMode:o?S:m,forced:o!==void 0}),[f,E,m,o]);return a.jsx(q.Provider,{value:D,children:r})}z.displayName="ColorModeProvider";function te(e={}){const{strict:o=!0,errorMessage:r="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:n}=e,t=s.createContext(void 0);t.displayName=n;function i(){var l;const d=s.useContext(t);if(!d&&o){const u=new Error(r);throw u.name="ContextError",(l=Error.captureStackTrace)==null||l.call(Error,u,i),u}return d}return[t.Provider,i,t]}function oe(e){const{cssVarsRoot:o,theme:r,children:n}=e,t=s.useMemo(()=>B(r),[r]);return a.jsxs(F,{theme:t,children:[a.jsx(re,{root:o}),n]})}function re({root:e=":host, :root"}){const o=[e,"[data-theme]"].join(",");return a.jsx(g,{styles:r=>({[o]:r.__cssVars})})}te({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "});function ne(){const{colorMode:e}=_();return a.jsx(g,{styles:o=>{const r=A(o,"styles.global"),n=W(r,{theme:o,colorMode:e});return n?K(n)(o):void 0}})}var P=s.createContext({getDocument(){return document},getWindow(){return window}});P.displayName="EnvironmentContext";function G(e){const{children:o,environment:r,disabled:n}=e,t=s.useRef(null),i=s.useMemo(()=>r||{getDocument:()=>{var d,u;return(u=(d=t.current)==null?void 0:d.ownerDocument)!=null?u:document},getWindow:()=>{var d,u;return(u=(d=t.current)==null?void 0:d.ownerDocument.defaultView)!=null?u:window}},[r]),l=!n||!r;return a.jsxs(P.Provider,{value:i,children:[o,l&&a.jsx("span",{id:"__chakra_env",hidden:!0,ref:t})]})}G.displayName="EnvironmentProvider";var ie=e=>{const{children:o,colorModeManager:r,portalZIndex:n,resetScope:t,resetCSS:i=!0,theme:l={},environment:d,cssVarsRoot:u,disableEnvironment:y,disableGlobalStyle:x}=e,h=a.jsx(G,{environment:d,disabled:y,children:o});return a.jsx(oe,{theme:l,cssVarsRoot:u,children:a.jsxs(z,{colorModeManager:r,options:l.config,children:[i?a.jsx(H,{scope:t}):a.jsx(Z,{}),!x&&a.jsx(ne,{}),n?a.jsx(I,{zIndex:n,children:h}):h]})})},ae=e=>function({children:r,theme:n=e,toastOptions:t,...i}){return a.jsxs(ie,{theme:n,...i,children:[a.jsx(N,{value:t==null?void 0:t.defaultOptions,children:r}),a.jsx(V,{...t})]})},se=ae(j);const{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__;var C="@chakra-ui/storybook-addon",le=`${C}/direction-tool`,v={TOGGLE_COLOR_MODE:`${C}/toggleColorMode`,TOGGLE_DIRECTION:`${C}/toggleDirection`};function de(){let{setColorMode:e}=_();return s.useEffect(()=>{let o=R.getChannel(),r=n=>e(n);return o.on(v.TOGGLE_COLOR_MODE,r),()=>{o.removeListener(v.TOGGLE_COLOR_MODE,r)}},[e]),null}var ue=(e="ltr")=>{let[o,r]=s.useState(e.toLowerCase());return s.useEffect(()=>{document.documentElement.dir=o},[o]),s.useEffect(()=>{let n=R.getChannel(),t=i=>r(i);return n.on(v.TOGGLE_DIRECTION,t),()=>{n.removeListener(v.TOGGLE_DIRECTION,t)}},[r]),o},me=(e,o)=>{let{parameters:{chakra:r},globals:{[le]:n}}=o,t=r!=null&&r.theme?typeof r.theme=="function"?r.theme(o):r.theme:j,i=ue(n||(t==null?void 0:t.direction)),l=s.useMemo(()=>Y({direction:i},t),[t,i]);return a.jsxs(se,{...r,theme:l,children:[a.jsx(de,{}),e(o)]})},ce={decorators:[me]},Se=ce;export{Se as default};
//# sourceMappingURL=preview-1f16a8fd.js.map
