// synchronous
// asynchronous

const countriesContainer = document.getElementById(`countriesContainer`);
const searchInput = document.getElementById(`searchInput`);
const searchBtn = document.getElementById(`searchBtn`);

let AllCuntries = [];

async function getAllCountries() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,currencies,flag,population,symbol,languages",
  );
  const countriesData = await response.json();

  console.log(countriesData);
}

getAllCountries();
