// index.js
const parseArguments = require("./parseArguments");
const validateArguments = require("./validator");
const generatePrimes = require("./primeService");
const handleError = require("./handleError");

const main = async () => {
  try {
    const args = parseArguments();//arguments comes from terminal and after some modification it will return arguments
    validateArguments(args); //validate the arguments as per the requirements or not
    const primes = await generatePrimes(args); //generate the primes by calling api
    console.log(
      `Primes between ${args.start} and ${args.end}: ${primes.join(", ")}`
    );
  } catch (error) {
    handleError(error);//handle errors if there is any
  }
};

main();

// Single Responsibility: Each module has a single responsibility.

// Open/Closed: primesInRange function in primeService.js can be extended with new methods without 
// modifying existing code. Adding a new algorithm is as simple as adding a new case in the switch statement.

// Liskov Substitution: each function does work correctly and can be reused or extended if needed.

// Interface Segregation: Each module only have the necessary functionality.

// Dependency Inversion: The main function depends on abstractions (the imported functions), not on the details 
// of how they work.