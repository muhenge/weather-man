(async()=>{let a=await fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=7892818979a2e87a17bcda46fe0dbc53"),e=await a.json();e=console.log(e)})();