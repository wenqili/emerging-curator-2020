(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{202:function(t,e,n){var content=n(208);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("b74fb014",content,!0,{sourceMap:!1})},203:function(t,e,n){var content=n(210);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("087c5c17",content,!0,{sourceMap:!1})},204:function(t,e,n){var content=n(212);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("934cdd70",content,!0,{sourceMap:!1})},205:function(t,e,n){"use strict";n.r(e);var o={name:"NaviBar",props:{},data:function(){return{isMenu:!1,showMenuList:!1}},methods:{toggleMenu:function(){this.isMenu=!this.isMenu,this.$emit("toggle-menu")},toggleOffMenu:function(){this.isMenu=!1,this.$emit("toggle-off-menu")},toggleMenuList:function(){this.showMenuList=!this.showMenuList}}},r=(n(207),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navi-bar"},[n("nav",[n("nuxt-link",{staticClass:"siteTitle",attrs:{to:t.$i18n.path("")}},[t._v("\n      "+t._s(t.$t("home.title"))+"\n    ")]),t._v(" "),t.showMenuList?n("div",{on:{click:t.toggleMenuList}},[n("div",{staticClass:"about"},[t.isMenu?n("button",{staticClass:"clear",on:{click:t.toggleMenu}},[t._v("\n          "+t._s(t.$t("links.home"))+"\n        ")]):n("button",{staticClass:"clear",on:{click:t.toggleMenu}},[t._v("\n          "+t._s(t.$t("links.onlineResidency"))+"\n        ")]),t._v(" "),n("a",{attrs:{href:"mailto:trigger.trigger.art@gmail.com"}},[t._v("\n          "+t._s(t.$t("links.contact"))+"\n        ")]),t._v(" "),n("nuxt-link",{attrs:{to:t.$i18n.path("about")}},[t._v("\n          "+t._s(t.$t("links.about"))+"\n        ")]),t._v(" "),n("font-awesome-icon",{attrs:{icon:"slash"}}),t._v(" "),n("button",{staticClass:"clear"},[t._v("\n          "+t._s(t.$t("links.menu"))+"\n        ")])],1)]):n("button",{staticClass:"clear",class:{"is-focused":t.showMenuList},on:{click:t.toggleMenuList}},[t.showMenuList?t._e():n("font-awesome-icon",{attrs:{icon:"grip-lines"}}),t._v(" "),n("span",[t._v(t._s(t.$t("links.menu")))])],1)],1),t._v(" "),n("ResidencySection")],1)}),[],!1,null,"261d2780",null);e.default=component.exports;installComponents(component,{ResidencySection:n(213).default})},206:function(t,e,n){var content=n(221);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("777ab38c",content,!0,{sourceMap:!1})},207:function(t,e,n){"use strict";var o=n(202);n.n(o).a},208:function(t,e,n){(e=n(22)(!1)).push([t.i,"button span[data-v-261d2780]{display:block}.navi-bar[data-v-261d2780]{position:relative;height:100%;border-left:3px solid #000;border-right:3px solid #000;width:var(--menu-full-width);left:var(--reserve-width)}.navi-bar nav[data-v-261d2780]{position:absolute;width:100%;display:flex;flex-direction:column;justify-content:space-between;height:100%}.navi-item[data-v-261d2780]{position:relative;z-index:1;padding:.5rem;border:none;background:none;outline:transparent}.navi-item.is-focused[data-v-261d2780]{font-weight:900}.siteTitle[data-v-261d2780]{font-size:.8rem;color:#000;font-weight:700;line-height:1.2;white-space:pre-line}.clear[data-v-261d2780],.siteTitle[data-v-261d2780]{background-color:transparent;padding:.5rem}.clear[data-v-261d2780]{border:none;font-weight:900;cursor:pointer}.about[data-v-261d2780]{height:15rem;display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;transition:all .3s ease}.about a[data-v-261d2780]{font-size:.9rem;font-weight:900;line-height:1;font-family:var(--secondary-font)}",""]),t.exports=e},209:function(t,e,n){"use strict";var o=n(203);n.n(o).a},210:function(t,e,n){(e=n(22)(!1)).push([t.i,"#langButton[data-v-6a9636d8]{border:none;margin-right:.5rem;background:transparent;font-size:1.2rem;width:4rem;height:3rem;text-align:center;right:0;bottom:0;position:absolute;display:flex;justify-content:center;line-height:1;align-items:center}.residency-containert[data-v-6a9636d8]{position:absolute;left:calc(-100vw + var(--reserve-width) + var(--menu-full-width) - 3px);bottom:0;width:calc(100vw - var(--reserve-width) - var(--menu-full-width));height:100vh}.top-section[data-v-6a9636d8]{height:3rem;border-bottom:3px solid #000;justify-content:space-between}.top-section[data-v-6a9636d8],h2[data-v-6a9636d8]{display:flex;align-items:center}h2[data-v-6a9636d8]{font-size:1.5rem;padding-left:1rem;width:80%;border-right:3px solid #000}form[data-v-6a9636d8],h2[data-v-6a9636d8]{height:100%}form[data-v-6a9636d8]{display:flex;align-content:center;justify-content:space-between;padding:.5rem 0}form input[data-v-6a9636d8]{font-size:1.5rem;margin-left:.5rem}form button[data-v-6a9636d8],form input[data-v-6a9636d8]{border:none;background:transparent}form button[data-v-6a9636d8]{margin-right:.5rem;font-size:1.2rem;width:2rem}.bottom-section[data-v-6a9636d8]{height:calc(100% - 7rem);border-bottom:3px solid #000;border-right:none;border-top:none}iframe[data-v-6a9636d8]{border:1px solid transparent}",""]),t.exports=e},211:function(t,e,n){"use strict";var o=n(204);n.n(o).a},212:function(t,e,n){(e=n(22)(!1)).push([t.i,".cal[data-v-26fffbb6]{display:grid;grid-template-columns:repeat(7,1fr);grid-template-rows:repeat(4,1fr);grid-column-gap:0;grid-row-gap:0}.cal[data-v-26fffbb6],.item[data-v-26fffbb6]{height:100%}.item[data-v-26fffbb6]{border-top:1px solid #000;border-left:1px solid #000;width:100%;padding:.5rem}.item.is-active[data-v-26fffbb6]{background:#000;color:#fff}",""]),t.exports=e},213:function(t,e,n){"use strict";n.r(e);var o={name:"MenuSection"},r=(n(209),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[n("div",{staticClass:"residency-containert"},[n("div",{staticClass:"top-section"},[n("h2",[t._v(t._s(t.$t("links.onlineResidency")))]),t._v(" "),n("form",[n("input",{attrs:{type:"text",value:"Search"}}),t._v(" "),n("button",[n("font-awesome-icon",{attrs:{icon:"search"}})],1)])]),t._v(" "),n("div",{staticClass:"bottom-section"},[n("Calendar")],1),t._v(" "),n("div",{attrs:{id:"langButton"}},["cn"===t.$i18n.locale?n("NuxtLink",{staticClass:"Header__Link",attrs:{to:"/en"+t.$route.fullPath,"active-class":"none",exact:""}},[t._v("\n        CN\n        "),n("br"),t._v("EN\n      ")]):n("NuxtLink",{staticClass:"Header__Link",attrs:{to:t.$route.fullPath.replace(/^\/[^\/]+/,""),"active-class":"none",exact:""}},[t._v("\n        CN\n        "),n("br"),t._v("EN\n      ")])],1)])])}),[],!1,null,"6a9636d8",null);e.default=component.exports;installComponents(component,{Calendar:n(214).default})},214:function(t,e,n){"use strict";n.r(e);var o={name:"Calendar"},r=(n(211),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cal"},t._l(28,(function(e,o){return n("div",{key:o,staticClass:"item",class:{"is-active":10===e||19===e||20===e}},[n("h4",[t._v("日期")]),t._v(" "),n("p",[t._v("2020年10月"+t._s(e)+"日")]),t._v(" "),10===e?n("p",[t._v("\n      Trigger critique 马拉松\n    ")]):t._e(),t._v(" "),19===e?n("p",[t._v("\n      Pioneer Works\n    ")]):t._e()])})),0)}),[],!1,null,"26fffbb6",null);e.default=component.exports},215:function(t,e,n){"use strict";n.r(e);n(199);var o={name:"GoToButton",props:{order:{type:Number,default:0},route:{type:String,default:"artists"}}},r=(n(220),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataSection",class:[{"is-active":0===t.order},{"middle-section":0===t.order},{"middle-section":1===t.order},{"right-section":2===t.order}]},[n("nuxt-link",{attrs:{to:t.$i18n.path(t.route)}},[n("h3",{staticClass:"DataSection__sectionTitle"},[t._v("\n      "+t._s(t.$t("links")[t.route])+"\n    ")])])],1)}),[],!1,null,"44eba9fa",null);e.default=component.exports},220:function(t,e,n){"use strict";var o=n(206);n.n(o).a},221:function(t,e,n){(e=n(22)(!1)).push([t.i,".right-section[data-v-44eba9fa]{top:9.2rem!important}.DataSection[data-v-44eba9fa]{position:absolute;top:0;right:0;padding-top:1.2rem;padding-left:2rem;height:10.4rem;z-index:1;width:2.2rem;border:none}.DataSection *[data-v-44eba9fa]{transition:all .3s ease}.DataSection h3[data-v-44eba9fa]{top:1.2rem}.DataSection__sectionTitle[data-v-44eba9fa]{top:0;left:1.2rem;position:absolute;transform-origin:top left;transform:rotate(90deg);background-color:#000;color:#fff;width:8rem;font-size:1.2rem;font-weight:700;line-height:1.3rem;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-transform:capitalize;padding-top:.1rem}.DataSection__sectionTitle[data-v-44eba9fa]:hover{background-color:#fff;color:#000;border:1px solid #000}",""]),t.exports=e},240:function(t,e,n){var content=n(315);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("6c9265e0",content,!0,{sourceMap:!1})},241:function(t,e,n){var content=n(317);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("fb035218",content,!0,{sourceMap:!1})},314:function(t,e,n){"use strict";var o=n(240);n.n(o).a},315:function(t,e,n){(e=n(22)(!1)).push([t.i,".first-row-container[data-v-35e8c336]{display:flex;width:calc(100vw - 3rem);height:3rem}.first-row-container>*[data-v-35e8c336]{border-right:2px solid #000;border-bottom:2px solid #000;display:flex;align-items:center;transition:all .2s linear}.artist-collection[data-v-35e8c336]{width:3rem;border-bottom:none}.artist-collection.is-active[data-v-35e8c336]{border-bottom:2px solid #000;flex-grow:2}.insititution-collection[data-v-35e8c336]{width:3rem;border-bottom:none}.insititution-collection.is-active[data-v-35e8c336]{border-bottom:2px solid #000;flex-grow:2}.company-collection[data-v-35e8c336]{width:3rem;border-bottom:none}.company-collection.is-active[data-v-35e8c336]{border-bottom:2px solid #000;flex-grow:2}.second-row-container[data-v-35e8c336]{display:flex;width:calc(100vw - 3rem);height:calc(100vh - 6rem)}.second-row-container>*[data-v-35e8c336]{border-right:2px solid #000;border-bottom:2px solid #000;display:flex;align-items:center}.onMenu .second-row-container[data-v-35e8c336]{height:calc(100vw - 6rem)!important}.middle-section.company[data-v-35e8c336],.right-section.artist[data-v-35e8c336],.right-section.insititution[data-v-35e8c336]{top:9.2rem}a.nuxt-link-active[data-v-35e8c336]{background-color:#000;color:#fff}.DataSection[data-v-35e8c336]{position:absolute;top:0;right:0;padding-top:1.2rem;padding-left:2rem;height:10.4rem;z-index:1;width:1rem;border:none}.DataSection *[data-v-35e8c336]{transition:background-color .3s ease}.DataSection.is-active[data-v-35e8c336]{left:0;height:100%;z-index:0;width:var(--data-container-active)}.DataSection h3[data-v-35e8c336]{top:1.2rem}.DataSection__sectionTitle[data-v-35e8c336]{top:0;left:1.2rem;position:absolute;transform-origin:top left;transform:rotate(90deg);background-color:#000;color:#fff;width:8rem;font-size:1.2rem;font-weight:700;line-height:1.3rem;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.DataSection__sectionTitle[data-v-35e8c336]:hover{background-color:transparent;color:#000;border:1px solid #000}.DataSection__sectionContainer[data-v-35e8c336]{width:100%;height:100%;display:flex}.DataSection__col[data-v-35e8c336]{position:relative}.DataSection__leftCol[data-v-35e8c336]{width:30%;height:100%}.DataSection__midCol[data-v-35e8c336]{height:100%;width:40%;border-left:3px solid #000}.DataSection__midCol.is-active[data-v-35e8c336]{height:100%;width:70%}.DataSection__dataVizCol[data-v-35e8c336]{border-left:none}.DataSection__rightCol[data-v-35e8c336]{min-width:2rem;height:100%;width:30%;border-left:3px solid #000}.DataSection__rightCol.is-blur[data-v-35e8c336]{border-left:none;width:2rem}.DataSection__rightCol.is-blur h4[data-v-35e8c336]{top:18.4rem}.DataSection__rightCol.is-blur .DataSection__textContainer[data-v-35e8c336]{display:none;opacity:0}.DataSection__rightCol p[data-v-35e8c336]{font-size:2rem}.DataSection__richtextContainer[data-v-35e8c336]{overflow:auto;height:100%}.DataSection__textContainer[data-v-35e8c336]{padding-left:2rem;padding-right:4rem;overflow:auto;height:100%}figure[data-v-35e8c336]{display:flex;justify-content:center;align-items:center;margin-bottom:2rem}figure img[data-v-35e8c336]{width:100%}",""]),t.exports=e},316:function(t,e,n){"use strict";var o=n(241);n.n(o).a},317:function(t,e,n){(e=n(22)(!1)).push([t.i,"*[data-v-6cac9886]{box-sizing:border-box}div[data-v-6cac9886]{flex-wrap:wrap;padding-bottom:3rem;padding-left:3rem}div[data-v-6cac9886],figure[data-v-6cac9886]{display:flex}figure[data-v-6cac9886]{width:30%;height:10rem;flex-grow:1;padding:1rem;justify-content:center;align-content:center}figure div[data-v-6cac9886]{background-size:contain;background-repeat:no-repeat;background-position:50%;width:100%;height:100%}figure.is-active[data-v-6cac9886]{border:3px solid #000}",""]),t.exports=e},339:function(t,e,n){"use strict";n.r(e);n(28);var o={layout:"catalog",components:{},data:function(){return{current:"",companies:this.$store.state.localeCompanyData,onMenu:!1,currentFocus:"companies"}},created:function(){this.name=this.$route.params.artist},methods:{toggleArtwork:function(){document.getElementById("artwork").classList.toggle("is-active"),document.getElementById("artinfo").classList.toggle("is-blur")}},head:function(){return{title:"Emerging Curators 2020",meta:[{hid:"descriptions",name:"descriptions",content:"descriptions"}]}}},r=(n(314),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rotating",class:{onMenu:t.onMenu}},[n("div",{staticClass:"catalog-grid",class:{onMenu:t.onMenu}},[n("div",{staticClass:"second-row-container"},[n("div",{staticClass:"DataSection is-active"},[n("h3",{staticClass:"DataSection__sectionTitle"},[t._v("\n          "+t._s(t.$t("links.companies"))+"\n        ")]),t._v(" "),n("div",{staticClass:"DataSection__sectionContainer"},[n("div",{staticClass:"DataSection__col DataSection__leftCol"},[n("div",[n("ul",t._l(t.companies,(function(e){return n("li",{key:e.companyid,class:{"is-active":""+e.companyid===t.current},on:{mouseover:function(n){t.current=""+e.companyid}}},[n("p",[t._v(t._s(e.company))])])})),0)])]),t._v(" "),n("div",{staticClass:"DataSection__col DataSection__midCol DataSection__dataVizCol  is-active"},[n("div",{staticClass:"DataSection__richtextContainer"},[n("CompanyDataViz",{attrs:{current:t.current}})],1)])])]),t._v(" "),n("GotoButton",{attrs:{route:"artists",order:1}}),t._v(" "),n("GotoButton",{attrs:{route:"institutions",order:2}})],1)]),t._v(" "),n("NaviBar",{on:{"toggle-menu":function(e){t.onMenu=!t.onMenu},"toggle-off-menu":function(e){t.onMenu=!1}}})],1)}),[],!1,null,"35e8c336",null);e.default=component.exports;installComponents(component,{CompanyDataViz:n(343).default,GotoButton:n(215).default,NaviBar:n(205).default})},343:function(t,e,n){"use strict";n.r(e);var o=n(83),r={name:"CompanyDataViz",props:{current:{type:String,default:"0"}},data:function(){return{companies:o}}},c=(n(316),n(17)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.companies,(function(e,o){return n("figure",{key:o,class:{"is-active":""+e.companyid===t.current}},[n("div",{style:"backgroundImage: url(./company/"+e.companyid+"/1.png)"})])})),0)}),[],!1,null,"6cac9886",null);e.default=component.exports}}]);