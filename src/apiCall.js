
const apiCall = async(loc) => {
    const response = await fetch(loc);
    const data = await response.json();
    console.log(data)
}

document.getElementById('city-input').addEventListener('input',(e) => {
    const dataAPI = `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=7892818979a2e87a17bcda46fe0dbc53`;
    try {
        apiCall(dataAPI);
    } catch (error) {
        console.log(error);
    }
});

export default apiCall;
