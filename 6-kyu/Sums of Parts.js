/*
Title:
  Sums of Parts

Description:
  Let us consider this example (array written in general format):

  ls = [0, 1, 3, 6, 10]

  Its following parts:

  ls = [0, 1, 3, 6, 10]
  ls = [1, 3, 6, 10]
  ls = [3, 6, 10]
  ls = [6, 10]
  ls = [10]
  ls = []
  The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

  The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

  Other Examples:
  ls = [1, 2, 3, 4, 5, 6] 
  parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

  ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
  parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
  Notes
  Take a look at performance: some lists have thousands of elements.
  Please ask before translating.
  
Link:
  https://www.codewars.com/kata/5ce399e0047a45001c853c2b

*/

// Solutions:
// Solution 1:
const partsSums = l => {
  let newSum = l.reduce((a, b) => a + b, 0);
  let result = [newSum];
  let length = l.length;
  for(let i = 0; i < length; i++) {
    newSum -= l[i];
    result.push(newSum);
  }  
  return result;
};

// Solution 2:
function partsSums(ls) {
    ls.unshift(0);
    let sum = ls.reduce((p, c) => p + c, 0);
    return ls.map(v => sum = sum - v);
}

// Solution 3:
const partsSums = ls => ls.reduceRight((res, el) => (res.push(res[res.length - 1] + el), res), [0]).reverse();





