function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var i,r,o,a,f,u,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function h(e){return l=e,f=setTimeout(O,t),c?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=o}function O(){var e=g();if(j(e))return S(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?m(n,o-(e-l)):n}(e))}function S(e){return f=void 0,v&&i?y(e):(i=r=void 0,a)}function T(){var e=g(),n=j(e);if(i=arguments,r=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=r=f=void 0},T.flush=function(){return void 0===f?a:S(g())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:i,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form");y.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),""===y.elements.email.value||""===y.elements.message.value?alert("Enter something in field"):(console.log(h),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),h={})})),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(y.elements.email.value=e.email||"",y.elements.message.value=e.message||"")}();let h=JSON.parse(localStorage.getItem("feedback-form-state"))||{};
//# sourceMappingURL=03-feedback.d4c7fb13.js.map
