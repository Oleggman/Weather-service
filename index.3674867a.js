!function(){function e(e){var t=new URLSearchParams({key:"204c4f35cbd541579f7122042232908",q:e,days:14});return fetch("".concat("http://api.weatherapi.com/v1/forecast.json","?").concat(t)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))}({form:document.querySelector(".forecast-form")}).form.addEventListener("submit",(function(t){t.preventDefault(),e(t.currentTarget.elements.city.value).then(console.log).catch(console.log).finally(t.target.reset())}))}();
//# sourceMappingURL=index.3674867a.js.map