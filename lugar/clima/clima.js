const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0783bbf197102ea110db082e80ae9307&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}