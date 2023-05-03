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


function getWeatherData(lat, lon) {
    $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}&units=imperial`)
        .done(function (data) {
            console.log(data);

            // Update current weather section
            $('.current-weather .location').text(`${data.name} ${new Date(data.dt * 1000).toLocaleDateString()}`);
            $('.current-weather .temperature').text(`${data.main.temp}°F`);
            $('.current-weather .feels-like').text(`Feels like ${data.main.feels_like}°F`);
            $('.current-weather .cloud-condition').text('Cloud Condition: ' + data.weather[0].description);
            $('.current-weather .max-temp').text(`High: ${data.main.temp_max}°F`);
            $('.current-weather .min-temp').text(`Low: ${data.main.temp_min}°F`);

            // Change background color based on temperature
            const currentTemp = data.main.temp;
            if (currentTemp < 32) {
                $('body').css('background-image', 'url("images/cold-bg.gif")'); // Light Blue
            } else if (currentTemp < 60) {
                $('body').css('background-color', '#E0FFFF'); // Light Cyan
            } else if (currentTemp < 80) {
                $('body').css('background-color', '#FFFACD'); // Lemon Chiffon
            } else {
                $('body').css('background-color', '#FFB6C1'); // Light Pink
            }
        })
        .fail(function (jqXHR, testStatus, errorThrow) {
            console.error(errorThrow);
        });


    $.get(`https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_KEY}&units=imperial`)
        .done(function (data) {
            console.log(data);

            // Update forecast section
            let dayCount = 0;
            let currentDate = '';
            data.list.forEach(function (item) {
                if (item.dt_txt.slice(11, 13) === '15' && dayCount < 4) { // check if the time is 3pm and we have not updated data for 4 days yet
                    if (item.dt_txt.slice(0, 10) !== currentDate) { // check if the date has changed
                        $('.forecast .day').eq(dayCount).find('.date').text(`${item.dt_txt.slice(5, 7)}/${item.dt_txt.slice(8, 10)}/${item.dt_txt.slice(2, 4)}`);
                        currentDate = item.dt_txt.slice(0, 10);
                    }
                    $('.forecast .day').eq(dayCount).find('.location').text(data.city.name);
                    $('.forecast .day').eq(dayCount).find('.feels-like').text(`Going to feel Like: ${item.main.feels_like}°F`);
                    $('.forecast .day').eq(dayCount).find('.cloud-condition').text('Cloud Condition: ' + item.weather[0].description);
                    $('.forecast .day').eq(dayCount).find('.max-temp').text(`High: ${item.main.temp_max}°F`);
                    $('.forecast .day').eq(dayCount).find('.min-temp').text(`Low: ${item.main.temp_min}°F`);
                    dayCount++;
                }
            });

        //     const forecastTemp = data.main.temp;
        //     if (forecastTemp < 32) {
        //         $('body').css('background-color', '#87CEFA'); // Light Blue
        //     } else if (forecastTemp < 60) {
        //         $('body').css('background-color', '#E0FFFF'); // Light Cyan
        //     } else if (forecastTemp < 80) {
        //         $('body').css('background-color', '#FFFACD'); // Lemon Chiffon
        //     } else {
        //         $('body').css('background-color', '#FFB6C1'); // Light Pink
        //     }
        })
        .fail(function (jqXHR, testStatus, errorThrow) {
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
    getWeatherData(lat, lon);
});




// MARKER DRAGEND EVENT
marker.on('dragend', function () {
    const lngLat = marker.getLngLat();
    const lat = lngLat.lat;
    const lon = lngLat.lng;
    getWeatherData(lat, lon);
});

map.on('click', function (e) {
    marker.setLngLat(e.lngLat);
    const lngLat = marker.getLngLat();
    const lat = lngLat.lat;
    const lon = lngLat.lng;
    getWeatherData(lat, lon);
});


$('#search-form').on('submit', function (event) {
    event.preventDefault();
    const query = $('#search').val();
    $.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${MAPBOX_KEY}&limit=5`)
        .done(function (data) {
            const lngLat = data.features[0].center;
            const lon = lngLat[0];
            const lat = lngLat[1];
            map.easeTo({
            center: [lon, lat],
                zoom: 4,
                duration: 3000
        });
    setTimeout(function (){
        map.easeTo({
            center:[lon, lat],
            zoom: 8,
            duration: 2000
        });
        marker.setLngLat([lon, lat]);
        getWeatherData(lat, lon);
    },3000);
})
        .fail(function (jqXHR, textStatus, errorThrow){
            console.log(errorThrow);
        });
});


// get the temperature data
const temperature = getWeatherData();

// set the background color based on the temperature
if (temperature < 40) {
    document.body.className = 'cold';
} else if (temperature < 75) {
    document.body.className = 'moderate';
} else {
    document.body.className = 'hot';
}