function renderForecast(data, city) {
  return data
    .map(
      item => `
      <div class="card">
        <img src="${item.day.condition.icon}" alt="${
        item.day.condition.text
      }" />
        <h2>${city.toUpperCase()}</h2>
        <p>Date: ${item.date}&#8451;</p>
        <p>Temperature: ${item.day.maxtemp_c}&#8451;</p>
        <p>Max temperature: ${item.day.maxtemp_c}&#8451;</p>
        <p>Min temperature: ${item.day.mintemp_c}&#8451;</p>
      </div>
        `
    )
    .join('');
}

export { renderForecast };
