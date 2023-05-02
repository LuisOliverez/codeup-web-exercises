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
    //     INCIDENT EVENT LISTENER
        map.on('click', 'traffic-incidents', function (e) {
            var feature = e.features[0];
            var incidentType = feature.properties.type;

            // Use Mapbox Traffic API to retrieve incident details
            var trafficAPIUrl = 'https://api.mapbox.com/traffic/v1/incidents?access_token=' + mapboxgl.accessToken;
            var params = {
                startTimestamp: Math.floor(Date.now() / 1000) - 1800, // 30 minutes ago
                endTimestamp: Math.floor(Date.now() / 1000),
                bbox: feature.bbox.join(','),
                type: incidentType
            };
            var trafficAPIRequest = new XMLHttpRequest();
            trafficAPIRequest.open('GET', trafficAPIUrl + '&' + encodeParams(params), true);
            trafficAPIRequest.onload = function () {
                if (trafficAPIRequest.status >= 200 && trafficAPIRequest.status < 400) {
                    var data = JSON.parse(trafficAPIRequest.responseText);
                    if (data.features.length > 0) {
                        // Show incident details on the map
                        var incident = data.features[0];
                        var incidentDescription = incident.properties.description;
                        var incidentCoordinates = incident.geometry.coordinates;
                        var popup = new mapboxgl.Popup()
                            .setLngLat(incidentCoordinates)
                            .setHTML('<p>' + incidentDescription + '</p>')
                            .addTo(map);
                    }
                }
            };
            trafficAPIRequest.send();
        });

        function encodeParams(params) {
    var encodedParams = [];
    for (var param in params) {
        encodedParams.push(encodeURIComponent(param) + '=' + encodeURIComponent(params[param]));
    }
    return encodedParams.join('&');

}






// FORCAST API CALL
$.get(`https://api.openweathermap.org/data/2.5/weather?lat=${46.22951}&lon=${-119.09207}&appid=${OPEN_WEATHER_KEY}&units=imperial`)
    .done(function (data){
        // $('#day-one-location').text('Current Weather in: '+data.name+' '+data.main.temp+'\u00b0 F')


        console.log(data)
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


