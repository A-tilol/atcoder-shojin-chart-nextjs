(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4151:function(e,t,r){Promise.resolve().then(r.bind(r,4474))},4474:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return O}});var n=r(7437),a=r(9474),s=r(9052);let o=async(e,t)=>{let r="".concat(a._z,"?user=").concat(e,"&from_second=").concat(t),n=await fetch(r),l=await n.json();if(console.log("subs.",l.length,r),l.length<a.dk)return l;await (0,s._v)(a.SQ);let i=Math.max(...l.map(e=>e.epoch_second));return l.concat(await o(e,i))},l=async e=>{let t="".concat(a._P,"?userid=").concat(e),r=await fetch(t);return await r.json()},i=async(e,t)=>{let r=Math.floor((Date.now()-864e5*t)/1e3),n=await o(e,r);(n=(n=n.filter(e=>!e.contest_id.toLowerCase().startsWith("ahc")&&0<=e.point&&e.point<=3e3)).filter(e=>"AC"===e.result)).forEach(e=>{let t=new Date(1e3*e.epoch_second);e.date=(0,s.p6)(t)}),n.sort((e,t)=>e.date.localeCompare(t.date));let a=[],l=new Set;for(let e of n)l.has(e.problem_id)||(a.push(e),l.add(e.problem_id));return a},c=(e,t)=>{let r=e=>{let t=Object.entries(e).sort((e,t)=>{let[r]=e,[n]=t;return new Date(r).getTime()-new Date(n).getTime()}).map(e=>{let[,t]=e;return t});for(let e=1;e<t.length;e++)t[e]+=t[e-1];return t},n={},a={},o=(0,s.p6)(new Date(new Date().getTime()-864e5*t));for(let t of(n[o]=0,a[o]=0,e))t.date in n||(n[t.date]=0,a[t.date]=0),n[t.date]+=t.point,a[t.date]+=1;return[Object.keys(n).sort(),r(n),r(a)]},u=(e,t)=>{let r={};for(let t of e)r[t]=[];for(let e of t){let t="".concat(e.contest_id," ").concat(e.problem_id.split("_").pop()," ").concat(e.point);r[e.date].push(t)}return Object.entries(r).map(e=>{let[t,r]=e,n=r.reduce((e,t)=>e+parseInt(t.split(" ").pop()||"0"),0),a="".concat(t,"<br>").concat(r.length," ACs, ").concat(n," Pts");return r.length>0&&(r.sort(),a+="<br>".concat("- ".repeat(11),"<br>").concat(r.join("<br>"))),a})},d=(e,t)=>{let r=(0,s.p6)(new Date),n=t.filter(e=>e.date===r),a={userID:e,ACs:n.length,totalPoints:0,maxPointPlobrem:"",maxPoints:0};for(let e of n)a.totalPoints+=e.point,e.point>a.maxPoints&&(a.maxPoints=e.point,a.maxPointPlobrem="".concat(e.contest_id," ").concat(e.problem_id.split("_").pop()));return a},m=async(e,t)=>{let r=null,n=[],o=[];for(let[l,m]of e.entries()){l>0&&await (0,s._v)(a.SQ);let e=await i(m,t),[x,f,h]=c(e,t),p=u(x,e);n.push({type:a.Hv.TYPE,mode:a.Hv.MODE,name:m,x:x,y:f,text:p,hovertemplate:"%{text}",marker:{symbol:a.Hv.MARKER_SYMBOL}}),o.push({type:a.Hv.TYPE,mode:a.Hv.MODE,name:m,x:x,y:h,text:p,hovertemplate:"%{text}",marker:{symbol:a.Hv.MARKER_SYMBOL}}),0===l&&(r=d(m,e))}return[r,n,o]},x=e=>{let t=[];for(let r of e){let e=r.EndTime.split("T")[0],n=Math.abs(r.NewRating-r.OldRating),a=r.NewRating-r.OldRating>=0?"+":"-",s=(()=>{let e=/[(（]AtCoder .* Contest \d+[)）]/,t=r.ContestName.match(e);return t?t[0].slice(1,t.length-2):r.ContestName})(),o="".concat(e,"<br>").concat(s,"<br>").concat("- ".repeat(11),"<br>");o+="Rating ".concat(r.NewRating,"<br>Performance ").concat(r.Performance,"<br>Diff ").concat(a).concat(n),t.push(o)}return t},f=e=>e.map(e=>{if(e.Performance>=a.Hf.RED)return a.R6.RED;if(e.Performance>=a.Hf.ORANGE)return a.R6.ORANGE;if(e.Performance>=a.Hf.YELLOW)return a.R6.YELLOW;if(e.Performance>=a.Hf.BLUE)return a.R6.BLUE;if(e.Performance>=a.Hf.LBLUE)return a.R6.LBLUE;if(e.Performance>=a.Hf.GREEN)return a.R6.GREEN;if(e.Performance>=a.Hf.BLOWN)return a.R6.BLOWN;else return a.R6.GRAY}),h=async e=>{let t=[];for(let r of e){let e=await (await l(r)).filter(e=>e.IsRated);t.push({type:a.Hv.TYPE,mode:a.Hv.MODE,name:r,x:e.map(e=>e.EndTime.split("T")[0]),y:e.map(e=>e.NewRating),text:x(e),hovertemplate:"%{text}",marker:{color:f(e),size:6}})}return t};var p=r(2265),g=r(3872),b=r(9824);let j=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("footer",{className:"bg-white rounded-lg shadow m-4",children:(0,n.jsxs)("div",{className:"w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between",children:[(0,n.jsx)("span",{className:"text-xs text-gray-500 sm:text-center",children:"\xa9 2024 atilol. All Rights Reserved."}),(0,n.jsxs)("ul",{className:"flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0",children:[(0,n.jsx)("li",{children:(0,n.jsxs)("a",{href:a.Kd,className:"hover:underline me-4 md:me-6 flex items-center",children:[(0,n.jsx)(b.Mcv,{className:"mr-1"})," Github"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("a",{href:a.N$,className:"hover:underline me-4 md:me-6 flex items-center ml-5",children:[(0,n.jsx)(g.LCd,{className:"mr-1"})," Twitter"]})})]})]})})});var N=r(7818),y=r(6356),v=r(9839);let w=(0,N.default)(()=>Promise.all([r.e(0),r.e(269)]).then(r.bind(r,24)),{loadableGenerated:{webpack:()=>[24]},ssr:!1}),E=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("h1",{className:"font-serif mb-6 text-3xl font-extrabold md:text-3xl lg:text-4xl",children:[(0,n.jsx)("span",{className:"text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400",children:"Atcoder"})," ",(0,n.jsx)("span",{className:"text-gray-700",children:"精進チャート\uD83D\uDC3E"})]})}),R=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"mb-6",children:"AtCoder上で行った精進の可視化とライバルユーザーとの比較が行えます。"})}),C=e=>{let{userID:t,rivalIDs:r,period:s,onInputChange:o}=e,l=e=>{o(e.target.id,e.target.value)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{htmlFor:"user-id-input",className:"block mb-2 text-sm font-medium text-gray-900",children:"AtCoder ID"}),(0,n.jsx)("input",{type:"text",id:"user-id-input",className:"bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-1.5 px-2.5",style:{width:320},value:t,placeholder:"snuke",onChange:l})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{htmlFor:"rival-ids-input",className:"block mb-2 text-sm font-medium text-gray-900",children:"Rival IDs (Optional)"}),(0,n.jsx)("input",{type:"text",id:"rival-ids-input",className:"bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-1.5 px-2.5",style:{width:320},value:r,placeholder:"chokudai, rng",onChange:l})]}),(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("label",{htmlFor:"period-input",className:"block mb-2 text-sm font-medium text-gray-900",children:"Period [days]"}),(0,n.jsx)("select",{id:"period-input",className:"bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-1.5 px-2.5",style:{width:320},value:s,onChange:l,children:a.z5.map(e=>(0,n.jsx)("option",{className:"py-1.5 px-2.5",value:e,children:e},e))})]})]})},P=e=>{let{userSummary:t,onCopyClick:r}=e,[s,o]=(0,p.useState)("");return(0,p.useEffect)(()=>{let e=(()=>{let e=e=>e[Math.floor(Math.random()*e.length)];return 0===t.totalPoints?e(a.UF):t.totalPoints<2e3?e(a.Bo):t.totalPoints<4e3?"ちょー"+e(a.Bo):e(t.totalPoints<5e3?a.ax:a.LJ)})();o(a.b.replace("{USER_ID}",t.userID).replace("{SHOJIN}","".concat(t.ACs,"ACs ").concat(t.totalPoints,"Pts")).replace("{CHEERING_WORD}",e).replace("{MAX_POINTS}",t.maxPoints.toString()).replace("{PLOBLEM}",0===t.ACs?"なし":t.maxPointPlobrem))},[t]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"mt-20 flex justify-center gray-800 text-2xl",children:"Share"}),(0,n.jsx)("div",{className:"flex justify-center mt-5",children:(0,n.jsx)("textarea",{id:"message",className:"block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500",style:{width:"420px"},rows:6,value:s,readOnly:!0})}),(0,n.jsxs)("div",{className:"mt-2 flex justify-center",children:[(0,n.jsx)("button",{className:"mt-2 font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",onClick:()=>{r()},children:(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(y.twx,{}),(0,n.jsx)("span",{className:"ml-2",children:"チャート画像をコピー"})]})}),(0,n.jsx)("a",{className:"ml-3 mt-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",href:"https://x.com/intent/tweet?text=".concat(encodeURIComponent(s)),target:"_blank",children:(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(g.LCd,{}),(0,n.jsx)("span",{className:"ml-2",children:"Tweet"})]})})]}),(0,n.jsx)("div",{className:"mt-3 flex justify-center gray-800",children:"「チャート画像をコピー」を押して、画像をツイートにこぴぺしてください！"})]})},D=()=>{let[e,t]=(0,p.useState)(""),[r,s]=(0,p.useState)(""),[o,l]=(0,p.useState)([""]),[i,c]=(0,p.useState)(30),[u,d]=(0,p.useState)({scoreData:[],acData:[],ratingData:[],period:0}),[x,f]=(0,p.useState)({userID:"",ACs:0,totalPoints:0,maxPoints:0,maxPointPlobrem:""}),[g,b]=(0,p.useState)(new Blob),[N,y]=(0,p.useState)(!1),[D,O]=(0,p.useState)(!1),_=async()=>{if(""===e)return;O(!0);let t=r.split(",").map(e=>e.trim()).filter(e=>""!==e);t=t.slice(0,Math.min(t.length,a.dj));let n=[e.trim(),...t];l(n),await L(n),O(!1)},L=async e=>{let[t,r,n]=await m(e,i);d({scoreData:r,acData:n,ratingData:await h(e),period:i}),f(t)};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,n.jsxs)("div",{className:"flex-grow m-5",children:[(0,n.jsx)(E,{}),(0,n.jsx)(R,{}),(0,n.jsx)(C,{userID:e,rivalIDs:r,period:i,onInputChange:(e,r)=>{"user-id-input"==e?t(r):"rival-ids-input"==e?s(r):"period-input"==e&&c(Number(r))}}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("div",{children:(0,n.jsx)("button",{className:"text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2",onClick:_,children:"Draw Chart"})}),(0,n.jsx)(v.Z,{className:"ml-1",size:42,speedMultiplier:1,loading:D,color:"hsla(206, 100%, 60%, 1)"})]}),(0,n.jsxs)("div",{className:"w-full mt-10",style:{maxWidth:"1200px"},children:[(0,n.jsx)(w,{users:o,chartData:u,onChartChange:e=>{b(e),y(!0)}}),(0,n.jsx)("div",{className:"mt-10",children:N&&(0,n.jsx)(P,{userSummary:x,onCopyClick:()=>{let e=new ClipboardItem({"image/png":g});navigator.clipboard.write([e]).then(()=>console.log("copied.")).catch(e=>{console.error("クリップボードにコピーできませんでした。",e)})}})})]})]}),(0,n.jsx)(j,{})]})})};function O(){return(0,n.jsx)("div",{className:"m-2",children:(0,n.jsx)(D,{})})}},9474:function(e,t,r){"use strict";r.d(t,{Bo:function(){return f},Hf:function(){return d},Hv:function(){return u},Kd:function(){return b},LJ:function(){return p},N$:function(){return j},R6:function(){return m},SQ:function(){return s},UF:function(){return x},_P:function(){return i},_z:function(){return n},ax:function(){return h},b:function(){return g},dj:function(){return o},dk:function(){return a},j8:function(){return c},z5:function(){return l}});let n="https://kenkoooo.com/atcoder/atcoder-api/v3/user/submissions",a=500,s=1e3,o=10,l=[30,60,90,180,360],i="https://utjrulejlf6llrsomasflpiq7e0tkwqg.lambda-url.ap-northeast-1.on.aws",c={SCORES:"Scores",ACS:"ACs",RATINGS:"Ratings"},u={TYPE:"scatter",MODE:"lines+markers",MARKER_SYMBOL:"circle-open"},d={RED:2800,ORANGE:2400,YELLOW:2e3,BLUE:1600,LBLUE:1200,GREEN:800,BLOWN:400,GRAY:0},m={RED:"#FF0000",ORANGE:"#FF8000",YELLOW:"#C0C000",BLUE:"#0000FF",LBLUE:"#00C0C0",GREEN:"#008000",BLOWN:"#804000",GRAY:"#808080"},x=["きゅうけい","ちょーかいふく","またあした","いきててえらい"],f=["えらい","かしこい","すごい","てんさい","そんけいする","すばらしい","ゆうしゅう","さいこう","りっぱ"],h=["とうとい"],p=["ひれふしちゃう"],g="{USER_ID}さんの今日の精進は{SHOJIN}\uD83D\uDC3E {CHEERING_WORD}にゃ！\n\nACした最も難しい問題は {PLOBLEM} {MAX_POINTS}Pts！\nhttps://a-tilol.github.io/atcoder-shojin-chart-nextjs\n#AtCoder #AtCoder_Shojin_Chart ",b="https://github.com/A-tilol/atcoder-shojin-chart-nextjs",j="https://x.com/xxatilol"},9052:function(e,t,r){"use strict";r.d(t,{Wj:function(){return a},_v:function(){return n},p6:function(){return s}});let n=e=>new Promise(t=>setTimeout(t,e)),a=(e,t)=>{"#"==e.slice(0,1)&&(e=e.slice(1));let r=parseInt("0x"+e.slice(0,2)),n=parseInt("0x"+e.slice(2,4)),a=parseInt("0x"+e.slice(4,6));return"rgba(".concat(r,", ").concat(n,", ").concat(a,", ").concat(t,")")},s=e=>{let t=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return"".concat(e.getFullYear(),"-").concat(t,"-").concat(r)}}},function(e){e.O(0,[51,452,240,673,971,23,744],function(){return e(e.s=4151)}),_N_E=e.O()}]);