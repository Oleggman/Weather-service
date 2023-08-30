const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function convertDate(strDate) {
  const date = new Date(strDate);
  return monthNames[date.getMonth()] + ', ' + date.getDate();
}

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
            <p class="date">${convertDate(item.date)}</p>
            <p class="temp">${Math.floor(item.day.maxtemp_c)}&#8451;</p>
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
