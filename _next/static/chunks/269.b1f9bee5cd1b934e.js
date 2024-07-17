(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[269],{24:function(t,r,e){"use strict";e.r(r);var n=e(7437),i=e(9474),o=e(9929),s=e.n(o),f=e(2265);r.default=t=>{let{users:r,chartData:e,onChartChange:o}=t,a=(0,f.useRef)(null),[u,h]=(0,f.useState)(i.j8.SCORES),[l,c]=(0,f.useState)(!1),p=(0,f.useCallback)(async()=>{if(!a.current)return;let t=await s().toImage(a.current,{format:"png",width:600,height:400}),r=await fetch(t);o(await r.blob())},[o]);(0,f.useEffect)(()=>{let t;if(!a.current||0===e.period)return;let n=[];for(let[t,o]of(u===i.j8.SCORES?n=e.scoreData:u===i.j8.ACS?n=e.acData:u===i.j8.RATINGS&&(n=e.ratingData),n.entries()))0!==t&&(l?o.name="rival_".concat(t):o.name=r[t]);e.period>=700||i.j8.RATINGS;let o={title:"Shojin Chart",legend:{xanchor:"left",yanchor:"top",x:.01,y:1},font:{family:"Courier New, monospace",size:18},xaxis:{dtick:(t="M1",(e.period>=700||u===i.j8.RATINGS)&&(t="M6"),t),tickformat:"%Y-%m",tickangle:-45,tickfont:{size:16}},yaxis:{title:u},margin:{t:60,l:70,r:50},autosize:!0,dragmode:!1};s().newPlot(a.current,n,o,{displayModeBar:!1}),p()},[e,u,l]);let y=t=>{h(t.target.value)};return 0===e.period?(0,n.jsx)(n.Fragment,{}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{ref:a}),(0,n.jsxs)("div",{className:"mt-10",children:[(0,n.jsx)("div",{className:"flex justify-center gray-800 text-2xl",children:"Chart Options"}),(0,n.jsxs)("div",{className:"mt-5 flex justify-center gray-800",children:[(0,n.jsxs)("ul",{className:"items-center w-72 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex",children:[(0,n.jsx)("li",{className:"w-full border-b border-gray-200 sm:border-b-0 sm:border-r",children:(0,n.jsxs)("div",{className:"flex items-center ps-3",children:[(0,n.jsx)("input",{id:"metrics-radio-scores",type:"radio",name:"metrics-radio",value:i.j8.SCORES,checked:u===i.j8.SCORES,onChange:y,className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"}),(0,n.jsx)("label",{htmlFor:"metrics-radio-scores",className:"w-full py-3 ms-2 text-sm font-medium text-gray-900",children:"Scores"})]})}),(0,n.jsx)("li",{className:"w-full border-b border-gray-200 sm:border-b-0 sm:border-r",children:(0,n.jsxs)("div",{className:"flex items-center ps-3",children:[(0,n.jsx)("input",{id:"metrics-radio-acs",type:"radio",name:"metrics-radio",value:i.j8.ACS,checked:u===i.j8.ACS,onChange:y,className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"}),(0,n.jsx)("label",{htmlFor:"metrics-radio-acs",className:"w-full py-3 ms-2 text-sm font-medium text-gray-900",children:"ACs"})]})}),(0,n.jsx)("li",{className:"w-full",children:(0,n.jsxs)("div",{className:"flex items-center ps-3",children:[(0,n.jsx)("input",{id:"metrics-radio-ratings",type:"radio",name:"metrics-radio",value:i.j8.RATINGS,checked:u===i.j8.RATINGS,onChange:y,className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"}),(0,n.jsx)("label",{htmlFor:"metrics-radio-ratings",className:"w-full py-3 ms-2 text-sm font-medium text-gray-900",children:"Ratings"})]})})]}),(0,n.jsxs)("div",{className:"ml-6 w-40 flex items-center ps-4 border border-gray-200 rounded h-12",children:[(0,n.jsx)("input",{id:"mask-cb",type:"checkbox",defaultValue:"",checked:l,onChange:()=>{c(!l)},className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"}),(0,n.jsx)("label",{htmlFor:"mask-cb",className:"w-py-4 ms-2 text-sm font-medium text-gray-900",children:"Mask Rival IDs"})]})]})]})]})}},6300:function(t){!function(){var r={675:function(t,r){"use strict";r.byteLength=function(t){var r=a(t),e=r[0],n=r[1];return(e+n)*3/4-n},r.toByteArray=function(t){var r,e,o=a(t),s=o[0],f=o[1],u=new i((s+f)*3/4-f),h=0,l=f>0?s-4:s;for(e=0;e<l;e+=4)r=n[t.charCodeAt(e)]<<18|n[t.charCodeAt(e+1)]<<12|n[t.charCodeAt(e+2)]<<6|n[t.charCodeAt(e+3)],u[h++]=r>>16&255,u[h++]=r>>8&255,u[h++]=255&r;return 2===f&&(r=n[t.charCodeAt(e)]<<2|n[t.charCodeAt(e+1)]>>4,u[h++]=255&r),1===f&&(r=n[t.charCodeAt(e)]<<10|n[t.charCodeAt(e+1)]<<4|n[t.charCodeAt(e+2)]>>2,u[h++]=r>>8&255,u[h++]=255&r),u},r.fromByteArray=function(t){for(var r,n=t.length,i=n%3,o=[],s=0,f=n-i;s<f;s+=16383)o.push(function(t,r,n){for(var i,o=[],s=r;s<n;s+=3)o.push(e[(i=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]))>>18&63]+e[i>>12&63]+e[i>>6&63]+e[63&i]);return o.join("")}(t,s,s+16383>f?f:s+16383));return 1===i?o.push(e[(r=t[n-1])>>2]+e[r<<4&63]+"=="):2===i&&o.push(e[(r=(t[n-2]<<8)+t[n-1])>>10]+e[r>>4&63]+e[r<<2&63]+"="),o.join("")};for(var e=[],n=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,f=o.length;s<f;++s)e[s]=o[s],n[o.charCodeAt(s)]=s;function a(t){var r=t.length;if(r%4>0)throw Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");-1===e&&(e=r);var n=e===r?0:4-e%4;return[e,n]}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},72:function(t,r,e){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var n=e(675),i=e(783),o="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function s(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');var r=new Uint8Array(t);return Object.setPrototypeOf(r,f.prototype),r}function f(t,r,e){if("number"==typeof t){if("string"==typeof r)throw TypeError('The "string" argument must be of type string. Received type number');return h(t)}return a(t,r,e)}function a(t,r,e){if("string"==typeof t)return function(t,r){if(("string"!=typeof r||""===r)&&(r="utf8"),!f.isEncoding(r))throw TypeError("Unknown encoding: "+r);var e=0|p(t,r),n=s(e),i=n.write(t,r);return i!==e&&(n=n.slice(0,i)),n}(t,r);if(ArrayBuffer.isView(t))return l(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(I(t,ArrayBuffer)||t&&I(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(I(t,SharedArrayBuffer)||t&&I(t.buffer,SharedArrayBuffer)))return function(t,r,e){var n;if(r<0||t.byteLength<r)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<r+(e||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===r&&void 0===e?new Uint8Array(t):void 0===e?new Uint8Array(t,r):new Uint8Array(t,r,e),f.prototype),n}(t,r,e);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return f.from(n,r,e);var i=function(t){if(f.isBuffer(t)){var r,e=0|c(t.length),n=s(e);return 0===n.length||t.copy(n,0,0,e),n}return void 0!==t.length?"number"!=typeof t.length||(r=t.length)!=r?s(0):l(t):"Buffer"===t.type&&Array.isArray(t.data)?l(t.data):void 0}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return f.from(t[Symbol.toPrimitive]("string"),r,e);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function u(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function h(t){return u(t),s(t<0?0:0|c(t))}function l(t){for(var r=t.length<0?0:0|c(t.length),e=s(r),n=0;n<r;n+=1)e[n]=255&t[n];return e}function c(t){if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function p(t,r){if(f.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||I(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var e=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===e)return 0;for(var i=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return S(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return C(t).length;default:if(i)return n?-1:S(t).length;r=(""+r).toLowerCase(),i=!0}}function y(t,r,e){var i,o,s=!1;if((void 0===r||r<0)&&(r=0),r>this.length||((void 0===e||e>this.length)&&(e=this.length),e<=0||(e>>>=0)<=(r>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=T[t[o]];return i}(this,r,e);case"utf8":case"utf-8":return b(this,r,e);case"ascii":return function(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}(this,r,e);case"latin1":case"binary":return function(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}(this,r,e);case"base64":return i=r,o=e,0===i&&o===this.length?n.fromByteArray(this):n.fromByteArray(this.slice(i,o));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}(this,r,e);default:if(s)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),s=!0}}function g(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function d(t,r,e,n,i){var o;if(0===t.length)return -1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),(o=e=+e)!=o&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return -1;e=t.length-1}else if(e<0){if(!i)return -1;e=0}if("string"==typeof r&&(r=f.from(r,n)),f.isBuffer(r))return 0===r.length?-1:m(t,r,e,n,i);if("number"==typeof r)return(r&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):m(t,[r],e,n,i);throw TypeError("val must be string, number or Buffer")}function m(t,r,e,n,i){var o,s=1,f=t.length,a=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return -1;s=2,f/=2,a/=2,e/=2}function u(t,r){return 1===s?t[r]:t.readUInt16BE(r*s)}if(i){var h=-1;for(o=e;o<f;o++)if(u(t,o)===u(r,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===a)return h*s}else -1!==h&&(o-=o-h),h=-1}else for(e+a>f&&(e=f-a),o=e;o>=0;o--){for(var l=!0,c=0;c<a;c++)if(u(t,o+c)!==u(r,c)){l=!1;break}if(l)return o}return -1}function b(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o,s,f,a,u=t[i],h=null,l=u>239?4:u>223?3:u>191?2:1;if(i+l<=e)switch(l){case 1:u<128&&(h=u);break;case 2:(192&(o=t[i+1]))==128&&(a=(31&u)<<6|63&o)>127&&(h=a);break;case 3:o=t[i+1],s=t[i+2],(192&o)==128&&(192&s)==128&&(a=(15&u)<<12|(63&o)<<6|63&s)>2047&&(a<55296||a>57343)&&(h=a);break;case 4:o=t[i+1],s=t[i+2],f=t[i+3],(192&o)==128&&(192&s)==128&&(192&f)==128&&(a=(15&u)<<18|(63&o)<<12|(63&s)<<6|63&f)>65535&&a<1114112&&(h=a)}null===h?(h=65533,l=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=l}return function(t){var r=t.length;if(r<=4096)return String.fromCharCode.apply(String,t);for(var e="",n=0;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return e}(n)}function v(t,r,e){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+r>e)throw RangeError("Trying to access beyond buffer length")}function w(t,r,e,n,i,o){if(!f.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw RangeError('"value" argument is out of bounds');if(e+n>t.length)throw RangeError("Index out of range")}function E(t,r,e,n,i,o){if(e+n>t.length||e<0)throw RangeError("Index out of range")}function A(t,r,e,n,o){return r=+r,e>>>=0,o||E(t,r,e,4,34028234663852886e22,-34028234663852886e22),i.write(t,r,e,n,23,4),e+4}function x(t,r,e,n,o){return r=+r,e>>>=0,o||E(t,r,e,8,17976931348623157e292,-17976931348623157e292),i.write(t,r,e,n,52,8),e+8}r.Buffer=f,r.SlowBuffer=function(t){return+t!=t&&(t=0),f.alloc(+t)},r.INSPECT_MAX_BYTES=50,r.kMaxLength=2147483647,f.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1),r={foo:function(){return 42}};return Object.setPrototypeOf(r,Uint8Array.prototype),Object.setPrototypeOf(t,r),42===t.foo()}catch(t){return!1}}(),f.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(f.prototype,"parent",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.buffer}}),Object.defineProperty(f.prototype,"offset",{enumerable:!0,get:function(){if(f.isBuffer(this))return this.byteOffset}}),f.poolSize=8192,f.from=function(t,r,e){return a(t,r,e)},Object.setPrototypeOf(f.prototype,Uint8Array.prototype),Object.setPrototypeOf(f,Uint8Array),f.alloc=function(t,r,e){return(u(t),t<=0)?s(t):void 0!==r?"string"==typeof e?s(t).fill(r,e):s(t).fill(r):s(t)},f.allocUnsafe=function(t){return h(t)},f.allocUnsafeSlow=function(t){return h(t)},f.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==f.prototype},f.compare=function(t,r){if(I(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),I(r,Uint8Array)&&(r=f.from(r,r.offset,r.byteLength)),!f.isBuffer(t)||!f.isBuffer(r))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},f.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(t,r){if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return f.alloc(0);if(void 0===r)for(e=0,r=0;e<t.length;++e)r+=t[e].length;var e,n=f.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var o=t[e];if(I(o,Uint8Array)&&(o=f.from(o)),!f.isBuffer(o))throw TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},f.byteLength=p,f.prototype._isBuffer=!0,f.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)g(this,r,r+1);return this},f.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)g(this,r,r+3),g(this,r+1,r+2);return this},f.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)g(this,r,r+7),g(this,r+1,r+6),g(this,r+2,r+5),g(this,r+3,r+4);return this},f.prototype.toString=function(){var t=this.length;return 0===t?"":0==arguments.length?b(this,0,t):y.apply(this,arguments)},f.prototype.toLocaleString=f.prototype.toString,f.prototype.equals=function(t){if(!f.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===f.compare(this,t)},f.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},o&&(f.prototype[o]=f.prototype.inspect),f.prototype.compare=function(t,r,e,n,i){if(I(t,Uint8Array)&&(t=f.from(t,t.offset,t.byteLength)),!f.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return -1;if(r>=e)return 1;if(r>>>=0,e>>>=0,n>>>=0,i>>>=0,this===t)return 0;for(var o=i-n,s=e-r,a=Math.min(o,s),u=this.slice(n,i),h=t.slice(r,e),l=0;l<a;++l)if(u[l]!==h[l]){o=u[l],s=h[l];break}return o<s?-1:s<o?1:0},f.prototype.includes=function(t,r,e){return -1!==this.indexOf(t,r,e)},f.prototype.indexOf=function(t,r,e){return d(this,t,r,e,!0)},f.prototype.lastIndexOf=function(t,r,e){return d(this,t,r,e,!1)},f.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else if(isFinite(r))r>>>=0,isFinite(e)?(e>>>=0,void 0===n&&(n="utf8")):(n=e,e=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i,o,s,f,a,u,h,l,c,p,y,g,d=this.length-r;if((void 0===e||e>d)&&(e=d),t.length>0&&(e<0||r<0)||r>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var m=!1;;)switch(n){case"hex":return function(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;n>o/2&&(n=o/2);for(var s=0;s<n;++s){var f=parseInt(r.substr(2*s,2),16);if(f!=f)break;t[e+s]=f}return s}(this,t,r,e);case"utf8":case"utf-8":return a=r,u=e,U(S(t,this.length-a),this,a,u);case"ascii":return h=r,l=e,U(j(t),this,h,l);case"latin1":case"binary":return i=this,o=t,s=r,f=e,U(j(o),i,s,f);case"base64":return c=r,p=e,U(C(t),this,c,p);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return y=r,g=e,U(function(t,r){for(var e,n,i=[],o=0;o<t.length&&!((r-=2)<0);++o)n=(e=t.charCodeAt(o))>>8,i.push(e%256),i.push(n);return i}(t,this.length-y),this,y,g);default:if(m)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),m=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},f.prototype.slice=function(t,r){var e=this.length;t=~~t,r=void 0===r?e:~~r,t<0?(t+=e)<0&&(t=0):t>e&&(t=e),r<0?(r+=e)<0&&(r=0):r>e&&(r=e),r<t&&(r=t);var n=this.subarray(t,r);return Object.setPrototypeOf(n,f.prototype),n},f.prototype.readUIntLE=function(t,r,e){t>>>=0,r>>>=0,e||v(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},f.prototype.readUIntBE=function(t,r,e){t>>>=0,r>>>=0,e||v(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},f.prototype.readUInt8=function(t,r){return t>>>=0,r||v(t,1,this.length),this[t]},f.prototype.readUInt16LE=function(t,r){return t>>>=0,r||v(t,2,this.length),this[t]|this[t+1]<<8},f.prototype.readUInt16BE=function(t,r){return t>>>=0,r||v(t,2,this.length),this[t]<<8|this[t+1]},f.prototype.readUInt32LE=function(t,r){return t>>>=0,r||v(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},f.prototype.readUInt32BE=function(t,r){return t>>>=0,r||v(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},f.prototype.readIntLE=function(t,r,e){t>>>=0,r>>>=0,e||v(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*r)),n},f.prototype.readIntBE=function(t,r,e){t>>>=0,r>>>=0,e||v(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*r)),o},f.prototype.readInt8=function(t,r){return(t>>>=0,r||v(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},f.prototype.readInt16LE=function(t,r){t>>>=0,r||v(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},f.prototype.readInt16BE=function(t,r){t>>>=0,r||v(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},f.prototype.readInt32LE=function(t,r){return t>>>=0,r||v(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},f.prototype.readInt32BE=function(t,r){return t>>>=0,r||v(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},f.prototype.readFloatLE=function(t,r){return t>>>=0,r||v(t,4,this.length),i.read(this,t,!0,23,4)},f.prototype.readFloatBE=function(t,r){return t>>>=0,r||v(t,4,this.length),i.read(this,t,!1,23,4)},f.prototype.readDoubleLE=function(t,r){return t>>>=0,r||v(t,8,this.length),i.read(this,t,!0,52,8)},f.prototype.readDoubleBE=function(t,r){return t>>>=0,r||v(t,8,this.length),i.read(this,t,!1,52,8)},f.prototype.writeUIntLE=function(t,r,e,n){if(t=+t,r>>>=0,e>>>=0,!n){var i=Math.pow(2,8*e)-1;w(this,t,r,e,i,0)}var o=1,s=0;for(this[r]=255&t;++s<e&&(o*=256);)this[r+s]=t/o&255;return r+e},f.prototype.writeUIntBE=function(t,r,e,n){if(t=+t,r>>>=0,e>>>=0,!n){var i=Math.pow(2,8*e)-1;w(this,t,r,e,i,0)}var o=e-1,s=1;for(this[r+o]=255&t;--o>=0&&(s*=256);)this[r+o]=t/s&255;return r+e},f.prototype.writeUInt8=function(t,r,e){return t=+t,r>>>=0,e||w(this,t,r,1,255,0),this[r]=255&t,r+1},f.prototype.writeUInt16LE=function(t,r,e){return t=+t,r>>>=0,e||w(this,t,r,2,65535,0),this[r]=255&t,this[r+1]=t>>>8,r+2},f.prototype.writeUInt16BE=function(t,r,e){return t=+t,r>>>=0,e||w(this,t,r,2,65535,0),this[r]=t>>>8,this[r+1]=255&t,r+2},f.prototype.writeUInt32LE=function(t,r,e){return t=+t,r>>>=0,e||w(this,t,r,4,4294967295,0),this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t,r+4},f.prototype.writeUInt32BE=function(t,r,e){return t=+t,r>>>=0,e||w(this,t,r,4,4294967295,0),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},f.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r>>>=0,!n){var i=Math.pow(2,8*e-1);w(this,t,r,e,i-1,-i)}var o=0,s=1,f=0;for(this[r]=255&t;++o<e&&(s*=256);)t<0&&0===f&&0!==this[r+o-1]&&(f=1),this[r+o]=(t/s>>0)-f&255;return r+e},f.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r>>>=0,!n){var i=Math.pow(2,8*e-1);w(this,t,r,e,i-1,-i)}var o=e-1,s=1,f=0;for(this[r+o]=255&t;--o>=0&&(s*=256);)t<0&&0===f&&0!==this[r+o+1]&&(f=1),this[r+o]=(t/s>>0)-f&255;return r+e},f.prototype.writeInt8=function(t,r,e){return t=+t,r>>>=0,e||w(this,t,r,1,127,-128),t<0&&(t=255+t+1),this[r]=255&t,r+1},f.prototype.writeInt16LE=function(t,r,e){return t=+t,r>>>=0,e||w(this,t,r,2,32767,-32768),this[r]=255&t,this[r+1]=t>>>8,r+2},f.prototype.writeInt16BE=function(t,r,e){return t=+t,r>>>=0,e||w(this,t,r,2,32767,-32768),this[r]=t>>>8,this[r+1]=255&t,r+2},f.prototype.writeInt32LE=function(t,r,e){return t=+t,r>>>=0,e||w(this,t,r,4,2147483647,-2147483648),this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24,r+4},f.prototype.writeInt32BE=function(t,r,e){return t=+t,r>>>=0,e||w(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t,r+4},f.prototype.writeFloatLE=function(t,r,e){return A(this,t,r,!0,e)},f.prototype.writeFloatBE=function(t,r,e){return A(this,t,r,!1,e)},f.prototype.writeDoubleLE=function(t,r,e){return x(this,t,r,!0,e)},f.prototype.writeDoubleBE=function(t,r,e){return x(this,t,r,!1,e)},f.prototype.copy=function(t,r,e,n){if(!f.isBuffer(t))throw TypeError("argument should be a Buffer");if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e||0===t.length||0===this.length)return 0;if(r<0)throw RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i=n-e;if(this===t&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(r,e,n);else if(this===t&&e<r&&r<n)for(var o=i-1;o>=0;--o)t[o+r]=this[o+e];else Uint8Array.prototype.set.call(t,this.subarray(e,n),r);return i},f.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!f.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===t.length){var i,o=t.charCodeAt(0);("utf8"===n&&o<128||"latin1"===n)&&(t=o)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(r<0||this.length<r||this.length<e)throw RangeError("Out of range index");if(e<=r)return this;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(i=r;i<e;++i)this[i]=t;else{var s=f.isBuffer(t)?t:f.from(t,n),a=s.length;if(0===a)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<e-r;++i)this[i+r]=s[i%a]}return this};var B=/[^+/0-9A-Za-z-_]/g;function S(t,r){r=r||1/0;for(var e,n=t.length,i=null,o=[],s=0;s<n;++s){if((e=t.charCodeAt(s))>55295&&e<57344){if(!i){if(e>56319||s+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=(i-55296<<10|e-56320)+65536}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else if(e<1114112){if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}else throw Error("Invalid code point")}return o}function j(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}function C(t){return n.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(B,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function U(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length)&&!(i>=t.length);++i)r[i+e]=t[i];return i}function I(t,r){return t instanceof r||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===r.name}var T=function(){for(var t="0123456789abcdef",r=Array(256),e=0;e<16;++e)for(var n=16*e,i=0;i<16;++i)r[n+i]=t[e]+t[i];return r}()},783:function(t,r){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */r.read=function(t,r,e,n,i){var o,s,f=8*i-n-1,a=(1<<f)-1,u=a>>1,h=-7,l=e?i-1:0,c=e?-1:1,p=t[r+l];for(l+=c,o=p&(1<<-h)-1,p>>=-h,h+=f;h>0;o=256*o+t[r+l],l+=c,h-=8);for(s=o&(1<<-h)-1,o>>=-h,h+=n;h>0;s=256*s+t[r+l],l+=c,h-=8);if(0===o)o=1-u;else{if(o===a)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),o-=u}return(p?-1:1)*s*Math.pow(2,o-n)},r.write=function(t,r,e,n,i,o){var s,f,a,u=8*o-i-1,h=(1<<u)-1,l=h>>1,c=23===i?5960464477539062e-23:0,p=n?0:o-1,y=n?1:-1,g=r<0||0===r&&1/r<0?1:0;for(isNaN(r=Math.abs(r))||r===1/0?(f=isNaN(r)?1:0,s=h):(s=Math.floor(Math.log(r)/Math.LN2),r*(a=Math.pow(2,-s))<1&&(s--,a*=2),s+l>=1?r+=c/a:r+=c*Math.pow(2,1-l),r*a>=2&&(s++,a/=2),s+l>=h?(f=0,s=h):s+l>=1?(f=(r*a-1)*Math.pow(2,i),s+=l):(f=r*Math.pow(2,l-1)*Math.pow(2,i),s=0));i>=8;t[e+p]=255&f,p+=y,f/=256,i-=8);for(s=s<<i|f,u+=i;u>0;t[e+p]=255&s,p+=y,s/=256,u-=8);t[e+p-y]|=128*g}}},e={};function n(t){var i=e[t];if(void 0!==i)return i.exports;var o=e[t]={exports:{}},s=!0;try{r[t](o,o.exports,n),s=!1}finally{s&&delete e[t]}return o.exports}n.ab="//";var i=n(72);t.exports=i}()}}]);