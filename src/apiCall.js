

const apiCall = async(input) => {
    document.getElementById('submit-btn').addEventListener('click', async(e)=>{
        e.preventDefault();
        const dataAPI = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=7892818979a2e87a17bcda46fe0dbc53`;
        const response = await fetch(dataAPI);
        const data = await response.json();
        console.log(data.main.temp);
       
        document.getElementById('val').textContent = Math.round(data.main.temp_max-273);
    })
}

export default apiCall;
