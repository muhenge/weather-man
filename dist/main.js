(()=>{"use strict";document.getElementById("city-input").addEventListener("input",(t=>{try{(async t=>{const e=`https://api.openweathermap.org/data/2.5/weather?q=${t}&appid=7892818979a2e87a17bcda46fe0dbc53`,a=await fetch(e),c=await a.json();console.log(c)})(t.target.value)}catch(t){console.log(t)}}))})();