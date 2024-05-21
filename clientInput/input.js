const axios = require("axios");

const args = process.argv.slice(2); // ignore the first two arguments (node and script path)

const start = parseInt(args[0], 10);  // convert into integer , 10 used for converting string to integer only
const end = parseInt(args[1], 10);  //strings starting with '0x' are interpreted as hexadecimal (base 16).
const method = args[2] || "basic";

if (isNaN(start) || isNaN(end) || start >= end) {
  //condition whether start and end are numbers and start<end
  console.error("Please enter valid start and end values.");
  process.exit(1);
}

const generatePrimes = async (e) => {
  try {
    // api calls to backend to post the data and response store in response
    const response = await axios.post("http://localhost:5000/api/postPrime", {
      start: start,
      end: end,
      method,
    });
    console.log(
      `Primes between ${start} and ${end}: ${response.data.primes.join(", ")}`
    );
    console.log("response data ");
    console.log(response.data);
  } catch (error) {
    //if there is any error comes it will be shown to user in terminal itself
    console.error("Error generating primes:", error);
  }
};
generatePrimes();
