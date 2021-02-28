

const apiCall = async(input) => {
    document.getElementById('submit-btn').addEventListener('click', async(e)=>{
        const iconContainer = document.getElementById('icon');
        e.preventDefault();
        const dataAPI = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=7892818979a2e87a17bcda46fe0dbc53`;
        const response = await fetch(dataAPI);
        const data = await response.json();
        console.log(data.weather[0].description)
        if(e.target) {
            document.getElementById('info').innerHTML = `
            <div class="display-1 text-muted">${Math.round(data.main.temp_max-273)}&#176C</div><br>
            <div class="display-6 text-muted">${data.name}</div>
            `;
            
            if (data.weather[0].description === 'scattered clouds') {
                iconContainer.innerHTML = '<img src="./images/cloud.png" class="img-fluid img-thumbnail"/>'
            }
        }
    });
}

export default apiCall;
