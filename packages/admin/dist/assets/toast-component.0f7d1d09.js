import{W as e,t as n,h as o,q as s,u as i,v as t,w as d,e as c,f as a,s as r,b as m}from"./vendor.3f489542.js";import"./admin-docs.bfe65179.js";import"./index.039482e5.js";import"./container.db7f9588.js";import"./___vite-browser-external_commonjs-proxy.755037e0.js";var l=Object.defineProperty,u=Object.getOwnPropertyDescriptor;let p=class extends e{installed(){}render(){return n`px-2 w-full md:w-6/12`,o("code-demo-container",null,o("code-demo",{class:n``,title:"基本",describe:"最简单的 Loading",code:"```js\n//显示 Loading\nshowLoading('加载中')\n\nsetTimeout(() => {\n  //隐藏 Loading\n  hideLoading()\n}, 2000)\n```\n"},o("div",{slot:"demo",class:n`px-5 py-5`},o("o-button",{size:"mini",onclick:e=>{c(),setTimeout((()=>{a()}),2e3)}},"显示 Loading 提示"))),o("code-demo",{title:"不同尺寸",describe:"支持传入 size 控制大小",code:"```js\n//显示 Success\nshowSuccess('支持成功')\n\nsetTimeout(() => {\n  //隐藏 Success\n  hideSuccess()\n}, 2000)\n```\n"},o("div",{slot:"demo",class:n`px-5 py-5`},o("o-button",{size:"mini",onclick:e=>{t("支付成功"),setTimeout((()=>{d()}),2e3)}},"显示 Success 提示"))),o("code-demo",{title:"不同颜色",describe:"支持传入 color 控制颜色",code:"```js\n//显示 Loading\nshowWarning('加载中')\n\nsetTimeout(() => {\n  //隐藏 Loading\n  hideWarning()\n}, 2000)\n```\n"},o("div",{slot:"demo",class:n`px-5 py-5`},o("o-button",{size:"mini",onclick:e=>{s("支付失败"),setTimeout((()=>{i()}),2e3)}},"显示 Warning 提示"))))}};p.css=r.target,p=((e,n,o,s)=>{for(var i,t=s>1?void 0:s?u(n,o):n,d=e.length-1;d>=0;d--)(i=e[d])&&(t=(s?i(n,o,t):i(t))||t);return s&&t&&l(n,o,t),t})([m("toast-component")],p);export{p as default};
