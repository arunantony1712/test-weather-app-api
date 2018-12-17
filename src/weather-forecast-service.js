var request = require('request');

const currentWeather = (city, country) => `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=f5ee737c7ed4d0291dde2bc73ca6dfd6`;
const weatherForecast = (city, country) => `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=f5ee737c7ed4d0291dde2bc73ca6dfd6`;

class WeatherForecastService {  

  static getCurrentWeather (city, country) {
    var options = {
      method: 'GET',
      url: currentWeather(city, country)
    }
    
    return new Promise ((resolve, reject) => {
      request(options, function (err, res, body) {
        if (err) {
          return reject(err);
        }
        return resolve(JSON.parse(body));
      });
    });
  }

  static getWeatherForecast (city, country) {
    var options = {
      method: 'GET',
      url: weatherForecast(city, country)
    }
    
    return new Promise ((resolve, reject) => {
      request(options, function (err, res, body) {
        if (err) {
          return reject(err);
        }
        const forecastArray = JSON.parse(body).list;
        const forecastSet = Array.isArray(forecastArray) && forecastArray.reduce((acc, cur) => {
            if (acc.length === 0) {
                acc.push({
                    date: cur.dt_txt.split(" ")[0],
                    temp: cur.main.temp,
                });
                return acc;
            } 

            if (acc[acc.length - 1].date === cur.dt_txt.split(" ")[0]) {
                return acc;
            } else {
                acc.push({
                    date: cur.dt_txt.split(" ")[0],
                    temp: cur.main.temp,
                });
                return acc;
            }

        }, []);

        let temp5 = [];
        if (forecastSet.length !== 0) {
            temp5 = forecastSet.map(item => item.temp);
        }
        return resolve(temp5);
      });
    });
  }

}

module.exports = WeatherForecastService;