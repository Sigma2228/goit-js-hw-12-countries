const input = document.getElementById('input')
const img = document.getElementById('img')

function getData(url) {
    fetch(url).then((value) => value.json()).then(value => { console.log(value)


     let countryCounter = value.length


    if(countryCounter >= 2 && countryCounter <=10) {
         makeData(value)
 }
});
}

function makeData(masiv) {

    const arr = masiv

  const ul = document.createElement('ul');

  ul.innerHTML = arr.map(p => `<li>${p.name.common}</li>`).join('');
  
   document.body.appendChild(ul);
}

input.addEventListener('input', () => {
const inputValue = input.value.trim()

 getData(`https://restcountries.com/v3.1/name/${inputValue}`)
})