const axios = require('axios');
const moment = require('moment');

const bangkokForecast = async () => {
  let res = await axios('http://api.openweathermap.org/data/2.5/forecast/daily?q=Bangkok&cnt=7&units=metric&appid=e5446373eef6128679c7fa8a1951d788');
  return res.data.list.map((e) => {
    return {
      date: moment.unix(e.dt).format("YYYY-MM-DD"),
      minTemp: e.temp.min,
      maxTemp: e.temp.max
    };
  });
};

module.exports = { bangkokForecast };
