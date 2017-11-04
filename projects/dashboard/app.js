function loadDate () {
    var currentDate = new Date();
    var dateString = currentDate.toString()
        .split()
        .splice(0, 4)
        .join("");
        
    $("#date").text(dateString);
}

function loadWeather () {
    var weather = $("#weather");
    var url = "https://api.forecast.io/forecast/";
    var apiKey = "b6c8410679cb9d58b35e62762846a304";
}

function success(position) {
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude
    
    $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
      weather.text("Based on your current location, it is " + data.currently.temperature + "° F right now");
    });
}

function error() {
    alert("Can't retrieve the weather right now. Sorry!");
}

navigator.geolocation.getCurrentPosition(success, error);

weather.text("Analyzing weather...")

// Lines 1-32 are for the weather.

function loadNews() {
    var news = $("#news")
    var url = "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=";
    var apiKey = "21b8ed79d3374be7bd8a0bd92f799c92";
}

//API request for Newsfeed (News API)