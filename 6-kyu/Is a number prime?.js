/*
Title:
  Is a number prime?
  
Description:
  Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.

  Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

  Requirements
  You can assume you will be given an integer input.
  You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
  NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 (or similar, depends on language version). Looping all the way up to n, or n/2, will be too slow.
  Example
  is_prime(1)  // false 
  is_prime(2)  // true  
  is_prime(-1) // false 

Link:
  https://www.codewars.com/kata/5262119038c0985a5b00029f
*/

// Solutions:

// Solution 1:
const isPrime = (n) => {
  let s = Math.sqrt(n);
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 == 0 || n % 3 == 0) return false;
  for (let i = 5; i <= s; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }
  return n == 2 ? true : n == 4 ? false : true;
};

// Solution 2:
const isPrime = (n) => n > 1 && [2, 3, 5, 7].every((i) => n === i || n % i);

// Solution 3:
const isPrime = (n) => {
  for (let i = 2; i <= n ** 0.5; i++) {
    if (!(n % i)) return false;
  }
  return n > 1;
};
