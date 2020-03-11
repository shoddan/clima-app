const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        headers: { 'X-RapidAPI-Key': 'cf3ce050c7mshd828c15444a9664p175703jsn57b211a2242b' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}