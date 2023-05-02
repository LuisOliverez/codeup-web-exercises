"use strict";

import { MAPBOX_KEY, OPEN_WEATHER_KEY} from './keys.js';



// GEO-LOCATOR MAP

mapboxgl.accessToken = MAPBOX_KEY;

    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL/STYLE OF MAP
        center: [-95,37],
        zoom: 1
    });

const marker = new mapboxgl.Marker({
    draggable: true
})

    .setLngLat([0, 0])
    .addTo(map)


function getWeather(lat, lon) {
// FORCAST API CALL
$.get(`https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&cnt=5&appid=${OPEN_WEATHER_KEY}&units=imperial`)
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
}



//GEOLOCATOR FUNCTION
navigator.geolocation.getCurrentPosition (function(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    map.setCenter([lon, lat]);   //SET CENTER TO GEOLOCATION LAT/LON
    map.setZoom(1); //SET ZOOM
    map.easeTo ({
        center: [lon, lat],
        zoom: 9,
        duration: 3000,
        easing: (t) => {
            return t * (2 - t)
        }
    });
    marker.setLngLat([lon, lat]);
    getWeather(lat, lon);
});




// MARKER DRAGEND EVENT
marker.on('dragend', function () {
    const lngLat = marker.getLngLat();
    const lat = lngLat.lat;
    const lon = lngLat.lng;
    getWeather(lat, lon);
});

$('#search-form').on('submit', function (event){
    event.preventDefault();
    const query = $('#search').val();
    $.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${MAPBOX_KEY}&limit=5`)
        .done(function (data) {
            const lngLat = data.features[0].center;
            const lon = lngLat[0];
            const lat = lngLat[1];
            map.setCenter([lon, lat]);
            marker.setLngLat([lon, lat]);
            getWeather(lat, lon);
        })
        .fail(function (jqXHR, textStatus, errorThrow){
            console.log(errorThrow);
        });
});