const apiCall = async (input) => {
  document.getElementById('submit-btn').addEventListener(
    'click',
    async (e) => {
      const dataAPI = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=7892818979a2e87a17bcda46fe0dbc53`;
      const response = await fetch(dataAPI);
      const data = await response.json();
      const iconcode = data.weather[0].icon;
      const iconurl = `http://openweathermap.org/img/w/${iconcode}.png`;
      const icon = document.createElement('img');
      icon.setAttribute('src', `${iconurl}`);
      icon.classList.add('icon');
      if (e.target) {
        document.getElementById('info').innerHTML = `
            <span class="display-1 text-white">${Math.round(data.main.temp_max - 273)}&#176C</span><br>
            <span class="display-6 text-white">${data.name}</span><br>  <span class=" text-white d-inline">${data.sys.country}</span>
            `;
        document.getElementById('icon').appendChild(icon);
        document.getElementById('forecast').innerHTML = `
        <span class="display-4 text-white">${data.weather[0].description}</span> 
        `;
      }
    },
  );
};

export default apiCall;
