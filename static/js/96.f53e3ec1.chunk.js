"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[96],{96:function(n,e,r){r.r(e),r.d(e,{Movies:function(){return _}});var t,a,i,o=r(861),s=r(439),p=r(687),u=r.n(p),c=r(791),x=r(87),l=r(148),h=r(942),d=r(413),f=r(168),g=r(686),v=g.Z.form(t||(t=(0,f.Z)(["\n  display: flex;\n  gap: 20px;\n  margin-right: 20px;\n  margin-top: 20px;\n"]))),b=g.Z.input(a||(a=(0,f.Z)(["\n  padding: 10px 15px;\n  width: 350px;\n  border-radius: 5px;\n  font-size: 18px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  border: none;\n\n  :focus {\n    outline: 2px solid #2c2a2a;\n  }\n"]))),m=g.Z.button(i||(i=(0,f.Z)(["\n  padding: 10px 15px;\n  width: 100px;\n  border-radius: 5px;\n  font-size: 18px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: all 200ms ease-in-out;\n  cursor: pointer;\n  :hover,\n  :focus-visible {\n    color: black;\n    background-color: #b0a8a8;\n  }\n"]))),Z=r(184),j=function(n){var e=n.onSubmit,r=(0,c.useState)({search:""}),t=(0,s.Z)(r,2),a=t[0],i=t[1],o=(0,c.useRef)(null);(0,c.useEffect)((function(){o.current.focus()}),[]);var p=function(){i({search:""})},u=(0,c.useMemo)((function(){return function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",r=crypto.getRandomValues(new Uint8Array(n));n--;){var t=63&r[n];e+=t<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t<63?"_":"-"}return e}()}),[]);return(0,Z.jsxs)(v,{onSubmit:function(n){n.preventDefault(),e((0,d.Z)({},a)),p()},children:[(0,Z.jsxs)("div",{children:[(0,Z.jsx)("label",{htmlFor:u}),(0,Z.jsx)(b,{id:u,ref:o,value:a.search,onChange:function(n){var e=n.target,r=e.name,t=e.value;i((0,d.Z)((0,d.Z)({},a),{},(0,h.Z)({},r,t)))},required:!0,type:"text",name:"search",placeholder:"Enter search film"})]}),(0,Z.jsx)(m,{type:"submit",children:"Search"})]})},w=r(799),S=r(393),k=function(){var n=(0,c.useState)([]),e=(0,s.Z)(n,2),r=e[0],t=e[1],a=(0,c.useState)(!1),i=(0,s.Z)(a,2),p=i[0],h=i[1],d=(0,c.useState)(""),f=(0,s.Z)(d,2),g=f[0],v=f[1],b=(0,x.lr)(),m=(0,s.Z)(b,2),k=m[0],_=m[1],y=k.get("search");(0,c.useEffect)((function(){var n=function(){var n=(0,o.Z)(u().mark((function n(){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),n.next=4,(0,l.z4)(y);case 4:e=n.sent,r=e.data.results,t(null!==r&&void 0!==r&&r.length?r:[]),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),v(n.t0.message);case 12:return n.prev=12,h(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();y&&n()}),[y]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(j,{onSubmit:function(n){var e=n.search;_({search:e}),t([])}}),g&&(0,Z.jsx)("p",{children:g}),p&&(0,Z.jsx)("p",{children:"...Loading"}),Boolean(r.length)&&(0,Z.jsx)(w.sS,{children:r.map((function(n){var e=n.id,r=n.title,t=n.original_name,a=n.poster_path;return(0,Z.jsx)(S.Z,{id:e,title:r,original_name:t,poster_path:a},e)}))})]})},_=function(){return(0,Z.jsx)("div",{children:(0,Z.jsx)(k,{})})}}}]);
//# sourceMappingURL=96.f53e3ec1.chunk.js.map