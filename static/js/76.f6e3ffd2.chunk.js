"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{76:function(t,n,e){e.r(n),e.d(n,{default:function(){return p}});var r=e(439),a=e(689),c=e(791),u=e(390),i="Cast_img__-isbW",s="Cast_character__tKDlA",o=e(184),p=function(){var t=(0,c.useState)([]),n=(0,r.Z)(t,2),e=n[0],p=n[1],f=(0,a.UO)().movieId;return(0,c.useEffect)((function(){(0,u.zv)(f).then((function(t){p(t.cast)})).catch((function(t){return console.log(t)}))}),[f]),(0,o.jsx)("section",{children:(0,o.jsx)("ol",{children:e.length?e.map((function(t){var n=t.id,e=t.profile_path,r=t.name,a=t.character;return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{className:i,src:e?"https://image.tmdb.org/t/p/w200".concat(e):"https://www.rsjlawang.com/assets/images/dokter/no_image.jpg",alt:r,loading:"lazy"}),(0,o.jsx)("h4",{children:r}),(0,o.jsxs)("p",{className:s,children:["Character: ",a]})]},n)})):(0,o.jsx)("p",{children:"Sorry, there is no information about cast"})})})}},390:function(t,n,e){e.d(n,{Hg:function(){return s},TP:function(){return p},tx:function(){return h},z1:function(){return o},zv:function(){return f}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="5b510caffd74cc663774c058405dd762";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(n,"&include_adult=false&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=76.f6e3ffd2.chunk.js.map