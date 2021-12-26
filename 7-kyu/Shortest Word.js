/*
Title:
  Shortest Word
  
Description:
  Simple, given a string of words, return the length of the shortest word(s).
  String will never be empty and you do not need to account for different data types.
  
Link:
  https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
  
*/

// Solutions:
// Solution 1:
const findShort = s => s.split(' ').sort((a, b) => a.length - b.length)[0].length;

// Solution 2:
const findShort = s => Math.min(...s.split(" ").map(s => s.length));

// Solution 3:
const findShort = s => s.split(' ').sort((a, b) => b.length - a.length).pop().length;

