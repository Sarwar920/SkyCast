$('#getWeather').on('click', function () {
  const city = $('#cityInput').val();
  const apiKey = "a461d975ebcd04c437c1c744c187ef2f";
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  $.getJSON(apiURL, function (data) {
    $('#cityName').text(data.name);
    $('#weatherDesc').text(data.weather[0].description);
    $('#temp').text(data.main.temp);
    $('#humidity').text(data.main.humidity);
    $('#wind').text(data.wind.speed);
    $('#weatherResult').removeClass('d-none');
  }).fail(function () {
    alert("City not found. Please try again.");
  });
});
