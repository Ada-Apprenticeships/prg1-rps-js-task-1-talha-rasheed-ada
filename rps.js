// Assign the function
function rockPaperScissors(player1, player2){

  // Array to define winning options
  const rules = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["rock", "scissors"]
  };

// Defines outcome when player1 and player2 have the same option
  if (player1 === player2) {
    return "draw"; 
  }

  // Checks the rules set in array at player1 to check if player2 has chosen a losing option
  else if (rules[player1].includes(player2)) {
    return "player1";
  }

  // Runs if player2 hasn't chosen a losing option
  else {
    return "player2";
  }
} 

//--------- testing

console.log(rockPaperScissors("spock","lizard"))

 





// Define the outcomes of each possibility


// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}