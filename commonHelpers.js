import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as m,i as h}from"./assets/vendor-77e16229.js";const f=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]"),c=document.getElementById("datetime-picker"),n=document.querySelector("[data-start]");let a=null;n.addEventListener("click",b);function v(){var e=new Date;a.getTime()<e.getTime()?(h.show({title:"Hey",message:"Please choose a date in the future",theme:"dark",position:"topCenter",color:"black"}),n.disabled=!0):n.disabled=!1}n.disabled=!0;function b(){let e=setInterval(()=>{let r=Date.now(),s=a-r;a===r&&(n.disabled=!0),s<=0&&clearInterval(e);let t=g(s);f.textContent=o(t.days),y.textContent=o(t.hours),p.textContent=o(t.minutes),S.textContent=o(t.seconds),c.disabled=!0},1e3)}function o(e){return String(e).padStart(2,"0")}function g(e){const d=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),u=Math.floor(e%864e5%36e5/6e4),l=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:i,minutes:u,seconds:l}}const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){a=e[0],v(),console.log(e[0])}};m(c,C);
//# sourceMappingURL=commonHelpers.js.map
