!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("6JpON");console.log("script goemona");var l=document.querySelector("button"),u=document.querySelector('[name="delay"]'),c=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]');function d(n,o){(function(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))})(n,o).then((function(n){var o=n.position,t=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})).finally((function(){if(n===+a.value)return console.log("All repetitions completed."),void l.removeAttribute("disabled");d(n+1,o+ +c.value)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault(),l.setAttribute("disabled","disabled"),d(1,+u.value)}))}();
//# sourceMappingURL=03-promises.2fa024d9.js.map