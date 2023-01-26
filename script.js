function getComputerChoice() {

    // Generiere Zufall zwischen 1 -3 
    let choice = Math.floor(Math.random() * 3);

    // Return das jeweilige Wort
    if (choice === 0) return "Paper";
    else if (choice === 1) return "Scissors";
    else return "Rock";

}

function playRound(playerSelection, computerSelection) {

    playerSelection = capitalizeString(playerSelection);
    // Compare player- and computer selection and define winner
    if (playerSelection === computerSelection) {
        return "Draw!"

    } else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") return "You Lose! Scissors beats Paper";
        else if (computerSelection === "Rock") return "You Win! Paper beats Rock";

    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") return "You Win! Scissors beats Paper";
        else if (computerSelection === "Rock") return "You Lose! Rock beats Scissors"

    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") return "You Lose! Paper beats Rock";
        else if (computerSelection === "Scissors") return "You Win! Rock beats Scissors";

    } else return "Invalid Selection! Please Enter either 'Paper', 'Scissors' or 'Rock'";

}

function capitalizeString (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));