import Notiflix from 'notiflix';

const API_URL = 'https://api.weatherapi.com/v1/forecast.json';
const API_KEY = '204c4f35cbd541579f7122042232908';

function serviceForecast(city, days) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: city,
    days,
  });

  return fetch(`${API_URL}?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText || 'Oops! Something happened...');
      }

      return response.json();
    })
    .then(data => data.forecast.forecastday)
    .catch(error => Notiflix.Notify.failure(error.message));
}

export { serviceForecast };
