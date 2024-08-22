import{r as a,j as e,L as g,F as h,u as p}from"./index-xhGxv6t3.js";import{d as m,s as j,F as v,f as w,c,B as o}from"./StarIcon-Df_WAvsX.js";import{H as f}from"./head-no0vOsnG.js";function N({title:t,titleId:s,...l},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":s},l),t?a.createElement("title",{id:s},t):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"}))}const b=a.forwardRef(N);function z({title:t,titleId:s,...l},r){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":s},l),t?a.createElement("title",{id:s},t):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"}))}const x=a.forwardRef(z),S=({slug:t})=>{const s=m.find(i=>i.slug===t);if(!s)return e.jsxs("div",{children:[e.jsx(f,{title:"Shoe not found"}),"Shoe not found ",e.jsx(g,{to:"/shoes",children:"View all shoes"})]});const[l,r]=a.useState(s==null?void 0:s.previewImage);if(s){const i=j(s.reviews||[]),u=i>=4;return e.jsxs("div",{className:"w-full h-full lg:max-w-7xl mx-auto py-10 lg:py-16 px-6 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8",children:[e.jsxs("div",{className:"w-full flex flex-col lg:flex-row items-start gap-4 lg:gap-2 col-span-2",children:[e.jsxs("div",{className:"w-full h-96 lg:h-[600px] rounded-md bg-slate-100 flex items-center justify-center relative",children:[u?e.jsxs("div",{className:"absolute top-2 lg:top-4 left-2 lg:left-4 flex items-center gap-2 p-2 px-2.5 rounded-full bg-slate-300",children:[e.jsx(v,{className:"size-5 text-slate-800"}),e.jsx("p",{className:"text-sm font-medium text-slate-800",children:"Highly Rated"})]}):null,e.jsx("img",{src:l,alt:s.name,className:"size-5/6 object-cover object-center"})]}),e.jsx("div",{className:"w-full lg:w-64 lg:order-first flex flex-row lg:flex-col items-center gap-4 lg:gap-3 overflow-x-auto",children:s.images.map((n,d)=>e.jsx("div",{className:"size-32 lg:size-48 flex-none rounded-md bg-slate-50 hover:border border-slate-900 hover:bg-slate-100 flex items-center justify-center",onClick:()=>r(n),onMouseOver:()=>r(n),children:e.jsx("img",{src:n,alt:s==null?void 0:s.name,className:"size-5/6 object-cover object-center"})},d))})]}),e.jsxs("div",{className:"w-full h-full flex flex-col items-start gap-4 mt-2",children:[e.jsx("h4",{className:"text-3xl font-bold text-slate-800",children:s==null?void 0:s.name}),e.jsx("p",{className:"text-4xl text-slate-950",children:w(s.price)}),e.jsxs("div",{className:"flex items-end gap-1",children:[e.jsx(x,{className:c("size-6 text-slate-800",{"fill-slate-800":i>=1})}),e.jsx(x,{className:c("size-6 text-slate-800",{"fill-slate-800":i>=2})}),e.jsx(x,{className:c("size-6 text-slate-800",{"fill-slate-800":i>=3})}),e.jsx(x,{className:c("size-6 text-slate-800",{"fill-slate-800":i>=4})}),e.jsx(x,{className:c("size-6 text-slate-800",{"fill-slate-800":i>=5})}),s.reviews.length>0?e.jsxs(o,{variant:"link",className:"p-0 h-max",children:[s.reviews.length," reviews"]}):null]}),e.jsx("p",{className:"text-base text-slate-700 line-clamp-7",children:s.description}),s!=null&&s.availableSizes?e.jsxs("div",{className:"w-full flex flex-col items-start gap-2",children:[e.jsx("p",{className:"text-base text-slate-700 font-medium",children:"Available Sizes"}),e.jsx("div",{className:"w-full flex items-center gap-2",children:s.availableSizes.map((n,d)=>e.jsx(o,{variant:"secondary",width:"full",size:"sm",children:n},d))})]}):null,e.jsxs("div",{className:"w-full flex items-center gap-3",children:[e.jsxs(o,{width:"full",size:"lg",children:["Add to Bag ",e.jsx(h,{className:"text-current size-6"})]}),e.jsx(o,{variant:"secondary",size:"lg",className:"group",children:e.jsx(b,{className:"text-current size-6 group-hover:fill-current"})})]}),e.jsx(o,{variant:"link",className:"p-0",children:"View Shoe Details"}),e.jsxs("div",{className:"w-full flex flex-col items-start gap-2",children:[e.jsx("p",{className:"text-base text-slate-700 font-medium",children:"Delivery"}),e.jsx("p",{className:"text-base text-slate-600",children:"You'll see our delivery options at checkout."})]})]})]})}},E=()=>{const s=p().shoeSlug,l=m.find(r=>r.slug===s);return e.jsxs(e.Fragment,{children:[e.jsx(f,{title:l==null?void 0:l.name}),e.jsx(S,{slug:s})]})};export{E as ViewShoeRoute};