
function rockPaperScissors(player1, player2){

// Dictionary to define winning options
  const rules = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["rock", "scissors"]
  };
 
  if (player1 === player2) return "draw";

// Determines the winner based on if player2's choice is within player1's rules or not
  return rules[player1].includes(player2) ? "player1" : "player2"
}

//---------- testing ----------//
console.log(rockPaperScissors("spock","lizard"))

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}