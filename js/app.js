const  request  = superagent


const answerElement_bandera = document.querySelector('.countries-container')

request.get('https://restcountries.eu/rest/v2/all')

  .then((element) => {
      // console.log("_",element.body);
  var arryOfTypes = element.body

      arryOfTypes.forEach(function(respuesta){
        // console.log('=============', respuesta.flag);
        // console.log('=============', respuesta.name);
        // console.log('=============', respuesta.Capital);

        answerElement_bandera.innerHTML +=
        `<div class="country-card">
          <img class="country-flag" src="${respuesta.flag}" alt="flag">
          <h4 class="country-name">${respuesta.name} </h4>
          <p class="country-capital">${respuesta.capital}</p>
        </div>`

      })
  })
