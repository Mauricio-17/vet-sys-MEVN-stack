(function(t){function e(e){for(var n,a,o=e[0],c=e[1],u=e[2],l=0,p=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var o=r[a];0!==s[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"00f55572"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={about:1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"bf16d0f6"}[t]+".css",s=c.p+n,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===s))return e()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){u=p[o],l=u.getAttribute("data-href");if(l===n||l===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[t],f.parentNode.removeChild(f),r(i)},f.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,r){n=s[t]=[e,r]}));e.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t);var p=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var r=s[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",p.name="ChunkLoadError",p.type=n,p.request=a,r[1](p)}s[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var f=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[t.isLogged?r("v-navigation-drawer",{staticClass:"d-block d-sm-none",attrs:{width:"210",color:"blue lighten-3",clipped:t.$vuetify.breakpoint.lgAndUp,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-6"}},[r("v-list-item",{attrs:{to:"/clients"}},[r("v-list-item-title",[t._v(" CLIENTES ")])],1),r("v-list-item",{attrs:{to:"/species"}},[r("v-list-item-title",[t._v(" ESPECIES ")])],1),r("v-list-item",{attrs:{to:"/mascots"}},[r("v-list-item-title",[t._v(" MASCOTAS ")])],1),r("v-list-item",[r("v-list-item-title",[r("v-btn",{attrs:{color:"blue lighten-3"},on:{click:function(e){t.dialog=!0}}},[t._v(" CERRAR SESIÓN ")])],1)],1)],1)],1)],1):t._e(),r("v-app-bar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),r("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),r("v-spacer"),r("div",{staticClass:"d-none d-sm-block"},[t.isLogged?r("router-link",{attrs:{to:"/clients"}},[r("v-btn",{attrs:{text:""}},[r("span",{staticClass:"mr-2"},[t._v("Clientes")])])],1):t._e(),t.isLogged?r("router-link",{attrs:{to:"/mascots"}},[r("v-btn",{attrs:{text:""}},[r("span",{staticClass:"mr-2"},[t._v("Mascotas")])])],1):t._e(),t.isLogged?r("router-link",{attrs:{to:"/species"}},[r("v-btn",{attrs:{text:""}},[r("span",{staticClass:"mr-2"},[t._v("Especies")])])],1):t._e(),t.isLogged?r("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!0}}},[r("span",{staticClass:"mr-2"},[t._v("Cerrar Sesión")])]):t._e()],1),t.isLogged?t._e():r("router-link",{attrs:{to:"/login"}},[r("v-btn",{attrs:{text:""}},[r("span",{staticClass:"mr-2"},[t._v("Ingresar")])])],1),t.isLogged?t._e():r("router-link",{attrs:{to:"/signUp"}},[r("v-btn",{attrs:{text:""}},[r("span",{staticClass:"mr-2"},[t._v("Registrarse")])])],1),t.isLogged?r("v-app-bar-nav-icon",{staticClass:"d-block d-sm-none",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}):t._e(),r("v-dialog",{attrs:{persistent:"","max-width":"275"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-container",[r("v-row",{attrs:{justify:"center"}},[r("v-col",[r("h1",[r("span",{staticClass:"mr-2 text-primary"},[t._v("¿Desea cerrar sesión?")])])])],1),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"4"}},[r("v-btn",{attrs:{color:"warning"},on:{click:function(e){t.dialog=!1}}},[t._v(" NO ")])],1),r("v-col",{attrs:{cols:"4"}},[r("v-btn",{attrs:{color:"primary"},on:{click:t.signOut}},[t._v(" SI ")])],1)],1)],1)],1)],1)],1),r("v-main",[r("router-view")],1)],1)},s=[],i=r("1da1"),o=r("5530"),c=(r("96cf"),r("2f62")),u={name:"App",data:function(){return{drawer:!1,dialog:!1}},computed:Object(o["a"])({},Object(c["c"])("user",["isLogged"])),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(c["b"])("specie",["readSpecies"])),Object(c["b"])("client",["readClients"])),Object(c["b"])("mascot",["readMascots"])),Object(c["b"])("user",["logOut"])),{},{signOut:function(){this.logOut(),this.dialog=!1,this.drawer=!1}}),created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isLogged){e.next=7;break}return e.next=3,t.readSpecies();case 3:return e.next=5,t.readMascots();case 5:return e.next=7,t.readClients();case 7:case"end":return e.stop()}}),e)})))()}},l=u,p=r("2877"),f=r("6544"),d=r.n(f),m=r("7496"),v=r("40dc"),h=r("5bc1"),g=r("8336"),b=r("b0af"),w=r("62ad"),y=r("a523"),x=r("169a"),_=r("adda"),k=r("8860"),C=r("da13"),j=r("1baa"),O=r("5d23"),L=r("f6c4"),S=r("f774"),R=r("0fd9"),E=r("2fa4"),V=Object(p["a"])(l,a,s,!1,null,null,null),M=V.exports;d()(V,{VApp:m["a"],VAppBar:v["a"],VAppBarNavIcon:h["a"],VBtn:g["a"],VCard:b["a"],VCol:w["a"],VContainer:y["a"],VDialog:x["a"],VImg:_["a"],VList:k["a"],VListItem:C["a"],VListItemGroup:j["a"],VListItemTitle:O["b"],VMain:L["a"],VNavigationDrawer:S["a"],VRow:R["a"],VSpacer:E["a"]});r("d3b7"),r("3ca3"),r("ddb0");var F=r("8c4f"),A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("hello-world")},I=[],U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12"}},[n("v-img",{staticClass:"my-3",attrs:{src:r("9b19"),contain:"",height:"200"}})],1),n("v-col",{staticClass:"mb-4"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),n("br"),t._v("please join our online "),n("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,r){return n("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,r){return n("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,r){return n("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},N=[],T={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},P=T,q=Object(p["a"])(P,U,N,!1,null,null,null),D=q.exports;d()(q,{VCol:w["a"],VContainer:y["a"],VImg:_["a"],VRow:R["a"]});var W={name:"Home",components:{HelloWorld:D}},B=W,$=Object(p["a"])(B,A,I,!1,null,null,null),H=$.exports,J=r("bc3a"),G=r.n(J),K=r("1232"),Q="http://localhost:4000/api";G.a.defaults.baseURL=Q;var z={namespaced:!0,state:{user:"",token:localStorage.getItem("token")||"",loading:!1},mutations:{setUser:function(t,e){t.token=e,t.user=e?Object(K["a"])(e):""}},actions:{saveUser:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,r){var n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,G.a.post("/login",r);case 4:return a=t.sent,s=a.data.token,localStorage.setItem("token",s),n("setUser",s),t.abrupt("return",a);case 11:return t.prev=11,t.t0=t["catch"](1),t.abrupt("return",t.t0.response);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));function e(e,r){return t.apply(this,arguments)}return e}(),logOut:function(t){var e=t.commit;localStorage.removeItem("token"),e("setUser",""),it.push({name:"Login"})},readToken:function(t){var e=t.commit,r=localStorage.getItem("token");e("setUser",r||"")},createUser:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.commit,t.prev=1,t.next=4,G.a.post("/users",r);case 4:return n=t.sent,t.abrupt("return",n);case 8:return t.prev=8,t.t0=t["catch"](1),t.abrupt("return",t.t0.response);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));function e(e,r){return t.apply(this,arguments)}return e}()},getters:{isLogged:function(t){return!!t.token}}},X=(r("159b"),r("4de4"),r("2ca0"),"http://localhost:4000/api");G.a.defaults.baseURL=X;var Y={namespaced:!0,state:{mascots:[],masFiltered:[],loading:!1},mutations:{setLoading:function(t,e){t.loading=e},setMascots:function(t,e){t.mascots=e,t.masFiltered=e},setMascot:function(t,e){t.mascots.push(e),t.masFiltered.push(e)},updateMascot:function(t,e){var r=e._id;t.mascots.forEach((function(t){if(t._id===r)return e})),t.masFiltered.forEach((function(t){if(t._id===r)return e}))},deleteMascot:function(t,e){var r=e._id;t.mascots=t.mascots.filter((function(t){return t._id!==r})),t.masFiltered=t.mascots.filter((function(t){return t._id!==r}))},filterMascots:function(t,e){t.masFiltered=t.mascots.filter((function(t){var r=t[e.property].toLowerCase();if(e.value=e.value.toLowerCase(),r.startsWith(e.value))return t}))}},actions:{readMascots:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,r("setLoading",!0),t.next=5,G.a.get("/mascots");case 5:n=t.sent,r("setMascots",n.data),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0);case 12:return t.prev=12,r("setLoading",!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));function e(e){return t.apply(this,arguments)}return e}(),createMascot:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,r){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,G.a.post("/mascots",r);case 4:return a=t.sent,n("setMascot",a.data),t.abrupt("return",a);case 9:return t.prev=9,t.t0=t["catch"](1),t.abrupt("return",t.t0.response);case 12:case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));function e(e,r){return t.apply(this,arguments)}return e}(),updateMascot:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G.a.put("/mascots/".concat(e._id),e);case 3:return r=t.sent,commit("updateMascot",r.data),t.abrupt("return",r);case 8:return t.prev=8,t.t0=t["catch"](0),t.abrupt("return",t.t0.response);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));function e(e){return t.apply(this,arguments)}return e}(),deleteMascot:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G.a.delete("mascots/".concat(e._id),e);case 3:return r=t.sent,commit("deleteMascot",e),t.abrupt("return",r);case 8:return t.prev=8,t.t0=t["catch"](0),t.abrupt("return",t.t0.response);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));function e(e){return t.apply(this,arguments)}return e}()},getters:{}},Z=(r("b0c0"),"http://localhost:4000/api");G.a.defaults.baseURL=Z;var tt={namespaced:!0,state:{clients:[],cliFiltered:[],loading:!1},mutations:{setLoading:function(t,e){t.loading=e},setClients:function(t,e){t.clients=e,t.cliFiltered=e},setClient:function(t,e){t.clients.push(e),t.cliFiltered.push(e)},updateClient:function(t,e){var r=e._id;t.clients.forEach((function(t){if(t._id===r)return e})),t.cliFiltered.forEach((function(t){if(t._id===r)return e}))},deleteClient:function(t,e){var r=e._id;t.clients=t.clients.filter((function(t){return t._id!==r})),t.cliFiltered=t.cliFiltered.filter((function(t){return t._id!==r}))},filterClients:function(t,e){t.cliFiltered=t.clients.filter((function(t){var r=t.name.toLowerCase();if(e=e.toLowerCase(),r.startsWith(e))return t}))}},actions:{readClients:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,r("setLoading",!0),t.next=5,G.a.get("/clients");case 5:n=t.sent,r("setClients",n.data),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0);case 12:return t.prev=12,r("setLoading",!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));function e(e){return t.apply(this,arguments)}return e}(),createClient:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,r){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,G.a.post("/clients",r);case 4:return a=t.sent,n("setClient",a.data),t.abrupt("return",a);case 9:return t.prev=9,t.t0=t["catch"](1),t.abrupt("return",t.t0.response);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));function e(e,r){return t.apply(this,arguments)}return e}(),updateClient:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,r){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,G.a.put("/clients/".concat(r._id),r);case 4:return a=t.sent,n("updateClient",a.data),t.abrupt("return",a);case 9:return t.prev=9,t.t0=t["catch"](1),t.abrupt("return",t.t0.response);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));function e(e,r){return t.apply(this,arguments)}return e}(),deleteClient:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,r){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,G.a.delete("/clients/".concat(r._id));case 4:return a=t.sent,n("deleteClient",r),t.abrupt("return",a);case 9:return t.prev=9,t.t0=t["catch"](1),t.abrupt("return",t.t0.response);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));function e(e,r){return t.apply(this,arguments)}return e}()},getters:{}},et="http://localhost:4000/api";G.a.defaults.baseURL=et;var rt={namespaced:!0,state:{species:[],speFiltered:[],loading:!1},mutations:{setLoading:function(t,e){t.loading=e},setSpecies:function(t,e){t.species=e,t.speFiltered=e},setSpecie:function(t,e){t.species.push(e),t.speFiltered.push(e)},updateSpecie:function(t,e){var r=e._id;t.species.forEach((function(t){if(t._id===r)return e})),t.speFiltered.forEach((function(t){if(t._id===r)return e}))},deleteSpecie:function(t,e){var r=e._id;t.species=t.species.filter((function(t){return t._id!==r})),t.speFiltered=t.speFiltered.filter((function(t){return t._id!==r}))},filterSpecies:function(t,e){t.speFiltered=t.species.filter((function(t){var r=t.name.toLowerCase();if(e=e.toLowerCase(),r.startsWith(e))return t}))}},actions:{readSpecies:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,r("setLoading",!0),t.next=5,G.a.get("/species");case 5:n=t.sent,r("setSpecies",n.data),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0);case 12:return t.prev=12,r("setLoading",!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));function e(e){return t.apply(this,arguments)}return e}(),createSpecie:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,r){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,G.a.post("/species",r);case 4:return a=t.sent,n("setSpecie",a.data),t.abrupt("return",a);case 9:return t.prev=9,t.t0=t["catch"](1),t.abrupt("return",t.t0.response);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));function e(e,r){return t.apply(this,arguments)}return e}(),updateSpecie:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,r){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,G.a.put("/species/".concat(r._id),r);case 4:return a=t.sent,n("updateSpecie",a.data),t.abrupt("return",a);case 9:return t.prev=9,t.t0=t["catch"](1),t.abrupt("return",t.t0.response);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));function e(e,r){return t.apply(this,arguments)}return e}(),deleteSpecie:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,r){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,G.a.delete("/species/".concat(r._id));case 4:return a=t.sent,n("deleteSpecie",r),t.abrupt("return",a);case 9:return t.prev=9,t.t0=t["catch"](1),t.abrupt("return",t.t0.response);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));function e(e,r){return t.apply(this,arguments)}return e}()},getters:{}};n["a"].use(c["a"]);var nt=new c["a"].Store({state:{},mutations:{},actions:{},modules:{user:z,client:tt,mascot:Y,specie:rt}});n["a"].use(F["a"]);var at=[{path:"/",name:"Home",component:H},{path:"/login",name:"Login",component:function(){return r.e("about").then(r.bind(null,"a55b"))},beforeEnter:function(t,e,r){var n=localStorage.getItem("token");n?r({name:"Clients"}):r()}},{path:"/clients",name:"Clients",component:function(){return r.e("about").then(r.bind(null,"58f3"))},meta:{requiresAuth:!0}},{path:"/mascots",name:"Mascots",component:function(){return r.e("about").then(r.bind(null,"9acd"))},meta:{requiresAuth:!0}},{path:"/signUp",name:"SignUp",component:function(){return r.e("about").then(r.bind(null,"5c9c"))},beforeEnter:function(t,e,r){var n=localStorage.getItem("token");n?r({name:"Clients"}):r()}},{path:"/species",name:"Species",component:function(){return r.e("about").then(r.bind(null,"8c0f"))},meta:{requiresAuth:!0}}],st=new F["a"]({mode:"history",base:"/",routes:at});st.beforeEach((function(t,e,r){var n=localStorage.getItem("token");t.meta.requiresAuth?n?r():r("/login"):r()}));var it=st,ot=(r("15f5"),r("f309"));n["a"].use(ot["a"]);var ct=new ot["a"]({icons:{iconfont:"mdiSvg"}});n["a"].config.productionTip=!1,new n["a"]({router:it,store:nt,vuetify:ct,render:function(t){return t(M)}}).$mount("#app")},"9b19":function(t,e,r){t.exports=r.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.b6b99ef0.js.map