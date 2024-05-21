const { primesInRange } = require("../utils/helper");
const PrimeStore = require("../model/primeStoreModel");
const PostPrimeController = async (req, res) => {
  try {
    //destructure the body whichever data send from frontend
    const { start, end, method = "basic" } = req.body;

    const startTime = Date.now();// before algorithm call time 
    const primes = primesInRange(start, end, method);
    const timeElapsed = Date.now() - startTime;// take the difference between algorithm call and complete
    const numPrimes=primes.length;
    // Save the record to the database
    const record = new PrimeStore({
      timeStamp:startTime,
      start,
      end,
      algorithm: method,
      timeElapsed,
      numsPrime: numPrimes,
    });
    await record.save();
    // sending response whichever data needed
    res.json({
      startTime,
      primes,
      start,
      end,
      method,
      timeElapsed,
      numPrimes: primes.length,
    });
  } catch (error) {
    console.error("Error generating primes:", error); //if there is any error then it will be shown on console
    res
      .status(500)
      .json({ error: "An error occurred while generating primes" });
  }
};
module.exports = PostPrimeController;
