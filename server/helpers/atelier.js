const axios = require('axios');

const getAtelier = (id, related = '') => {
  let options = {
    url: `${process.env.URL}/${id}/${related}`,
    method: "GET",
    headers: {
      "User-Agent": "request",
      Authorization: process.env.API_TOKEN,
    },
  };
  return axios(options)
}

module.exports = getAtelier;