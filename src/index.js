import apiCall from './apiCall';

document.getElementById('city-input').addEventListener('input',(e) => {
    try {
        apiCall(e.target.value);
    } catch (error) {
        console.log(error);
    }
});


