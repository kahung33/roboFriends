(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{214:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),l=(a(36),a(14)),s=a(15),i=a(18),u=a(16),h=a(19),m=function(e){var t=e.id,a=e.name,n=e.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t)}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,n)))},d=function(e){var t=e.robots;return r.a.createElement(r.a.Fragment,null,t.map(function(e,a){return r.a.createElement(m,{key:a,id:t[a].id,name:t[a].name,email:t[a].email})}))},b=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"seacrh robots",onChange:t}))},f=(a(38),function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)}),p=(a(40),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={hasError:!1},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),t}(n.Component)),E=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}},{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchfield,n=t.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f2"},"RoboFriends"),r.a.createElement(b,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(p,null,r.a.createElement(d,{robots:n})))):r.a.createElement("h1",{className:"tc"},"Loading")}}]),t}(n.Component);a(212);o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)))},29:function(e,t,a){e.exports=a(214)},36:function(e,t,a){},38:function(e,t,a){}},[[29,2,1]]]);
//# sourceMappingURL=main.4db75733.chunk.js.map