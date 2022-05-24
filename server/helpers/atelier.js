const axios = require('axios');

const getAtelier = () => {
  let options = {
    url: process.env.URL + '65631',
    method: "GET",
    headers: {
      "User-Agent": "request",
      Authorization: process.env.API_TOKEN,
    },
  };
  return axios(options)
}

module.exports = getAtelier;