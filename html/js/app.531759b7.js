(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);h&&h(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0af5ade2","chunk-27566749":"3acdfc4a","chunk-2d208a5a":"01d2d19e","chunk-dcaeaffa":"8d5b82e2","chunk-2d221890":"e368a466"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-27566749":1,"chunk-dcaeaffa":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-27566749":"eeae07f1","chunk-2d208a5a":"31d6cfe0","chunk-dcaeaffa":"30e648b5","chunk-2d221890":"31d6cfe0"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],h.parentNode.removeChild(h),n(i)},h.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var h=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"023e":function(e,t,n){"use strict";n("a8aa")},1040:function(e,t,n){"use strict";n("ab3b")},"43c5":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n("2b0e"),a=r["a"].observable({transitionName:"",login:!1}),o={changeTransition:function(e){a.transitionName=e},changeLogin:function(e){a.login=e}}},"55ba":function(e,t,n){e.exports=n.p+"img/bodyBgxiuzheng.ca722b67.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("7f7f"),n("28a5"),n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:e.transitionName}},[n("keep-alive",[n("router-view")],1)],1)],1)},o=[],i=n("43c5"),c={computed:{transitionName:function(){return i["b"].transitionName}}},s=c,u=(n("023e"),n("2877")),l=Object(u["a"])(s,a,o,!1,null,null,null),f=l.exports,h=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[e._m(0),n("div",{staticClass:"form"},[n("label",[e._v("访问码：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.pass,expression:"pass"}],attrs:{type:"text"},domProps:{value:e.pass},on:{input:function(t){t.target.composing||(e.pass=t.target.value)}}}),n("button",{attrs:{type:"button"},on:{click:e.enter}},[e._v("进入")]),n("br"),n("div",{staticClass:"check"},[n("input",{attrs:{type:"checkbox",checked:""}}),n("label",[e._v("记住密码")]),n("button",{attrs:{type:"button"},on:{click:e.fast}},[e._v("快速登录")])])]),e._m(1)])},p=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"title"},[r("div",{staticClass:"img"},[r("img",{attrs:{src:n("55ba")}})]),r("br"),r("b",[e._v("节奏大师歌曲查询")]),r("br"),r("span",[e._v("v1.0版")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"tip",attrs:{width:"257",border:"1",align:"center"}},[n("tr",[n("td",{attrs:{width:"257",align:"center"}},[e._v("健康游戏忠告")])]),n("tr",[n("td",{attrs:{align:"center"}},[e._v("抵制不良游戏 拒绝盗版游戏"),n("br"),e._v("\n            注意自我保护 谨防受骗上当"),n("br"),e._v("\n            适度游戏益脑 沉迷游戏伤身"),n("br"),e._v("\n            合理安排时间 享受健康生活")])])])}],g=n("8bfe"),m=n.n(g),v=n("c24d"),b={name:"login",data:function(){return{pass:""}},methods:{enter:function(){try{v["a"].resUrl=m.a.decryptFromBase64(v["a"].resUrlEnc,this.pass),i["a"].changeLogin(!0),v["a"].secret=m.a.decryptFromBase64(v["a"].secKey,this.pass);var e={pass:this.pass,time:Date.now()+864e5};localStorage.setItem("login",m.a.encryptToBase64(JSON.stringify(e),v["a"].loginKey)),this.$global.login=!0,this.$router.push("/home")}catch(t){this.$alert.show("访问码错误")}},fast:function(e){var t=localStorage.getItem("login");if(t)try{var n=JSON.parse(m.a.decryptFromBase64(t,v["a"].loginKey));Date.now()<n.time?(v["a"].resUrl=m.a.decryptFromBase64(v["a"].resUrlEnc,n.pass),i["a"].changeLogin(!0),v["a"].secret=m.a.decryptFromBase64(v["a"].secKey,n.pass),this.$alert.show("快速登录成功"),0==this.$global.login&&(this.$global.login=!0,this.$router.push("/home"))):localStorage.removeItem("login")}catch(e){localStorage.removeItem("login")}else"first"==e?this.$alert.show("未登录"):this.$alert.show("快速登录失败，需要访问码进入")}},created:function(){var e=this;this.$global.login&&this.$router.push("/home"),setTimeout((function(){e.fast("first")}),1500)}},w=b,y=(n("de90"),Object(u["a"])(w,d,p,!1,null,null,null)),C=y.exports;r["a"].use(h["a"]);var A=new h["a"]({routes:[{path:"/",name:"login",component:C},{path:"/home",name:"home",component:function(){return n.e("chunk-27566749").then(n.bind(null,"6511"))}},{path:"/info",name:"info",component:function(){return n.e("chunk-dcaeaffa").then(n.bind(null,"13ac"))}},{path:"/preview",name:"preview",component:function(){return n.e("chunk-2d208a5a").then(n.bind(null,"a64c"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"754b"))}}]}),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"alert"},[n("span",[e._v(e._s(e.msg))])])},S=[],_={name:"alert",data:function(){return{isShow:!1,msg:""}},methods:{show:function(e){var t=this;this.isShow=!0,this.msg=e,setTimeout((function(){t.isShow=!1,t.msg=""}),3e3)}}},E=_,x=(n("86ec"),Object(u["a"])(E,k,S,!1,null,null,null)),T=x.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"head"},[n("div",{staticClass:"box"},[n("span",{on:{click:e.back}},[e._v("<返回")]),n("strong",[e._v(e._s(e.title))]),n("span",{on:{click:e.toHome}},[e._v("首页>")])])])},$=[],j={props:{title:String},data:function(){return{}},methods:{back:function(){this.$router.back()},toHome:function(){this.$router.push("/home")}}},O=j,N=(n("1040"),Object(u["a"])(O,U,$,!1,null,null,null)),B=N.exports;r["a"].config.productionTip=!1,r["a"].prototype.$global={login:!0,song:[]};var F=sessionStorage.getItem("fromname");F=F?F.split(","):[],A.beforeEach((function(e,t,n){"/"!=e.path?r["a"].prototype.$global.login?n():n({name:"login"}):n(),e.name!=F[F.length-1]?t.name&&(F.push(t.name),i["a"].changeTransition("slide-left")):(F.pop(),i["a"].changeTransition("slide-right")),sessionStorage.setItem("fromname",F.join(","))}));var P=r["a"].extend(T),q=new P;document.body.appendChild(q.$mount().$el),r["a"].prototype.$alert=q,r["a"].component("headnav",B),new r["a"]({router:A,render:function(e){return e(f)}}).$mount("#app")},"79f0":function(e,t,n){},"86ec":function(e,t,n){"use strict";n("79f0")},"8bfe":function(e,t,n){(function(t){(function(t){"use strict";"undefined"==typeof t.btoa&&(t.btoa=function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");return function(t){var n,r,a,o,i,c,s;r=a=0,o=t.length,i=o%3,o-=i,c=o/3<<2,i>0&&(c+=4),n=new Array(c);while(r<o)s=t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<8|t.charCodeAt(r++),n[a++]=e[s>>18]+e[s>>12&63]+e[s>>6&63]+e[63&s];return 1==i?(s=t.charCodeAt(r++),n[a++]=e[s>>2]+e[(3&s)<<4]+"=="):2==i&&(s=t.charCodeAt(r++)<<8|t.charCodeAt(r++),n[a++]=e[s>>10]+e[s>>4&63]+e[(15&s)<<2]+"="),n.join("")}}()),"undefined"==typeof t.atob&&(t.atob=function(){var e=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1];return function(t){var n,r,a,o,i,c,s,u,l,f;if(s=t.length,s%4!==0)return"";if(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(t))return"";u="="==t.charAt(s-2)?1:"="==t.charAt(s-1)?2:0,l=s,u>0&&(l-=4),l=3*(l>>2)+u,f=new Array(l),i=c=0;while(i<s){if(n=e[t.charCodeAt(i++)],-1==n)break;if(r=e[t.charCodeAt(i++)],-1==r)break;if(f[c++]=String.fromCharCode(n<<2|(48&r)>>4),a=e[t.charCodeAt(i++)],-1==a)break;if(f[c++]=String.fromCharCode((15&r)<<4|(60&a)>>2),o=e[t.charCodeAt(i++)],-1==o)break;f[c++]=String.fromCharCode((3&a)<<6|o)}return f.join("")}}());var n=2654435769;function r(e,t){var n=e.length,r=n<<2;if(t){var a=e[n-1];if(r-=4,a<r-3||a>r)return null;r=a}for(var o=0;o<n;o++)e[o]=String.fromCharCode(255&e[o],e[o]>>>8&255,e[o]>>>16&255,e[o]>>>24&255);var i=e.join("");return t?i.substring(0,r):i}function a(e,t){var n,r=e.length,a=r>>2;0!==(3&r)&&++a,t?(n=new Array(a+1),n[a]=r):n=new Array(a);for(var o=0;o<r;++o)n[o>>2]|=e.charCodeAt(o)<<((3&o)<<3);return n}function o(e){return 4294967295&e}function i(e,t,n,r,a,o){return(n>>>5^t<<2)+(t>>>3^n<<4)^(e^t)+(o[3&r^a]^n)}function c(e){return e.length<4&&(e.length=4),e}function s(e,t){var r,a,c,s,u,l,f=e.length,h=f-1;for(a=e[h],c=0,l=0|Math.floor(6+52/f);l>0;--l){for(c=o(c+n),s=c>>>2&3,u=0;u<h;++u)r=e[u+1],a=e[u]=o(e[u]+i(c,r,a,u,s,t));r=e[0],a=e[h]=o(e[h]+i(c,r,a,h,s,t))}return e}function u(e,t){var r,a,c,s,u,l,f=e.length,h=f-1;for(r=e[0],l=Math.floor(6+52/f),c=o(l*n);0!==c;c=o(c-n)){for(s=c>>>2&3,u=h;u>0;--u)a=e[u-1],r=e[u]=o(e[u]-i(c,r,a,u,s,t));a=e[h],r=e[0]=o(e[0]-i(c,r,a,0,s,t))}return e}function l(e){if(/^[\x00-\x7f]*$/.test(e))return e;for(var t=[],n=e.length,r=0,a=0;r<n;++r,++a){var o=e.charCodeAt(r);if(o<128)t[a]=e.charAt(r);else if(o<2048)t[a]=String.fromCharCode(192|o>>6,128|63&o);else{if(!(o<55296||o>57343)){if(r+1<n){var i=e.charCodeAt(r+1);if(o<56320&&56320<=i&&i<=57343){var c=65536+((1023&o)<<10|1023&i);t[a]=String.fromCharCode(240|c>>18&63,128|c>>12&63,128|c>>6&63,128|63&c),++r;continue}}throw new Error("Malformed string")}t[a]=String.fromCharCode(224|o>>12,128|o>>6&63,128|63&o)}}return t.join("")}function f(e,t){for(var n=new Array(t),r=0,a=0,o=e.length;r<t&&a<o;r++){var i=e.charCodeAt(a++);switch(i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:n[r]=i;break;case 12:case 13:if(!(a<o))throw new Error("Unfinished UTF-8 octet sequence");n[r]=(31&i)<<6|63&e.charCodeAt(a++);break;case 14:if(!(a+1<o))throw new Error("Unfinished UTF-8 octet sequence");n[r]=(15&i)<<12|(63&e.charCodeAt(a++))<<6|63&e.charCodeAt(a++);break;case 15:if(!(a+2<o))throw new Error("Unfinished UTF-8 octet sequence");var c=((7&i)<<18|(63&e.charCodeAt(a++))<<12|(63&e.charCodeAt(a++))<<6|63&e.charCodeAt(a++))-65536;if(!(0<=c&&c<=1048575))throw new Error("Character outside valid Unicode range: 0x"+c.toString(16));n[r++]=c>>10&1023|55296,n[r]=1023&c|56320;break;default:throw new Error("Bad UTF-8 encoding 0x"+i.toString(16))}}return r<t&&(n.length=r),String.fromCharCode.apply(String,n)}function h(e,t){for(var n=[],r=new Array(32768),a=0,o=0,i=e.length;a<t&&o<i;a++){var c=e.charCodeAt(o++);switch(c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:r[a]=c;break;case 12:case 13:if(!(o<i))throw new Error("Unfinished UTF-8 octet sequence");r[a]=(31&c)<<6|63&e.charCodeAt(o++);break;case 14:if(!(o+1<i))throw new Error("Unfinished UTF-8 octet sequence");r[a]=(15&c)<<12|(63&e.charCodeAt(o++))<<6|63&e.charCodeAt(o++);break;case 15:if(!(o+2<i))throw new Error("Unfinished UTF-8 octet sequence");var s=((7&c)<<18|(63&e.charCodeAt(o++))<<12|(63&e.charCodeAt(o++))<<6|63&e.charCodeAt(o++))-65536;if(!(0<=s&&s<=1048575))throw new Error("Character outside valid Unicode range: 0x"+s.toString(16));r[a++]=s>>10&1023|55296,r[a]=1023&s|56320;break;default:throw new Error("Bad UTF-8 encoding 0x"+c.toString(16))}if(a>=32766){var u=a+1;r.length=u,n[n.length]=String.fromCharCode.apply(String,r),t-=u,a=-1}}return a>0&&(r.length=a,n[n.length]=String.fromCharCode.apply(String,r)),n.join("")}function d(e,t){return(void 0===t||null===t||t<0)&&(t=e.length),0===t?"":/^[\x00-\x7f]*$/.test(e)||!/^[\x00-\xff]*$/.test(e)?t===e.length?e:e.substr(0,t):t<32767?f(e,t):h(e,t)}function p(e,t){return void 0===e||null===e||0===e.length?e:(e=l(e),t=l(t),r(s(a(e,!0),c(a(t,!1))),!1))}function g(e,n){return t.btoa(p(e,n))}function m(e,t){return void 0===e||null===e||0===e.length?e:(t=l(t),d(r(u(a(e,!1),c(a(t,!1))),!0)))}function v(e,n){return void 0===e||null===e||0===e.length?e:m(t.atob(e),n)}e.exports=Object.create(null,{utf8Encode:{value:l},utf8Decode:{value:d},encrypt:{value:p},encryptToBase64:{value:g},decrypt:{value:m},decryptFromBase64:{value:v}})}).call(this,"undefined"!==typeof t?t:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{})}).call(this,n("c8ba"))},a8aa:function(e,t,n){},ab3b:function(e,t,n){},c24d:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));n("34ef");var r={resUrlEnc:"Mr00yzdhjrqWyq+lEYHlV35UG/kH6PU9mOPDDWJ9G5KHRK8Jseyciw==",resUrl:"",secKey:"lYGaTiW5h3n8oqNJ",secret:"",loginKey:"MTIzNA==",song:{},startSong:[],tgaSong:[]};var a={formatTime:function(e){var t=parseInt(e/60),n=parseInt(e%60),r=t+":"+(n<10?"0"+n:n);return r},encodeData:function(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return t}}},d896:function(e,t,n){},de90:function(e,t,n){"use strict";n("d896")}});