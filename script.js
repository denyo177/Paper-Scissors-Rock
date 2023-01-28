function getComputerChoice() {

    // Generiere Zufall zwischen 1 -3 
    let choice = Math.floor(Math.random() * 3);

    // Return das jeweilige Wort
    if (choice === 0) return "Paper";
    else if (choice === 1) return "Scissors";
    else return "Rock";

}

function getPlayerChoice() {

    let validChoice = false;
    let playerSelect = prompt("Enter your choice of 'Paper', 'Scissors' or 'Rock' : ");
    playerSelect = capitalizeString(playerSelect);

    if (playerSelect === "Paper" || playerSelect === "Scissors" || playerSelect === "Rock") {
        validChoice = true;
    } else validChoice = false;

    while (!validChoice) {
        playerSelect = prompt("Undefined Value! Please enter either 'Paper', 'Scissors' or 'Rock' : ");
        playerSelect = capitalizeString(playerSelect);
        if (playerSelect === "Paper" || playerSelect === "Scissors" || playerSelect === "Rock") {
            validChoice = true;
        } else validChoice = false;
    }
    return playerSelect;
}

function playRound(playerSelection, computerSelection) {

    // Compare player- and computer selection and define winner
    if (playerSelection === computerSelection) {
        alert("Draw!");
        return 0; 

    } else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            alert("You Lose! Scissors beats Paper"); 
            return 1; // Comp wins
        } else if (computerSelection === "Rock") {
            alert("You Win! Paper beats Rock");
            return 2; // Player wins
        }

    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            alert("You Win! Scissors beats Paper");
            return 2; //Player wins
        } else if (computerSelection === "Rock") {
            alert("You Lose! Rock beats Scissors");
            return 1; //Comp Wins
        }

    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            alert("You Lose! Paper beats Rock");
            return 1; //Comp Wins
        } else if (computerSelection === "Scissors") {
            alert("You Win! Rock beats Scissors");
            return 2; // Player Wins
        }
    }

}

function capitalizeString (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function game() {

    let winsPlayer = 0;
    let winsComputer = 0;
    let playerSelection = "";

    confirm("Wanna play Paper, Scissors, Rock?");

    for  (let i = 0; i < 5; i++) {
        // Abfrage Players Choice. Generieren Computer Choice
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();

        let resultRound = 0;
        // Spiele Runde, speicher Ergebnis je Spieler. 
        resultRound = playRound(playerSelection, computerSelection);
        if (resultRound === 1) {
            winsComputer += 1;
            console.log("Round " + (i+1) + ` wins: Computer! \n You: ${winsPlayer} - Computer: ${winsComputer}`);
        } else if (resultRound === 2) {
            winsPlayer += 1;
            console.log("Round " + (i+1) + ` wins: You! \n You: ${winsPlayer} - Computer: ${winsComputer}`);
        } else if (resultRound === 0) {
            console.log("Round " + (i+1) + ` Draw! \n You: ${winsPlayer} - Computer: ${winsComputer}`);
        }
    }
    // Nach 5 Runden, gebe Gewinner aus
    if (winsPlayer > winsComputer) {
        alert(`Game Over. Congratulation, You Won the game! \n [You: ${winsPlayer} - Computer: ${winsComputer}]`);
    } else if (winsComputer > winsPlayer) {
        alert(`Game Over. Don't be sad, You Lost the Game :( ! \n [You: ${winsPlayer} - Computer: ${winsComputer}]`);
    } else alert(`Game Over. Draw! \n [You: ${winsPlayer} - Computer: ${winsComputer}]`)

}