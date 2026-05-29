// synchronous
// asynchronous

const countriesContainer = document.getElementById(`countriesContainer`);
const searchInput = document.getElementById(`searchInput`);
const searchBtn = document.getElementById(`searchBtn`);

let AllCuntries = [];

async function getAllCountries() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,population,symbol,languages",
  );
  const countriesData = await response.json();

  console.log(countriesData);
  displyCountries(countriesData);
}

function displyCountries(countries) {
  countriesContainer.innerHTML = "";
  countries.forEach((country) => {
    const languagesArray = country.languages
      ? Object.values(country.languages)
      : [];
    const textToShow = languagesArray.join(", ") || "אין מידע על מטבעות";
    const currenciesArray = country.currencies
      ? Object.values(country.currencies)
      : [];
    const textToShowCurrencies =
      currenciesArray
        .map((curr) => `${curr.name} (${curr.symbol || ""})`)
        .join(", ") || "אין מידע על מטבע";
    countriesContainer.innerHTML += `
      <div class ="country-card">
      <img src="${country.flags.png}"/>
        <div class = "country-info">
        <p><strong>name: </strong>${country.name.common}</p>
        <p><strong>capital: </strong>${country.capital}</p>
        <p><strong>language: </strong> ${textToShow}</p>        
        <p><strong>currencies: </strong>${textToShowCurrencies}</p>
        </div>
      </div>
      `;
  });
}

getAllCountries();
