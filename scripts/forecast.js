const key = 'Mw5p0N4jrQi4jCtCCHD7V9WZyjOq2sSe';

//Get weather info
const getWeather = async (id) => {

  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch (base + query);
  const data = await response.json();

  return data[0];
  
}



//Get city
const getCity = async(city) => {

  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0]; //On ti da najbliže rezultate, ali 1. je obično onaj kojeg trebaš !
}

