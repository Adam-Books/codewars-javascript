/*
Title:
  Get number from string
  
Description:
  Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

  Function:

  getNumberFromString(s)
  
Link:
  https://www.codewars.com/kata/57a37f3cbb99449513000cd8

*/

// Solutions:

// Solution 1:
const getNumberFromString = s => +s.replace(/\D/g, '');

