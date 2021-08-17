const request = require("request");

const forcast = (address, callback) => {
    const apiKey = '5ef72b8831d94183eb3eee3395499474'

    const url = 'http://api.weatherapi.com/v1/current.json?key=60c4a94b34ad4cb7871202512211008&q=' + address

    request({ url: url, json: true }, (err, res) => {
        if (err) {
            callback('Connection Failed!', undefined)
        } else if (res.body.error) {
            callback('Unable to get location', undefined);
        } else {
            callback(undefined, (
                'Temperature infarenheit: ' + res.body.current.temp_c +
                ' Temperature-celcius: ' + res.body.current.temp_f +
                ' Location Name: ' + res.body.location.name
            ))
        }
    })
}

module.exports = forcast