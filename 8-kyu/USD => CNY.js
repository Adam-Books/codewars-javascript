/*

Title:
  USD => CNY
  
Description:
  Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . 
  The input is the amount of USD as an integer, 
  and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

  For Example:

    usdcny(15)  => '101.25 Chinese Yuan'
    usdcny(465) => '3138.75 Chinese Yuan'
  The conversion rate you should use is 6.75 CNY for every 1 USD. 
  All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")
  
Link:
  https://www.codewars.com/kata/5977618080ef220766000022
  
*/

// Solutions:
// Solution 1:
const usdcny = u => `${(u*6.75).toFixed(2)} Chinese Yuan`;

// Solution 2:
function usdcny(usd) {
  let con = usd * 6.75
  return `${con.toFixed(2)} Chinese Yuan`
}

