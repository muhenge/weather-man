const cityInput = document.getElementById("city-input");

const getWeatherData = async (city) => {
  try {
    const dataAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7892818979a2e87a17bcda46fe0dbc53`;
    const response = await fetch(dataAPI, { mode: "cors" });
    const data = await response.json();
    const iconcode = data.weather[0].icon;
    const iconurl = `http://openweathermap.org/img/w/${iconcode}.png`;
    const icon = document.querySelector('img');
    icon.src = `${iconurl}`;
    document.getElementById('city').innerText = `${data.name}`;
    document.getElementById('country').innerText = `${data.sys.country}`;
    document.getElementById('temp').innerHTML = `<strong> ${Math.round(data.main.temp_max - 273)} &#176C</strong>`;
    document.getElementById('forecast').innerText = `${data.weather[0].description}`;
    body = document.querySelector('body');
    body.style.backgroundColor = `${iconurl}`;

  } catch (error) {
    document.getElementById('not-found').innerHTML = '<span class="display-3 text-danger">City not found</span>'
  }
};

const apiCall = () => {
  document.getElementById("submit-btn").addEventListener("click", (e) => {
    e.preventDefault();
    getWeatherData(cityInput.value);
    cityInput.value = "";
    e.stopPropagation();
  });
};



export default apiCall;
