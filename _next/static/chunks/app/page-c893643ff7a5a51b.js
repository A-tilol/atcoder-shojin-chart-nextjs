(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2002:function(e,t,r){Promise.resolve().then(r.bind(r,5361))},5361:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(7437),o=r(9474);let a=e=>new Promise(t=>setTimeout(t,e)),l=async(e,t)=>{let r="".concat(o._z,"?user=").concat(e,"&from_second=").concat(t),n=await fetch(r),s=await n.json();if(console.log(s.length,"subs.",r),s.length<o.dk)return s;await a(o.SQ);let i=Math.max(...s.map(e=>e.epoch_second));return s.concat(await l(e,i))},s=async(e,t)=>{let r=Math.floor((Date.now()-864e5*t)/1e3),n=await l(e,r);(n=(n=n.filter(e=>!e.contest_id.toLowerCase().startsWith("ahc")&&0<=e.point&&e.point<=3e3)).filter(e=>"AC"===e.result)).forEach(e=>{let t=new Date(1e3*e.epoch_second);e.date=t.toISOString().split("T")[0]}),n.sort((e,t)=>e.date.localeCompare(t.date));let o=[],a=new Set;for(let e of n)a.has(e.problem_id)||(o.push(e),a.add(e.problem_id));return o},i=(e,t,r)=>{let n={},a=new Date;for(let e=0;e<=t;e++)n[new Date(a.getTime()-864e5*e).toISOString().split("T")[0]]=0;for(let t of e)r===o.j8.SCORES?n[t.date]+=t.point:r===o.j8.ACS&&(n[t.date]+=1);let l=Object.entries(n).sort((e,t)=>{let[r]=e,[n]=t;return new Date(r).getTime()-new Date(n).getTime()}).map(e=>{let[,t]=e;return t});for(let e=1;e<l.length;e++)l[e]+=l[e-1];return l},c=(e,t)=>{let r={};for(let t of e)r[t]=[];for(let e of t){r[e.date]||(r[e.date]=[]);let t="".concat(e.contest_id," ").concat(e.problem_id.split("_").pop()," ").concat(e.point);r[e.date].push(t)}return Object.entries(r).map(e=>{let[t,r]=e,n=r.reduce((e,t)=>e+parseInt(t.split(" ").pop()||"0"),0),o="".concat(t,"<br>").concat(r.length," ACs, ").concat(n," Pts");return r.length>0&&(r.sort(),o+="<br>".concat("- ".repeat(11),"<br>").concat(r.join("<br>"))),o})},u=(e,t,r)=>{let n=r.filter(e=>e.date===t),o={userID:e,ACs:n.length,totalPoints:0,maxPointPlobrem:"",maxPoints:0};for(let e of n)o.totalPoints+=e.point,e.point>o.maxPoints&&(o.maxPoints=e.point,o.maxPointPlobrem="".concat(e.contest_id," ").concat(e.problem_id.split("_").pop()));return o};var d=r(2265),f=r(551),m=r.n(f),p=r(3872),b=r(6356);let x=m()(()=>Promise.all([r.e(0),r.e(269)]).then(r.bind(r,24)),{loadableGenerated:{webpack:()=>[24]},ssr:!1}),g=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("h1",{className:"font-serif mb-6 text-3xl font-extrabold md:text-3xl lg:text-4xl",children:[(0,n.jsx)("span",{className:"text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400",children:"Atcoder"})," ",(0,n.jsx)("span",{className:"text-gray-700",children:"精進チャート\uD83D\uDC3E"})]})}),h=e=>{let{userID:t,rivalIDs:r,period:o,onInputChange:a}=e,l=e=>{a(e.target.id,e.target.value)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("label",{htmlFor:"user-id-input",className:"block mb-2 text-sm font-medium text-gray-900",children:"User ID"}),(0,n.jsx)("input",{type:"text",id:"user-id-input",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5",value:t,placeholder:"chokudai",onChange:l})]}),(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("label",{htmlFor:"rival-ids-input",className:"block mb-2 text-sm font-medium text-gray-900",children:"Rival IDs (Optional)"}),(0,n.jsx)("input",{type:"text",id:"rival-ids-input",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5",value:r,placeholder:"snuke, rng",onChange:l})]}),(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("label",{htmlFor:"period-input",className:"block mb-2 text-sm font-medium text-gray-900",children:"Period (days)"}),(0,n.jsx)("input",{type:"number",id:"period-input",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5",value:o,min:10,max:1e4,step:10,placeholder:"90",onChange:l})]})]})},y=e=>{let{userSummary:t,onCopyClick:r}=e,[a,l]=(0,d.useState)("");return(0,d.useEffect)(()=>{let e=(()=>{let e=e=>e[Math.floor(Math.random()*e.length)];return 0===t.totalPoints?e(o.UF):t.totalPoints<2e3?e(o.Bo):t.totalPoints<4e3?"ちょー"+e(o.Bo):e(t.totalPoints<5e3?o.ax:o.LJ)})();l(o.b.replace("{USER_ID}",t.userID).replace("{SHOJIN}","".concat(t.ACs,"ACs ").concat(t.totalPoints,"Pts")).replace("{CHEERING_WORD}",e).replace("{MAX_POINTS}",t.maxPoints.toString()).replace("{PLOBLEM}",0===t.ACs?"なし":t.maxPointPlobrem))},[t]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"mt-20 flex justify-center gray-800 text-2xl",children:"Share"}),(0,n.jsx)("div",{className:"flex justify-center mt-5",children:(0,n.jsx)("textarea",{id:"message",className:"block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500",style:{width:"420px"},rows:5,value:a,readOnly:!0})}),(0,n.jsxs)("div",{className:"mt-2 flex justify-center",children:[(0,n.jsx)("button",{className:"mt-2 font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",onClick:()=>{r(a)},children:(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(b.twx,{}),(0,n.jsx)("span",{className:"ml-2",children:"Copy To Clipboard"})]})}),(0,n.jsx)("a",{className:"ml-3 mt-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",href:"https://x.com/intent/tweet",target:"_blank",children:(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(p.LCd,{}),(0,n.jsx)("span",{className:"ml-2",children:"Tweet"})]})})]}),(0,n.jsx)("div",{className:"mt-3 flex justify-center gray-800",children:"「Copy To Clipboard」を押したあと、「Tweet」を押してこぴぺしてください！"}),(0,n.jsx)("div",{className:"mt-20"})]})},j=()=>{let[e,t]=(0,d.useState)(""),[r,l]=(0,d.useState)(""),[f,m]=(0,d.useState)([""]),[p,b]=(0,d.useState)(90),[j,v]=(0,d.useState)({scoreData:[],acData:[],period:0}),[w,O]=(0,d.useState)({userID:"",ACs:0,totalPoints:0,maxPoints:0,maxPointPlobrem:""}),[P,C]=(0,d.useState)(new Blob),[S,N]=(0,d.useState)(!1),_=async()=>{if(""===e)return;let t=[e,...r.split(", ").map(e=>e.trim()).filter(e=>""!==e)];m(t),D(t)},D=async e=>{let t=Array.from({length:p+1},(e,t)=>new Date(Date.now()-(p-t)*864e5).toISOString().split("T")[0]),r=[],n=[];for(let[l,d]of e.entries()){l>0&&await a(o.SQ);let e=await s(d,p),f=c(t,e);r.push({type:"scatter",mode:"lines",name:d,x:t,y:i(e,p,o.j8.SCORES),text:f,hovertemplate:"%{text}"}),n.push({type:"scatter",mode:"lines",name:d,x:t,y:i(e,p,o.j8.ACS),text:f,hovertemplate:"%{text}"}),0===l&&O(u(d,t[t.length-1],e))}v({scoreData:r,acData:n,period:p})};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"m-5",children:[(0,n.jsx)(g,{}),(0,n.jsx)(h,{userID:e,rivalIDs:r,period:p,onInputChange:(e,r)=>{"user-id-input"==e?t(r):"rival-ids-input"==e?l(r):"period-input"==e&&b(Number(r))}}),(0,n.jsx)("div",{children:(0,n.jsx)("button",{className:"text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",onClick:_,children:"Draw Chart"})}),(0,n.jsxs)("div",{className:"w-full mt-10",style:{maxWidth:"1200px"},children:[(0,n.jsx)(x,{users:f,chartData:j,onChartChange:e=>{C(e),N(!0)}}),(0,n.jsx)("div",{className:"mt-10",children:S&&(0,n.jsx)(y,{userSummary:w,onCopyClick:e=>{let t=new ClipboardItem({"image/png":P,"text/plain":new Blob([e],{type:"text/plain"})});navigator.clipboard.write([t]).then(()=>console.log("copied.")).catch(e=>{console.error("クリップボードにコピーできませんでした。",e)})}})})]})]})})};function v(){return(0,n.jsx)("div",{className:"m-2",children:(0,n.jsx)(j,{})})}},9474:function(e,t,r){"use strict";r.d(t,{Bo:function(){return i},LJ:function(){return u},SQ:function(){return a},UF:function(){return s},_z:function(){return n},ax:function(){return c},b:function(){return d},dk:function(){return o},j8:function(){return l}});let n="https://kenkoooo.com/atcoder/atcoder-api/v3/user/submissions",o=500,a=1e3,l={SCORES:"Scores",ACS:"ACs",RATINGS:"Ratings"},s=["きゅうけい","ちょーかいふく","またあした","いきててえらい"],i=["えらい","かしこい","すごい","てんさい","そんけいする","すばらしい","ゆうしゅう","さいこう","りっぱ"],c=["とうとい"],u=["ひれふしちゃう"],d="{USER_ID}さんの今日の精進は{SHOJIN}\uD83D\uDC3E {CHEERING_WORD}にゃ！\n\nACした最も難しい問題は {PLOBLEM} {MAX_POINTS}Pts！\nhttps://atilol.atcoder-shojin-shart-nextjs.github.io\n#AtCoder #AtCoder_Shojin_Chart"},551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(9920);r(7437),r(2265);let o=n._(r(148));function a(e,t){var r;let n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};"function"==typeof e&&(n.loader=e);let a={...n,...t};return(0,o.default)({...a,modules:null==(r=a.loadableGenerated)?void 0:r.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},912:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return o}});let n=r(5592);function o(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return r}},148:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let n=r(7437),o=r(2265),a=r(912),l=r(1481);function s(e){return{default:e&&"default"in e?e.default:e}}let i={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},c=function(e){let t={...i,...e},r=(0,o.lazy)(()=>t.loader().then(s)),c=t.loading;function u(e){let s=c?(0,n.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,i=t.ssr?(0,n.jsxs)(n.Fragment,{children:["undefined"==typeof window?(0,n.jsx)(l.PreloadCss,{moduleIds:t.modules}):null,(0,n.jsx)(r,{...e})]}):(0,n.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(r,{...e})});return(0,n.jsx)(o.Suspense,{fallback:s,children:i})}return u.displayName="LoadableComponent",u}},1481:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return a}});let n=r(7437),o=r(8512);function a(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let r=(0,o.getExpectedRequestStore)("next/dynamic css"),a=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files.filter(e=>e.endsWith(".css"));a.push(...t)}}return 0===a.length?null:(0,n.jsx)(n.Fragment,{children:a.map(e=>(0,n.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:r.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},1810:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),l=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(d,s({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:o,size:a,title:i}=e,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,l),d=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==a?n.createElement(a.Consumer,null,e=>t(e)):t(o)}}},function(e){e.O(0,[51,240,971,23,744],function(){return e(e.s=2002)}),_N_E=e.O()}]);