(function(a){function t(t){for(var l,r,h=t[0],n=t[1],o=t[2],d=0,v=[];d<h.length;d++)r=h[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&v.push(s[r][0]),s[r]=0;for(l in n)Object.prototype.hasOwnProperty.call(n,l)&&(a[l]=n[l]);c&&c(t);while(v.length)v.shift()();return i.push.apply(i,o||[]),e()}function e(){for(var a,t=0;t<i.length;t++){for(var e=i[t],l=!0,r=1;r<e.length;r++){var h=e[r];0!==s[h]&&(l=!1)}l&&(i.splice(t--,1),a=n(n.s=e[0]))}return a}var l={},r={app:0},s={app:0},i=[];function h(a){return n.p+"js/"+({}[a]||a)+"."+{"chunk-b022b2f4":"b65378b2"}[a]+".js"}function n(t){if(l[t])return l[t].exports;var e=l[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.e=function(a){var t=[],e={"chunk-b022b2f4":1};r[a]?t.push(r[a]):0!==r[a]&&e[a]&&t.push(r[a]=new Promise((function(t,e){for(var l="css/"+({}[a]||a)+"."+{"chunk-b022b2f4":"640a6ec6"}[a]+".css",s=n.p+l,i=document.getElementsByTagName("link"),h=0;h<i.length;h++){var o=i[h],d=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(d===l||d===s))return t()}var v=document.getElementsByTagName("style");for(h=0;h<v.length;h++){o=v[h],d=o.getAttribute("data-href");if(d===l||d===s)return t()}var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onload=t,c.onerror=function(t){var l=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+a+" failed.\n("+l+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=l,delete r[a],c.parentNode.removeChild(c),e(i)},c.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(c)})).then((function(){r[a]=0})));var l=s[a];if(0!==l)if(l)t.push(l[2]);else{var i=new Promise((function(t,e){l=s[a]=[t,e]}));t.push(l[2]=i);var o,d=document.createElement("script");d.charset="utf-8",d.timeout=120,n.nc&&d.setAttribute("nonce",n.nc),d.src=h(a);var v=new Error;o=function(t){d.onerror=d.onload=null,clearTimeout(c);var e=s[a];if(0!==e){if(e){var l=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;v.message="Loading chunk "+a+" failed.\n("+l+": "+r+")",v.name="ChunkLoadError",v.type=l,v.request=r,e[1](v)}s[a]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:d})}),12e4);d.onerror=d.onload=o,document.head.appendChild(d)}return Promise.all(t)},n.m=a,n.c=l,n.d=function(a,t,e){n.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},n.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},n.t=function(a,t){if(1&t&&(a=n(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var l in a)n.d(e,l,function(t){return a[t]}.bind(null,l));return e},n.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return n.d(t,"a",t),t},n.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},n.p="/",n.oe=function(a){throw console.error(a),a};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var v=0;v<o.length;v++)t(o[v]);var c=d;i.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"034f":function(a,t,e){"use strict";var l=e("85ec"),r=e.n(l);r.a},"4ec9":function(a,t,e){},"56d7":function(a,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var l=e("2b0e"),r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"app"}},[e("navigation"),e("router-view"),e("Footer")],1)},s=[],i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{},[e("nav",{staticClass:"navbar navbar-expand-sm navbar-dark bg-dark fixed-top"},[e("a",{staticClass:"navbar-brand d-flex align-items-center",attrs:{href:"https://1kwm2.com/"}},[e("svg",{staticClass:"bi bi-brightness-high-fill",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"}})])]),a._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarsExample03"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"dropdown03","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("svg",{staticClass:"bi bi-file-earmark-spreadsheet-fill",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M2 3a2 2 0 0 1 2-2h5.293a1 1 0 0 1 .707.293L13.707 5a1 1 0 0 1 .293.707V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3zm7 2V2l4 4h-3a1 1 0 0 1-1-1zM3 8v1h2v2H3v1h2v2h1v-2h3v2h1v-2h3v-1h-3V9h3V8H3zm3 3V9h3v2H6z"}})]),a._v(" Calculos ")]),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdown03"}},[e("a",{staticClass:"dropdown-item ",attrs:{href:"https://ew9n325uge.execute-api.eu-west-1.amazonaws.com/dev"}},[e("svg",{staticClass:"bi bi-align-top",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"blue",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M6 14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M1 1.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5z"}})]),e("svg",{staticClass:"bi bi-arrow-up-right-circle",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M10.5 5h-4a.5.5 0 0 0 0 1h2.793l-4.147 4.146a.5.5 0 0 0 .708.708L10 6.707V9.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5z"}})]),a._v(" Medida de la potencia instalada de una central fotovoltaica conectada a la red eléctrica. ")]),e("a",{staticClass:"dropdown-item",attrs:{href:"https://1anmsg6wjl.execute-api.eu-west-1.amazonaws.com/dev"}},[e("svg",{staticClass:"bi bi-align-top",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"blue",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M6 14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M1 1.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5z"}})]),e("svg",{staticClass:"bi bi-brightness-alt-high-fill",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M4 11a4 4 0 1 1 8 0 .5.5 0 0 1-.5.5h-7A.5.5 0 0 1 4 11zm4-8a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM4.464 7.464a.5.5 0 0 1-.707 0L2.343 6.05a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707z"}})]),a._v(" Cálculo de las pérdidas por orientación e inclinación del generador distinta de la óptima. ")]),e("a",{staticClass:"dropdown-item ",attrs:{href:"https://5a4eeceev2.execute-api.eu-west-1.amazonaws.com/dev"}},[e("svg",{staticClass:"bi bi-align-top",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"blue",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M6 14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M1 1.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5z"}})]),e("svg",{staticClass:"bi bi-building",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"}}),e("path",{attrs:{d:"M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"}})]),a._v(" Cálculo de las pérdidas de radiación solar por sombras. ")]),e("a",{staticClass:"dropdown-item ",attrs:{href:"https://a08anocpkf.execute-api.eu-west-1.amazonaws.com/dev"}},[e("svg",{staticClass:"bi bi-align-top",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"blue",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M6 14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M1 1.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5z"}})]),e("svg",{staticClass:"bi bi-chevron-bar-contract",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M3.646 14.854a.5.5 0 0 0 .708 0L8 11.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zm0-13.708a.5.5 0 0 1 .708 0L8 4.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zM1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8z"}})]),a._v(" Distancia mínima entre filas de módulos ")]),e("a",{staticClass:"dropdown-item ",attrs:{href:"https://s86gtujka1.execute-api.eu-west-1.amazonaws.com/dev"}},[e("svg",{staticClass:"bi bi-align-top",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"blue",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M6 14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M1 1.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5z"}})]),e("svg",{staticClass:"bi bi-bar-chart-line-fill",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{width:"4",height:"5",x:"1",y:"10",rx:"1"}}),e("rect",{attrs:{width:"4",height:"9",x:"6",y:"6",rx:"1"}}),e("rect",{attrs:{width:"4",height:"14",x:"11",y:"1",rx:"1"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M0 14.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"}})]),a._v(" La producción anual esperada. ")]),e("a",{staticClass:"dropdown-item disabled",attrs:{href:"https://jhi04p1c3g.execute-api.eu-west-1.amazonaws.com/dev"}},[e("svg",{staticClass:"bi bi-battery-charging",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"green",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M14.5 9.5a1.5 1.5 0 0 0 0-3v3z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M9.585 2.568a.5.5 0 0 1 .226.58L8.677 6.832h1.99a.5.5 0 0 1 .364.843l-5.334 5.667a.5.5 0 0 1-.842-.49L5.99 9.167H4a.5.5 0 0 1-.364-.843l5.333-5.667a.5.5 0 0 1 .616-.09z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M6.332 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2.072l.307-1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3.391l.941-1zM4.45 6H2v4h1.313a1.5 1.5 0 0 1-.405-2.361L4.45 6zm.976 5l-.308 1H6.96l.21-.224h.001l.73-.776H6.53l-.085.09.028-.09H5.426zm1.354-1H5.733l.257-.833H4a.5.5 0 0 1-.364-.843l.793-.843L5.823 6h1.373L5.157 8.167h1.51a.5.5 0 0 1 .478.647L6.78 10zm.69 0h1.374l1.394-1.482.793-.842a.5.5 0 0 0-.364-.843h-1.99L8.933 6H7.887l-.166.54-.199.646A.5.5 0 0 0 8 7.833h1.51L7.47 10zm.725-5H9.24l.308-1H7.706l-.942 1h1.374l.085-.09-.028.09zm2.4-1l-.308 1H12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9.276l-.942 1H12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.405zm-.378 6H12V8.02a1.499 1.499 0 0 1-.241.341L10.217 10zM12 6.646V6h-.646a1.5 1.5 0 0 1 .646.646z"}})]),a._v(" Consumo diario de energía eléctrica ")]),e("a",{staticClass:"dropdown-item ",attrs:{href:"https://0owtddar93.execute-api.eu-west-1.amazonaws.com/dev"}},[e("svg",{staticClass:"bi bi-battery-charging",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"green",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M14.5 9.5a1.5 1.5 0 0 0 0-3v3z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M9.585 2.568a.5.5 0 0 1 .226.58L8.677 6.832h1.99a.5.5 0 0 1 .364.843l-5.334 5.667a.5.5 0 0 1-.842-.49L5.99 9.167H4a.5.5 0 0 1-.364-.843l5.333-5.667a.5.5 0 0 1 .616-.09z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M6.332 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2.072l.307-1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3.391l.941-1zM4.45 6H2v4h1.313a1.5 1.5 0 0 1-.405-2.361L4.45 6zm.976 5l-.308 1H6.96l.21-.224h.001l.73-.776H6.53l-.085.09.028-.09H5.426zm1.354-1H5.733l.257-.833H4a.5.5 0 0 1-.364-.843l.793-.843L5.823 6h1.373L5.157 8.167h1.51a.5.5 0 0 1 .478.647L6.78 10zm.69 0h1.374l1.394-1.482.793-.842a.5.5 0 0 0-.364-.843h-1.99L8.933 6H7.887l-.166.54-.199.646A.5.5 0 0 0 8 7.833h1.51L7.47 10zm.725-5H9.24l.308-1H7.706l-.942 1h1.374l.085-.09-.028.09zm2.4-1l-.308 1H12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9.276l-.942 1H12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.405zm-.378 6H12V8.02a1.499 1.499 0 0 1-.241.341L10.217 10zM12 6.646V6h-.646a1.5 1.5 0 0 1 .646.646z"}})]),e("svg",{staticClass:"bi bi-droplet-half",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10c0 0 2.5 1.5 5 .5s5-.5 5-.5c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"}})]),a._v(" Sistemas de bombeo de agua. ")]),e("a",{staticClass:"dropdown-item disabled",attrs:{href:"https://0owtddar93.execute-api.eu-west-1.amazonaws.com/dev"}},[e("svg",{staticClass:"bi bi-battery-charging",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"green",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M14.5 9.5a1.5 1.5 0 0 0 0-3v3z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M9.585 2.568a.5.5 0 0 1 .226.58L8.677 6.832h1.99a.5.5 0 0 1 .364.843l-5.334 5.667a.5.5 0 0 1-.842-.49L5.99 9.167H4a.5.5 0 0 1-.364-.843l5.333-5.667a.5.5 0 0 1 .616-.09z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M6.332 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2.072l.307-1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3.391l.941-1zM4.45 6H2v4h1.313a1.5 1.5 0 0 1-.405-2.361L4.45 6zm.976 5l-.308 1H6.96l.21-.224h.001l.73-.776H6.53l-.085.09.028-.09H5.426zm1.354-1H5.733l.257-.833H4a.5.5 0 0 1-.364-.843l.793-.843L5.823 6h1.373L5.157 8.167h1.51a.5.5 0 0 1 .478.647L6.78 10zm.69 0h1.374l1.394-1.482.793-.842a.5.5 0 0 0-.364-.843h-1.99L8.933 6H7.887l-.166.54-.199.646A.5.5 0 0 0 8 7.833h1.51L7.47 10zm.725-5H9.24l.308-1H7.706l-.942 1h1.374l.085-.09-.028.09zm2.4-1l-.308 1H12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9.276l-.942 1H12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.405zm-.378 6H12V8.02a1.499 1.499 0 0 1-.241.341L10.217 10zM12 6.646V6h-.646a1.5 1.5 0 0 1 .646.646z"}})]),e("svg",{staticClass:"bi bi-grid-3x3-gap-fill",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"}})]),a._v(" Dimensionado del generador ")]),e("a",{staticClass:"dropdown-item disabled",attrs:{href:"https://jhi04p1c3g.execute-api.eu-west-1.amazonaws.com/dev"}},[e("svg",{staticClass:"bi bi-battery-charging",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"green",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M14.5 9.5a1.5 1.5 0 0 0 0-3v3z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M9.585 2.568a.5.5 0 0 1 .226.58L8.677 6.832h1.99a.5.5 0 0 1 .364.843l-5.334 5.667a.5.5 0 0 1-.842-.49L5.99 9.167H4a.5.5 0 0 1-.364-.843l5.333-5.667a.5.5 0 0 1 .616-.09z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M6.332 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2.072l.307-1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3.391l.941-1zM4.45 6H2v4h1.313a1.5 1.5 0 0 1-.405-2.361L4.45 6zm.976 5l-.308 1H6.96l.21-.224h.001l.73-.776H6.53l-.085.09.028-.09H5.426zm1.354-1H5.733l.257-.833H4a.5.5 0 0 1-.364-.843l.793-.843L5.823 6h1.373L5.157 8.167h1.51a.5.5 0 0 1 .478.647L6.78 10zm.69 0h1.374l1.394-1.482.793-.842a.5.5 0 0 0-.364-.843h-1.99L8.933 6H7.887l-.166.54-.199.646A.5.5 0 0 0 8 7.833h1.51L7.47 10zm.725-5H9.24l.308-1H7.706l-.942 1h1.374l.085-.09-.028.09zm2.4-1l-.308 1H12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9.276l-.942 1H12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.405zm-.378 6H12V8.02a1.499 1.499 0 0 1-.241.341L10.217 10zM12 6.646V6h-.646a1.5 1.5 0 0 1 .646.646z"}})]),a._v(" Dimensionado final del sistema ")]),e("a",{staticClass:"dropdown-item disabled",attrs:{href:"#ccp"}},[e("svg",{staticClass:"bi bi-puzzle-fill",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M3.112 3.645A1.5 1.5 0 0 1 4.605 2H7a.5.5 0 0 1 .5.5v.382c0 .696-.497 1.182-.872 1.469a.459.459 0 0 0-.115.118.113.113 0 0 0-.012.025L6.5 4.5v.003l.003.01c.004.01.014.028.036.053a.86.86 0 0 0 .27.194C7.09 4.9 7.51 5 8 5c.492 0 .912-.1 1.19-.24a.86.86 0 0 0 .271-.194.213.213 0 0 0 .036-.054l.003-.01v-.008a.112.112 0 0 0-.012-.025.459.459 0 0 0-.115-.118c-.375-.287-.872-.773-.872-1.469V2.5A.5.5 0 0 1 9 2h2.395a1.5 1.5 0 0 1 1.493 1.645L12.645 6.5h.237c.195 0 .42-.147.675-.48.21-.274.528-.52.943-.52.568 0 .947.447 1.154.862C15.877 6.807 16 7.387 16 8s-.123 1.193-.346 1.638c-.207.415-.586.862-1.154.862-.415 0-.733-.246-.943-.52-.255-.333-.48-.48-.675-.48h-.237l.243 2.855A1.5 1.5 0 0 1 11.395 14H9a.5.5 0 0 1-.5-.5v-.382c0-.696.497-1.182.872-1.469a.459.459 0 0 0 .115-.118.113.113 0 0 0 .012-.025L9.5 11.5v-.003l-.003-.01a.214.214 0 0 0-.036-.053.859.859 0 0 0-.27-.194C8.91 11.1 8.49 11 8 11c-.491 0-.912.1-1.19.24a.859.859 0 0 0-.271.194.214.214 0 0 0-.036.054l-.003.01v.002l.001.006a.113.113 0 0 0 .012.025c.016.027.05.068.115.118.375.287.872.773.872 1.469v.382a.5.5 0 0 1-.5.5H4.605a1.5 1.5 0 0 1-1.493-1.645L3.356 9.5h-.238c-.195 0-.42.147-.675.48-.21.274-.528.52-.943.52-.568 0-.947-.447-1.154-.862C.123 9.193 0 8.613 0 8s.123-1.193.346-1.638C.553 5.947.932 5.5 1.5 5.5c.415 0 .733.246.943.52.255.333.48.48.675.48h.238l-.244-2.855z"}})]),a._v(" Configuracion de cadenas de paneles. ")]),e("a",{staticClass:"dropdown-item disabled",attrs:{href:"#sc"}},[e("svg",{staticClass:"bi bi-bezier",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"}}),e("path",{attrs:{d:"M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z"}})]),a._v(" Sección de los conductores. ")]),e("a",{staticClass:"dropdown-item disabled",attrs:{href:"#dmp"}},[e("svg",{staticClass:"bi bi-lightning-fill",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"}})]),a._v(" Dispositivos de mando y protección. ")]),e("a",{staticClass:"dropdown-item disabled",attrs:{href:"#pr"}},[e("svg",{staticClass:"bi bi-cash-stack",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M14 3H1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1h-1z"}}),e("path",{attrs:{"fill-rule":"evenodd",d:"M15 5H1v8h14V5zM1 4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H1z"}}),e("path",{attrs:{d:"M13 5a2 2 0 0 0 2 2V5h-2zM3 5a2 2 0 0 1-2 2V5h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 13a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"}})]),a._v(" Presupuesto y Rentabilidad. ")])])]),e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"dropdown03","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("svg",{staticClass:"bi bi-question-square-fill",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm4.57 6.033H5.25C5.22 4.147 6.68 3.5 8.006 3.5c1.397 0 2.673.73 2.673 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.355H7.117l-.007-.463c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.901 0-1.358.603-1.358 1.384zm1.251 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"}})]),a._v(" Ayuda ")]),e("div",{staticClass:"dropdown-menu ",attrs:{"aria-labelledby":"dropdown04"}},[e("a",{staticClass:"dropdown-item disabled",attrs:{role:"button",href:"#pi"}},[e("svg",{staticClass:"bi bi-camera-reels-fill",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M2.667 6h6.666C10.253 6 11 6.746 11 7.667v6.666c0 .92-.746 1.667-1.667 1.667H2.667C1.747 16 1 15.254 1 14.333V7.667C1 6.747 1.746 6 2.667 6z"}}),e("path",{attrs:{d:"M7.404 11.697l6.363 3.692c.54.313 1.233-.066 1.233-.697V7.308c0-.63-.693-1.01-1.233-.696l-6.363 3.692a.802.802 0 0 0 0 1.393z"}}),e("circle",{attrs:{cx:"3",cy:"3",r:"3"}}),e("circle",{attrs:{cx:"9",cy:"3",r:"3"}})]),a._v(" Ejemplos")]),e("a",{staticClass:"dropdown-item ",attrs:{href:"https://6sy2uegs5b.execute-api.eu-west-1.amazonaws.com/dev"}},[e("svg",{staticClass:"bi bi-bookmark-fill",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M3 3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12l-5-3-5 3V3z"}})]),a._v(" Enlaces de Interes ")])])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link ",attrs:{href:"contacto.html"}},[e("svg",{staticClass:"bi bi-envelope-open-fill",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor"}},[e("path",{attrs:{d:"M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z"}})]),a._v(" Contacto ")])])])])])])},h=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarsExample03","aria-controls":"navbarsExample03","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],n=(e("828e"),e("2877")),o={},d=Object(n["a"])(o,i,h,!1,null,"9d201156",null),v=d.exports,c=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},m=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("footer",{staticClass:"text-muted"},[e("div",{staticClass:"container"},[e("p",{staticClass:"float-right"},[e("a",{attrs:{href:"#"}},[a._v("Inicio")])]),e("p",[a._v("Creado por "),e("strong",[a._v("1 kW/m"),e("sup",[a._v("2")])]),a._v(" ©")])])])])}],p={},u=Object(n["a"])(p,c,m,!1,null,null,null),w=u.exports,g={name:"App",components:{Navigation:v,Footer:w}},f=g,z=(e("034f"),Object(n["a"])(f,r,s,!1,null,null,null)),b=z.exports,H=(e("d3b7"),e("8c4f"));l["a"].use(H["a"]);var C=new H["a"]({routes:[{path:"/",name:"Landing",component:function(){return e.e("chunk-b022b2f4").then(e.bind(null,"d9a1"))}}]}),x=C;l["a"].config.productionTip=!1,new l["a"]({render:function(a){return a(b)},router:x}).$mount("#app")},"828e":function(a,t,e){"use strict";var l=e("4ec9"),r=e.n(l);r.a},"85ec":function(a,t,e){}});
//# sourceMappingURL=app.cb418f7c.js.map