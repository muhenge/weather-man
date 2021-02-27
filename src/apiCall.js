const apiCall = async(input) => {
    const dataAPI = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=7892818979a2e87a17bcda46fe0dbc53`;
    const response = await fetch(dataAPI);
    const data = await response.json();
    console.log(data);
}

export default apiCall;
