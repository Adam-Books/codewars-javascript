/*

Title:
  get ascii value of character
  
Description:
  Get ASCII value of a character.

  For the ASCII table you can refer to http://www.asciitable.com/ 
  
Link:
  https://www.codewars.com/kata/55acfc59c3c23d230f00006d
  
*/

// Solutions:
// Solution 1:
const getASCII = c => c.charCodeAt();

// Solution 2:
const getASCII = c => c.charCodeAt(0);

// Solution 3:
function getASCII(c){
  return c.codePointAt()
}


