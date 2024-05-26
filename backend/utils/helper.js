const {
  basicOptimisedAlgo,
  basicAlgo,
  sieveOfEratosthenes,
} = require("./primeAlgo");
const primesInRange = (start, end, method = "basic") => {
  switch (method) {
    //by default set to basic method otherwise it will deliver like method name
    case "sieve":
      return sieveOfEratosthenes(start, end);
    case "optimistic":
      // create duplicate of array and do filter
      return Array.from(
        { length: end - start + 1 },
        (_, i) => start + i
      ).filter(basicOptimisedAlgo);
    case "basic":
    default:
      return Array.from(
        { length: end - start + 1 },
        (_, i) => start + i
      ).filter(basicAlgo);
  }
};

module.exports = {
  primesInRange,
};
