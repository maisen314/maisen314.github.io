(this["webpackJsonpjoke.calender"]=this["webpackJsonpjoke.calender"]||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('{"FIREBASE_URL":"https://adventofjokes-default-rtdb.europe-west1.firebasedatabase.app/2023/"}')},function(e,t,n){e.exports={navbar:"Hamburger_navbar__21JeB",navbranding:"Hamburger_navbranding__2JFfS",navmenu:"Hamburger_navmenu__2JUuE",navlink:"Hamburger_navlink__1PrJC",hamburger:"Hamburger_hamburger__36Un3",bar:"Hamburger_bar__1W2Nz",active:"Hamburger_active__2aKt6",navitem:"Hamburger_navitem__2Zqz7"}},function(e,t,n){e.exports={form:"ResponseForm_form__1VFJw",control:"ResponseForm_control__jRjwf",actions:"ResponseForm_actions__1-bhU",lenke:"ResponseForm_lenke__2srQj",question:"ResponseForm_question__1dZcV"}},,,,,,function(e,t,n){e.exports={main:"App_main__uN9ca"}},function(e,t,n){e.exports={card:"Card_card__3K4pi"}},function(e,t,n){e.exports={countDown:"CountDown_countDown__bCVze"}},function(e,t,n){e.exports={ThankYouPage:"ThankYouPage_ThankYouPage__3PRoL"}},function(e,t,n){e.exports={secretlink:"AddUser_secretlink__3HNu_"}},function(e,t,n){e.exports={admin:"Admin_admin__2rWz7",user:"Admin_user__1sEfw"}},,,,,,function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(11),s=n.n(r),a=n(2),o=n(12),i=n.n(o),u=n(3),j=n(13),d=n.n(j),l=n(0);var b=function(e){return Object(l.jsx)("div",{className:d.a.card,children:e.children})},h=n(4);var O=function(){var e=Object(c.useState)({}),t=Object(u.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){fetch("".concat(h.FIREBASE_URL,"score.json")).then((function(e){return null===e||void 0===e?void 0:e.json()})).then((function(e){e&&r(e)}))}),[]);var s=[];for(var a in n)s.push([a,n[a]]);return s.sort((function(e,t){return t[1]-e[1]})),Object(l.jsx)("div",{children:Object(l.jsxs)(b,{children:[Object(l.jsx)("h2",{children:"Highscore"}),s!==[]&&Object(l.jsx)("table",{children:Object(l.jsx)("tbody",{children:s.map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e[0]}),Object(l.jsx)("td",{children:e[1]})]},e[0])}))})})]})})},f=n(6),m=n.n(f),v=n.p+"static/media/advent1.4314d18d.png",x=n.p+"static/media/advent2.53ffb9fb.png",p=n.p+"static/media/3desember.84ebc20f.jpeg",g=n.p+"static/media/4desember.a4f126d3.jpeg",S=n(14),_=n.n(S);function R(e){return(e<10?"0":"")+e}function E(){var e=new Date(2023,11,1,0,0,0).getTime()-(new Date).getTime(),t=Math.floor(e/36e5%24),n=Math.floor(e/6e4%60),c=Math.floor(e/1e3%60);return e>0?{days:Math.floor(e/864e5),hours:R(t),minutes:R(n),seconds:R(c)}:{days:0,hours:0,minutes:0,seconds:0}}function w(){var e=Object(c.useState)(E()),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){r(E())}),1e3);return function(){return clearTimeout(e)}})),Object(l.jsxs)("div",{className:_.a.countDown,children:[n.days," dager ",n.hours," timer ",n.minutes," minutter og ",n.seconds," sekunder"]})}var k=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useRef)(),s=Object(c.useRef)(),a=Object(c.useState)(""),o=Object(u.a)(a,2),i=o[0],j=o[1],d=Object(c.useState)(""),O=Object(u.a)(d,2),f=O[0],S=O[1],_=Object(c.useState)(""),R=Object(u.a)(_,2),E=R[0],k=R[1],y=new Date,N="4",A=y<=(new Date).setDate(24);function B(e){return"Rebus1"===E?Object(l.jsx)("div",{id:"question",ref:s,children:Object(l.jsx)("img",{alt:"rebus 1",src:v,width:"100%"})}):"Rebus2"===E?Object(l.jsx)("div",{id:"question",ref:s,children:Object(l.jsx)("img",{alt:"rebus 2",src:x,width:"100%"})}):"Rebus3"===E?Object(l.jsx)("div",{id:"question",ref:s,children:Object(l.jsx)("img",{alt:"rebus 3",src:p,width:"100%"})}):"Rebus4"===E?Object(l.jsx)("div",{id:"question",ref:s,children:Object(l.jsx)("img",{alt:"rebus 4",src:g,width:"100%"})}):Object(l.jsx)("div",{className:m.a.question,id:"question",ref:s,children:E})}return Object(c.useEffect)((function(){var e;e=N,fetch("".concat(h.FIREBASE_URL,"openedDoors/").concat(e,"/question.json")).then((function(e){return null===e||void 0===e?void 0:e.json()})).then((function(t){if(t){var n=Object.keys(t);k(t[n[0]].question)}else fetch("".concat(h.FIREBASE_URL,"doorIds.json")).then((function(e){return null===e||void 0===e?void 0:e.json()})).then((function(t){if(t){var n=Object.keys(t),c=n[Math.floor(Math.random()*n.length)];fetch("".concat(h.FIREBASE_URL,"doorsQ/").concat(c,".json")).then((function(e){return null===e||void 0===e?void 0:e.json()})).then((function(t){var n=t[Object.keys(t)[0]];k(n.question),fetch("".concat(h.FIREBASE_URL,"openedDoors/").concat(e,"/question.json"),{method:"POST",body:JSON.stringify({question:n.question,id:c,admin:n.admin}),headers:{"Content-Type":"application/json"}})})).then(fetch("".concat(h.FIREBASE_URL,"doorIds/").concat(c,".json"),{method:"DELETE"})).catch((function(e){k(e)}))}else k("Tomt for sp\xf8rsm\xe5l :(")}))})).catch((function(e){return k("Tomt for sp\xf8rsm\xe5l :(")}));var t=JSON.parse(localStorage.getItem("user"));t&&(j(t.pwd),S(t.user))}),[N]),Object(l.jsxs)("div",{children:[A&&Object(l.jsx)(b,{children:Object(l.jsxs)("form",{className:m.a.form,onSubmit:function(c){c.preventDefault();var s={username:t.current.value.toString().trim(),password:n.current.value,answer:r.current.value,question:E,door:N,submittedAt:new Date};console.log(s),e.onSubmittedDoor(s)},children:[Object(l.jsx)("h2",{children:"Dagens sp\xf8rsm\xe5l"}),Object(l.jsx)(B,{}),Object(l.jsxs)("h3",{children:["Luke ",N]}),Object(l.jsx)("div",{className:m.a.control,children:Object(l.jsx)("textarea",{id:"message",rows:"5",ref:r,placeholder:"Skriv svaret her"})}),Object(l.jsx)("div",{className:m.a.control,children:Object(l.jsx)("input",{type:"text",id:"name",required:!0,ref:t,placeholder:"Brukernavn",value:f,onChange:function(e){return S(e.value)}})}),Object(l.jsx)("div",{className:m.a.control,children:Object(l.jsx)("input",{type:"password",id:"password",required:!0,ref:n,placeholder:"Passord",value:i,onChange:function(e){return j(e.value)}})}),Object(l.jsx)("div",{className:m.a.actions,children:Object(l.jsx)("button",{children:"Send inn"})})]})}),!A&&Object(l.jsx)("div",{children:Object(l.jsx)(w,{})})]})};var y=function(){var e=Object(a.f)();return Object(l.jsx)("div",{children:Object(l.jsx)("section",{children:Object(l.jsx)(k,{onSubmittedDoor:function(t){var n="".concat(t.password).concat(t.username);fetch("".concat(h.FIREBASE_URL,"users/").concat(n,".json")).then((function(e){return null===e||void 0===e?void 0:e.json()})).then((function(n){if(!n)throw new Error("Brukernavn eller passord er feil");!function(t){var n=t.door,c={user:t.username,pwd:t.password};localStorage.setItem("user",JSON.stringify(c)),fetch("".concat(h.FIREBASE_URL,"answers/").concat(n,"/answer.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e("/takk")}))}(t)})).catch((function(e){alert(e.message)}))}})})})},N=n(7),A=n(15),B=n.n(A);var F=function(e){var t=e.text,n=e.isQuestion,c=t?Object(l.jsx)("text",{children:t}):Object(l.jsxs)("text",{children:["Lukesvar er notert! ",Object(l.jsx)("br",{}),"H\xe5per det var riktig \ud83e\udd1e"]});return Object(l.jsxs)("div",{className:B.a.ThankYouPage,children:[c,n&&Object(l.jsx)(N.b,{to:"/legg-til-luke",children:"Legg inn en til"})]})};var I=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)();return Object(l.jsx)(b,{children:Object(l.jsxs)("form",{className:m.a.form,onSubmit:function(c){c.preventDefault();var r,s={username:t.current.value,password:n.current.value,submittedAt:new Date};try{r=s,fetch("".concat(h.FIREBASE_URL,"users/username.json")).then((function(e){return null===e||void 0===e?void 0:e.json()})).then((function(t){return t&&Object.keys(t).forEach((function(e){var n;if((null===(n=t[e])||void 0===n?void 0:n.username)===r.username)throw new Error("Brukernavnet er opptatt")})),e.onAddedUser(r)})).catch((function(e){return document.getElementById("error").innerHTML=e.message}))}catch(a){console.log(a)}},children:[Object(l.jsx)("h3",{children:"Velg brukernavn og passord"}),Object(l.jsx)("div",{className:m.a.control,children:Object(l.jsx)("input",{type:"text",id:"name",required:!0,ref:t,placeholder:"Brukernavn"})}),Object(l.jsx)("div",{className:m.a.control,children:Object(l.jsx)("input",{type:"password",id:"password",required:!0,ref:n,placeholder:"Passord"})}),Object(l.jsx)("div",{id:"error",children:" "}),Object(l.jsx)("div",{className:m.a.actions,children:Object(l.jsx)("button",{children:"Send inn"})})]})})},T=n(16),q=n.n(T);var L=function(){var e=Object(a.f)();return Object(l.jsxs)("div",{children:[Object(l.jsx)("section",{children:Object(l.jsx)(I,{onAddedUser:function(t){var n;!function(e){var t="".concat(e.password).concat(e.username);fetch("".concat(h.FIREBASE_URL,"users/").concat(t,".json"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}(t),n={username:t.username,submittedAt:t.submittedAt},fetch("".concat(h.FIREBASE_URL,"users/username.json"),{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(){return e("/bruker-opprettet")}))}})}),Object(l.jsx)(N.b,{to:"/admin",className:q.a.secretlink,children:"."})]})};var U=function(e){var t=Object(c.useRef)(),n=Object(c.useRef)(),r=Object(c.useRef)(),s=Object(c.useRef)(),a=Object(c.useState)(""),o=Object(u.a)(a,2),i=o[0],j=o[1],d=Object(c.useState)(""),h=Object(u.a)(d,2),O=h[0],f=h[1];return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("user"));e&&(j(e.pwd),f(e.user))}),[]),Object(l.jsx)(b,{children:Object(l.jsxs)("form",{className:m.a.form,onSubmit:function(c){c.preventDefault();var a={id:Math.floor(1e4*Math.random()),question:t.current.value,answer:n.current.value,submittedAt:new Date,username:r.current.value,password:s.current.value};try{e.onAddedQnA(a)}catch(o){console.log(o)}},children:[Object(l.jsx)("h3",{children:"Legg inn en ny luke"}),Object(l.jsx)("div",{className:m.a.control,children:Object(l.jsx)("textarea",{type:"text",id:"question",required:!0,rows:"5",ref:t,placeholder:"Sp\xf8rsm\xe5l"})}),Object(l.jsx)("div",{className:m.a.control,children:Object(l.jsx)("textarea",{type:"text",id:"answer",rows:"5",required:!0,ref:n,placeholder:"Svar"})}),Object(l.jsxs)("div",{className:m.a.control,children:[Object(l.jsx)("input",{type:"text",ref:r,value:O,onChange:function(e){return f(e.value)},placeholder:"Brukernavn"}),Object(l.jsx)("input",{type:"password",ref:s,value:i,onChange:function(e){return j(e.value)},placeholder:"Passord"})]}),Object(l.jsx)("div",{id:"error",children:" "}),Object(l.jsx)("div",{className:m.a.actions,children:Object(l.jsx)("button",{children:"Send inn"})})]})})};var C=function(){var e=Object(a.f)();return Object(l.jsx)("div",{children:Object(l.jsx)("section",{children:Object(l.jsx)(U,{onAddedQnA:function(t){var n="".concat(t.password).concat(t.username);fetch("".concat(h.FIREBASE_URL,"users/").concat(n,".json")).then((function(e){return console.log(e),null===e||void 0===e?void 0:e.json()})).then((function(n){if(!n)throw new Error("Brukernavn eller passord er feil");var c;c=t,fetch("".concat(h.FIREBASE_URL,"doorsQnA/").concat(c.id,"/qna.json"),{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then(fetch("".concat(h.FIREBASE_URL,"doorsQ/").concat(c.id,".json"),{method:"POST",body:JSON.stringify({question:c.question,admin:c.username}),headers:{"Content-Type":"application/json"}})).then(fetch("".concat(h.FIREBASE_URL,"doorIds/").concat(c.id,".json"),{method:"POST",body:JSON.stringify(c.id),headers:{"Content-Type":"application/json"}})).then(e("/luke-opprettet"))})).catch((function(e){alert(e.message)}))}})})})},D=n(17),J=n.n(D);var P=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=(Object(c.useRef)(),Object(c.useState)(!1)),r=Object(u.a)(n,2),s=r[0],o=r[1],i=Object(c.useState)(!1),j=Object(u.a)(i,2),d=j[0],O=j[1],f=Object(a.g)().doorParam,m=Object(c.useState)(f),v=Object(u.a)(m,2),x=v[0],p=v[1],g=Object(c.useState)([]),S=Object(u.a)(g,2),_=S[0],R=S[1],E=Object(c.useState)(""),w=Object(u.a)(E,2),k=w[0],y=w[1],N=Object(c.useState)(""),A=Object(u.a)(N,2),B=A[0],F=A[1],I=Object(c.useState)(""),T=Object(u.a)(I,2),q=T[0],L=T[1],U=Object(c.useState)(""),C=Object(u.a)(U,2),D=C[0],P=C[1],H=Object(c.useState)({}),M=Object(u.a)(H,2),Q=M[0],V=M[1],z=Object(c.useState)({}),Y=Object(u.a)(z,2),K=Y[0],W=Y[1];function Z(n){n.preventDefault();var c=e.current.value,r=t.current.value;fetch("".concat(h.FIREBASE_URL,"users/").concat(r).concat(c,".json")).then((function(e){return null===e||void 0===e?void 0:e.json()})).then((function(e){if(!e)throw new Error("nej");if(console.log("user?",c,k),c!==k)throw new Error("nej");o(!0)})).catch((function(e){alert(e.message)}))}function G(e,t){var n=K[e];"+"===t?n++:n--,console.log(n),console.log(Q[e]),K[e]=n,W(K),O(!d)}function X(e){e.preventDefault(),fetch("".concat(h.FIREBASE_URL,"score.json"),{method:"PATCH",body:JSON.stringify(K),headers:{"Content-Type":"application/json"}});var t={admin:k,door:x,oldScore:Q,newScore:K,dateTime:new Date};fetch("".concat(h.FIREBASE_URL,"admin.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(V(K))}function $(){return Object(l.jsxs)("form",{onSubmit:Z,children:[Object(l.jsx)("input",{type:"text",value:D,onChange:function(e){return P(e.value)},ref:e}),Object(l.jsx)("input",{type:"password",value:q,onChange:function(e){return L(e.value)},ref:t}),Object(l.jsx)("button",{children:"Logg inn"})]})}function ee(e){var t=e.user,n=e.answer;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:J.a.user,children:t}),Object(l.jsx)("div",{children:n})]})}function te(e){var t=e.username;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("tr",{children:[Object(l.jsxs)("td",{children:[t,"(",Q[t],") ",K[t]," "]}),Object(l.jsxs)("td",{children:[Object(l.jsx)("button",{id:t,onClick:function(){G(t,"+")},children:"+1"}),Object(l.jsx)("button",{id:t,onClick:function(){G(t,"-")},children:"-1"})]})]},t)})}function ne(){p(f);var e=Object.keys(Q);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(b,{children:[Object(l.jsxs)("h2",{children:["Admin - luke ",f]}),Object(l.jsx)("div",{children:B}),Object(l.jsx)("div",{children:Object(l.jsx)("ul",{children:_.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)(ee,{user:e.user,answer:e.answer})})}))})})]}),Object(l.jsxs)(b,{children:[Object(l.jsx)("h2",{children:"Poeng"}),Object(l.jsxs)("form",{onSubmit:X,children:[Object(l.jsx)("table",{children:Object(l.jsx)("tbody",{children:e.map((function(e){return Object(l.jsx)(te,{username:e})}))})}),Object(l.jsx)("button",{children:"Oppdater"})]})]})]})}return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("user"));e&&(L(e.pwd),P(e.user))}),[]),Object(c.useEffect)((function(){fetch("".concat(h.FIREBASE_URL,"score.json")).then((function(e){return null===e||void 0===e?void 0:e.json()})).then((function(e){V(e)}))}),[]),Object(c.useEffect)((function(){fetch("".concat(h.FIREBASE_URL,"score.json")).then((function(e){return null===e||void 0===e?void 0:e.json()})).then((function(e){W(e)}))}),[]),Object(c.useEffect)((function(){fetch("".concat(h.FIREBASE_URL,"openedDoors/").concat(x,".json")).then((function(e){return null===e||void 0===e?void 0:e.json()})).then((function(e){if(e){var t=Object.keys(e.question);y(e.question[t].admin),F(e.question[t].question)}}))}),[]),Object(c.useEffect)((function(){fetch("".concat(h.FIREBASE_URL,"answers/").concat(x,".json")).then((function(e){return null===e||void 0===e?void 0:e.json()})).then((function(e){if(e){console.log("doorData",e);var t=Object.keys(e.answer).map((function(t){return{user:e.answer[t].username,answer:e.answer[t].answer}}));console.log(t),R(t)}}))}),[s]),Object(l.jsxs)("div",{children:[!s&&Object(l.jsx)($,{}),s&&Object(l.jsx)(ne,{})]})},H=n(5),M=n.n(H);var Q=function(){var e=Object(c.useState)(M.a.hamburger),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(M.a.navmenu),a=Object(u.a)(s,2),o=a[0],i=a[1],j=Object(c.useState)(!1),d=Object(u.a)(j,2),b=d[0],h=d[1];function O(){b?(r(M.a.hamburger),i(M.a.navmenu),h(!1)):(r(M.a.hamburger+" "+M.a.active),i(M.a.navmenu+" "+M.a.active),h(!0))}return Object(l.jsx)("header",{children:Object(l.jsxs)("nav",{className:M.a.navbar,children:[Object(l.jsx)(N.b,{className:M.a.navbranding,to:"/",children:"Vitsekalender"}),Object(l.jsxs)("ul",{className:o,children:[Object(l.jsx)("li",{className:M.a.navitem,children:Object(l.jsx)(N.b,{to:"/highscore",onClick:function(){return O()},children:"Highscore"})}),Object(l.jsx)("li",{className:M.a.navitem,children:Object(l.jsx)(N.b,{to:"/",onClick:function(){return O()},children:"Dagens luke"})}),Object(l.jsx)("li",{className:M.a.navitem,children:Object(l.jsx)(N.b,{to:"/tidligere-luker",onClick:function(){return O()},children:"Tidligere luker"})}),Object(l.jsx)("li",{className:M.a.navitem,children:Object(l.jsx)(N.b,{to:"/legg-til-luke",onClick:function(){return O()},children:"Nytt sp\xf8rsm\xe5l"})}),Object(l.jsx)("li",{className:M.a.navitem,children:Object(l.jsx)(N.b,{to:"/ny-bruker",onClick:function(){return O()},children:"Ny bruker"})})]}),Object(l.jsxs)("div",{className:n,onClick:function(){return O()},children:[Object(l.jsx)("span",{className:M.a.bar}),Object(l.jsx)("span",{className:M.a.bar}),Object(l.jsx)("span",{className:M.a.bar})]})]})})};var V=function(){return Object(l.jsxs)("div",{className:i.a.main,id:"main",children:[Object(l.jsx)(Q,{}),Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{path:"/",exact:!0,element:Object(l.jsx)(y,{})}),Object(l.jsx)(a.a,{path:"/highscore",exact:!0,element:Object(l.jsx)(O,{})}),Object(l.jsx)(a.a,{path:"/takk",element:Object(l.jsx)(F,{})}),Object(l.jsx)(a.a,{path:"/bruker-opprettet",element:Object(l.jsx)(F,{text:"Bruker opprettet!"})}),Object(l.jsx)(a.a,{path:"/luke-opprettet",element:Object(l.jsx)(F,{text:"Sp\xf8rsm\xe5l lagret!",isQuestion:!0})}),Object(l.jsx)(a.a,{path:"/ny-bruker",element:Object(l.jsx)(L,{})}),Object(l.jsx)(a.a,{path:"/legg-til-luke",element:Object(l.jsx)(C,{})}),Object(l.jsx)(a.a,{path:"/admin/:doorParam",element:Object(l.jsx)(P,{})})]})]})};s.a.render(Object(l.jsx)(N.a,{children:Object(l.jsx)(V,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.a2147bd9.chunk.js.map