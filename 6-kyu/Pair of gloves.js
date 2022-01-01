/*
Title:
  Pair of gloves
  
Deacription:
  Pair of gloves
  Winter is coming, you must prepare your ski holidays. 
  The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

  Given an array describing the color of each glove, return the number of pairs you can constitute, 
  assuming that only gloves of the same color can form pairs.

  Examples:
  input = ["red", "green", "red", "blue", "blue"]
  result = 2 (1 red pair + 1 blue pair)

  input = ["red", "red", "red", "red", "red", "red"]
  result = 3 (3 red pairs)
  
Link:
  https://www.codewars.com/kata/58235a167a8cb37e1a0000db
  
*/

// Solutions:
// Solution 1:
const numberOfPairs = gloves => {
  let pairs = 0;
  let pureGloves = [...new Set(gloves)];
  let l = pureGloves.length;
  for (let i = 0; i < l; i++) {
   let k = parseInt(gloves.filter(e => e == pureGloves[i]).length / 2);
    pairs += k; 
  }
  return pairs;
};

// Solution 2:
const numberOfPairs = gloves => {
  var arr = Array.from(new Set(gloves));
  return arr.reduce((a,b) => a + Math.floor(gloves.join('').match(new RegExp(b, 'g')).length / 2), 0);
};

// Solution 3:
numberOfPairs = a => [...new Set(a)].map(b => a.join``.split(b).length - 1).reduce((a, b) => a + (b >> 1), 0);

// Solution 4:
const numberOfPairs = gloves => [...new Set(gloves)].reduce( (acc,el) => acc + ~~(gloves.filter(x => x === el).length / 2), 0);



