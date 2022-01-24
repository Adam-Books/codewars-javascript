/*

Title:
  Is it a palindrome?
  
Description:
  Write a function that checks if a given string (case insensitive) is a palindrome.
  
Link:
  https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
  
*/

// Solutions:
// Solution 1:
const isPalindrome = x => x.toLowerCase() == x.toLowerCase().split('').reverse().join('');


