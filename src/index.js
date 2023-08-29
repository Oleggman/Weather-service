import { serviceForecast } from './js/service-forecast';
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
    .then(renderForecast)
    .catch(error => Notiflix.Notify.failure(error.message))
    .finally(evt.target.reset());
}

function renderForecast(data) {
  console.log(data);

  const markup = data
    .map(
      ({ day }) => `
      <div class="card">
        <img src="${day.condition.icon}" alt="${day.condition.text}" />
        <h2>${city}</h2>
        <p>Temperature: ${day.maxtemp_c}&#8451;</p>
        <p>Max temperature: ${day.maxtemp_c}&#8451;</p>
        <p>Min temperature: ${day.mintemp_c}&#8451;</p>
      </div>
        `
    )
    .join('');

  refs.container.innerHTML = markup;
}
