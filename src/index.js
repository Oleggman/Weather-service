import { serviceForecast } from './js/service-forecast';

const refs = {
  form: document.querySelector('.forecast-form'),
};

refs.form.addEventListener('submit', onSearchForecast);

const API_URL = 'http://api.weatherapi.com/v1/forecast.json';
const API_KEY = '204c4f35cbd541579f7122042232908';

function onSearchForecast(evt) {
  evt.preventDefault();
  const city = evt.currentTarget.elements.city.value;

  serviceForecast(city)
    .then(console.log)
    .catch(console.log)
    .finally(evt.target.reset());
}
