import { MAPBOX_KEY, OPEN_WEATHER_KEY} from './keys.js';


mapboxgl.accessToken = MAPBOX_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-119.09207, 46.22951], // starting position [lng, lat]
    zoom: 9, // starting zoom
});

$.get(`https://api.openweathermap.org/data/2.5/weather?lat=${46.22951}&lon=${-119.09207}&appid=${OPEN_WEATHER_KEY}&units=imperial`)
    .done(function (data){
        $("#temperature").text(data.main.temp);
        console.log(data);
})
    .fail(function (jqXHR, testStatus, errorThrow){
    console.error(errorThrow);

});


