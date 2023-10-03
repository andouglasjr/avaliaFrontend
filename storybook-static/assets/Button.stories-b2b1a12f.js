import{j as a}from"./jsx-runtime-2ef3df91.js";import{P as r}from"./index-2baff29e.js";import{c as f,I as q}from"./Icons-32fb1ac2.js";import"./index-e03f90b5.js";import{b as F}from"./chunk-ZJJGQIVY-09ab75d1.js";import{F as M}from"./chunk-KRPLQIP4-cda6a906.js";import{B as R}from"./chunk-UVUR7MCU-4ada9274.js";import"./_commonjsHelpers-725317a4.js";import"./chunk-2GBDXOMA-f9112a1d.js";import"./index-203f1c1d.js";import"./index-64aed617.js";import"./extends-883199d4.js";import"./index-fc8d46d4.js";import"./chunk-5PH6ULNP-c96a5b4f.js";import"./index-d844c8a1.js";const E=""+new URL("Loading_White-5e467e3e.gif",import.meta.url).href,G=""+new URL("Loading_Purple-9f9e4c73.gif",import.meta.url).href,i=C=>{const{id:D,label:p,extra:O,variant:e,mb:m,mt:c,icon:T,w:u,h:d,ml:U,...V}=C;return F("purple.2","white"),a.jsx(M,{direction:"row",justifyContent:"center",alignContent:"center",mb:m||"30px",mt:c||"30px",children:a.jsx(R,{...V,id:D,label:p,variant:e,leftIcon:e=="ghost"?a.jsx(f,{}):null,rightIcon:e=="primary"||e=="secondary"?a.jsx(f,{}):null,w:u||"150px",h:d||"40px",p:"8px",fontFamily:"textStyles.Button",gap:"8px",spinner:a.jsx(q,{mt:"16px",src:e=="primary"?E:G,boxSize:"40px"}),children:p})})};i.propTypes={label:r.string,variant:r.oneOf(["primary","secondary","ghost","link"]),isDisabled:r.bool,isLoading:r.bool};i.defaultProps={label:"Button",variant:"primary",isDisabled:!1,isLoading:!1};i.__docgenInfo={description:"",methods:[],displayName:"CustomButton",props:{label:{defaultValue:{value:'"Button"',computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:'"primary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"ghost"',computed:!1},{value:'"link"',computed:!1}]},required:!1,description:""},isDisabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},isLoading:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""}}};const oe={title:"Molecules/Button",component:i,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{label:"Label"}},t={args:{variant:"primary",label:"Label"}},s={args:{variant:"secondary",label:"Label"}},n={args:{variant:"ghost",label:"Label"}},l={args:{variant:"link",label:"Label"}};var g,b,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Label"
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,x,L;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "Label"
  }
}`,...(L=(x=t.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var h,B,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    label: "Label"
  }
}`,...(S=(B=s.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var j,w,P;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    label: "Label"
  }
}`,...(P=(w=n.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var _,k,I;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: "link",
    label: "Label"
  }
}`,...(I=(k=l.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const te=["Default","Primary","Secondary","Ghost","Link"];export{o as Default,n as Ghost,l as Link,t as Primary,s as Secondary,te as __namedExportsOrder,oe as default};
//# sourceMappingURL=Button.stories-b2b1a12f.js.map
