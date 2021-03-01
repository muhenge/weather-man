import apiCall from './apiCall';

// eslint-disable-next-line consistent-return
document.getElementById('city-input').addEventListener('input', (e) => {
  try {
    apiCall(e.target.value);
  } catch (error) {
    return error;
  }
});