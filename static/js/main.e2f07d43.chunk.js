(this["webpackJsonpjoke.calender"]=this["webpackJsonpjoke.calender"]||[]).push([[0],[,,,function(e){e.exports=JSON.parse('{"FIREBASE_URL":"https://adventofjokes-default-rtdb.europe-west1.firebasedatabase.app/2022"}')},,function(e,t,n){e.exports={navbar:"Hamburger_navbar__21JeB",navbranding:"Hamburger_navbranding__2JFfS",navmenu:"Hamburger_navmenu__2JUuE",navlink:"Hamburger_navlink__1PrJC",hamburger:"Hamburger_hamburger__36Un3",bar:"Hamburger_bar__1W2Nz",active:"Hamburger_active__2aKt6",navitem:"Hamburger_navitem__2Zqz7"}},function(e,t,n){e.exports={form:"ResponseForm_form__1VFJw",control:"ResponseForm_control__jRjwf",actions:"ResponseForm_actions__1-bhU",lenke:"ResponseForm_lenke__2srQj",question:"ResponseForm_question__1dZcV"}},,,,,,function(e,t,n){e.exports={main:"App_main__uN9ca"}},function(e,t,n){e.exports={card:"Card_card__3K4pi"}},function(e,t,n){e.exports={secretlink:"AddUser_secretlink__3HNu_"}},function(e,t,n){e.exports={admin:"Admin_admin__2rWz7"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(11),s=n.n(r),i=(n(20),n(2)),a=n(12),o=n.n(a),j=n(4),u=n(13),d=n.n(u),l=n(0);var b=function(e){return Object(l.jsx)("div",{className:d.a.card,children:e.children})},h=n(3);var O=function(){var e=Object(c.useState)({}),t=Object(j.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){fetch("".concat(h.FIREBASE_URL,"score.json")).then((function(e){return null===e||void 0===e?void 0:e.json()})).then((function(e){e&&r(e)}))}),[]);var s=[];for(var i in n)s.push([i,n[i]]);return s.sort((function(e,t){return t[1]-e[1]})),Object(l.jsx)("div",{children:Object(l.jsxs)(b,{children:[Object(l.jsx)("h2",{children:"Highscore"}),s!==[]&&Object(l.jsx)("table",{children:Object(l.jsx)("tbody",{children:s.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e[0]}),Object(l.jsx)("td",{children:e[1]})]},e[0])}))})})]})})},f=n(6),v=n.n(f),m=n(7),x=n.p+"static/media/advent1.4314d18d.png",p=n.p+"static/media/2desember.39d5a428.jpeg",g=n.p+"static/media/3desember.84ebc20f.jpeg",S=n.p+"static/media/4desember.a4f126d3.jpeg";var _=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useRef)(),s=Object(c.useRef)(),i=Object(c.useState)(""),a=Object(j.a)(i,2),o=a[0],u=a[1],d=Object(c.useState)(""),O=Object(j.a)(d,2),f=O[0],_=O[1],R=Object(c.useState)(""),k=Object(j.a)(R,2),y=k[0],E=k[1],N=new Date,q=N.getDate().toString(),w=N<=(new Date).setDate(24);function A(e){return"Rebus1"===y?Object(l.jsx)("div",{id:"question",ref:s,children:Object(l.jsx)("img",{alt:"rebus 1",src:x,width:"100%"})}):"Rebus2"===y?Object(l.jsx)("div",{id:"question",ref:s,children:Object(l.jsx)("img",{alt:"rebus 2",src:p,width:"100%"})}):"Rebus3"===y?Object(l.jsx)("div",{id:"question",ref:s,children:Object(l.jsx)("img",{alt:"rebus 3",src:g,width:"100%"})}):"Rebus4"===y?Object(l.jsx)("div",{id:"question",ref:s,children:Object(l.jsx)("img",{alt:"rebus 4",src:S,width:"100%"})}):Object(l.jsx)("div",{className:v.a.question,id:"question",ref:s,children:y})}return Object(c.useEffect)((function(){var e;e=q,fetch("".concat(h.FIREBASE_URL,"openedDoors/").concat(e,"/question.json")).then((function(e){return null===e||void 0===e?void 0:e.json()})).then((function(t){if(t){var n=Object.keys(t);E(t[n[0]].question)}else fetch("".concat(h.FIREBASE_URL,"doorIds.json")).then((function(e){return null===e||void 0===e?void 0:e.json()})).then((function(t){if(t){var n=Object.keys(t),c=n[Math.floor(Math.random()*n.length)];fetch("".concat(h.FIREBASE_URL,"doorsQ/").concat(c,".json")).then((function(e){return null===e||void 0===e?void 0:e.json()})).then((function(t){var n=t[Object.keys(t)[0]].question;E(n),fetch("".concat(h.FIREBASE_URL,"openedDoors/").concat(e,"/question.json"),{method:"POST",body:JSON.stringify({question:n,id:c}),headers:{"Content-Type":"application/json"}})})).then(fetch("".concat(h.FIREBASE_URL,"doorIds/").concat(c,".json"),{method:"DELETE"})).catch((function(e){E(e)}))}else E("Tomt for sp\xf8rsm\xe5l :(")}))})).catch((function(e){return E("Tomt for sp\xf8rsm\xe5l :(")}));var t=JSON.parse(localStorage.getItem("user"));t&&(u(t.pwd),_(t.user))}),[q]),Object(l.jsxs)("div",{children:[w&&Object(l.jsx)(b,{children:Object(l.jsxs)("form",{className:v.a.form,onSubmit:function(c){c.preventDefault();var i={username:t.current.value.toString().trim(),password:n.current.value,answer:r.current.value,question:s.current.value,door:q,submittedAt:new Date};console.log(i),e.onSubmittedDoor(i)},children:[Object(l.jsx)("h2",{children:"Dagens sp\xf8rsm\xe5l"}),Object(l.jsx)(A,{}),Object(l.jsxs)("h3",{children:["Luke ",q]}),Object(l.jsx)("div",{className:v.a.control,children:Object(l.jsx)("textarea",{id:"message",rows:"5",ref:r,placeholder:"Skriv svaret her"})}),Object(l.jsx)("div",{className:v.a.control,children:Object(l.jsx)("input",{type:"text",id:"name",required:!0,ref:t,placeholder:"Brukernavn",value:f,onChange:function(e){return _(e.value)}})}),Object(l.jsx)("div",{className:v.a.control,children:Object(l.jsx)("input",{type:"password",id:"password",required:!0,ref:n,placeholder:"Passord",value:o,onChange:function(e){return u(e.value)}})}),Object(l.jsx)("div",{className:v.a.actions,children:Object(l.jsx)("button",{children:"Send inn"})})]})}),!w&&Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"Advent er over."}),Object(l.jsx)("div",{children:Object(l.jsx)(m.b,{className:v.a.lenke,to:"/tidligere-sp\xf8rsm\xe5l",children:"Du kan se her fram til neste advent"})})]})]})};var R=function(){var e=Object(i.f)();return Object(l.jsx)("div",{children:Object(l.jsx)("section",{children:Object(l.jsx)(_,{onSubmittedDoor:function(t){var n="".concat(t.password).concat(t.username);fetch("".concat(h.FIREBASE_URL,"users/").concat(n,".json")).then((function(e){return null===e||void 0===e?void 0:e.json()})).then((function(n){if(!n)throw new Error("Brukernavn eller passord er feil");!function(t){var n=t.door,c={user:t.username,pwd:t.password};localStorage.setItem("user",JSON.stringify(c)),fetch("".concat(h.FIREBASE_URL,"openedDoors/").concat(n,"/answer.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e("/takk")}))}(t)})).catch((function(e){alert(e.message)}))}})})})};var k=function(){return Object(l.jsx)("div",{children:"Lukesvar er notert! H\xe5per det var riktig \ud83e\udd1e"})},y=n.p+"static/media/1desember.a89d8119.jpeg";function E(e){var t=e.id,n=e.door,r=Object(c.useState)(!1),s=Object(j.a)(r,2),i=s[0],a=s[1],o=Object(c.useState)({}),u=Object(j.a)(o,2),d=u[0],O=u[1];function f(e){return"Rebus1"===d.question?Object(l.jsx)("div",{id:"question",children:Object(l.jsx)("img",{alt:"rebus 1",src:y,width:"100%"})}):"Rebus2"===d.question?Object(l.jsx)("div",{id:"question",children:Object(l.jsx)("img",{alt:"rebus 2",src:p,width:"100%"})}):"Rebus3"===d.question?Object(l.jsx)("div",{id:"question",children:Object(l.jsx)("img",{alt:"rebus 3",src:g,width:"100%"})}):"Rebus4"===d.question?Object(l.jsx)("div",{id:"question",children:Object(l.jsx)("img",{alt:"rebus 4",src:S,width:"100%"})}):Object(l.jsx)("div",{id:"question",children:d.question})}return Object(c.useEffect)((function(){console.log(t),fetch("".concat(h.FIREBASE_URL,"doorsQnA/").concat(t,".json")).then((function(e){return null===e||void 0===e?void 0:e.json()})).then((function(e){if(e){var t=Object.keys(e.qna);O(e.qna[t[0]])}}))}),[t]),Object(l.jsxs)(b,{children:[Object(l.jsxs)("h2",{children:["Luke ",n]}),Object(l.jsx)(f,{}),i&&Object(l.jsx)("div",{children:d.answer}),Object(l.jsx)("button",{onClick:function(){return a(!i)},children:i?"Skjul svar":"Vis svar"})]},t)}var N=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){fetch("".concat(h.FIREBASE_URL,"openedDoors.json")).then((function(e){return null===e||void 0===e?void 0:e.json()})).then((function(e){if(e){console.log(e);var t=e.filter((function(e){return e}));t.pop();var n=Object.keys(t).map((function(e){return{question:t[e].question,door:parseInt(e)+1}})).map((function(e){var t=Object.keys(e.question);return{id:e.question[t[0]].id,door:e.door}}));r(n.reverse())}}))}),[]),n.map((function(e){return Object(l.jsx)(E,{id:e.id,door:e.door},e.id)}))};var q=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)();return Object(l.jsx)(b,{children:Object(l.jsxs)("form",{className:v.a.form,onSubmit:function(c){c.preventDefault();var r,s={username:t.current.value,password:n.current.value,submittedAt:new Date};try{r=s,fetch("".concat(h.FIREBASE_URL,"users/username.json")).then((function(e){return null===e||void 0===e?void 0:e.json()})).then((function(t){return t&&Object.keys(t).forEach((function(e){var n;if((null===(n=t[e])||void 0===n?void 0:n.username)===r.username)throw new Error("Brukernavnet er opptatt")})),e.onAddedUser(r)})).catch((function(e){return document.getElementById("error").innerHTML=e.message}))}catch(i){console.log(i)}},children:[Object(l.jsx)("h3",{children:"Velg brukernavn og passord"}),Object(l.jsx)("div",{className:v.a.control,children:Object(l.jsx)("input",{type:"text",id:"name",required:!0,ref:t,placeholder:"Brukernavn"})}),Object(l.jsx)("div",{className:v.a.control,children:Object(l.jsx)("input",{type:"password",id:"password",required:!0,ref:n,placeholder:"Passord"})}),Object(l.jsx)("div",{id:"error",children:" "}),Object(l.jsx)("div",{className:v.a.actions,children:Object(l.jsx)("button",{children:"Send inn"})})]})})},w=n(14),A=n.n(w);var F=function(){var e=Object(i.f)();return Object(l.jsxs)("div",{children:[Object(l.jsx)("section",{children:Object(l.jsx)(q,{onAddedUser:function(t){var n;!function(e){var t="".concat(e.password).concat(e.username);fetch("".concat(h.FIREBASE_URL,"users/").concat(t,".json"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}(t),n={username:t.username,submittedAt:t.submittedAt},fetch("".concat(h.FIREBASE_URL,"users/username.json"),{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(){return e("/takk")}))}})}),Object(l.jsx)(m.b,{to:"/admin",className:A.a.secretlink,children:"."})]})},I=n(15),B=n.n(I);var L=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useState)(!1),s=Object(j.a)(r,2),i=s[0],a=s[1],o=Object(c.useState)(!1),u=Object(j.a)(o,2),d=u[0],b=u[1],O=Object(c.useState)(""),f=Object(j.a)(O,2),v=f[0],m=f[1],x=Object(c.useState)({}),p=Object(j.a)(x,2),g=p[0],S=p[1],_=Object(c.useState)({}),R=Object(j.a)(_,2),k=R[0],y=R[1],E=Object(c.useState)({}),N=Object(j.a)(E,2),q=N[0],w=N[1];function A(n){n.preventDefault();var c=e.current.value,r=t.current.value;a("sjef"===c&&"sjef1"===r)}function F(e,t){var n=q[e];"+"===t?n++:n--,q[e]=n,w(q),b(!d)}function I(e){e.preventDefault();var t=n.current.value;m(t)}function L(e){e.preventDefault(),fetch("".concat(h.FIREBASE_URL,"score.json"),{method:"PATCH",body:JSON.stringify(q),headers:{"Content-Type":"application/json"}})}function U(){return Object(l.jsxs)("form",{onSubmit:A,children:[Object(l.jsx)("input",{type:"text",ref:e}),Object(l.jsx)("input",{type:"password",ref:t}),Object(l.jsx)("button",{children:"pr\xf8v"})]})}function C(){var e=Object.keys(q);return Object(l.jsxs)("div",{className:B.a.admin,children:[Object(l.jsxs)("form",{onSubmit:I,children:[Object(l.jsx)("input",{type:"text",ref:n}),Object(l.jsx)("div",{children:"Sp\xf8rsm\xe5l"}),Object(l.jsx)("pre",{id:"questionP",children:JSON.stringify(g,null,2)}),Object(l.jsx)("pre",{id:"answers",children:JSON.stringify(k,null,2)}),Object(l.jsx)("button",{children:"butt"})]}),Object(l.jsxs)("form",{onSubmit:L,children:[Object(l.jsx)("table",{children:Object(l.jsx)("tbody",{children:e.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsxs)("td",{children:[e," ",q[e]," "]}),Object(l.jsxs)("td",{children:[Object(l.jsx)("button",{onClick:function(){return F(e,"+")},children:"+1"}),Object(l.jsx)("button",{onClick:function(){return F(e,"-")},children:"-1"})]})]},e)}))})}),Object(l.jsx)("button",{children:"Oppdater"})]})]})}return Object(c.useEffect)((function(){fetch("".concat(h.FIREBASE_URL,"score.json")).then((function(e){return null===e||void 0===e?void 0:e.json()})).then((function(e){w(e)}))}),[]),Object(c.useEffect)((function(){""!==v&&fetch("".concat(h.FIREBASE_URL,"openedDoors/").concat(v,".json")).then((function(e){return null===e||void 0===e?void 0:e.json()})).then((function(e){y(e.answer);var t=Object.keys(e.question),n=e.question[t[0]].id;fetch("".concat(h.FIREBASE_URL,"doorsQnA/").concat(n,".json")).then((function(e){return null===e||void 0===e?void 0:e.json()})).then((function(e){if(e){var t=Object.keys(e.qna);S(e.qna[t[0]])}}))}))}),[v]),Object(l.jsxs)("div",{children:[!i&&Object(l.jsx)(U,{}),i&&Object(l.jsx)(C,{})]})};var U=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)();return Object(l.jsx)(b,{children:Object(l.jsxs)("form",{className:v.a.form,onSubmit:function(c){c.preventDefault();var r={id:Math.floor(1e4*Math.random()),question:t.current.value,answer:n.current.value,submittedAt:new Date};try{e.onAddedQnA(r)}catch(s){console.log(s)}},children:[Object(l.jsx)("h3",{children:"Legg inn en ny luke"}),Object(l.jsx)("div",{className:v.a.control,children:Object(l.jsx)("textarea",{type:"text",id:"question",required:!0,rows:"5",ref:t,placeholder:"Sp\xf8rsm\xe5l"})}),Object(l.jsx)("div",{className:v.a.control,children:Object(l.jsx)("textarea",{type:"text",id:"answer",rows:"5",required:!0,ref:n,placeholder:"Svar"})}),Object(l.jsx)("div",{id:"error",children:" "}),Object(l.jsx)("div",{className:v.a.actions,children:Object(l.jsx)("button",{children:"Send inn"})})]})})};var C=function(){var e=Object(i.f)();return Object(l.jsx)("div",{children:Object(l.jsx)("section",{children:Object(l.jsx)(U,{onAddedQnA:function(t){fetch("".concat(h.FIREBASE_URL,"doorsQnA/").concat(t.id,"/qna.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(fetch("".concat(h.FIREBASE_URL,"doorsQ/").concat(t.id,".json"),{method:"POST",body:JSON.stringify({question:t.question}),headers:{"Content-Type":"application/json"}})).then(fetch("".concat(h.FIREBASE_URL,"doorIds/").concat(t.id,".json"),{method:"POST",body:JSON.stringify(t.id),headers:{"Content-Type":"application/json"}})).then(e("/takk"))}})})})},D=n(5),T=n.n(D);var J=function(){var e=Object(c.useState)(T.a.hamburger),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(T.a.navmenu),i=Object(j.a)(s,2),a=i[0],o=i[1],u=Object(c.useState)(!1),d=Object(j.a)(u,2),b=d[0],h=d[1];function O(){b?(r(T.a.hamburger),o(T.a.navmenu),h(!1)):(r(T.a.hamburger+" "+T.a.active),o(T.a.navmenu+" "+T.a.active),h(!0))}return Object(l.jsx)("header",{children:Object(l.jsxs)("nav",{className:T.a.navbar,children:[Object(l.jsx)(m.b,{className:T.a.navbranding,to:"/",children:"Vitsekalender"}),Object(l.jsxs)("ul",{className:a,children:[Object(l.jsx)("li",{className:T.a.navitem,children:Object(l.jsx)(m.b,{to:"/highscore",onClick:function(){return O()},children:"Highscore"})}),Object(l.jsx)("li",{className:T.a.navitem,children:Object(l.jsx)(m.b,{to:"/",onClick:function(){return O()},children:"Dagens luke"})}),Object(l.jsx)("li",{className:T.a.navitem,children:Object(l.jsx)(m.b,{to:"/tidligere-luker",onClick:function(){return O()},children:"Tidligere luker"})}),Object(l.jsx)("li",{className:T.a.navitem,children:Object(l.jsx)(m.b,{to:"/legg-til-luke",onClick:function(){return O()},children:"Nytt sp\xf8rsm\xe5l"})}),Object(l.jsx)("li",{className:T.a.navitem,children:Object(l.jsx)(m.b,{to:"/ny-bruker",onClick:function(){return O()},children:"Ny bruker"})})]}),Object(l.jsxs)("div",{className:n,onClick:function(){return O()},children:[Object(l.jsx)("span",{className:T.a.bar}),Object(l.jsx)("span",{className:T.a.bar}),Object(l.jsx)("span",{className:T.a.bar})]})]})})};var H=function(){return Object(l.jsxs)("div",{className:o.a.main,id:"main",children:[Object(l.jsx)(J,{}),Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/",exact:!0,element:Object(l.jsx)(R,{})}),Object(l.jsx)(i.a,{path:"/highscore",exact:!0,element:Object(l.jsx)(O,{})}),Object(l.jsx)(i.a,{path:"/takk",element:Object(l.jsx)(k,{})}),Object(l.jsx)(i.a,{path:"/tidligere-luker",element:Object(l.jsx)(N,{})}),Object(l.jsx)(i.a,{path:"/ny-bruker",element:Object(l.jsx)(F,{})}),Object(l.jsx)(i.a,{path:"/legg-til-luke",element:Object(l.jsx)(C,{})}),Object(l.jsx)(i.a,{path:"/admin",element:Object(l.jsx)(L,{})})]})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};s.a.render(Object(l.jsx)(m.a,{children:Object(l.jsx)(H,{})}),document.getElementById("root")),P()}],[[22,1,2]]]);
//# sourceMappingURL=main.e2f07d43.chunk.js.map