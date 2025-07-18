const input = document.getElementById('input')
const img = document.getElementById('img')
const list = document.getElementById('list')
let debounceTimeout;

function getData(url) {
  fetch(url).then((value) => value.json()).then(value => {
    console.log(value)


    let countryCounter = value.length
 if (countryCounter === 1) {
  renderCountry(value)
}

    if (countryCounter >= 2 && countryCounter <= 10) {
      makeData(value)
    }
    if (countryCounter > 10) {
      alert('Забагато співпадінь')
    }
  });
 
}
function renderCountry(arr) {
  const markUp = arr.map(el => `<li>
    <h3>Capital: ${el.capital}</h3>
    <h3>Population: ${el.population}</h3>
     <h3 id = 'obj'>Languages: ${Object.values(el.languages).join(', ')}</h3>
    <img width = '200px' src="${el.flags.png}"/>
    </li>`).join('')
  list.innerHTML = markUp
}


function makeData(arr) {
    const markUp = arr.map(p => `<li>${p.name.common}</li>`).join('');
  list.innerHTML = markUp;
}

input.addEventListener('input', () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    list.innerHTML = ''
    const inputValue = input.value.trim()
    if (inputValue === '') return
    getData(`https://restcountries.com/v3.1/name/${inputValue}`)
  }, 500)
})