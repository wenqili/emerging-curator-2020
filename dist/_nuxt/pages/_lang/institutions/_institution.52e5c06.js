(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{223:function(t,e,n){var content=n(254);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("ec26afd4",content,!0,{sourceMap:!1})},253:function(t,e,n){"use strict";var o=n(223);n.n(o).a},254:function(t,e,n){(e=n(22)(!1)).push([t.i,".second-row-container[data-v-7b6e399c]{display:flex;width:calc(100vw - 3rem);height:calc(100vh - 6rem)}.second-row-container>*[data-v-7b6e399c]{border-right:2px solid #000;display:flex;align-items:center;transition:all .3s ease}.onMenu .second-row-container[data-v-7b6e399c]{height:calc(100vw - 6rem)!important}.middle-section.company[data-v-7b6e399c],.right-section.Artist[data-v-7b6e399c],.right-section.Insititutions[data-v-7b6e399c]{top:9.2rem}li[data-v-7b6e399c]{font-size:2rem}li a[data-v-7b6e399c]{padding:.25rem .5rem;display:block;width:100%}figure[data-v-7b6e399c]{display:flex;justify-content:center;align-items:center;margin-bottom:2rem}figure img[data-v-7b6e399c]{width:100%}",""]),t.exports=e},264:function(t,e,n){"use strict";n.r(e);n(28);var o={layout:"catalog",components:{},data:function(){return{cleanArtists:this.$store.state.localeArtistData,onMenu:!1,currentFocus:"institutions",name:"test"}},created:function(){this.name=this.$route.params.artist},methods:{toggleArtwork:function(){document.getElementById("artwork").classList.toggle("is-active"),document.getElementById("artinfo").classList.toggle("is-blur")}}},r=(n(253),n(17)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rotating",class:{onMenu:t.onMenu}},[n("div",{staticClass:"catalog-grid",class:{onMenu:t.onMenu}},[n("div",{staticClass:"second-row-container"},[n("Slide",{attrs:{category:{left:"institutions",middle:"information",right:"research"},"current-focus":t.currentFocus},on:{"focus-on-slide":function(e){t.currentFocus="institutions"}}}),t._v(" "),n("GotoButton",{attrs:{route:"artists",order:1}}),t._v(" "),n("GotoButton",{attrs:{route:"companies",order:2}})],1)]),t._v(" "),n("NaviBar",{on:{"toggle-menu":function(e){t.onMenu=!t.onMenu},"toggle-off-menu":function(e){t.onMenu=!1}}})],1)}),[],!1,null,"7b6e399c",null);e.default=component.exports;installComponents(component,{Slide:n(229).default,GotoButton:n(215).default,NaviBar:n(205).default})}}]);