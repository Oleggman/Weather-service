import { serviceForecast } from './js/service-forecast';
import { renderForecast } from './js/render-forecast';

const refs = {
  form: document.querySelector('.forecast-form'),
  container: document.querySelector('.forecast'),
  loader: document.querySelector('.loader'),
};

let city = '';
refs.form.addEventListener('submit', onSearchForecast);

function onSearchForecast(evt) {
  evt.preventDefault();
  city = evt.currentTarget.elements.city.value;
  refs.container.innerHTML = '';
  refs.loader.classList.remove('hidden');

  serviceForecast(city)
    .then(data => (refs.container.innerHTML = renderForecast(data, city)))
    .catch(console.log)
    .finally(() => {
      evt.target.reset();
      refs.loader.classList.add('hidden');
    });
}
