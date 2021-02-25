const dataAPI = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=7892818979a2e87a17bcda46fe0dbc53'

const app = async () => {
    let rs = await fetch(dataAPI);
    let data = await rs.json();
    data = console.log(data)
    return data;
}

app();