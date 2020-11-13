(this["webpackJsonprest-countries-api"]=this["webpackJsonprest-countries-api"]||[]).push([[0],{36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(0),a=n(16),r=n.n(a),i=n(9),l=n(12),o=n(4),d=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return!e},j=Object(l.b)({darkMode:d}),m=n(3),h=n(10);var x=function(){var e=Object(o.c)((function(e){return e.darkMode})),t=Object(o.b)();return Object(s.jsxs)("header",{className:"flex justify-between py-6 sm:px-10 px-4 shadow items-center  ".concat(e?"bg-gray-800 text-white":"bg-white text-gray-900"),children:[Object(s.jsx)("h1",{className:"font-bold text-lg",children:"Where in the world?"}),Object(s.jsxs)("div",{className:"flex items-center cursor-pointer",onClick:function(){return t({type:""})},children:[Object(s.jsx)("svg",{className:"w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(s.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})}),Object(s.jsx)("p",{className:"ml-2 font-light",children:"Dark Mode"})]})]})},b=n(14),u=n.n(b),p=n(21),g=n(15);var f=function(e){var t=e.imgUri,n=e.name,c=e.population,a=e.region,r=e.capital,i=Object(o.c)((function(e){return e.darkMode}));return Object(s.jsxs)("div",{className:"shadow rounded-md overflow-hidden ".concat(i?"bg-gray-800 text-white":"bg-white text-gray-900"),children:[Object(s.jsx)("div",{className:"h-56",children:Object(s.jsx)("img",{className:"h-full w-full object-cover",src:t,alt:"Flag"})}),Object(s.jsxs)("div",{className:"px-6 py-6",children:[Object(s.jsx)("h1",{className:"font-bold text-lg",children:n}),Object(s.jsxs)("p",{className:"mt-4 font-light text-sm",children:[Object(s.jsx)("span",{className:"font-semibold ",children:"Population: "}),c]}),Object(s.jsxs)("p",{className:" font-light  text-sm",children:[Object(s.jsx)("span",{className:"font-semibold ",children:"Region: "}),a]}),Object(s.jsxs)("p",{className:" font-light  text-sm mb-6",children:[Object(s.jsx)("span",{className:"font-semibold ",children:"Capital: "}),r]})]})]})},O=(n(36),{hidden:{opacity:0},visible:{opacity:1,transition:{duration:1}},exit:{opacity:0,transition:{duration:1}}}),v={hidden:{x:"20vw"},visible:{x:0,transitions:{duration:2}},exit:{x:"-100vw",transition:{duration:1}}};var w=function(){var e=Object(o.c)((function(e){return e.darkMode})),t=Object(c.useState)([]),n=Object(g.a)(t,2),a=n[0],r=n[1],l=Object(c.useState)(""),d=Object(g.a)(l,2),j=d[0],m=d[1],x=Object(c.useState)(!0),b=Object(g.a)(x,2),w=b[0],N=b[1],y=Object(c.useState)(!1),k=Object(g.a)(y,2),C=k[0],M=k[1],B=function(){var e=Object(p.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,fetch("https://restcountries.eu/rest/v2/all");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r(n),N(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(p.a)(u.a.mark((function e(t){var n,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,fetch("https://restcountries.eu/rest/v2/region/".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:s=e.sent,r(s),M(!1),N(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){B()}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(h.b.div,{className:"sm:flex justify-between sm:mx-8 mx-4 sm:mt-8 mt-4 text-sm",variants:O,initial:"hidden",animate:"visible",exit:"exit",children:[Object(s.jsxs)("div",{className:"h-12 ".concat(e?"bg-gray-800":"bg-white"),children:[Object(s.jsx)("svg",{className:"h-6 w-6 absolute mt-3 ml-6 ".concat(e?"text-white":"text-gray-800"),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(s.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),Object(s.jsx)("input",{title:"Search",onChange:function(e){return m(e.target.value)},type:"text",placeholder:"Search for a country...",className:"shadow px-16 py-3 w-full rounded placeholder-current ".concat(e?"bg-gray-800 text-white":"bg-white text-gray-900")})]}),Object(s.jsxs)("div",{className:"relative flex items-center px-4 shadow rounded h-12 my-8 sm:mb-0 sm:mt-0 w-48 ".concat(e?"bg-gray-800 text-white":"bg-white text-gray-900"),children:[Object(s.jsx)("p",{className:"font-light",children:"Filter by Region"}),Object(s.jsx)("svg",{onClick:function(){return M((function(e){return!e}))},className:"h-4 ml-8 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(s.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})}),C&&Object(s.jsxs)("div",{className:"absolute left-0 top-0 mt-16 px-6 py-2 w-48 shadow-lg rounded text-sm ".concat(e?"bg-gray-800 text-white":"bg-white text-gray-900 border"),children:[Object(s.jsx)("p",{onClick:function(){return S("africa")},className:"my-2 cursor-pointer",children:"Africa"}),Object(s.jsx)("p",{onClick:function(){return S("america")},className:"my-2 cursor-pointer",children:"America"}),Object(s.jsx)("p",{onClick:function(){return S("asia")},className:"my-2 cursor-pointer",children:"Asia"}),Object(s.jsx)("p",{onClick:function(){return S("europe")},className:"my-2 cursor-pointer",children:"Europe"}),Object(s.jsx)("p",{onClick:function(){return S("oceania")},className:"my-2 cursor-pointer",children:"Oceania"})]})]})]}),w&&Object(s.jsx)("div",{className:"flex justify-center items-center my-40",children:Object(s.jsx)("div",{class:"lds-dual-ring"})}),!w&&Object(s.jsx)(h.b.div,{variants:v,initial:"hidden",animate:"visible",exit:"exit",className:"sm:mt-8 mt-4 sm:mx-8 mx-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16",children:a.map((function(e){return(0===j.length||e.name.includes(j))&&Object(s.jsx)(i.b,{to:{pathname:"/Frontend-Challenge-14/details",state:{country:e}},children:Object(s.jsx)(f,{imgUri:e.flag,capital:e.capital,name:e.name,population:e.population,region:e.region})},e.numericCode)}))})]})},N={hidden:{opacity:0},visible:{opacity:1,transition:{duration:1}},exit:{x:"100vw",transition:{duration:1}}};var y=function(e){var t=Object(m.f)(),n=e.location.state.country,c=Object(o.c)((function(e){return e.darkMode})),a=function(e){var t=[];return e.forEach((function(e){t.push(e.name)})),t.join(", ")};return Object(s.jsxs)(h.b.div,{className:"sm:px-10 px-4",variants:N,initial:"hidden",animate:"visible",exit:"exit",children:[Object(s.jsxs)("div",{className:"flex items-center justify-center py-1 my-10 font-light w-32 rounded shadow  cursor-pointer ".concat(c?"bg-gray-800 text-white":"bg-white border text-gray-900"),onClick:function(){return t.replace("/Frontend-Challenge-14")},children:[Object(s.jsx)("svg",{className:"h-8",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(s.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M7 16l-4-4m0 0l4-4m-4 4h18"})}),Object(s.jsx)("p",{className:"ml-4",children:"Back"})]}),Object(s.jsxs)("div",{className:"grid sm:grid-cols-2 gap-x-8 lg:gap-x-32 gap-y-8 text-gray-800",children:[Object(s.jsx)("div",{className:"h-full w-full",children:Object(s.jsx)("img",{className:"h-full w-full object-cover",src:n.flag,alt:"flag"})}),Object(s.jsxs)("div",{className:"self-center ".concat(c?"text-white":"text-gray-900"),children:[Object(s.jsx)("h1",{className:"font-bold text-3xl",children:n.name}),Object(s.jsxs)("div",{className:"grid md:grid-cols-2 gap-8 mt-8",children:[Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{className:"font-light my-1",children:[Object(s.jsx)("span",{className:"font-semibold",children:"Native Name: "}),n.nativeName]}),Object(s.jsxs)("p",{className:"font-light my-1",children:[Object(s.jsx)("span",{className:"font-semibold",children:"Population: "}),n.population]}),Object(s.jsxs)("p",{className:"font-light my-1",children:[Object(s.jsx)("span",{className:"font-semibold",children:"Region: "}),n.region]}),Object(s.jsxs)("p",{className:"font-light my-1",children:[Object(s.jsx)("span",{className:"font-semibold",children:"Sub Region: "}),n.subregion]}),Object(s.jsxs)("p",{className:"font-light my-1",children:[Object(s.jsx)("span",{className:"font-semibold",children:"Capital: "}),n.capital]})]}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("p",{className:"font-light my-1",children:[Object(s.jsx)("span",{className:"font-semibold",children:"Top Level Domain: "}),n.topLevelDomain[0]]}),Object(s.jsxs)("p",{className:"font-light my-1",children:[Object(s.jsx)("span",{className:"font-semibold",children:"Currencies: "}),a(n.currencies)]}),Object(s.jsxs)("p",{className:"font-light my-1",children:[Object(s.jsx)("span",{className:"font-semibold",children:"Languages: "}),a(n.languages)]})]})]}),Object(s.jsxs)("div",{className:"my-8",children:[Object(s.jsx)("p",{className:"inline font-semibold",children:"Border Countries:"}),Object(s.jsx)("div",{className:"flex gap-2 flex-wrap mt-2",children:n.borders.map((function(e){return Object(s.jsx)("span",{className:"px-6 py-1 rounded shadow font-light text-sm ".concat(c?"bg-gray-800 text-white":"bg-white border text-gray-900"),children:e})}))})]})]})]})]})};var k=function(){var e=Object(o.c)((function(e){return e.darkMode}));return Object(s.jsx)("div",{className:"my-16 ".concat(e?"text-white":"bg-white text-gray-900"),children:Object(s.jsx)("p",{className:"text-xl text-center",children:"Sorry, this page does not exist :("})})};var C=function(){var e=Object(m.g)(),t=Object(o.c)((function(e){return e.darkMode}));return Object(s.jsxs)("div",{className:"min-h-screen ".concat(t?"bg-gray-900":"bg-white"),children:[Object(s.jsx)(x,{}),Object(s.jsx)(h.a,{exitBeforeEnter:!0,children:Object(s.jsxs)(m.c,{location:e,children:[Object(s.jsx)(m.a,{path:"/Frontend-Challenge-14/",exact:!0,component:w}),Object(s.jsx)(m.a,{path:"/Frontend-Challenge-14/details",component:y}),Object(s.jsx)(m.a,{component:k})]},e.key)})]})},M=(n(38),Object(l.c)(j));r.a.render(Object(s.jsx)(o.a,{store:M,children:Object(s.jsx)(i.a,{children:Object(s.jsx)(C,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.473c834a.chunk.js.map