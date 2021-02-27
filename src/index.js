const city = document.getElementById('city-input');
const submit = document.getElementById('submit-btn');
const p = document.getElementById('val');


const API = async(loc)=>{
    const response = await fetch(loc);
    const data = await response.json();
    p.textContent = data.main.temp
    console.log(data)
}

city.addEventListener('input',(e) => {
    const dataAPI = `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=7892818979a2e87a17bcda46fe0dbc53`;
    API(dataAPI);
});
