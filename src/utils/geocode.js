const request = require("request");


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaGFxcSIsImEiOiJja3M2b3Y2dDAycXRjMnhtczQ3dmJzZmhjIn0.G6MK9XND-Jx1tgte3dMfpg&limit=1'

    request({ url: url, json: true }, (err, res) => {
        if (err) {
            callback('Connection Failed', undefined)
        } else if (res.body.features.length === 0) {
            callback('Unable to get location, please try another location', undefined)

        } else {
            callback(undefined, {
                latitude: res.body.features[0].center[1],
                longitude: res.body.features[0].center[0],
                location: res.body.features[0].text
            })
        }
    })

}

module.exports = geocode