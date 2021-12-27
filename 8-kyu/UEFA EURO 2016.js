/*
Title:
  UEFA EURO 2016
  
Description:
  Finish the uefaEuro2016() function so it return string just like in the examples below:

  uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
  uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
  uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
  
Link:
  https://www.codewars.com/kata/57613fb1033d766171000d60

*/

// Solutions:
// Solution 1:
const uefaEuro2016 = (teams, scores) => {
  return scores[0] === scores[1]
    ? `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    : (scores[0] > scores[1]
      ? `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
      : `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`)
}

// Solution 2:
const uefaEuro2016 = (c, s) => `At match ${c[0]} - ${c[1]}, ${s[0] == s[1] ? 
      "commands played draw." : (s[0] > s[1] ? c[0] : c[1]) + ' won!'}`;

// Solution 3:
function uefaEuro2016([t1,t2], [s1,s2]){
  return `At match ${t1} - ${t2}, `+(s1!=s2?`${s1>s2?t1:t2} won!`:`teams played draw.`)
}


