webpackJsonp([6],{248:function(t,e,n){"use strict";function s(t){r||n(284)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(286),a=n.n(o),i=n(287),r=!1,l=n(4),c=s,u=l(a.a,i.a,c,"data-v-bf5529bc",null);u.options.__file="src\\components\\news\\newsDetail.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] newsDetail.vue: functional components are not supported with templates, they should use render functions."),e.default=u.exports},284:function(t,e,n){var s=n(285);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(3)("d021765a",s,!1)},285:function(t,e,n){e=t.exports=n(2)(void 0),e.push([t.i,"\n.news-title p[data-v-bf5529bc] {\r\n    color: #0a87f8;\r\n    font-size: 20px;\r\n    font-weight: bold;\n}\n.news-title span[data-v-bf5529bc] {\r\n    margin-right: 30px;\n}\n.news-title[data-v-bf5529bc] {\r\n    margin-top: 5px;\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n}\r\n\r\n\r\n/*主体文章的左右距离*/\n.news-content[data-v-bf5529bc] {\r\n    padding: 10 5;\n}\r\n",""])},286:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{newsDetail:{},title:""}},created:function(){var t=this,e=this.$route.query.id;this.$ajax.get("getnew/"+e).then(function(e){t.newsDetail=e.data.message[0]}).catch(function(t){console.log(t)})},beforeRouteEnter:function(t,e,n){var s="";"news.list"===e.name?s="新闻详情":"goods.detail"===e.name&&(s="图文介绍"),n(function(t){t.title=s})}}},287:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tmpl"},[n("nav-bar",{attrs:{title:t.title}}),t._v(" "),n("div",{staticClass:"news-title"},[n("p",{domProps:{textContent:t._s(t.newsDetail.title)}}),t._v(" "),n("div",[n("span",[t._v(t._s(t.newsDetail.click)+"次点击")]),t._v(" "),n("span",[t._v("分类:民生经济")]),t._v(" "),n("span",[t._v("添加时间:"+t._s(t._f("convertDate")(t.newsDetail.add_time)))])])]),t._v(" "),n("div",{staticClass:"news-content",domProps:{innerHTML:t._s(t.newsDetail.content)}})],1)},o=[];s._withStripped=!0;var a={render:s,staticRenderFns:o};e.a=a}});