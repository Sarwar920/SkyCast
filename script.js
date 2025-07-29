const apiKey = 'a461d975ebcd04c437c1c744c187ef2f'; 

$(document).ready(function() {
    // Event listener for search button click
    $('#searchButton').click(function() {
        const city = $('#cityInput').val().trim(); // Trim spaces
        if (city) {
            fetchWeather(city); // Fetch weather data
            $('#error').text(''); // Clear previous errors
        } else {
            $('#error').text('Please enter a city name'); // Error for empty input
        }
    });
});

function fetchWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // AJAX request to fetch weather data
    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function(data) {
            $('#error').text(''); // Clear errors
            $('#weatherData').show(); // Show weather section
            $('#cityName').text(data.name); // Display city name
            $('#temperature').text(data.main.temp); // Display temperature
            $('#humidity').text(data.main.humidity); // Display humidity
            $('#windSpeed').text(data.wind.speed); // Display wind speed
            $('#condition').text(data.weather[0].description); // Display condition
        },
        error: function(xhr) {
            if (xhr.status === 404) {
                $('#error').text('City not found. Please try again.'); // Handle 404 error
            } else {
                $('#error').text('An error occurred. Please try later.'); // Handle other errors
            }
            $('#weatherData').hide(); // Hide weather data on error
        }
    });
}
