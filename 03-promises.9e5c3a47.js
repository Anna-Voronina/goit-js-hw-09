var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},e.parcelRequired7c6=n);var o=n("iQIUW");function i(e,r){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t(`✅ Fulfilled promise ${e} in ${r}ms`):n(`❌ Rejected promise ${e} in ${r}ms`)}),r)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const r=Number(e.currentTarget.elements.delay.value),t=Number(e.currentTarget.elements.step.value),n=Number(e.currentTarget.elements.amount.value);for(let e=0;e<n;e+=1){i(e+1,r+t*e).then((e=>{o.Notify.success(e)})).catch((e=>{o.Notify.failure(e)}))}}));
//# sourceMappingURL=03-promises.9e5c3a47.js.map
