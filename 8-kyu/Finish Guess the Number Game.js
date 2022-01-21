/*

Title
  Finish Guess the Number Game
  
Description:
  Imagine you are creating a game where the user has to guess the correct number. 
  But there is a limit of how many guesses the user can do.

    If the user tries to guess more than the limit, the function should throw an error.
    If the user guess is right it should return true.
    If the user guess is wrong it should return false and lose a life.

  Can you finish the game so all the rules are met? 
  
Link:
  https://www.codewars.com/kata/568018a64f35f0c613000054
  
*/

// Solutions:
// Solution 1:
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (!this.lives) throw new Error('You have no more life')
    if (n === this.number) return true

    this.lives--
    return false
  }
}




