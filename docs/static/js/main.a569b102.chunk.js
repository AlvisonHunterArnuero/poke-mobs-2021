(this.webpackJsonppokedeck=this.webpackJsonppokedeck||[]).push([[0],{13:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c=n(11),a=n.n(c),r=n(17),o=n(20),s=n(0),i=n(3),u=Object(s.createContext)();t.b=function(e){var t=e.children,n=Object(s.useState)([]),c=Object(o.a)(n,2),l=c[0],p=c[1],j=function(){var e=Object(r.a)(a.a.mark((function e(){var t,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.floor(806*Math.random()+1),e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,console.log("==>",c),p(c),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsx)(u.Provider,{value:{pokemonsCollection:l,setPokemonsCollection:p,getAPIResults:j},children:t})}},26:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(16),o=n.n(r),s=(n(26),n(21)),i=n(14),u=n(1),l=n(13),p=(n(29),a.a.lazy((function(){return n.e(3).then(n.bind(null,38))}))),j=[{path:"/",exact:!0,name:"Welcome",component:a.a.lazy((function(){return n.e(4).then(n.bind(null,36))}))},{path:"/pokedeck",exact:!0,name:"Pokedeck",component:p},{path:"*",exact:!0,name:"Page Not Found",component:p}],b=n(3),d=function(){return Object(b.jsx)("div",{className:"grid place-items-center h-screen",children:Object(b.jsxs)("button",{type:"button",className:"bg-transparent text-white text-2xl",disabled:!0,children:[Object(b.jsx)("svg",{className:"animate-spin h-5 w-5 mr-3",viewBox:"0 0 24 24"}),"Loading..."]})})};var h=function(){return Object(b.jsx)(l.b,{children:Object(b.jsx)(i.a,{children:Object(b.jsx)(c.Suspense,{fallback:Object(b.jsx)(d,{}),children:Object(b.jsx)(u.c,{children:j.map((function(e,t){return e.component&&Object(b.jsx)(u.a,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(b.jsx)(e.component,Object(s.a)({},t))}},t)}))})})})})},x=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),x()}},[[35,1,2]]]);
//# sourceMappingURL=main.a569b102.chunk.js.map