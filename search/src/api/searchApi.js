export default ({ query }) => 
  fetch(`https://restcountries.eu/rest/v2/name/${query}?fields=name`)
    .then(response => response.json())
    .then(responseJson => 
      responseJson
        .map(country => country.name)
        .filter(country => country.toLowerCase().includes(query.toLowerCase()))  // The filter is needed due to a bug in the API where countries that don't match the query sometimes are included.
    )