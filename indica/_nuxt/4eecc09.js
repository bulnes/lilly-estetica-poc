(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{299:function(t,e,n){"use strict";n.r(e);n(46),n(13),n(23),n(47),n(29),n(32),n(48),n(49),n(33);var r=n(6);n(50);function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){f=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(f)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l={methods:{openDeviceContacts:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.contacts.select(["name","tel"],{multiple:!0});case 2:if((n=e.sent).length){e.next=5;break}return e.abrupt("return");case 5:r=o(n);try{for(r.s();!(c=r.n()).done;)(l=c.value).phone=l.tel[0],delete l.tel}catch(t){r.e(t)}finally{r.f()}t.$store.commit("setContacts",n),t.$store.commit("nextScreen");case 9:case"end":return e.stop()}}),e)})))()}}},f=n(36),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"option-select-screen"},[n("h2",[t._v("Escolha uma opção")]),t._v(" "),n("p",[t._v("Como você quer indicar suas amigas?")]),t._v(" "),n("button",{staticClass:"cta",on:{click:t.openDeviceContacts}},[t._v("\n        CONTATOS DO CELULAR\n    ")]),t._v(" "),n("div",{staticClass:"spacer"},[t._v("ou")]),t._v(" "),n("button",{staticClass:"btn-type-contacts",on:{click:function(e){return t.$store.commit("nextScreen")}}},[t._v("\n        Digitar dados de Contato\n    ")])])}),[],!1,null,null,null);e.default=component.exports}}]);