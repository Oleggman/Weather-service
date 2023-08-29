const refs = {
  form: document.querySelector('.forecast-form'),
};

refs.form.addEventListener('submit', onSearchForecast);

const API_URL = 'http://api.weatherapi.com/v1/forecast.json';
const API_KEY = '204c4f35cbd541579f7122042232908';

function onSearchForecast(evt) {
  evt.preventDefault();

  const params = new URLSearchParams({
    key: API_KEY,
    q: evt.currentTarget.elements.city.value,
    days: 14,
  });

  fetch(`${API_URL}?${params}`)
    .then(response => response.json())
    .then(console.log);
}
