"use strict";

import { MAPBOX_KEY, OPEN_WEATHER_KEY} from './keys.js';



// GEO-LOCATOR MAP

// mapboxgl.accessToken = MAPBOX_KEY;
//
//     const map = new mapboxgl.Map({
//         container: 'map', // container ID
//         style: 'mapbox://styles/mapbox/outdoors-v12', // style URL/STYLE OF MAP
//     });
//
//     //GEOLOCATOR FUNCTION
// navigator.geolocation.getCurrentPosition (function(position) {
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     map.setCenter([lon, lat]);//SET CENTER TO GEOLOCATION LAT/LON
// });
// map.setZoom(9); //SET ZOOM


mapboxgl.accessToken = MAPBOX_KEY;


    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
        center: [-119.09207, 46.22951], // starting position [lng, lat]
        zoom: 9, // starting zoom
    });




 // CURRENT WEATHER API CALL
$.get(`https://api.openweathermap.org/data/2.5/weather?lat=${46.22951}&lon=${-119.09207}&appid=${OPEN_WEATHER_KEY}&units=imperial`)
    .done(function (data){
        $('#temperature').text('Current Weather in: '+data.name+' '+data.main.temp+'\u00b0 F'),
        $('#cloud-condition').text('Cloud Condition: '+ data.weather[0].description),
        $('#feels-like').text('Feels Like: '+data.main.feels_like+'\u00b0 F'),
        $('#max-temp').text('High For The Day: '+data.main.temp_max+'\u00b0 F'),
        $('#min-temp').text('Low For The Day: '+data.main.temp_min+'\u00b0 F')
        console.log(data);
})
    .fail(function (jqXHR, testStatus, errorThrow){
    console.error(errorThrow);

    });


// FORCAST API CALL
$.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${46.22951}&lon=${-119.09207}&appid=${OPEN_WEATHER_KEY}&units=imperial`)
    .done(function (data){
        console.log(data)
    })

