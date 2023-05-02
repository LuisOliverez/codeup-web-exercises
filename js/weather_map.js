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

// MAP W/OUT GEO LOCATION FOR RESPONSIVE BUILDING
mapboxgl.accessToken = MAPBOX_KEY;


    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
        center: [-119.09207, 46.22951], // starting position [lng, lat]
        zoom: 9, // starting zoom
    });





// FORCAST API CALL
$.get(`https://api.openweathermap.org/data/2.5/forecast/?lat=${46.22951}&lon=${-119.09207}&cnt=5&appid=${OPEN_WEATHER_KEY}&units=imperial`)
    .done(function (data){
        console.log(data);
        // Update current weather section
        $('.current-weather .location').text(data.city.name);
        $('.current-weather .temperature').text(`${data.list[0].main.temp}°F`);
        $('.current-weather .feels-like').text(`Feels like ${data.list[0].main.feels_like}°F`);
        $('.current-weather .cloud-condition').text(data.list[0].weather[0].description);
        $('.current-weather .max-temp').text(`High: ${data.list[0].main.temp_max}°F`);
        $('.current-weather .min-temp').text(`Low: ${data.list[0].main.temp_min}°F`);

        // Update forecast section
        $('.forecast .day').each(function (index) {
            $(this).find('.location').text(data.city.name);
            $(this).find('.temperature').text(`${data.list[index + 1].main.temp}°F`);
            $(this).find('.feels-like').text(`Feels like ${data.list[index + 1].main.feels_like}°F`);
            $(this).find('.cloud-condition').text(data.list[index + 1].weather[0].description);
            $(this).find('.max-temp').text(`High: ${data.list[index + 1].main.temp_max}°F`);
            $(this).find('.min-temp').text(`Low: ${data.list[index + 1].main.temp_min}°F`);
        });
    })
    .fail(function (jqXHR, testStatus, errorThrow){
        console.error(errorThrow);

    });









 // CURRENT WEATHER API CALL
//
//     .done(function (data){
//         $('#temperature').text('Current Weather in: '+data.name+' '+data.main.temp+'\u00b0 F'),
//         $('#cloud-condition').text('Cloud Condition: '+ data.weather[0].description),
//         $('#feels-like').text('Feels Like: '+data.main.feels_like+'\u00b0 F'),
//         $('#max-temp').text('High For The Day: '+data.main.temp_max+'\u00b0 F'),
//         $('#min-temp').text('Low For The Day: '+data.main.temp_min+'\u00b0 F')
//         console.log(data);
// })
//     .fail(function (jqXHR, testStatus, errorThrow){
//     console.error(errorThrow);
//
//     });


