//basic optimistic algorithm
function basicOptimisedAlgo(n) {
  //n<=1 are nonprime
  //n<=3 but greater than 1 are prime
  //divisible by 2 and 3 are also non-prime
  //loop will running till square root of n
  //there will be only odd remains which are not divisible by 3
  //5,7,11,13,17,19... are remaining there are common syntax followed

  if (n <= 1) {
    return false;
  }
  if (n <= 3) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

//basic hard algorithm
function basicAlgo(n) {
  if (n <= 1) {
    return false;
  }
  //in this algorithm i have simply loop from 2 to square root of n

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

//sieve of eratosthenes
function sieveOfEratosthenes(start, end) {
  //we have taken another array in which firstly set true
  //for 0 and 1 value put false
  //in for loop there is optimised algo where multiple of prime numbers will be false and others stay true which are prime numbers
  //in this way we can reduce time complexity
  //we push start to end elements
  if (end < 2) return [];
  const sieve = new Array(end + 1).fill(true);
  sieve[0] = sieve[1] = false;
  for (let i = 2; i * i <= end; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= end; j += i) {
        sieve[j] = false;
      }
    }
  }
  const primes = [];
  for (let k = start; k <= end; k++) {
    if (sieve[k]) primes.push(k);
  }
  return primes;
}
module.exports = {
  sieveOfEratosthenes,
  basicAlgo,
  basicOptimisedAlgo,
};
