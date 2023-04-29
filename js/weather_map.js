import { MAPBOX_KEY, OPEN_WEATHER_KEY} from './keys.js';


mapboxgl.accessToken = MAPBOX_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
});

$.get("https://api.openweathermap.org/data/3.0/onecall?appid={MAPBOX_KEY}", {
    APPID: OPEN_WEATHER_KEY,
    q:     "Pasco, US",
    units: 'imperial',
    current: 'current.temp'


}).done(function (data){
    $("#temperature").text(data.main.temp);
    // $('#temperature').text(data.main.clouds);
    console.log(data);
}).fail(function (jqXHR, testStatus, errorThrow){
    console.error(errorThrow);

});


