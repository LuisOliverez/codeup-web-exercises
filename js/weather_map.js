import { MAPBOX_KEY, OPEN_WEATHER_KEY} from './keys.js';


mapboxgl.accessToken = MAPBOX_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-119.09207, 46.22951], // starting position [lng, lat]
    zoom: 9, // starting zoom
});


// GEOLOATOR
navigator.geolocation.getCurrentPosition(function (position){
 const lat = position.coords.latitude;
 const lon = position.coords.longitude;

 // API CALL
$.get(`https://api.openweathermap.org/data/2.5/weather?lat=${46.22951}&lon=${-119.09207}&appid=${OPEN_WEATHER_KEY}&units=imperial`)
    .done(function (data){
        $('#temperature').text(data.main.temp+'F'),
        $('#location').text(data.name),
        $('#condition').text(data.weather[0].main)
        console.log(data);
})
    .fail(function (jqXHR, testStatus, errorThrow){
    console.error(errorThrow);

    });


});





