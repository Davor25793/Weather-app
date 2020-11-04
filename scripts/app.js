const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


const updateUI = (data) => {

  console.log(data);

  // const cityDets = data.cityDets;
  // const weather = data.weather;

  const {cityDets, weather} = data;
 

  //Details template
  details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;


  //Update icon
  //Source
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);
 

  //Update day/night 
  let timeSrc = null;

  if(weather.IsDayTime){
    timeSrc = 'img2/da.jpg';
  }else{
    timeSrc = 'img2/ne.jpg';
  }

  time.setAttribute('src', timeSrc);

  //Remove d-none class if present
  if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
  }

}


const updateCity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return {
      cityDets,
      weather
    }
}


cityForm.addEventListener('submit', e => {

  //Get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //Update ui with new city
  updateCity(city)
    .then(data => updateUI(data));


  e.preventDefault();
})