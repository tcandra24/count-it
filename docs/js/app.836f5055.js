(function(t){function e(e){for(var a,r,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1577f969","chunk-14d1c153":"825cefa8","chunk-16d97cb0":"9362c50e","chunk-36c9e1ca":"ef1a08cb","chunk-47ae8f54":"6c4b359e"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-47ae8f54":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-14d1c153":"31d6cfe0","chunk-16d97cb0":"31d6cfe0","chunk-36c9e1ca":"31d6cfe0","chunk-47ae8f54":"835711df"}[t]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/count-it/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Nav"),n("router-view"),n("Footer")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"flex items-center justify-between flex-wrap bg-gray-800 p-6 bg-teal-600"},[n("div",{staticClass:"flex items-center flex-shrink-0 text-white mr-6"},[n("span",{staticClass:"font-semibold text-xl tracking-tight"},[t._v(t._s(t.appName))])]),n("div",{staticClass:"block lg:hidden"},[n("button",{staticClass:"flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white",on:{click:t.toggleMenu}},[n("svg",{staticClass:"fill-current h-3 w-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[n("title",[t._v("Menu")]),n("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})])])]),n("div",{staticClass:"w-full block flex-grow lg:flex lg:items-center lg:w-auto",class:t.showMenu?"block":"hidden"},[n("div",{staticClass:"text-sm lg:flex-grow"},[n("router-link",{staticClass:"block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4",class:["/"===t.$route.path?"text-white":"text-gray-400"],attrs:{to:"/"}},[n("div",{staticClass:"text-lg"},[t._v(" Dashboard ")])]),n("router-link",{staticClass:"block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4",class:["/count"===t.$route.path?"text-white":"text-gray-400"],attrs:{to:"/count"}},[n("div",{staticClass:"text-lg"},[t._v(" Count ")])]),n("router-link",{staticClass:"block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4",class:["/categories"===t.$route.path?"text-white":"text-gray-400"],attrs:{to:"/categories"}},[n("div",{staticClass:"text-lg"},[t._v(" Categories ")])]),n("router-link",{staticClass:"block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4",class:["/about"===t.$route.path?"text-white":"text-gray-400"],attrs:{to:"/about"}},[n("div",{staticClass:"text-lg"},[t._v(" About ")])])],1)])])},c=[],s={name:"Nav",data:function(){return{showMenu:!1}},methods:{toggleMenu:function(){this.showMenu=!this.showMenu}}},u=s,l=n("2877"),d=Object(l["a"])(u,i,c,!1,null,null,null),f=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"py-2 bg-gray-200 text-center mt-2 text-gray-500 h-15 mt-10 bottom-0 w-full"},[n("p",{staticClass:"my-3"},[t._v(" "+t._s(t.appName)+" "+t._s(t.versionApp)+" | "+t._s(t._f("moment")(new Date,"YYYY"))+" ")])])},g=[],m={},h=m,v=Object(l["a"])(h,p,g,!1,null,null,null),b=v.exports,w={components:{Nav:f,Footer:b},metaInfo:{titleTemplate:"%s | Count IT"}},k=w,y=(n("034f"),Object(l["a"])(k,r,o,!1,null,null,null)),x=y.exports,C=n("9483");Object(C["a"])("".concat("/count-it/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var _=n("8c4f");a["a"].use(_["a"]);var j=[{path:"/",name:"Home",component:function(){return Promise.all([n.e("chunk-14d1c153"),n.e("chunk-16d97cb0")]).then(n.bind(null,"bb51"))}},{path:"/count",name:"Count",component:function(){return Promise.all([n.e("chunk-14d1c153"),n.e("chunk-47ae8f54")]).then(n.bind(null,"bf9c"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/categories",name:"Categories",component:function(){return Promise.all([n.e("chunk-14d1c153"),n.e("chunk-36c9e1ca")]).then(n.bind(null,"58c2"))}}],D=new _["a"]({mode:"history",base:"/count-it/",routes:j}),O=D,P=n("2f62"),S=n("bfa9"),E=(n("4160"),n("13d5"),n("a434"),n("159b"),{namespaced:!0,state:{transactions:[],budget:0},mutations:{addData:function(t,e){t.transactions.push({id:e.id,nama:e.nama,tanggal:e.tanggal,nominal:e.nominal,keterangan:e.keterangan,pengeluaran:e.pengeluaran,kategori:e.kategori})},updateData:function(t,e){t.transactions.splice(e.index,1,{id:e.id,nama:e.nama,tanggal:e.tanggal,nominal:e.nominal,keterangan:e.keterangan,pengeluaran:e.pengeluaran,kategori:e.kategori})},deleteData:function(t,e){t.transactions.splice(e.id,1)},editBudget:function(t,e){t.budget=e.budget}},actions:{add:function(t,e){var n=t.commit;n("addData",e)},update:function(t,e){var n=t.commit;n("updateData",e)},delete:function(t,e){var n=t.commit;n("deleteData",e)},changeBudget:function(t,e){var n=t.commit;n("editBudget",e)}},getters:{allTransaction:function(t){return t.transactions},countPengeluaran:function(t){return t.transactions.reduce((function(t,e){return e.pengeluaran&&(t=parseInt(t)+parseInt(e.nominal)),t}),0)},countPemasukan:function(t){return t.transactions.reduce((function(t,e){return e.pengeluaran||(t=parseInt(t)+parseInt(e.nominal)),t}),0)},countSisa:function(t){var e=t.budget;return t.transactions.forEach((function(t){e-=parseInt(t.nominal)})),e}}}),N={namespaced:!0,state:{categories:[]},mutations:{addData:function(t,e){t.categories.push({id:e.id,nama:e.nama,keterangan:e.keterangan,warna:e.warna})},updateData:function(t,e){t.categories.splice(e.index,1,{id:e.id,nama:e.nama,keterangan:e.keterangan,warna:e.warna})},deleteData:function(t,e){t.categories.splice(e.id,1)}},actions:{add:function(t,e){var n=t.commit;n("addData",e)},update:function(t,e){var n=t.commit;n("updateData",e)},delete:function(t,e){var n=t.commit;n("deleteData",e)}},getters:{allData:function(t){return t.categories}}},A=new S["a"]({key:"countIt-data",storage:localStorage});a["a"].use(P["a"]);var M=new P["a"].Store({plugins:[A.plugin],state:{},mutations:{},actions:{},modules:{transaction:E,categories:N}}),T=n("1881"),I=n.n(T),B=n("2ead"),$=n.n(B),L=n("5886"),F=n("f260"),H=n("d413"),z=n("1dce"),Y=n.n(z),q=n("58ca"),U=(n("4413"),n("c898"),n("ac1f"),n("5319"),{install:function(t){t.prototype.versionApp="v1.4.0",t.prototype.appName="Count IT",t.prototype.firstUpper=function(t){return t.toLowerCase().replace(/\b[a-z]/g,(function(t){return t.toUpperCase()}))}}});a["a"].use(U),a["a"].use(L["a"]),a["a"].use($.a),a["a"].use(I.a),a["a"].use(H["a"]),a["a"].use(Y.a),a["a"].use(q["a"]),a["a"].use(F["a"],{symbol:"Rp",thousandsSeparator:".",fractionCount:2,fractionSeparator:",",symbolPosition:"front",symbolSpacing:!0}),a["a"].config.productionTip=!1,new a["a"]({router:O,store:M,render:function(t){return t(x)}}).$mount("#app")},"85ec":function(t,e,n){},c898:function(t,e,n){}});
//# sourceMappingURL=app.836f5055.js.map