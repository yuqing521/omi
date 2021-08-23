import{h,l as extractClass,b as tag,W as WeElement,k as require$$0,g as commonjsGlobal,t as tw,s as sheet}from"./vendor.cff7a2c5.js";import"./favorite.99054448.js";import"./admin-docs.d04bcd77.js";import"./index.b502f1bc.js";import"./container.b1933bec.js";import"./___vite-browser-external_commonjs-proxy.e2cda3d0.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var extendStatics=function(e,n){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)};function __extends(e,n){function t(){this.constructor=e}extendStatics(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var __assign=function(){return(__assign=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)};function __decorate(e,n,t,o){var r,i=arguments.length,a=i<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(n,t,a):r(n,t))||a);return i>3&&a&&Object.defineProperty(n,t,a),a}var css=":host {\n  display: inline-block; }\n\nbutton {\n  appearance: none;\n  -webkit-appearance: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  margin: 0;\n  padding: 0; }\n\n.is-disabled {\n  cursor: not-allowed; }\n\n.o-toggle-icon {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased; }\n";!function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.clickHandler=function(){n.updateProps({isOn:!n.props.isOn}),n.fire("change",{isOn:n.props.isOn})},n}__extends(n,e),n.prototype.render=function(e){var n=e.icons.map((function(e){return"o-icon-"+e}));return this.tagA=n[0],this.tagB=n[1],h("button",__assign({style:"color:"+e.color+";",onClick:this.clickHandler},extractClass(e,"o-toggle-icon",{"is-disabled":e.disabled}),{disabled:e.disabled}),n.length>0&&(e.isOn?h(this.tagB,null):h(this.tagA,null)),e.imgs&&(e.isOn?h("img",{src:e.imgs[1]}):h("img",{src:e.imgs[0]})))},n.css=css,n.defaultProps={isOn:!1,icons:[]},n.propTypes={isOn:Boolean,icons:Object,imgs:Object,color:String,disabled:Boolean},n=__decorate([tag("o-toggle-icon")],n)}(WeElement);var favoriteBorder={exports:{}};(function(module,exports){var factory;factory=function(__WEBPACK_EXTERNAL_MODULE_omi__){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./esm/favorite-border.js")}({"./esm/favorite-border.js":function(module,exports,__webpack_require__){eval('\nObject.defineProperty(exports, "__esModule", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ "omi");\nvar createSvgIcon_1 = __webpack_require__(/*! ./utils/createSvgIcon */ "./esm/utils/createSvgIcon.js");\nexports.default = createSvgIcon_1.default(omi_1.h("path", {\n    d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"\n}), \'FavoriteBorder\');\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/favorite-border.js?')},"./esm/utils/createSvgIcon.js":function(module,exports,__webpack_require__){eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar omi_1 = __webpack_require__(/*! omi */ \"omi\");\nvar hyphenateRE = /\\B([A-Z])/g;\nvar hyphenate = function (str) {\n    return str.replace(hyphenateRE, '-$1').toLowerCase();\n};\nfunction createSvgIcon(path, displayName) {\n    var _a;\n    omi_1.define(hyphenate('OIcon' + displayName), (_a = /** @class */ (function (_super) {\n            __extends(class_1, _super);\n            function class_1() {\n                return _super !== null && _super.apply(this, arguments) || this;\n            }\n            class_1.prototype.render = function () {\n                return omi_1.h('svg', {\n                    viewBox: '0 0 24 24',\n                }, path);\n            };\n            return class_1;\n        }(omi_1.WeElement)),\n        _a.css = \":host {\\n  fill: currentColor;\\n  width: 1em;\\n  height: 1em;\\n  display: inline-block;\\n  vertical-align: -0.125em;\\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\\n  flex-shrink: 0;\\n  user-select: none;\\n}\",\n        _a));\n}\nexports.default = createSvgIcon;\n\n\n//# sourceURL=webpack://%5Bname%5D/./esm/utils/createSvgIcon.js?")},omi:function(module,exports){eval("module.exports = __WEBPACK_EXTERNAL_MODULE_omi__;\n\n//# sourceURL=webpack://%5Bname%5D/external_%7B%22commonjs%22:%22omi%22,%22commonjs2%22:%22omi%22,%22amd%22:%22omi%22,%22root%22:%22Omi%22%7D?")}}).default},module.exports=factory(require$$0)})(favoriteBorder);var __defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__decorateClass=(e,n,t,o)=>{for(var r,i=o>1?void 0:o?__getOwnPropDesc(n,t):n,a=e.length-1;a>=0;a--)(r=e[a])&&(i=(o?r(n,t,i):r(i))||i);return o&&i&&__defProp(n,t,i),i};const tagName="toggle-icon-component";let toggle_icon_component_default=class extends WeElement{install(){}render(){return h("code-demo-container",null,h("code-demo",{title:"可切换图标",describe:"拥有两种状态切换的icon",code:"\n```jsx\n<o-toggle-icon icons={['favorite-border','favorite']}></o-toggle-icon>\n<o-toggle-icon is-on color=\"red\" icons={['favorite-border','favorite']}></o-toggle-icon>\n<o-toggle-icon disabled icons={['favorite', 'favorite-border']}></o-toggle-icon>\n```\n          "},h("div",{slot:"demo",class:tw`flex justify-around px-5 py-5`},h("o-toggle-icon",{icons:["favorite-border","favorite"]}),h("o-toggle-icon",{"is-on":!0,color:"red",icons:["favorite-border","favorite"]}),h("o-toggle-icon",{disabled:!0,icons:["favorite","favorite-border"]}))))}};toggle_icon_component_default.css=sheet.target,toggle_icon_component_default=__decorateClass([tag(tagName)],toggle_icon_component_default);export{toggle_icon_component_default as default};
