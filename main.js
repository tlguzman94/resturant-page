!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=e=>{let t=document.createElement("div");return t.classList.toggle("tab"),t.textContent=e,t};var c=()=>{const e=document.querySelector(".tab-content");e&&e.remove(),document.querySelector("#content").appendChild((()=>{let e=document.createElement("div");e.classList.toggle("tab-content");let t=document.createElement("h1");t.classList.toggle("tab-heading"),t.textContent="Welcome",e.appendChild(t);let n=document.createElement("p");return n.classList.toggle("tab-para"),n.textContent="Do right and far exceed expectations daily. We do the right thing and lead by putting people first.Each and every connection with our team, guests and shareholders is our opportunity to create an experience that FEEDs – Far Exceeds Expectations Daily – and show how much we care.",e.appendChild(n),e})())};var i=()=>{const e=document.querySelector(".tab-content");e&&e.remove(),document.querySelector("#content").appendChild((()=>{let e=document.createElement("div");e.classList.toggle("tab-content");let t=document.createElement("h1");t.classList.toggle("tab-heading"),t.textContent="CONTACT US",e.appendChild(t);let n=document.createElement("div"),o=document.createElement("div");o.textContent="EMAIL";let c=document.createElement("div");c.textContent="thisisnotan@email.com",n.appendChild(o),n.appendChild(c);let i=document.createElement("div");i.textContent="PHONE";let r=document.createElement("div");r.textContent="123 456 7890",n.appendChild(i),n.appendChild(r);let a=document.createElement("div");a.textContent="ADDRESS";let l=document.createElement("div");return l.textContent="123 some st city, State 01234",n.appendChild(a),n.appendChild(l),e.appendChild(n),e})())};const r=e=>{let t=document.createElement("div");t.classList.toggle("menu-item");let n=document.createElement("h1");n.classList.toggle("menu-heading"),n.textContent=e.name,t.appendChild(n);let o=document.createElement("p");return o.classList.toggle("menu-description"),o.textContent=e.description,t.appendChild(o),t};var a=e=>{const t=document.querySelector("#content"),n=document.createElement("div");n.classList.toggle("tab-content");let o=document.createElement("h1");o.classList.toggle("tab-heading"),o.textContent="Menu",n.appendChild(o);for(let t=0;t<e.length;t++)n.appendChild(r(e[t]));const c=document.querySelector(".tab-content");c&&c.remove(),t.appendChild(n)};let l=[{name:"item1",description:"item1 description"},{name:"item2",description:"item2 description"},{name:"item2",description:"item2 description"},{name:"item1",description:"item1 description"},{name:"item2",description:"item2 description"},{name:"item2",description:"item2 description"}];(e=>{const t=document.querySelector("#content"),n=document.createElement("div");n.id="header";for(let t=0;t<e.length;t++){let c=o(e[t]);0===t&&c.classList.toggle("active"),n.appendChild(c)}t.appendChild(n)})(["Home","Menu","Contact"]),c(),document.querySelectorAll(".tab").forEach(e=>{e.addEventListener("click",()=>{let t=e.textContent;(e=>{document.querySelectorAll(".tab").forEach(t=>{t.textContent===e?t.classList.add("active"):t.classList.remove("active")})})(t),"Home"===t?c():"Menu"===t?a(l):"Contact"===t&&i()})})}]);