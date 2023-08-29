function renderForecast(data, city) {
  return data
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
}

export { renderForecast };
