import{m as b,a6 as D,v as x,bM as _,r as o,cF as F,j as e,cG as L,cH as k,Z as M,cI as T,cJ as j,cK as R,cL as E,h as p,a8 as W}from"./sanity-42163f22.js";const B=(t,n)=>({title:p("em",{children:["No schema found for type ",e("code",{children:n})]}),subtitle:p("em",{children:["Document: ",e("code",{children:t})]}),media:()=>e(W,{})});function G(t){const{layout:n,value:s}=t;return e(k,{...B(s._id,s._type),layout:n})}function P(t,n,s){return t===!1?!1:t||n&&n.icon||s||!1}function K(t){const{icon:n,id:s,layout:i="default",pressed:v,schemaType:a,selected:r,title:u,value:c}=t,I=b(),l=D(),{ChildLink:d}=x(),m=_(s),f=Boolean(a&&a.name&&I.get(a.name)),[y,h]=o.useState(!1),g=o.useMemo(()=>c&&F(c)?!a||!f?e(G,{value:c}):e(L,{documentPreviewStore:l,icon:P(n,a,R),layout:i,schemaType:a,value:c,presence:m}):e(k,{status:e(M,{muted:!0,children:e(T,{})}),icon:P(n,a,E),layout:i,title:u}),[l,f,n,i,a,u,c,m]),C=o.useMemo(()=>function(w){return e(d,{...w,childId:s})},[d,s]),S=o.useCallback(()=>h(!0),[]);return o.useEffect(()=>h(!1),[r]),e(j,{__unstable_focusRing:!0,as:C,"data-as":"a","data-ui":"PaneItem",padding:2,radius:2,onClick:S,pressed:v,selected:r||y,tone:"inherit",children:g})}export{K as P};
