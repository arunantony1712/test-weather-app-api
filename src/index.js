const AWS = require('aws-sdk');
var WeatherForecastService = require("./weather-forecast-service");

exports.handler = (event, context, callback) => {
    if (event && event.city) {
        WeatherForecastService.getWeatherForecast(event.city)
            .then((data) => callback(null, data))
            .catch(err => callback(err));
    } else {
        Promise.all([
            WeatherForecastService.getCurrentWeather('London'),
            WeatherForecastService.getCurrentWeather('Amsterdam'),
            WeatherForecastService.getCurrentWeather('Moscow'),
            WeatherForecastService.getCurrentWeather('Berlin')
        ])
            .then((dataArray) => {
                const initialVal = [
                    {cityName : 'London', temperatureNow: dataArray[0].main.temp},
                    {cityName : 'Amsterdam', temperatureNow: dataArray[1].main.temp},
                    {cityName : 'Moscow', temperatureNow: dataArray[2].main.temp},
                    {cityName : 'Berlin', temperatureNow: dataArray[3].main.temp}
                ];
               callback(null, initialVal);
            })
            .catch((err) => {
                callback(err);
            });
    }
};