"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[729],{729:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(439),a=n(791),u=n(689),c=n(87),o=n(390),i={form:"SearchBar_form__gW7Gj"},s=n(184),f=function(t){var e=t.onInputValue,n=(0,a.useState)(""),u=(0,r.Z)(n,2),c=u[0],o=u[1];return(0,s.jsxs)("form",{className:i.form,onSubmit:function(t){t.preventDefault(),o("")},children:[(0,s.jsx)("input",{className:i.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies...",value:c,onChange:function(t){var n=t.currentTarget.value.toLowerCase();o(n),e(n)}}),(0,s.jsx)("button",{type:"submit",children:"Search"})]})},p=function(){var t=(0,u.TH)(),e=(0,c.lr)(),n=(0,r.Z)(e,2),i=n[0],p=n[1],l=i.get("query")||"",v=(0,a.useState)([]),d=(0,r.Z)(v,2),h=d[0],g=d[1],m=(0,a.useState)(!1),x=(0,r.Z)(m,2),_=x[0],w=x[1];(0,a.useEffect)((function(){l?(w(!0),(0,o.z1)(l).then((function(t){g(t.results),w(!1)})).catch((function(t){console.log(t),w(!1)}))):(g([]),w(!1))}),[l]);return(0,s.jsxs)("div",{children:[(0,s.jsx)(f,{onInputValue:function(t){p({query:t})}}),_?(0,s.jsx)("p",{children:"Loading..."}):(0,s.jsx)("ul",{children:h.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(c.rU,{to:"/movies/".concat(e.id),state:{from:t},children:e.title})},e.id)}))})]})}},390:function(t,e,n){n.d(e,{Hg:function(){return i},TP:function(){return f},tx:function(){return l},z1:function(){return s},zv:function(){return p}});var r=n(861),a=n(757),u=n.n(a),c=n(243),o="5b510caffd74cc663774c058405dd762";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day?api_key=".concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?api_key=".concat(o,"&query=").concat(e,"&include_adult=false&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=729.a53fc3a4.chunk.js.map