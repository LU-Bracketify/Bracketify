if(!self.define){let e,s={};const r=(r,t)=>(r=new URL(r+".js",t).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(t,o)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let i={};const c=e=>r(e,n),l={module:{uri:n},exports:i,require:c};s[n]=Promise.all(t.map((e=>l[e]||c(e)))).then((e=>(o(...e),i)))}}define(["./workbox-db16a839"],(function(e){"use strict";e.setCacheNameDetails({prefix:"rootCache"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"style.css",revision:"bee4e800095abebc8c57e013e32010e9"},{url:"generator.js",revision:"fdaa8364a0dcfa08b802cb2ea4286608"}],{}),e.registerRoute(/\.(?:html)$/,new e.StaleWhileRevalidate({cacheName:"html resources",plugins:[new e.ExpirationPlugin({maxAgeSeconds:1800})]}),"GET")}));
//# sourceMappingURL=sw.js.map
