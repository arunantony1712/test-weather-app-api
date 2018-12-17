const AWS = require('aws-sdk');
// const dynamoDB = new AWS.DynamoDB({apiVersion: '2012-08-10'});

exports.handler = (event, context, callback) => {
    if (event && event.city) {
        let temp5 = [];
        switch(event.city) {
            case 'Sydney': {
                temp5 = [11, 1, -3, 0, -2];
                break;
            }
            case 'Tokyo': {
                temp5 = [1, -3, -5, 5, -3];
                break;
            }
            case 'NewYork': {
                temp5 = [0, 7, 6, 10, 4];
                break;
            }
            case 'London1': {
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
            {cityName : 'London1', temperatureNow: 2},
            {cityName : 'NewYork', temperatureNow: 8},
            {cityName : 'Tokyo', temperatureNow: 16},
            {cityName : 'Sydney', temperatureNow: 22},
        ];
       callback(null, initialVal);
    }
};