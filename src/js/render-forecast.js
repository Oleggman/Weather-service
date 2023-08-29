function renderForecast(data, city) {
  return data
    .map(
      item => `
      <div class="card">
        <div class="thumb">
            <img src="${item.day.condition.icon}" alt="${
        item.day.condition.text
      }" />
        </div>
        <div class="card-info">
            <h2 class="city">${city.toUpperCase()}</h2>
            <p class="date">${item.date}</p>
            <p class="temp">${item.day.maxtemp_c}&#8451;</p>
            <div class="min-max-temp">
              <p class="min-temp">Min: ${item.day.mintemp_c}&#8451;</p>
              <p class="max-temp">Max: ${item.day.maxtemp_c}&#8451;</p>
            </div>
        </div>
      </div>
        `
    )
    .join('');
}

export { renderForecast };
