(function(){"use strict";var t={8928:function(t,n,e){var o=e(7195),r=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[n("LasyIframe"),n("bottom-navbar",{on:{share:t.shareOnTwitter}})],1)},a=[],i=function(){var t=this,n=t._self._c;return n("div",[n("iframe",{ref:"myIframe",staticStyle:{width:"100vw",height:"100vh"},attrs:{src:"https://mapy.lasyiobywatele.pl/zanim-wytna-twoj-las.html",width:"100%",height:"1000px"},on:{load:t.iframeLoaded}})])},u=[],s={name:"LasyIframe",mounted(){this.trackPageView()},methods:{trackPageView(){const t="maps";this.$gtag.pageview({page_path:"/",page_title:t}),console.log("iframeLoaded")},iframeLoaded(){}}},c=s,l=e(1001),f=(0,l.Z)(c,i,u,!1,null,null,null),p=f.exports,d=function(){var t=this,n=t._self._c;return n("div",{staticClass:"bottom-navbar"},[n("button",{staticClass:"nav-button",on:{click:function(n){return t.$emit("share")}}},[t._v("Share on twitter")]),n("button",{staticClass:"nav-button"},[t._v("Button 2")]),n("button",{staticClass:"nav-button"},[t._v("Button 3")])])},h=[],v={},m=(0,l.Z)(v,d,h,!1,null,"57c24966",null),b=m.exports,g=e(2098),w=e.n(g),y={components:{LasyIframe:p,BottomNavbar:b},methods:{async shareOnTwitter(){console.log("shareontwitter");const t=document.getElementById("app"),n=await w()(t),e=n.toDataURL("image/png"),o=encodeURIComponent(e),r=`https://twitter.com/intent/tweet?url=${o}`;window.open(r,"_blank")}}},_=y,O=(0,l.Z)(_,r,a,!1,null,null,null),P=O.exports,k=e(1622),j=e(6019),x=e.n(j),Z=e(7160);o.ZP.config.productionTip=!1,o.ZP.use(x()),o.ZP.use(k,{load:{key:"AIzaSyDdbvUUGfTHsbUB-sChAJfqQB2EiEXQV-Q",libraries:"maps"}}),o.ZP.use(Z.ZP,{config:{id:"G-2621L863YQ"}}),new o.ZP({render:t=>t(P)}).$mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return t[o].call(a.exports,a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,a){if(!o){var i=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],a=t[l][2];for(var u=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(e.O).every((function(t){return e.O[t](o[s])}))?o.splice(s--,1):(u=!1,a<i&&(i=a));if(u){t.splice(l--,1);var c=r();void 0!==c&&(n=c)}}return n}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[o,r,a]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,a,i=o[0],u=o[1],s=o[2],c=0;if(i.some((function(n){return 0!==t[n]}))){for(r in u)e.o(u,r)&&(e.m[r]=u[r]);if(s)var l=s(e)}for(n&&n(o);c<i.length;c++)a=i[c],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(l)},o=self["webpackChunkpolasach"]=self["webpackChunkpolasach"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(8928)}));o=e.O(o)})();
//# sourceMappingURL=app.4ef4eab2.js.map