(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),s=(n(9),n(1)),l=(n(10),n(11),function(e){var t=e.monster;return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(t.id,"?set=set2")}),r.a.createElement("h2",null,t.name),r.a.createElement("p",null,t.email))}),i=function(e){var t=e.monsters;return r.a.createElement("div",{className:"card-list"},t.map((function(e){return r.a.createElement(l,{key:e.id,monster:e})})))},u=(n(12),n(13),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})});var m=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),l=Object(s.a)(c,2),m=l[0],h=l[1],d=Object(a.useState)([]),f=Object(s.a)(d,2),p=f[0],v=f[1];return Object(a.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){o(e)}))}),[]),Object(a.useEffect)((function(){v(n.filter((function(e){return e.name.toLowerCase().includes(m.toLowerCase())})))}),[n,m]),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters Rolodex"),r.a.createElement(u,{placeholder:"Search Monsters",handleChange:function(e){return t=e.target.value,void h(t);var t}}),r.a.createElement(i,{monsters:p}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.88e05648.chunk.js.map