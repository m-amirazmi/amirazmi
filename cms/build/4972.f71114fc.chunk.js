(self.webpackChunkcms=self.webpackChunkcms||[]).push([[4972],{14972:(E,v,i)=>{"use strict";i.r(v),i.d(v,{ROUTES_EE:()=>l});var f=i(67294),a=i(52820),p=i(36808),d=i.n(p),C=i(86896),t=i(16550);const o=()=>{const{params:{authResponse:n}}=(0,t.$B)("/auth/login/:authResponse"),{formatMessage:r}=(0,C.Z)(),{push:e}=(0,t.k6)(),g=(0,f.useRef)(r);let c=(0,f.useCallback)(()=>{e(`/auth/oops?info=${encodeURIComponent(g.current({id:"Auth.form.button.login.providers.error",defaultMessage:"We cannot connect you through the selected provider."}))}`)},[e]);const{get:u}=(0,a.kY)(),s=(0,f.useCallback)(async()=>{try{const h=d().get("jwtToken");if(a.I8.clearAppStorage(),h){a.I8.setToken(h,!0);const R="/admin/users/me",{data:{data:I}}=await u(R);a.I8.setUserInfo(I,!0),d().remove("jwtToken"),e("/auth/login")}}catch{c()}},[u,e,c]);return(0,f.useEffect)(()=>{n==="error"&&c(),n==="success"&&s()},[n,s,c]),f.createElement(a.dO,null)},m=null,l=[{Component:()=>({default:o}),to:"/auth/login/:authResponse",exact:!0}]},36808:(E,v,i)=>{var f,a;/*!
* JavaScript Cookie v2.2.1
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/(function(p){var d;if(f=p,a=typeof f=="function"?f.call(v,i,v,E):f,a!==void 0&&(E.exports=a),d=!0,E.exports=p(),d=!0,!d){var C=window.Cookies,t=window.Cookies=p();t.noConflict=function(){return window.Cookies=C,t}}})(function(){function p(){for(var t=0,o={};t<arguments.length;t++){var m=arguments[t];for(var l in m)o[l]=m[l]}return o}function d(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function C(t){function o(){}function m(n,r,e){if(!(typeof document>"u")){e=p({path:"/"},o.defaults,e),typeof e.expires=="number"&&(e.expires=new Date(new Date*1+e.expires*864e5)),e.expires=e.expires?e.expires.toUTCString():"";try{var g=JSON.stringify(r);/^[\{\[]/.test(g)&&(r=g)}catch{}r=t.write?t.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var u in e)e[u]&&(c+="; "+u,e[u]!==!0&&(c+="="+e[u].split(";")[0]));return document.cookie=n+"="+r+c}}function l(n,r){if(!(typeof document>"u")){for(var e={},g=document.cookie?document.cookie.split("; "):[],c=0;c<g.length;c++){var u=g[c].split("="),s=u.slice(1).join("=");!r&&s.charAt(0)==='"'&&(s=s.slice(1,-1));try{var h=d(u[0]);if(s=(t.read||t)(s,h)||d(s),r)try{s=JSON.parse(s)}catch{}if(e[h]=s,n===h)break}catch{}}return n?e[n]:e}}return o.set=m,o.get=function(n){return l(n,!1)},o.getJSON=function(n){return l(n,!0)},o.remove=function(n,r){m(n,"",p(r,{expires:-1}))},o.defaults={},o.withConverter=C,o}return C(function(){})})}}]);
