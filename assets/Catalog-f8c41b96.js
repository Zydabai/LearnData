import{M as G,u as N}from"./app-e0dcab64.js";import{c as v,h as $,j as n,Y as S,C,_ as f}from"./framework-fed685dd.js";var m=v({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(l){const p=$(()=>{const c={};return l.color&&(c.color=l.color),l.size&&(c["font-size"]=Number.isNaN(Number(l.size))?l.size:`${l.size}px`),Object.keys(c).length?c:null});return()=>l.icon?n("span",{class:["font-icon icon",`iconfont icon-${l.icon}`],style:p.value}):null}}),j=v({name:"Catalog",props:{base:{type:String,default:""},level:{type:Number,default:3},titleGetter:{type:Function,default:l=>l.title},iconGetter:{type:Function,default:l=>l.icon},orderGetter:{type:Function,default:l=>l.order||0},shouldIndex:{type:Function,default:l=>l.index!==!1}},setup(l){const p=G({"/":{title:"目录"}}),c=S(),b=C(),y=N(),k=()=>{const o=l.base||c.path.replace(/\/[^/]+$/,"/"),u=b.getRoutes(),d=[];return u.filter(({meta:t,path:e})=>{if(!e.startsWith(o)||e===o)return!1;if(o==="/"){const r=Object.keys(y.value.locales).filter(s=>s!=="/");if(e==="/404.html"||r.some(s=>e.startsWith(s)))return!1}return(e.endsWith(".html")&&!e.endsWith("/index.html")||e.endsWith("/"))&&l.shouldIndex(t)}).map(({path:t,meta:e})=>{const r=t.substring(o.length).split("/").length;return{title:l.titleGetter(e),icon:l.iconGetter(e),base:t.replace(/\/[^/]+\/?$/,"/"),order:l.orderGetter(e),level:t.endsWith("/")?r-1:r,path:t}}).filter(({title:t,level:e})=>e<=l.level||!t).sort((t,e)=>t.level-e.level||(t.path.endsWith("/index.html")?-1:e.path.endsWith("/index.html")?1:t.order===null?e.order===null?t.title.localeCompare(e.title):e.order:e.order===null?t.order:t.order>0?e.order>0?t.order-e.order:-1:e.order<0?t.order-e.order:1)).forEach(t=>{var e;const{base:r,level:s}=t;switch(s){case 1:d.push(t);break;case 2:{const i=d.find(a=>a.path===r);i&&(i.children??(i.children=[])).push(t);break}default:{const i=d.find(a=>a.path===r.replace(/\/[^/]+\/$/,"/"));if(i){const a=(e=i.children)==null?void 0:e.find(h=>h.path===r);a&&(a.children??(a.children=[])).push(t)}}}}),d},x=$(()=>k());return()=>n("div",{class:"catalog-wrapper"},[n("h2",{class:"main-title"},p.value.title),...x.value.map(({children:o=[],icon:u,path:d,title:t},e)=>[n("h3",{id:t,class:["child-title",{"has-children":o.length}]},[n("a",{href:`#${t}`,class:"header-anchor"},"#"),n(f,{class:"catalog-title",to:d},()=>[u?n(m,{icon:u}):null,`${e+1}. ${t||"Unknown"}`])]),o.length?n("ul",{class:"child-catalog-wrapper"},o.map(({children:r=[],icon:s,path:i,title:a},h)=>n("li",{class:"catalog-item"},[n("div",{class:["sub-title",{"has-children":r.length}]},[n("a",{href:`#${a}`,class:"header-anchor"},"#"),n(f,{class:"catalog-title",to:i},()=>[s?n(m,{icon:s}):null,`${e+1}.${h+1} ${a||"Unknown"}`])]),r.length?n("div",{class:"sub-catalog-wrapper"},r.map(({icon:g,path:W,title:w},z)=>n(f,{class:"sub-catalog-item",to:W},()=>[g?n(m,{icon:g}):null,`${e+1}.${h+1}.${z+1} ${w||"Unknown"}`]))):null]))):null])])}});export{j as default};
