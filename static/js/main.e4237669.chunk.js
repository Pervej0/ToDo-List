(this["webpackJsonppractice-22"]=this["webpackJsonppractice-22"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(6),s=n.n(a),r=(n(23),n(24),n(17)),l=n(13),o=n(4),j=(n(25),n(16)),u=n.n(j),d=n(15),b=n.n(d),m=n(8),O=n.n(m),x=n(1),f=function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"itemBox p-4 ",children:Object(x.jsx)("ul",{className:"m-0 p-0",children:e.valueItem.map((function(t){return Object(x.jsxs)("li",{id:t.id,className:"d-flex justify-content-between align-items-center bg-warning p-2 my-3",children:[Object(x.jsx)("div",{children:Object(x.jsx)("span",{children:t.name})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("span",{type:"button",onClick:function(){!function(t){var n=document.getElementById(t);e.editInput(n.textContent),e.editLogic(!0),e.editVal(t)}(t.id)},children:Object(x.jsx)(O.a,{})}),"\xa0",Object(x.jsx)("span",{type:"button",onClick:function(){!function(e){var t=document.getElementById(e);t.style.backgroundColor="#999",t.style.opacity=".2"}(t.id)},children:Object(x.jsx)(b.a,{})})]})]},t.id)}))})})})},g=!1,h=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(function(){var e=localStorage.getItem("Name");return console.log("This "+e),e?JSON.parse(localStorage.getItem("Name")):[]}()),s=Object(o.a)(a,2),j=s[0],d=s[1],b=Object(c.useState)(!1),m=Object(o.a)(b,2),h=m[0],p=m[1],y=Object(c.useState)(null),v=Object(o.a)(y,2),N=v[0],I=v[1],S={id:(new Date).getTime().toString(),name:n},k=function(){n?h&&n?(d(j.map((function(e){return e.id===N?Object(l.a)(Object(l.a)({},e),{},{name:n}):e}))),i(""),g=!0,p(!1)):d((function(e){return i(""),g=!0,[].concat(Object(r.a)(e),[S])})):alert("Please input value on field")},C=function(){d((function(){return[]})),g=!1};return Object(c.useEffect)((function(){localStorage.setItem("Element","reset");localStorage.setItem("Name",JSON.stringify(j))}),[j]),Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"container-fluid text-center",children:[Object(x.jsx)("h1",{className:"text-center my-3 text-light",children:"ToDo-Item"}),Object(x.jsxs)("div",{className:"border toDoField",children:[Object(x.jsxs)("div",{className:"mainBox p-3 d-flex align-content-center justify-content-center",children:[Object(x.jsx)("input",{type:"text",name:"search",placeholder:"Enter here...",value:n,onChange:function(e){i(e.target.value)}}),h?Object(x.jsx)("button",{type:"button",className:"d-flex align-content-center justify-content-center",onClick:k,children:Object(x.jsx)(O.a,{})}):Object(x.jsx)("button",{type:"button",className:"d-flex align-content-center justify-content-center",onClick:k,children:Object(x.jsx)(u.a,{})})]}),Object(x.jsx)(f,{valueItem:j,id:S.id,editInput:i,editLogic:p,editVal:I}),g?Object(x.jsx)("button",{className:"btn btn-danger px-4 my-2",onClick:C,children:"Reset"}):null]})]})})};var p=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(h,{})})};s.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(p,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.e4237669.chunk.js.map