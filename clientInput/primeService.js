const axios = require("axios");

const generatePrimes = async ({ start, end, method }) => {
  // api calls to backend to post the data and response store in response
  const response = await axios.post("http://localhost:5000/api/postPrime", {
    start: start,
    end: end,
    method,
  });
  return response.data.primes;
};

module.exports = generatePrimes;
