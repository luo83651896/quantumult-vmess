(window["webpackJsonpquantumult-vmess"]=window["webpackJsonpquantumult-vmess"]||[]).push([[0],{11:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(2),r=n.n(o),i=(n(11),n(4));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(i.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},4:function(e,t,n){"use strict";(function(e){var a=n(1),c=n(0),o=n.n(c),r=n(5),i=n.n(r);n(21);function u(e){return o.a.createElement("textarea",{className:"main-item input-view",rows:"5",value:e.content,onChange:e.onChange,placeholder:"\u8f93\u5165 vmess \u94fe\u63a5\uff0c\u591a\u4e2a\u94fe\u63a5\u4f7f\u7528\u6362\u884c\u9694\u5f00"})}function s(e){var t=e.items.map(function(t){return o.a.createElement("div",{key:t},o.a.createElement("input",{type:"radio",id:t,value:t,name:t,checked:e.current===t,onChange:e.onChange}),o.a.createElement("label",{htmlFor:t},t))});return o.a.createElement("div",{className:"main-item method-selector "},t)}function l(e){var t=e.content.map(function(e){return o.a.createElement("div",{className:"output-item",key:e},e)});return o.a.createElement("div",{className:"main-item output-view"},t)}function m(e){return o.a.createElement(i.a,{className:"main-btn","option-text":e.text,onSuccess:e.onSuccess},"\u590d\u5236\u94fe\u63a5\u5e76\u6253\u5f00Quantumlt")}function f(t,n,a){return t.split("\n").map(function(t){return function(t,n,a){if(/^vmess:\/\/(.*?)$/.test(t)){var c=(i=RegExp.$1,i=(i+=Array(5-i.length%4).join("=")).replace(/-/g,"+").replace(/_/g,"/"),new e(i,"base64").toString());if(function(e){try{JSON.parse(e)}catch(t){return!1}return!0}(c)){var o=JSON.parse(c),r=",obfs=".concat("ws"===o.net?"ws":"http",',obfs-path="').concat(o.path||"/",'",obfs-header="Host:').concat(o.host||o.add,"[Rr][Nn]User-Agent:").concat("Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16A5366a",'"');return"".concat(o.ps," = vmess,").concat(o.add,",").concat(o.port,",").concat(n,',"').concat(o.id,'",group=').concat(a,",over-tls=").concat("tls"===o.tls?"true":"false",",certificate=1").concat("none"===o.type&&"ws"!==o.net?"":r)}return""}var i}(t,n,a)}).filter(function(e){return e})}t.a=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)("none"),p=Object(a.a)(i,2),h=p[0],v=p[1],d=Object(c.useState)("Fndroid"),w=Object(a.a)(d,2),g=w[0];return w[1],o.a.createElement("div",{className:"App"},o.a.createElement(u,{content:n,onChange:function(e){r(e.target.value)}}),o.a.createElement(s,{items:["none","aes-128-cfb","aes-128-gcm","chacha20-ietf-poly1305"],current:h,onChange:function(e){v(e.target.value)}}),o.a.createElement(l,{content:f(n,h,g)}),o.a.createElement(m,{text:function(){return f(n,h,g)},onSuccess:function(e){window.location.href="quantumult://"}}))}}).call(this,n(12).Buffer)},6:function(e,t,n){e.exports=n(22)}},[[6,1,2]]]);
//# sourceMappingURL=main.de597b77.chunk.js.map