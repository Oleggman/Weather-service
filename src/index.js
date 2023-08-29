import { serviceForecast } from './js/service-forecast';
import { renderForecast } from './js/render-forecast';
import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.forecast-form'),
  container: document.querySelector('.forecast'),
};

let city = '';
refs.form.addEventListener('submit', onSearchForecast);

function onSearchForecast(evt) {
  evt.preventDefault();
  city = evt.currentTarget.elements.city.value;

  serviceForecast(city)
    .then(data => (refs.container.innerHTML = renderForecast(data, city)))
    .catch(error => Notiflix.Notify.failure(error.message))
    .finally(evt.target.reset());
}
