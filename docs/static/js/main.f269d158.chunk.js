(this.webpackJsonppokedeck=this.webpackJsonppokedeck||[]).push([[0],{14:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c=n(12),a=n.n(c),r=n(19),o=n(9),s=n(0),i=n(3),u=Object(s.createContext)();t.b=function(e){var t=e.children,n=Object(s.useState)([]),c=Object(o.a)(n,2),l=c[0],j=c[1],d=Object(s.useState)("Pikachu"),p=Object(o.a)(d,2),b=p[0],h=p[1],f=Object(s.useState)(!1),m=Object(o.a)(f,2),x=m[0],O=m[1],k=function(){var e=Object(r.a)(a.a.mark((function e(){var t,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),t=Math.floor(806*Math.random()+1),e.next=4,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t));case 4:return n=e.sent,e.next=7,n.json();case 7:return c=e.sent,j(c),O(!1),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsx)(u.Provider,{value:{pokemonsCollection:l,setPokemonsCollection:j,getAPIResults:k,fetchPokemon:b,setFetchPokemon:h,isLoading:x,setIsLoading:O},children:t})}},15:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(3),a=function(){return Object(c.jsx)("div",{className:"row w-100 align-items-center justify-content-center",children:Object(c.jsx)("div",{className:"col-12 spinner-border text-warning",role:"status",children:Object(c.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}},27:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(18),o=n.n(r),s=(n(27),n(22)),i=n(16),u=n(1),l=n(14),j=(n(30),a.a.lazy((function(){return n.e(3).then(n.bind(null,38))}))),d=a.a.lazy((function(){return n.e(4).then(n.bind(null,39))})),p=[{path:"/",exact:!0,name:"Welcome",component:d},{path:"/pokedeck",exact:!0,name:"Pokedeck",component:j},{path:"*",exact:!0,name:"Page Not Found",component:d}],b=n(15),h=n(3);var f=function(){return Object(h.jsx)(l.b,{children:Object(h.jsx)(i.a,{children:Object(h.jsx)(c.Suspense,{fallback:Object(h.jsx)(b.a,{}),children:Object(h.jsx)(u.c,{children:p.map((function(e,t){return e.component&&Object(h.jsx)(u.a,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(h.jsx)(e.component,Object(s.a)({},t))}},t)}))})})})})},m=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),m()}},[[36,1,2]]]);
//# sourceMappingURL=main.f269d158.chunk.js.map