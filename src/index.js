const AWS = require('aws-sdk');
// todo: connect to DynamoDB and openweather.org

exports.handler = (event, context, callback) => {
    if (event && event.city) {
        let temp5 = [];
        switch(event.city) {
            case 'London': {
                temp5 = [11, 1, -3, 0, -2];
                break;
            }
            case 'Amsterdam': {
                temp5 = [1, -3, -5, 5, -3];
                break;
            }
            case 'Moscow': {
                temp5 = [0, 7, 6, 10, 4];
                break;
            }
            case 'Berlin': {
                temp5 = [12, 7, -5, 0, 6];
                break;
            }
            default: {
                temp5 = [0, 0, 0, 0, 0];
            }
        }
        callback(null, temp5);
    } else {
        const initialVal = [
            {cityName : 'London', temperatureNow: 2},
            {cityName : 'Amsterdam', temperatureNow: 8},
            {cityName : 'Moscow', temperatureNow: 16},
            {cityName : 'Berlin', temperatureNow: 22},
        ];
       callback(null, initialVal);
    }
};
