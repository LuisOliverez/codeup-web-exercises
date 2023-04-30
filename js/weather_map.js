import { MAPBOX_KEY, OPEN_WEATHER_KEY} from './keys.js';


mapboxgl.accessToken = MAPBOX_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-119.09207, 46.22951], // starting position [lng, lat]
    zoom: 9, // starting zoom
});


// GEO-LOCATOR
// navigator.geolocation.getCurrentPosition(function (position){
//  const lat = position.coords.latitude;
//  const lon = position.coords.longitude;

 // API CALL
$.get(`https://api.openweathermap.org/data/2.5/weather?lat=${46.22951}&lon=${-119.09207}&appid=${OPEN_WEATHER_KEY}&units=imperial`)
    .done(function (data){
        $('#temperature').text(data.main.temp+'\u00b0 F'),
        $('#location').text(data.name),
        $('#sky-condition').text(data.weather[0].description),
        $('#feels-like').text('Feels Like: '+data.main.feels_like+'\u00b0 F'),
        $('#condition').text(data.main.contition),
        $('#max-temp').text('High For The Day: '+data.main.temp_max+'\u00b0 F'),
        $('#min-temp').text('Low For The Day: '+data.main.temp_min+'\u00b0 F')
        console.log(data);
})
    .fail(function (jqXHR, testStatus, errorThrow){
    console.error(errorThrow);

    });








