(this["webpackJsonprest-countries-api"]=this["webpackJsonprest-countries-api"]||[]).push([[0],{36:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s(0),r=s(14),a=s.n(r),i=s(10),l=s(5),o=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return!e},j=Object(i.b)({darkMode:o}),d=s(11),m=s(3);var h=function(){var e=Object(l.c)((function(e){return e.darkMode})),t=Object(l.b)();return Object(c.jsxs)("header",{className:"flex justify-between py-6 sm:px-10 px-4 shadow items-center  ".concat(e?"bg-gray-800 text-white":"bg-white text-gray-900"),children:[Object(c.jsx)("h1",{className:"font-bold text-lg",children:"Where in the world?"}),Object(c.jsxs)("div",{className:"flex items-center cursor-pointer",onClick:function(){return t({type:""})},children:[Object(c.jsx)("svg",{className:"w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(c.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})}),Object(c.jsx)("p",{className:"ml-2 font-light",children:"Dark Mode"})]})]})},b=s(13),u=s.n(b),x=s(20),p=s(16);var g=function(e){var t=e.imgUri,s=e.name,n=e.population,r=e.region,a=e.capital,i=Object(l.c)((function(e){return e.darkMode}));return Object(c.jsxs)("div",{className:"shadow rounded-md overflow-hidden ".concat(i?"bg-gray-800 text-white":"bg-white text-gray-900"),children:[Object(c.jsx)("div",{className:"h-56",children:Object(c.jsx)("img",{className:"h-full w-full object-cover",src:t,alt:"Flag"})}),Object(c.jsxs)("div",{className:"px-6 py-6",children:[Object(c.jsx)("h1",{className:"font-bold text-lg",children:s}),Object(c.jsxs)("p",{className:"mt-4 font-light text-sm",children:[Object(c.jsx)("span",{className:"font-semibold ",children:"Population: "}),n]}),Object(c.jsxs)("p",{className:" font-light  text-sm",children:[Object(c.jsx)("span",{className:"font-semibold ",children:"Region: "}),r]}),Object(c.jsxs)("p",{className:" font-light  text-sm mb-6",children:[Object(c.jsx)("span",{className:"font-semibold ",children:"Capital: "}),a]})]})]})};var f=function(){var e=Object(l.c)((function(e){return e.darkMode})),t=Object(n.useState)([]),s=Object(p.a)(t,2),r=s[0],a=s[1],i=Object(n.useState)(""),o=Object(p.a)(i,2),j=o[0],m=o[1],h=Object(n.useState)(!1),b=Object(p.a)(h,2),f=b[0],O=b[1],w=function(){var e=Object(x.a)(u.a.mark((function e(){var t,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/all");case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,a(s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(x.a)(u.a.mark((function e(t){var s,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/region/".concat(t));case 2:return s=e.sent,e.next=5,s.json();case 5:c=e.sent,a(c),O(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){w()}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"sm:flex justify-between sm:mx-8 mx-4 sm:mt-8 mt-4 text-sm",children:[Object(c.jsxs)("div",{className:"h-12 ".concat(e?"bg-gray-800":"bg-white"),children:[Object(c.jsx)("svg",{className:"h-6 w-6 absolute mt-3 ml-6 ".concat(e?"text-white":"text-gray-800"),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(c.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),Object(c.jsx)("input",{onChange:function(e){return m(e.target.value)},type:"text",placeholder:"Search for a country...",className:"shadow px-16 py-3 w-full rounded placeholder-current ".concat(e?"bg-gray-800 text-white":"bg-white text-gray-900")})]}),Object(c.jsxs)("div",{className:"relative flex items-center px-4 shadow rounded h-12 my-8 sm:mb-0 sm:mt-0 w-48 ".concat(e?"bg-gray-800 text-white":"bg-white text-gray-900"),children:[Object(c.jsx)("p",{className:"font-light",children:"Filter by Region"}),Object(c.jsx)("svg",{onClick:function(){return O((function(e){return!e}))},className:"h-4 ml-8 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(c.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})}),f&&Object(c.jsxs)("div",{className:"absolute left-0 top-0 mt-16 px-6 py-2 w-48 shadow-lg rounded text-sm ".concat(e?"bg-gray-800 text-white":"bg-white text-gray-900 border"),children:[Object(c.jsx)("p",{onClick:function(){return N("africa")},className:"my-2 cursor-pointer",children:"Africa"}),Object(c.jsx)("p",{onClick:function(){return N("america")},className:"my-2 cursor-pointer",children:"America"}),Object(c.jsx)("p",{onClick:function(){return N("asia")},className:"my-2 cursor-pointer",children:"Asia"}),Object(c.jsx)("p",{onClick:function(){return N("europe")},className:"my-2 cursor-pointer",children:"Europe"}),Object(c.jsx)("p",{onClick:function(){return N("oceania")},className:"my-2 cursor-pointer",children:"Oceania"})]})]})]}),Object(c.jsx)("div",{className:"sm:mt-8 mt-4 sm:mx-8 mx-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16",children:r.map((function(e){return(0===j.length||e.name.includes(j))&&Object(c.jsx)(d.b,{to:{pathname:"/details",state:{country:e}},children:Object(c.jsx)(g,{imgUri:e.flag,capital:e.capital,name:e.name,population:e.population,region:e.region})},e.numericCode)}))})]})};var O=function(e){var t=Object(m.f)(),s=e.location.state.country,n=Object(l.c)((function(e){return e.darkMode})),r=function(e){var t=[];return e.forEach((function(e){t.push(e.name)})),t.join(", ")};return Object(c.jsxs)("div",{className:"sm:px-10 px-4",children:[Object(c.jsxs)("div",{className:"flex items-center justify-center py-1 my-10 font-light w-32 rounded shadow  cursor-pointer ".concat(n?"bg-gray-800 text-white":"bg-white border text-gray-900"),onClick:function(){return t.replace("/")},children:[Object(c.jsx)("svg",{className:"h-8",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(c.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1",d:"M7 16l-4-4m0 0l4-4m-4 4h18"})}),Object(c.jsx)("p",{className:"ml-4",children:"Back"})]}),Object(c.jsxs)("div",{className:"grid sm:grid-cols-2 gap-x-8 lg:gap-x-32 gap-y-8 text-gray-800",children:[Object(c.jsx)("div",{className:"h-full w-full",children:Object(c.jsx)("img",{className:"h-full w-full object-cover",src:s.flag,alt:"flag"})}),Object(c.jsxs)("div",{className:"self-center ".concat(n?"text-white":"text-gray-900"),children:[Object(c.jsx)("h1",{className:"font-bold text-3xl",children:s.name}),Object(c.jsxs)("div",{className:"grid md:grid-cols-2 gap-8 mt-8",children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{className:"font-light my-1",children:[Object(c.jsx)("span",{className:"font-semibold",children:"Native Name: "}),s.nativeName]}),Object(c.jsxs)("p",{className:"font-light my-1",children:[Object(c.jsx)("span",{className:"font-semibold",children:"Population: "}),s.population]}),Object(c.jsxs)("p",{className:"font-light my-1",children:[Object(c.jsx)("span",{className:"font-semibold",children:"Region: "}),s.region]}),Object(c.jsxs)("p",{className:"font-light my-1",children:[Object(c.jsx)("span",{className:"font-semibold",children:"Sub Region: "}),s.subregion]}),Object(c.jsxs)("p",{className:"font-light my-1",children:[Object(c.jsx)("span",{className:"font-semibold",children:"Capital: "}),s.capital]})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{className:"font-light my-1",children:[Object(c.jsx)("span",{className:"font-semibold",children:"Top Level Domain: "}),s.topLevelDomain[0]]}),Object(c.jsxs)("p",{className:"font-light my-1",children:[Object(c.jsx)("span",{className:"font-semibold",children:"Currencies: "}),r(s.currencies)]}),Object(c.jsxs)("p",{className:"font-light my-1",children:[Object(c.jsx)("span",{className:"font-semibold",children:"Languages: "}),r(s.languages)]})]})]}),Object(c.jsxs)("div",{className:"my-8",children:[Object(c.jsx)("p",{className:"inline font-semibold",children:"Border Countries:"}),Object(c.jsx)("div",{className:"flex gap-2 flex-wrap mt-2",children:s.borders.map((function(e){return Object(c.jsx)("span",{className:"px-6 py-1 rounded shadow font-light text-sm ".concat(n?"bg-gray-800 text-white":"bg-white border text-gray-900"),children:e})}))})]})]})]})]})};var w=function(){var e=Object(l.c)((function(e){return e.darkMode}));return Object(c.jsx)(d.a,{children:Object(c.jsxs)("div",{className:"min-h-screen ".concat(e?"bg-gray-900":"bg-white"),children:[Object(c.jsx)(h,{}),Object(c.jsxs)(m.c,{children:[Object(c.jsx)(m.a,{path:"/",exact:!0,component:f}),Object(c.jsx)(m.a,{path:"/details",component:O})]})]})})},N=(s(36),Object(i.c)(j));a.a.render(Object(c.jsx)(l.a,{store:N,children:Object(c.jsx)(w,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.ef236383.chunk.js.map