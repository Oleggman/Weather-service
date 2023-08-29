import { serviceForecast } from './js/service-forecast';
import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.forecast-form'),
};

refs.form.addEventListener('submit', onSearchForecast);

function onSearchForecast(evt) {
  evt.preventDefault();
  const city = evt.currentTarget.elements.city.value;

  serviceForecast(city)
    .then(console.log)
    .catch(error => Notiflix.Notify.failure(error.message))
    .finally(evt.target.reset());
}
