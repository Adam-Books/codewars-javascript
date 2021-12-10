/*
Title:
  Sum of Digits / Digital Root
  
Description:
  Digital root is the recursive sum of all the digits in a number.

  Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

  Examples
      16  -->  1 + 6 = 7
     942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
  132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
  493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

Link:
  https://www.codewars.com/kata/sum-of-digits-slash-digital-root/

*/

// Solutions:

// Solution 1:
const sumOfDigits = (n) => {
  while (n > 9) {
    n = +String(n).split("").map((e) => +e).reduce((a, b) => a + b);
  }
  return n;
};

// Solution 2:
const sumOfDigits = (n) => ((n - 1) % 9) + 1;

