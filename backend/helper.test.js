

const { primesInRange } = require("./utils/helper");
// covering all the lines 
test("Basic method", () => {
  expect(primesInRange(1, 10, "basic")).toEqual([2, 3, 5, 7]); //for basic method
  expect(primesInRange(1, 1)).toEqual([]); // condition check if start with 1 and end with 1
  expect(primesInRange(20, 30)).toEqual([23, 29]); //if method is not passed as parameter
  expect(primesInRange(20)).toEqual([]); //if only pass start value
  expect(primesInRange(30, 20, "basic")).toEqual([]); //start>end it will return
});

test("Optimistic method", () => {
  expect(primesInRange(1, 10, "optimistic")).toEqual([2, 3, 5, 7]); //for optimistic method
  expect(primesInRange(1, 1, "optimistic")).toEqual([]); // condition check if start with 1 and end with 1
  expect(primesInRange(20, 30, "optimistic")).toEqual([23, 29]); // normal test case other than first
  expect(primesInRange(20, "optimistic")).toEqual([]); //if only pass start value
  expect(primesInRange(30, 20, "optimistic")).toEqual([]); //start>end it will return
});
test("Sieve method", () => {
  expect(primesInRange(1, 10, "sieve")).toEqual([2, 3, 5, 7]); //for optimistic method
  expect(primesInRange(1, 1, "sieve")).toEqual([]);// condition check if start with 1 and end with 1
  expect(primesInRange(20, 30, "sieve")).toEqual([23, 29]); // normal test case other than first
  expect(primesInRange(20, "sieve")).toEqual([]); //if only pass start value
  expect(primesInRange(30, 20, "sieve")).toEqual([]); //start>end it will return
});
test("Other method", () => {
  expect(primesInRange(1, 10, "abcd")).toEqual([2,3,5,7]); //other methodNames
});
