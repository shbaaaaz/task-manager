(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{12:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(6),r=n.n(s),i=(n(12),n(13),n(7)),j=n(4),o=n(19),u=n(0),l=Object(c.createContext)(),b=function(e){var t=localStorage.getItem("tasks"),n=t?JSON.parse(t):[],a=Object(c.useState)(n),s=Object(j.a)(a,2),r=s[0],b=s[1];return Object(c.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(r))}),[r]),Object(u.jsx)(l.Provider,{value:{tasks:r,addTask:function(e){b([].concat(Object(i.a)(r),[{title:e,id:Object(o.a)()}]))},removeTask:function(e){b(r.filter((function(t){return t.id!==e})))}},children:e.children})},d=function(){var e=Object(c.useContext)(l).tasks;(new Date).toLocaleString();return Object(u.jsxs)("div",{className:"navbar",children:[Object(u.jsx)("h1",{children:"Task Manager"}),Object(u.jsxs)("p",{children:["Currently you have ",e.length," tasks to complete..."]})]})},O=function(e){var t=e.task,n=Object(c.useContext)(l).removeTask;return Object(u.jsx)("li",{onClick:function(){return n(t.id)},children:Object(u.jsx)("div",{className:"title",children:t.title})})},h=function(){var e=Object(c.useContext)(l).tasks;return e.length?Object(u.jsx)("div",{className:"task-list",children:Object(u.jsx)("ul",{children:e.map((function(e){return Object(u.jsx)(O,{task:e},e.id)}))})}):Object(u.jsx)("div",{className:"empty",children:"No task for today, Enjoy your day! "})},x=function(){var e=Object(c.useContext)(l).addTask,t=Object(c.useState)(""),n=Object(j.a)(t,2),a=n[0],s=n[1];return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(a),s("")},children:[Object(u.jsx)("input",{type:"text",placeholder:"Enter the task",value:a,onChange:function(e){return s(e.target.value)},required:!0}),Object(u.jsx)("input",{type:"submit",value:"Add task"})]})},f=function(){return Object(u.jsx)("div",{className:"footer",children:Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:"\xa9"})," Developed by ",Object(u.jsx)("a",{href:"https://www.shahbazkhan.in",target:"_blank",children:"Shahbaz Khan"})]})})};var v=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)(b,{children:[Object(u.jsx)(d,{}),Object(u.jsx)(h,{}),Object(u.jsx)(x,{})]}),Object(u.jsx)(f,{})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),k()}},[[17,1,2]]]);
//# sourceMappingURL=main.6310bfb8.chunk.js.map