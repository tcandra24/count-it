(function(t){function a(a){for(var n,i,o=a[0],l=a[1],c=a[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(a);while(f.length)f.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],n=!0,i=1;i<e.length;i++){var l=e[i];0!==s[l]&&(n=!1)}n&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var n={},s={app:0},r=[];function i(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9a47ed8c"}[t]+".js"}function o(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(t){var a=[],e=s[t];if(0!==e)if(e)a.push(e[2]);else{var n=new Promise((function(a,n){e=s[t]=[a,n]}));a.push(e[2]=n);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(t);var c=new Error;r=function(a){l.onerror=l.onload=null,clearTimeout(u);var e=s[t];if(0!==e){if(e){var n=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",c.name="ChunkLoadError",c.type=n,c.request=r,e[1](c)}s[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(a)},o.m=t,o.c=n,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)o.d(e,n,function(a){return t[a]}.bind(null,n));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/count-it/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var d=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var n=e("85ec"),s=e.n(n);s.a},4678:function(t,a,e){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var a=r(t);return e(a)}function r(t){if(!e.o(n,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=r,t.exports=s,s.id="4678"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Nav"),e("router-view"),e("Footer")],1)},r=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"flex items-center justify-between flex-wrap bg-gray-800 p-6"},[t._m(0),e("div",{staticClass:"block lg:hidden"},[e("button",{staticClass:"flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"},[e("svg",{staticClass:"fill-current h-3 w-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[e("title",[t._v("Menu")]),e("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})])])]),e("div",{staticClass:"w-full block flex-grow lg:flex lg:items-center lg:w-auto"},[e("div",{staticClass:"text-sm lg:flex-grow"},[e("router-link",{staticClass:"block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4",class:["/"===t.$route.path?"text-white":"text-gray-200"],attrs:{to:"/"}},[t._v(" Home ")]),e("router-link",{staticClass:"block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4",class:["/count"===t.$route.path?"text-white":"text-gray-200"],attrs:{to:"/count"}},[t._v(" Count ")]),e("router-link",{staticClass:"block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4",class:["/about"===t.$route.path?"text-white":"text-gray-200"],attrs:{to:"/about"}},[t._v(" About ")])],1)])])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"flex items-center flex-shrink-0 text-white mr-6"},[e("span",{staticClass:"font-semibold text-xl tracking-tight"},[t._v("Count-IT")])])}],l={name:"Nav"},c=l,u=e("2877"),d=Object(u["a"])(c,i,o,!1,null,null,null),f=d.exports,m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"py-2 bg-gray-200 text-center mt-2 text-gray-500 h-15 mt-10"},[e("p",{staticClass:"my-3"},[t._v(" Count IT "+t._s(t.versionApp)+" | "+t._s(t._f("moment")(new Date,"YYYY"))+" ")])])},g=[],p={},b=p,h=Object(u["a"])(b,m,g,!1,null,null,null),v=h.exports,x={components:{Nav:f,Footer:v}},y=x,w=(e("034f"),Object(u["a"])(y,s,r,!1,null,null,null)),j=w.exports,C=e("9483");Object(C["a"])("".concat("/count-it/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});e("d3b7");var k=e("8c4f"),_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("div",{staticClass:"w-full py-4 px-2",class:[t.sisa<0?"bg-red-600":"bg-blue-600"]},[e("div",{staticClass:"flex flex-wrap"},[e("h1",{staticClass:"py-2 w-full md:w-1/3 block text-gray-200 font-bold md:w-1/3"},[t._v("Pemasukan : "+t._s(t._f("currency")(t.jml_pemasukan)))]),e("h1",{staticClass:"py-2 w-full md:w-1/3 block font-bold text-gray-200"},[t._v("Sisa : "+t._s(t._f("currency")(t.sisa)))]),e("h1",{staticClass:"py-2 w-full md:w-1/3 block font-bold text-gray-200"},[t._v("Pengeluaran : "+t._s(t._f("currency")(t.jml_pengeluaran)))])])]),e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"container px-3 md:w-1/5 h-screen"},[e("div",{staticClass:"flex-auto max-w-sm rounded block border border-gray-200 mx-1 my-3 overflow-hidden"},[e("div",{staticClass:"px-6 py-4"},[e("div",{staticClass:"mb-1 text-left"},[e("p",{staticClass:"my-2"},[t._v(" Filter : ")]),e("div",{staticClass:"relative w-full"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.sort,expression:"sort"}],staticClass:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.sort=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:""}},[t._v("Filter")]),e("option",{attrs:{value:"nama"}},[t._v("Nama")]),e("option",{attrs:{value:"tanggal"}},[t._v("Tanggal")]),e("option",{attrs:{value:"nominal"}},[t._v("Nominal")])]),e("div",{staticClass:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[e("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])]),e("hr",{staticClass:"my-4"}),e("div",{staticClass:"relative w-full"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.cari,expression:"cari"}],staticClass:"appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:border-gray-500",attrs:{id:"grid-nama",type:"text",placeholder:"Cari..."},domProps:{value:t.cari},on:{input:function(a){a.target.composing||(t.cari=a.target.value)}}})]),e("hr",{staticClass:"my-4"})])])])]),e("div",{staticClass:"container px-5 md:w-4/5"},[e("div",{staticClass:"flex flex-wrap py-5"},[e("div",{staticClass:"w-full md:w-1/6"},[e("button",{staticClass:"text-white font-bold py-2 px-4 rounded float-left rounded-full h-full",class:[""!==t.cari?"bg-gray-500":"bg-blue-500 hover:bg-blue-700"],attrs:{disabled:""!==t.cari},on:{click:t.show}},[t._v(" Tambah Data ")])])]),e("div",{staticClass:"flex flex-wrap"},t._l(t.countData,(function(a,n){return e("div",{key:n,staticClass:"flex-auto max-w-sm rounded block border border-gray-200 mx-2 my-2 overflow-hidden shadow-lg"},[e("img",{staticClass:"w-full h-16 object-cover",attrs:{src:"https://picsum.photos/1920/1080?random="+(n+1),alt:"Just Picture"}}),e("div",{staticClass:"px-6 py-4"},[e("div",{staticClass:"font-bold text-xl mb-1 text-left"},[t._v(" "+t._s(a.nama)+" ")]),e("p",{staticClass:"text-gray-600 text-sm text-left"},[t._v(" "+t._s(t._f("moment")(a.tanggal,"DD-MM-YYYY"))+" ")]),e("hr",{staticClass:"my-2"}),e("p",{staticClass:"text-gray-600 text-base text-left"},[t._v(" "+t._s(a.keterangan)+" ")]),e("p",{staticClass:"text-base text-left font-bold",class:[!0===a.pengeluaran?"text-red-500":"text-green-500"]},[t._v(" "+t._s(t._f("currency")(a.nominal))+" ")])]),e("div",{staticClass:"px-6 py-4"},[e("button",{staticClass:"inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2",on:{click:function(e){return t.confirmDelete(a.id)}}},[e("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}})])]),e("button",{staticClass:"inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2",on:{click:function(e){return t.editData(a.id)}}},[e("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18"}},[e("path",{attrs:{d:"M2 12.88V16h3.12L14 7.12 10.88 4 2 12.88zm14.76-8.51c.33-.33.33-.85 0-1.18l-1.95-1.95c-.33-.33-.85-.33-1.18 0L12 2.88 15.12 6l1.64-1.63z"}})])])])])})),0)])]),e("modal",{attrs:{name:"form-input",height:"auto","min-height":500,scrollable:!0},on:{"before-open":t.beforeOpen}},[e("h1",{staticClass:"py-5 block uppercase text-gray-700 font-bold"},[t._v("Tambah Data")]),e("form",{staticClass:"w-full max-w-lg px-5 py-5 ml-10",on:{submit:function(a){return a.preventDefault(),t.saveData(a)}}},[e("div",{staticClass:"flex flex-wrap items-center mx-3 mb-6"},[e("div",{staticClass:"w-full px-3 mb-6 md:mb-0"},[e("label",{staticClass:"mb-2 cursor-pointer flex",attrs:{for:"checkbox-jenis"}},[e("div",{staticClass:"ml-3 text-white font-medium font-bold rounded-full shadow-inner items-center px-8",class:[!1===t.pengeluaran?"bg-green-600":"bg-gray-600"]},[t._v(" Pemasukan ")]),e("div",{staticClass:"relative ml-3"},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.pengeluaran,expression:"pengeluaran",modifiers:{trim:!0}}],staticClass:"hidden",attrs:{id:"checkbox-jenis",type:"checkbox"},domProps:{checked:Array.isArray(t.pengeluaran)?t._i(t.pengeluaran,null)>-1:t.pengeluaran},on:{change:function(a){var e=t.pengeluaran,n=a.target,s=!!n.checked;if(Array.isArray(e)){var r=null,i=t._i(e,r);n.checked?i<0&&(t.pengeluaran=e.concat([r])):i>-1&&(t.pengeluaran=e.slice(0,i).concat(e.slice(i+1)))}else t.pengeluaran=s}}}),e("div",{staticClass:"toggle__line w-10 h-6 bg-gray-400 rounded-full shadow-inner items-center"}),e("div",{staticClass:"toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0 items-center"})]),e("div",{staticClass:"ml-3 text-white font-medium font-bold rounded-full shadow-inner items-center px-8",class:[!0===t.pengeluaran?"bg-red-600":"bg-gray-600"]},[t._v(" Pengeluaran ")])])])]),e("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[e("div",{staticClass:"w-full px-3 mb-6 md:mb-0"},[e("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs text-left font-bold mb-2",attrs:{for:"grid-nama"}},[t._v(" Nama Pembayaran ")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.nama.$model,expression:"$v.nama.$model",modifiers:{trim:!0}}],staticClass:"appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:border-gray-500",class:{"border-red-500 ":t.$v.nama.$error},attrs:{id:"grid-nama",type:"text",placeholder:"Nama Pembayaran"},domProps:{value:t.$v.nama.$model},on:{input:function(a){a.target.composing||t.$set(t.$v.nama,"$model",a.target.value.trim())},blur:function(a){return t.$forceUpdate()}}}),!t.$v.nama.required&&t.$v.nama.$error?e("p",{staticClass:"float-left text-red-500 text-xs italic"},[t._v("Nama Pembayaran Tidak Boleh Kosong.")]):t._e()])]),e("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[e("div",{staticClass:"w-full px-3 "},[e("label",{staticClass:"block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-tanggal"}},[t._v(" Tanggal ")]),e("datepicker",{staticClass:"appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",class:{"border-red-500 ":t.$v.tanggal.$error},attrs:{id:"grid-tanggal",placeholder:"Tanggal",format:"d MMM yyyy"},model:{value:t.$v.tanggal.$model,callback:function(a){t.$set(t.$v.tanggal,"$model","string"===typeof a?a.trim():a)},expression:"$v.tanggal.$model"}}),!t.$v.tanggal.required&&t.$v.tanggal.$error?e("p",{staticClass:"float-left text-red-500 text-xs italic"},[t._v("Tanggal Pembayaran Tidak Boleh Kosong.")]):t._e()],1)]),e("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[e("div",{staticClass:"w-full px-3"},[e("label",{staticClass:"block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-nominal"}},[t._v(" Nominal ")]),e("currency-input",{directives:[{name:"currency",rawName:"v-currency",value:{currency:"IDR",locale:"id"},expression:"{currency: 'IDR', locale: 'id'}"}],staticClass:"appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",class:{"border-red-500 ":t.$v.nominal.$error},attrs:{id:"grid-nominal",placeholder:"Nominal"},model:{value:t.$v.nominal.$model,callback:function(a){t.$set(t.$v.nominal,"$model","string"===typeof a?a.trim():a)},expression:"$v.nominal.$model"}}),!t.$v.nominal.required&&t.$v.nominal.$error?e("p",{staticClass:"float-left text-red-500 text-xs italic"},[t._v("Nominal Pembayaran Tidak Boleh Kosong.")]):t._e()],1)]),e("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[e("div",{staticClass:"w-full px-3"},[e("label",{staticClass:"block uppercase text-left tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-keterangan"}},[t._v(" Keterangan ")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.keterangan.$model,expression:"$v.keterangan.$model",modifiers:{trim:!0}}],staticClass:"appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",class:{"border-red-500 ":t.$v.keterangan.$error},attrs:{id:"grid-keterangan",type:"text",placeholder:"Keterangan"},domProps:{value:t.$v.keterangan.$model},on:{input:function(a){a.target.composing||t.$set(t.$v.keterangan,"$model",a.target.value.trim())},blur:function(a){return t.$forceUpdate()}}}),!t.$v.keterangan.required&&t.$v.keterangan.$error?e("p",{staticClass:"float-left text-red-500 text-xs italic"},[t._v("Keterangan Pembayaran Tidak Boleh Kosong.")]):t._e()])]),e("div",{staticClass:"md:flex md:items-center"},[e("div",{staticClass:"md:w-1/3"}),e("div",{staticClass:"md:w-3/4"},[e("button",{staticClass:"shadow float-right bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full mr-2",attrs:{type:"submit"}},[t._v(" Save Data ")])]),e("div",{staticClass:"md:w-1/4"},[e("button",{staticClass:"shadow float-left bg-gray-500 hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full",on:{click:t.hide}},[t._v(" Cancel ")])])])])])],1)},$=[],M=(e("99af"),e("4de4"),e("7db0"),e("c740"),e("caad"),e("ac1f"),e("2532"),e("5319"),e("5530")),D=e("fa33"),P=e("2f62"),T=e("b5ae"),z=e("2ef0"),B=e.n(z),O={name:"Home",components:{Datepicker:D["a"]},data:function(){return{items:[],nama:"",pengeluaran:!1,tanggal:"",nominal:0,keterangan:"",updateId:"",tmpUpdate:{},sort:"nama",id:null,index:null,cari:""}},validations:{nama:{required:T["required"]},tanggal:{required:T["required"]},nominal:{required:T["required"]},keterangan:{required:T["required"]}},methods:Object(M["a"])(Object(M["a"])({},Object(P["b"])({add:"transaction/add",update:"transaction/update",delete:"transaction/delete",BudgetEdit:"transaction/changeBudget"})),{},{show:function(){this.$modal.show("form-input",{id:""})},hide:function(){this.$modal.hide("form-input")},saveData:function(){this.$v.$touch(),this.$v.$invalid||(""!==this.updateId?this.update({id:this.id,nama:this.nama,tanggal:this.tanggal,nominal:this.nominal,keterangan:this.keterangan,index:this.index,pengeluaran:this.pengeluaran}):this.add({id:this.id,nama:this.nama,tanggal:this.tanggal,nominal:this.nominal,keterangan:this.keterangan,pengeluaran:this.pengeluaran}),this.nama="",this.tanggal="",this.nominal=0,this.keterangan="",this.index=null,this.$v.$reset(),this.hide(),this.$swal("Data Berhasil Disimpan!","","success"))},editData:function(t){this.$modal.show("form-input",{id:t})},beforeOpen:function(t){var a=this;this.updateId=t.params.id,""!==this.updateId?(this.tmpUpdate={},this.tmpUpdate=this.countData.find((function(t,e){return t.id===a.updateId})),this.index=this.allData.findIndex((function(t,e){return t.id===a.updateId})),this.id=this.tmpUpdate.id,this.nama=this.tmpUpdate.nama,this.tanggal=this.tmpUpdate.tanggal,this.nominal=this.tmpUpdate.nominal,this.keterangan=this.tmpUpdate.keterangan,this.pengeluaran=this.tmpUpdate.pengeluaran):(this.id="".concat((new Date).getTime(),"-").concat(B.a.uniqueId()),this.nama="",this.tanggal="",this.nominal=0,this.keterangan="",this.pengeluaran=!1)},changeBudget:function(){this.editBudget=!this.editBudget},submitBudget:function(){this.editBudget=!1,this.BudgetEdit({budget:this.NewBudget})},confirmDelete:function(t){var a=this,e={};e=this.countData.find((function(a,e){return a.id===t}));var n=this.allData.findIndex((function(a,e){return a.id===t}));this.$swal({title:"Yakin Hapus?",text:'Data "'.concat(e.nama,'" akan dihapus'),icon:"warning",showCancelButton:!0,confirmButtonColor:"#3182ce",cancelButtonColor:"#f56565",confirmButtonText:"Yes"}).then((function(t){t.value&&a.delete({id:n})}))},formatNum:function(){var t=this.nominal.replace(/[^\d]+/gi,"");this.nominal=new Intl.NumberFormat("id",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(t)}}),computed:Object(M["a"])(Object(M["a"])({},Object(P["c"])({allData:"transaction/allTransaction",jml_pengeluaran:"transaction/countPengeluaran",jml_pemasukan:"transaction/countPemasukan"})),{},{countData:function(){var t=this,a=this.allData;return""!==this.cari&&(a=this.allData.filter((function(a){return a.nama.toLowerCase().includes(t.cari.toLowerCase())}))),""!==this.sort?B.a.orderBy(a,this.sort):B.a.orderBy(a,"nama")},sisa:function(){return this.jml_pemasukan-this.jml_pengeluaran}})},I=O,Y=(e("8281"),Object(u["a"])(I,_,$,!1,null,null,null)),N=Y.exports,A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"about"},[t._m(0),e("div",{staticClass:"container mx-auto mt-10"},[e("div",{staticClass:"flex flex-wrap"},[e("div",{staticClass:"flex-auto w-full rounded block border border-gray-200 mx-2 my-2 overflow-hidden shadow-lg"},[e("div",{staticClass:"px-6 py-4"},[e("div",{staticClass:"text-center mb-1 text-left flex"},[e("div",{staticClass:"w-2/5"},[e("button",{staticClass:"text-lg text-gray-600 bg-gray-300 hover:bg-gray-500 hover:text-white text-white px-3 py-1 rounded rounded-full",on:{click:t.prev}},[t._v(" Prev ")])]),e("div",{staticClass:"w-2/5 font-bold text-xl"},[t._v(" "+t._s(t.tahun)+" ")]),e("div",{staticClass:"w-2/5"},[e("button",{staticClass:"text-lg text-gray-600 bg-gray-300 hover:bg-gray-500 hover:text-white text-white px-3 py-1 rounded rounded-full",on:{click:t.next}},[t._v(" Next ")])])]),e("p",{staticClass:"text-gray-600 text-sm text-left"},[t._v(" Pemasukan dan Pengeluaran ")]),e("hr",{staticClass:"my-2"}),e("chart",{attrs:{"chart-data":t.chartData,options:t.options}})],1)]),e("div",{staticClass:"flex-auto max-w-sm rounded block border border-gray-200 mx-2 my-2 overflow-hidden shadow-lg"},[e("div",{staticClass:"px-6 py-4"},[e("div",{staticClass:"font-bold text-xl mb-1 text-left"},[t._v(" Pengeluaran ")]),e("p",{staticClass:"text-gray-600 text-sm text-left"},[t._v(" Top 10 ")]),e("hr",{staticClass:"my-2"}),t.pengeluaranTop.length>0?e("p",{staticClass:"text-base text-left"},[e("ul",{staticClass:"px-0"},t._l(t.pengeluaranTop.slice(0,10),(function(a,n){return e("li",{key:n,staticClass:"list-none py-2 px-2 border-b-2 flex"},[e("div",{staticClass:"py-3 px-2 font-bold"},[t._v(" "+t._s(n+1)+" ")]),e("div",{staticClass:"flex-auto ml-3"},[e("div",[t._v(" "+t._s(a.nama)+" ")]),e("div",{staticClass:"text-gray-600 text-sm"},[t._v(" "+t._s(t._f("currency")(a.nominal))+" ")])])])})),0)]):e("p",{staticClass:"text-base text-left"},[t._v(" Belum ada data transaksi ")])])]),e("div",{staticClass:"flex-auto max-w-sm rounded block border border-gray-200 mx-2 my-2 overflow-hidden shadow-lg"},[e("div",{staticClass:"px-6 py-4"},[e("div",{staticClass:"font-bold text-xl mb-1 text-left"},[t._v(" Pemasukan ")]),e("p",{staticClass:"text-gray-600 text-sm text-left"},[t._v(" Top 10 ")]),e("hr",{staticClass:"my-2"}),t.pemasukanTop.length>0?e("p",{staticClass:"text-base text-left"},[e("ul",{staticClass:"px-0"},t._l(t.pemasukanTop.slice(0,10),(function(a,n){return e("li",{key:n,staticClass:"list-none py-2 px-2 border-b-2 flex"},[e("div",{staticClass:"py-3 px-2 font-bold"},[t._v(" "+t._s(n+1)+" ")]),e("div",{staticClass:"flex-auto ml-3"},[e("div",[t._v(" "+t._s(a.nama)+" ")]),e("div",{staticClass:"text-gray-600 text-sm"},[t._v(" "+t._s(t._f("currency")(a.nominal))+" ")])])])})),0)]):e("p",{staticClass:"text-base text-left"},[t._v(" Belum ada data transaksi ")])])])])])])},q=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"relative py-8 px-4"},[e("div",{staticClass:"z-20 relative text-gray-800 container mx-auto text-left"},[e("h1",{staticClass:"mb-4 opacity-75"},[t._v("Count IT")]),e("p",{staticClass:"leading-normal opacity-75"},[t._v("Menghitung pengeluaran secara otomatis")]),e("p",{staticClass:"leading-normal opacity-75"},[t._v("Menggunakan Teknologi Vue, Tailwind")]),e("a",{staticClass:"inline-block bg-blue-500 text-white no-underline hover:opacity-100 mt-4 p-4 rounded opacity-75 cursor-pointer",attrs:{href:"/count"}},[t._v("Mulai!")])]),e("div",{staticClass:"absolute inset-0 h-full z-10"},[e("img",{staticClass:"h-full w-full object-cover",attrs:{src:"http://3.bp.blogspot.com/-OlHVbclWofM/WUHHAo9cZeI/AAAAAAAAGCI/xx9R8nVEnlIOe16iHvUXfsRseYTdgYp5ACHMYBhgL/s1600/tmc18-anime-background-wallpaper-anime-images-in-high-quality.jpg",alt:""}})])])}],E=(e("d81d"),e("13d5"),e("1fca")),U=E["b"].reactiveProp,H={extends:E["a"],mixins:[U],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}},S={data:function(){return{chartData:{},options:{},tahun:2020}},components:{chart:H},methods:{initChart:function(){var t=this,a=[],e=[],n=B.a.sortBy(this.allData,"tanggal");n.reduce((function(e,n){var s=t.$moment(n.tanggal);return parseInt(s.format("YYYY"))===t.tahun&&(e[s.format("MMM")]||(e[s.format("MMM")]={nominal:0,bln:s.format("MMM")},a.push(e[s.format("MMM")])),!0===n.pengeluaran&&(e[s.format("MMM")].nominal+=n.nominal)),e}),{}),n.reduce((function(a,n){var s=t.$moment(n.tanggal);return parseInt(s.format("YYYY"))===t.tahun&&(a[s.format("MMM")]||(a[s.format("MMM")]={nominal:0,bln:s.format("MMM")},e.push(a[s.format("MMM")])),!1===n.pengeluaran&&(a[s.format("MMM")].nominal+=n.nominal)),a}),{});var s=a.map((function(t){return t.bln})),r=e.map((function(t){return t.bln}));this.chartData={labels:s.length>r.length?s:r,datasets:[{label:"Pengeluaran",backgroundColor:"rgb(245, 101, 101)",data:a.map((function(t){return t.nominal}))},{label:"Pemasukan",backgroundColor:"rgb(72, 187, 120)",data:e.map((function(t){return t.nominal}))}]},this.options={responsive:!0,maintainAspectRatio:!1}},next:function(){this.tahun++,this.initChart()},prev:function(){this.tahun--,this.initChart()}},computed:Object(M["a"])(Object(M["a"])({},Object(P["c"])({allData:"transaction/allTransaction"})),{},{pengeluaranTop:function(){var t=this,a=this.allData.filter((function(a){return!0===a.pengeluaran&&parseInt(t.$moment(a.tanggal).format("YYYY"))===t.tahun}));return B.a.orderBy(a,"nominal","desc")},pemasukanTop:function(){var t=this,a=this.allData.filter((function(a){return!1===a.pengeluaran&&parseInt(t.$moment(a.tanggal).format("YYYY"))===t.tahun}));return B.a.orderBy(a,"nominal","desc")}}),created:function(){this.initChart()}},L=S,F=Object(u["a"])(L,A,q,!1,null,null,null),V=F.exports;n["a"].use(k["a"]);var K=[{path:"/",name:"Home",component:V},{path:"/count",name:"Count",component:N},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}}],R=new k["a"]({mode:"history",base:"/count-it/",routes:K}),J=R,W=e("bfa9"),G=(e("4160"),e("a434"),e("159b"),{namespaced:!0,state:{transactions:[],budget:0},mutations:{addData:function(t,a){t.transactions.push({id:a.id,nama:a.nama,tanggal:a.tanggal,nominal:a.nominal,keterangan:a.keterangan,pengeluaran:a.pengeluaran})},updateData:function(t,a){t.transactions.splice(a.index,1,{id:a.id,nama:a.nama,tanggal:a.tanggal,nominal:a.nominal,keterangan:a.keterangan,pengeluaran:a.pengeluaran})},deleteData:function(t,a){t.transactions.splice(a.id,1)},editBudget:function(t,a){t.budget=a.budget}},actions:{add:function(t,a){var e=t.commit;e("addData",a)},update:function(t,a){var e=t.commit;e("updateData",a)},delete:function(t,a){var e=t.commit;e("deleteData",a)},changeBudget:function(t,a){var e=t.commit;e("editBudget",a)}},getters:{allTransaction:function(t){return t.transactions},countPengeluaran:function(t){return t.transactions.reduce((function(t,a){return a.pengeluaran&&(t=parseInt(t)+parseInt(a.nominal)),t}),0)},countPemasukan:function(t){return t.transactions.reduce((function(t,a){return a.pengeluaran||(t=parseInt(t)+parseInt(a.nominal)),t}),0)},countSisa:function(t){var a=t.budget;return t.transactions.forEach((function(t){a-=parseInt(t.nominal)})),a}}}),X=new W["a"]({key:"countIt-data",storage:localStorage});n["a"].use(P["a"]);var Z=new P["a"].Store({plugins:[X.plugin],state:{},mutations:{},actions:{},modules:{transaction:G}}),Q=e("1881"),tt=e.n(Q),at=e("2ead"),et=e.n(at),nt=e("5886"),st=e("f260a"),rt=e("d413"),it=e("1dce"),ot=e.n(it),lt=(e("4413"),e("c898"),{install:function(t){t.prototype.versionApp="v1.2.0"}});n["a"].use(lt),n["a"].use(nt["a"]),n["a"].use(et.a),n["a"].use(tt.a),n["a"].use(rt["a"]),n["a"].use(ot.a),n["a"].use(st["a"],{symbol:"Rp",thousandsSeparator:".",fractionCount:2,fractionSeparator:",",symbolPosition:"front",symbolSpacing:!0}),n["a"].config.productionTip=!1,new n["a"]({router:J,store:Z,render:function(t){return t(j)}}).$mount("#app")},5932:function(t,a,e){},8281:function(t,a,e){"use strict";var n=e("5932"),s=e.n(n);s.a},"85ec":function(t,a,e){},c898:function(t,a,e){}});
//# sourceMappingURL=app.82acc575.js.map