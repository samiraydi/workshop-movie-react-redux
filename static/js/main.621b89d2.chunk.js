(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(28)},23:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),l=n.n(i),c=(n(23),n(1)),o=n(2),u=n(5),s=n(3),p=n(6),m=n(4),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("input",{type:"text",onChange:function(t){e.props.searchinput(t.target.value)}}),r.a.createElement("span",null,"Search"))}}]),t}(a.Component),h=Object(m.b)(null,function(e){return{searchinput:function(t){e({type:"ADD_INPUT",value:t}),console.log(t)}}})(v),d=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("ul",{style:{display:"flex",justifyContent:"space-between",listStyleType:"none"}},r.a.createElement("li",{onClick:function(){e.props.star(1)}},"\u2606"),r.a.createElement("li",{onClick:function(){e.props.star(2)}},"\u2606"),r.a.createElement("li",{onClick:function(){e.props.star(3)}},"\u2606"),r.a.createElement("li",{onClick:function(){e.props.star(4)}},"\u2606"),r.a.createElement("li",{onClick:function(){e.props.star(5)}},"\u2606")))}}]),t}(a.Component),f=Object(m.b)(null,function(e){return{star:function(t){e({type:"ADD_STARS",value:t}),console.log(t)}}})(d),g=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.movielist.filter(function(t){return t.name.toUpperCase().includes(e.props.input.toUpperCase())&&t.review<=e.props.star}).map(function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:e.img,alt:"",width:"300px",height:"300px"}),r.a.createElement("p",null,"".padEnd(e.review,"\u2606")),r.a.createElement("p",null,e.name))}))}}]),t}(a.Component),b=Object(m.b)(function(e){return{movielist:e.movie,star:e.star,input:e.input}},null)(g),j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={name:"",review:0,img:""},n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("input",{placeholder:"name",onChange:function(t){e.setState({name:t.target.value})},type:"text"}),r.a.createElement("input",{placeholder:"review",onChange:function(t){e.setState({review:t.target.value})},type:"text"}),r.a.createElement("input",{placeholder:"img",onChange:function(t){e.setState({img:t.target.value})},type:"text"}),r.a.createElement("span",{onClick:function(){e.props.add(e.state.name,e.state.review,e.state.img)}},"Add"))}}]),t}(a.Component),y=Object(m.b)(null,function(e){return{add:function(t,n,a){e({type:"ADD_MOVIE",value:{name:t,review:n,img:a}})}}})(j),E=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},r.a.createElement(h,null),r.a.createElement(f,null)),r.a.createElement(b,null),r.a.createElement(y,null))}}]),t}(a.Component),O=n(9),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"ADD_INPUT"===t.type?t.value:e},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=arguments.length>1?arguments[1]:void 0;return"ADD_STARS"===t.type?t.value:e},k=n(17),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{name:"Avengers: Endgame",img:"https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",review:"4"},{name:"John Wick 3: Parabellum",img:"https://image.tmdb.org/t/p/w185/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",review:"3"},{name:"Breakthrough 2019",img:"https://egybest.video/uploads/articles/c08520bc.png",review:"2"}],t=arguments.length>1?arguments[1]:void 0;return"ADD_MOVIE"===t.type?[].concat(Object(k.a)(e),[t.value]):e},D=Object(O.c)(Object(O.b)({input:w,star:C,movie:A}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(m.a,{store:D},r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.621b89d2.chunk.js.map