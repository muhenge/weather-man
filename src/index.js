// const city = document.getElementById('city-input');
// const submit = document.getElementById('submit-btn');
// const p = document.getElementById('val');

// const { default: API } = require("./apiCall");
import apiCall from './apiCall'

// apiCall();

document.getElementById('submit-btn').addEventListener('click', (e)=>{
    if(e.target) {
        apiCall();
    }
}, false);