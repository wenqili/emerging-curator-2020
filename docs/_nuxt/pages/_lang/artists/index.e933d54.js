(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{202:function(t,e,n){var content=n(209);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("b74fb014",content,!0,{sourceMap:!1})},203:function(t,e,n){var content=n(211);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("e54374de",content,!0,{sourceMap:!1})},204:function(t,e,n){var content=n(213);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("67841d53",content,!0,{sourceMap:!1})},205:function(t,e,n){"use strict";n.r(e);var o={name:"Iframe",props:{src:{type:String,default:""},caption:{type:String,default:""}}},r=(n(212),n(17)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contentBlock"},[e("div",{staticClass:"iframeContainer"},[e("iframe",{attrs:{src:this.src,frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:""}})]),this._v(" "),e("div",{staticClass:"caption"},[this._v("\n    "+this._s(this.caption)+"\n  ")])])}),[],!1,null,"4844cbf8",null);e.default=component.exports;installComponents(component,{Iframe:n(205).default})},206:function(t,e,n){"use strict";n.r(e);var o={name:"NaviBar",props:{},data:function(){return{isMenu:!1,showMenuList:!1}},methods:{toggleMenu:function(){this.isMenu=!this.isMenu,this.$emit("toggle-menu")},toggleOffMenu:function(){this.isMenu=!1,this.$emit("toggle-off-menu")},toggleMenuList:function(){this.showMenuList=!this.showMenuList}}},r=(n(208),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navi-bar"},[n("nav",[n("nuxt-link",{staticClass:"siteTitle",attrs:{to:t.$i18n.path("")}},[t._v("\n      "+t._s(t.$t("home.title"))+"\n    ")]),t._v(" "),t.showMenuList?n("div",{on:{click:t.toggleMenuList}},[n("div",{staticClass:"about"},[t.isMenu?n("button",{staticClass:"clear",on:{click:t.toggleMenu}},[t._v("\n          "+t._s(t.$t("links.home"))+"\n        ")]):n("button",{staticClass:"clear",on:{click:t.toggleMenu}},[t._v("\n          "+t._s(t.$t("links.onlineResidency"))+"\n        ")]),t._v(" "),n("a",{attrs:{href:"mailto:trigger.trigger.art@gmail.com"}},[t._v("\n          "+t._s(t.$t("links.contact"))+"\n        ")]),t._v(" "),n("nuxt-link",{attrs:{to:t.$i18n.path("about")}},[t._v("\n          "+t._s(t.$t("links.about"))+"\n        ")]),t._v(" "),n("font-awesome-icon",{attrs:{icon:"slash"}}),t._v(" "),n("button",{staticClass:"clear"},[t._v("\n          "+t._s(t.$t("links.menu"))+"\n        ")])],1)]):n("button",{staticClass:"clear",class:{"is-focused":t.showMenuList},on:{click:t.toggleMenuList}},[t.showMenuList?t._e():n("font-awesome-icon",{attrs:{icon:"grip-lines"}}),t._v(" "),n("span",[t._v(t._s(t.$t("links.menu")))])],1)],1),t._v(" "),n("ResidencySection")],1)}),[],!1,null,"261d2780",null);e.default=component.exports;installComponents(component,{ResidencySection:n(214).default})},207:function(t,e,n){var content=n(221);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("777ab38c",content,!0,{sourceMap:!1})},208:function(t,e,n){"use strict";var o=n(202);n.n(o).a},209:function(t,e,n){(e=n(22)(!1)).push([t.i,"button span[data-v-261d2780]{display:block}.navi-bar[data-v-261d2780]{position:relative;height:100%;border-left:3px solid #000;border-right:3px solid #000;width:var(--menu-full-width);left:var(--reserve-width)}.navi-bar nav[data-v-261d2780]{position:absolute;width:100%;display:flex;flex-direction:column;justify-content:space-between;height:100%}.navi-item[data-v-261d2780]{position:relative;z-index:1;padding:.5rem;border:none;background:none;outline:transparent}.navi-item.is-focused[data-v-261d2780]{font-weight:900}.siteTitle[data-v-261d2780]{font-size:.8rem;color:#000;font-weight:700;line-height:1.2;white-space:pre-line}.clear[data-v-261d2780],.siteTitle[data-v-261d2780]{background-color:transparent;padding:.5rem}.clear[data-v-261d2780]{border:none;font-weight:900;cursor:pointer}.about[data-v-261d2780]{height:15rem;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;transition:all .3s ease}.about a[data-v-261d2780]{font-size:.9rem;font-weight:900;line-height:1;font-family:var(--secondary-font)}",""]),t.exports=e},210:function(t,e,n){"use strict";var o=n(203);n.n(o).a},211:function(t,e,n){(e=n(22)(!1)).push([t.i,"#langButton[data-v-642cd9bc]{border:none;margin-right:.5rem;background:transparent;font-size:1.2rem;width:4rem;height:3rem;text-align:center;right:0;bottom:0;position:absolute;display:flex;justify-content:center;line-height:1;align-items:center}.residency-containert[data-v-642cd9bc]{position:absolute;left:calc(-100vw + var(--reserve-width) + var(--menu-full-width) - 3px);bottom:0;width:calc(100vw - var(--reserve-width) - var(--menu-full-width));height:100vh}.top-section[data-v-642cd9bc]{height:3rem;border-bottom:3px solid #000;justify-content:space-between}.top-section[data-v-642cd9bc],h2[data-v-642cd9bc]{display:flex;align-items:center}h2[data-v-642cd9bc]{font-size:1.5rem;padding-left:1rem;width:80%;border-right:3px solid #000}form[data-v-642cd9bc],h2[data-v-642cd9bc]{height:100%}form[data-v-642cd9bc]{display:flex;align-content:center;justify-content:space-between;padding:.5rem 0}form input[data-v-642cd9bc]{font-size:1.5rem;margin-left:.5rem}form button[data-v-642cd9bc],form input[data-v-642cd9bc]{border:none;background:transparent}form button[data-v-642cd9bc]{margin-right:.5rem;font-size:1.2rem;width:2rem}.bottom-section[data-v-642cd9bc]{height:calc(100% - 7rem);border-bottom:3px solid #000;border-right:none;border-top:none}iframe[data-v-642cd9bc]{border:1px solid transparent}",""]),t.exports=e},212:function(t,e,n){"use strict";var o=n(204);n.n(o).a},213:function(t,e,n){(e=n(22)(!1)).push([t.i,".iframeContainer[data-v-4844cbf8]{position:relative;overflow:hidden;width:100%;padding-top:56.25%;margin-bottom:.5rem}.iframeContainer iframe[data-v-4844cbf8]{position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%}.caption[data-v-4844cbf8]{padding:0 2rem}",""]),t.exports=e},214:function(t,e,n){"use strict";n.r(e);var o={name:"MenuSection"},r=(n(210),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[n("div",{staticClass:"residency-containert"},[n("div",{staticClass:"top-section"},[n("h2",[t._v(t._s(t.$t("links.onlineResidency")))]),t._v(" "),n("form",[n("input",{attrs:{type:"text",value:"Search"}}),t._v(" "),n("button",[n("font-awesome-icon",{attrs:{icon:"search"}})],1)])]),t._v(" "),t._m(0),t._v(" "),n("div",{attrs:{id:"langButton"}},["en"===t.$i18n.locale?n("NuxtLink",{staticClass:"Header__Link",attrs:{to:"/cn"+t.$route.fullPath,"active-class":"none",exact:""}},[t._v("\n        CN\n        "),n("br"),t._v("EN\n      ")]):n("NuxtLink",{staticClass:"Header__Link",attrs:{to:t.$route.fullPath.replace(/^\/[^\/]+/,""),"active-class":"none",exact:""}},[t._v("\n        CN\n        "),n("br"),t._v("EN\n      ")])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bottom-section"},[e("iframe",{staticStyle:{border:"0"},attrs:{src:"https://calendar.google.com/calendar/embed?src=en.china%23holiday%40group.v.calendar.google.com&ctz=America%2FNew_York",width:"100%",height:"100%",frameborder:"0",scrolling:"no"}})])}],!1,null,"642cd9bc",null);e.default=component.exports;installComponents(component,{Iframe:n(205).default})},215:function(t,e,n){"use strict";n.r(e);n(199);var o={name:"GoToButton",props:{order:{type:Number,default:0},route:{type:String,default:"artists"}}},r=(n(220),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataSection",class:[{"is-active":0===t.order},{"middle-section":0===t.order},{"middle-section":1===t.order},{"right-section":2===t.order}]},[n("nuxt-link",{attrs:{to:t.$i18n.path(t.route)}},[n("h3",{staticClass:"DataSection__sectionTitle"},[t._v("\n      "+t._s(t.$t("links")[t.route])+"\n    ")])])],1)}),[],!1,null,"44eba9fa",null);e.default=component.exports},219:function(t,e,n){var content=n(238);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("9b4428b4",content,!0,{sourceMap:!1})},220:function(t,e,n){"use strict";var o=n(207);n.n(o).a},221:function(t,e,n){(e=n(22)(!1)).push([t.i,".right-section[data-v-44eba9fa]{top:9.2rem!important}.DataSection[data-v-44eba9fa]{position:absolute;top:0;right:0;padding-top:1.2rem;padding-left:2rem;height:10.4rem;z-index:1;width:2.2rem;border:none}.DataSection *[data-v-44eba9fa]{transition:all .3s ease}.DataSection h3[data-v-44eba9fa]{top:1.2rem}.DataSection__sectionTitle[data-v-44eba9fa]{top:0;left:1.2rem;position:absolute;transform-origin:top left;transform:rotate(90deg);background-color:#000;color:#fff;width:8rem;font-size:1.2rem;font-weight:700;line-height:1.3rem;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-transform:capitalize;padding-top:.1rem}.DataSection__sectionTitle[data-v-44eba9fa]:hover{background-color:#fff;color:#000;border:1px solid #000}",""]),t.exports=e},227:function(t,e,n){"use strict";n.r(e);n(91),n(28);var o=n(260),r=n(349),c={name:"OverviewDiagram",props:{currentData:{type:Object,default:function(){return{name:"",children:[]}}}},data:function(){return{currData:this.currentData,height:548,width:1758}},mounted:function(){this.createDiagram()},methods:{createDiagram:function(){var t=this,data=this.currData,e=this.$refs.svgContainer,n=o.b().rangeRound([0,this.width-7.5]),c=o.b().rangeRound([0,this.height-30]),svg=o.c(e).attr("viewBox",[-5,-30.5,this.width+10,this.height+50]),l=o.d().tile(o.e)(o.a(data).sum((function(t){return t.value})).sort((function(a,b){return b.value-a.value}))),d=svg.append("g"),f=d.selectAll("g").data(l.children.concat(l)).join("g").attr("pointer-events","all").attr("class",(function(t){return t===l?"root-tile":"tile"}));f.append("rect").attr("stroke",(function(t){return t===l?"none":"#000"})).attr("stroke-width","0.18em").attr("fill",(function(e){return e===l?"none":t.onHover?"#000":"none"})),f.append("text").attr("class","option").attr("font-weight",(function(t){return t===l?"bold":null})).attr("font-size",(function(t){return t===l?"32px":"19.2px"})).attr("fill","#000").attr("y",(function(t){return t===l?"22.5px":"32px"})).selectAll("tspan").data((function(t){return r.a().width(.35*(n(t.x1)-n(t.x0)))("".concat(t.data.name)).lines})).join("tspan").attr("x",3).attr("dx","15").attr("dy",(function(t,i){return"".concat(20*(0!=i))})).text((function(t){return t})),f.append("text").attr("class","count").attr("font-weight","bold").attr("fill","#000").attr("font-size","32px").attr("y","39px").attr("transform",(function(t){return"translate(".concat(n(t.x1)-n(t.x0)-17,",0)")})).attr("text-anchor","end").selectAll("tspan").data((function(t){return(t===l?"":"".concat(t.value)).split("$")})).join("tspan").text((function(t){return t})),d.selectAll("g").attr("transform",(function(t){return t===l?"translate(-15,-25)":"translate(".concat(n(t.x0),",").concat(c(t.y0)+29,")")})).select("rect").attr("width",(function(e){return e===l?t.width:n(e.x1)-n(e.x0)})).attr("height",(function(t){return t===l?30:c(t.y1)-c(t.y0)})).on("mouseover",(function(e,n){t.$emit("current_list",n===l?[]:n.data.children.map((function(t){return t.name})))})).on("mouseout",(function(e,n){t.$emit("current_list",[])}))}}},l=(n(237),n(17)),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"viz-container"},[e("svg",{ref:"svgContainer",staticClass:"overview-viz"})])}),[],!1,null,null,null);e.default=component.exports},236:function(t,e,n){var content=n(309);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("58d8b57e",content,!0,{sourceMap:!1})},237:function(t,e,n){"use strict";var o=n(219);n.n(o).a},238:function(t,e,n){(e=n(22)(!1)).push([t.i,"g.tile:hover>rect{fill:#000}g.tile:hover>text{fill:#fff}",""]),t.exports=e},239:function(t,e,n){var content=n(311);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("e5c67662",content,!0,{sourceMap:!1})},308:function(t,e,n){"use strict";var o=n(236);n.n(o).a},309:function(t,e,n){(e=n(22)(!1)).push([t.i,"li[data-v-e9119184]{transition:all .3s ease}li[data-v-e9119184]:hover{background:#000}li[data-v-e9119184]:hover,li:hover a[data-v-e9119184]{color:#fff}.second-row-container[data-v-e9119184]{display:flex;width:calc(100vw - 3rem);height:calc(100vh - 6rem)}.second-row-container>*[data-v-e9119184]{border-right:2px solid #000;border-bottom:2px solid #000;display:flex;align-items:center}.is-menu .second-row-container[data-v-e9119184]{height:calc(100vw - 6rem)!important}.DataSection[data-v-e9119184]{position:absolute;top:0;right:0;padding-top:1.2rem;padding-left:2rem;height:10.4rem;z-index:1;width:2.2rem;border:none}.DataSection.is-active[data-v-e9119184]{left:0;height:100%;z-index:0;width:var(--data-container-active)}.DataSection h3[data-v-e9119184]{top:1.2rem}.DataSection__sectionTitle[data-v-e9119184]{top:0;left:1.2rem;position:absolute;transform-origin:top left;transform:rotate(90deg);background-color:#000;color:#fff;width:8rem;font-size:1.2rem;font-weight:700;line-height:1.3rem;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.DataSection__sectionTitle[data-v-e9119184]:hover{background-color:transparent;color:#000;border:1px solid #000}.DataSection__sectionContainer[data-v-e9119184]{width:100%;height:100%;display:flex}.DataSection__col[data-v-e9119184]{position:relative}.DataSection__leftCol[data-v-e9119184]{width:30%;height:100%}.DataSection__midCol[data-v-e9119184]{height:100%;width:40%;border-left:3px solid #000}.DataSection__midCol.is-active[data-v-e9119184]{height:100%;width:70%}.DataSection__dataVizCol[data-v-e9119184]{border-left:none}.DataSection__rightCol[data-v-e9119184]{min-width:2rem;height:100%;width:30%;border-left:3px solid #000}.DataSection__rightCol.is-blur[data-v-e9119184]{border-left:none;width:2rem}.DataSection__rightCol.is-blur h4[data-v-e9119184]{top:18.4rem}.DataSection__rightCol.is-blur .DataSection__textContainer[data-v-e9119184]{display:none;opacity:0}.DataSection__rightCol p[data-v-e9119184]{font-size:2rem}.DataSection__richtextContainer[data-v-e9119184]{overflow:auto;height:100%}.DataSection__textContainer[data-v-e9119184]{padding-left:2rem;padding-right:4rem;overflow:auto;height:100%}",""]),t.exports=e},310:function(t,e,n){"use strict";var o=n(239);n.n(o).a},311:function(t,e,n){(e=n(22)(!1)).push([t.i,".DataViz[data-v-1374bf3c]{overflow:auto;width:100%;height:100%;padding-right:2rem}",""]),t.exports=e},334:function(t,e,n){"use strict";n.r(e);var o={layout:"catalog",data:function(){return{artists:this.$store.state.localeArtistData,onMenu:!1,currentFocus:"",showHighlight:[]}},methods:{toggleArtwork:function(){document.getElementById("artwork").classList.toggle("is-active"),document.getElementById("artinfo").classList.toggle("is-blur")},showList:function(t){this.showHighlight=t}},head:function(){return{title:"Emerging Curators 2020",meta:[{hid:"descriptions",name:"descriptions",content:"descriptions"}]}}},r=(n(308),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rotating",class:{onMenu:t.onMenu}},[n("div",{staticClass:"catalog-grid",class:{onMenu:t.onMenu}},[n("div",{staticClass:"second-row-container"},[n("div",{staticClass:"DataSection is-active"},[n("nuxt-link",{attrs:{to:"/artists"}},[n("h3",{staticClass:"DataSection__sectionTitle"},[t._v("\n            "+t._s(t.$t("links.artists"))+"\n          ")])]),t._v(" "),n("div",{staticClass:"DataSection__sectionContainer"},[n("div",{staticClass:"DataSection__col DataSection__leftCol"},[n("ul",t._l(t.artists,(function(e,o){return n("li",{key:e.id+o,class:[{highlight:t.showHighlight.includes(e.name)},"no-highlight"]},[n("nuxt-link",{attrs:{to:t.$i18n.path("artists/"+e.url)}},[t._v("\n                  "+t._s(e.name)+"\n                ")])],1)})),0)]),t._v(" "),n("div",{staticClass:"DataSection__col DataSection__midCol DataSection__dataVizCol  is-active"},[n("div",{staticClass:"DataSection__richtextContainer"},[n("ArtistsDataViz",{on:{highlight_list:t.showList}})],1)])])],1),t._v(" "),n("GotoButton",{attrs:{route:"institutions",order:1}}),t._v(" "),n("GotoButton",{attrs:{route:"companies",order:2}})],1)]),t._v(" "),n("NaviBar",{on:{"toggle-menu":function(e){t.onMenu=!t.onMenu},"toggle-off-menu":function(e){t.onMenu=!1}}})],1)}),[],!1,null,"e9119184",null);e.default=component.exports;installComponents(component,{ArtistsDataViz:n(338).default,GotoButton:n(215).default,NaviBar:n(206).default})},338:function(t,e,n){"use strict";n.r(e);var o={name:"ArtistsDataViz",components:{OverviewDiagram:n(227).default},data:function(){return{artists_data:this.$store.state.localeArtistsOverview}},methods:{highlightList:function(t){this.$emit("highlight_list",t)}}},r=(n(310),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataViz"},t._l(t.artists_data,(function(e){return n("OverviewDiagram",{key:e.name,attrs:{"current-data":e},on:{current_list:t.highlightList}})})),1)}),[],!1,null,"1374bf3c",null);e.default=component.exports;installComponents(component,{OverviewDiagram:n(227).default})}}]);