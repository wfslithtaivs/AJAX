"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    // prevents form action specified in html
    evt.preventDefault();

    // jQuery server call, grabbing information from server route
    $.get("/fortune", function (result) { 
        // jQuery grabbing results from route and updating DOM element
        $("div#fortune-text").html(result);
    });
}

// jQuery adding event handler to DOM element, callback fn on event
$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    console.log(url);

    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, function (result) {
        if (result) { 
            var forecast = result.get("forecast");
            $("div#weather-info").html(forecast);
        }
        else {
            $("div#weather-info").html("Smth wrong going on with your request");   
        }
    }); 
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


