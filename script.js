



function getComputerChoice() {

    // Generiere Zufall zwischen 1 -3 
    let choice = Math.floor(Math.random() * 3);

    // Return das jeweilige Wort
    if (choice === 0) return "Paper";
    else if (choice === 1) return "Scissors";
    else return "Rock";

}

// function getPlayerChoice() {

//     let validChoice = false;
//     let playerSelect = prompt("Enter your choice of 'Paper', 'Scissors' or 'Rock' : ");
//     playerSelect = capitalizeString(playerSelect);

//     if (playerSelect === "Paper" || playerSelect === "Scissors" || playerSelect === "Rock") {
//         validChoice = true;
//     } else validChoice = false;

//     while (!validChoice) {
//         playerSelect = prompt("Undefined Value! Please enter either 'Paper', 'Scissors' or 'Rock' : ");
//         playerSelect = capitalizeString(playerSelect);
//         if (playerSelect === "Paper" || playerSelect === "Scissors" || playerSelect === "Rock") {
//             validChoice = true;
//         } else validChoice = false;
//     }
//     return playerSelect;
// }

//returns 1 für Computer wins and 2 for Player win
function playRound(playerSelection, computerSelection) {
    const divResults1 = document.querySelector(".displayResults1");
    // Compare player- and computer selection and define winner
    if (playerSelection === computerSelection) {
        if (playerSelection === "Rock") {
            divResults1.textContent = "Rock vs. Rock";
        } else if (playerSelection === "Paper") {
            divResults1.textContent = "Paper vs. Paper";
        } else if (playerSelection === "Scissors") {
            divResults1.textContent = "Scissors vs. Scissors";
        }
        return 0; 

    } else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            divResults1.textContent = "Scissors beats Paper"; 
            return 1; // Comp wins
        } else if (computerSelection === "Rock") {
            divResults1.textContent = "Paper beats Rock";
            return 2; // Player wins
        }

    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            divResults1.textContent = "Scissors beats Paper";
            return 2; //Player wins
        } else if (computerSelection === "Rock") {
            divResults1.textContent = "Rock beats Scissors";
            return 1; //Comp Wins
        }

    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            divResults1.textContent = "Paper beats Rock";
            return 1; //Comp Wins
        } else if (computerSelection === "Scissors") {
            divResults1.textContent = "Rock beats Scissors";
            return 2; // Player Wins
        }
    }

}

// function capitalizeString (word) {
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// }

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

    let winsPlayer = 0;
    let winsComputer = 0;
    let draw = 0;
    //let playerSelection = "";
    
    let resultRound = 0;

    //for (let i = 0; i < 5; i++) {
        // Abfrage Players Choice. Generieren Computer Choice
        
    const buttons = document.querySelectorAll('button');
    const divResults2 = document.querySelector('.displayResults2');
    let roundCount = 0;
    

    buttons.forEach( (button) => {
        button.addEventListener('click', () => {
            const computerSelection = getComputerChoice();
            resultRound = playRound(button.id, computerSelection);
            //Spiele Runde, speicher Ergebnis je Spieler. 
            //resultRound = playRound(playerSelection, computerSelection);
            if (resultRound === 1) {
                winsComputer += 1;
                divResults2.textContent = ` Computer wins! \n You: ${winsPlayer} - Computer: ${winsComputer} - Draw: ${draw}`;
                //console.log( ` wins: Computer! \n You: ${winsPlayer} - Computer: ${winsComputer}`);
            } else if (resultRound === 2) {
                winsPlayer += 1;
                divResults2.textContent =  ` You win! \n You: ${winsPlayer} - Computer: ${winsComputer} - Draw: ${draw}`;
            } else if (resultRound === 0) {
                draw += 1;
                divResults2.textContent = ` Draw! \n You: ${winsPlayer} - Computer: ${winsComputer} - Draw: ${draw}`;
            }
            roundCount++ ;
        

            // After 5 Rounds announce
            if (roundCount === 5) {
                if (winsPlayer > winsComputer) {
                    divResults2.textContent = "Game Over. Congratulation, You Won the game! " + "\n" + ` [You: ${winsPlayer} - Computer: ${winsComputer} - Draw: ${draw}]`;
                    //console.log(`Game Over. Congratulation, You Won the game! \n [You: ${winsPlayer} - Computer: ${winsComputer}]`);
                } else if (winsComputer > winsPlayer) {
                    divResults2.textContent = `Game Over. You Lost the Game! :( ` + "\n" + ` [You: ${winsPlayer} - Computer: ${winsComputer} - Draw: ${draw}]`;
                    //console.log(`Game Over. Don't be sad, You Lost the Game :( ! \n [You: ${winsPlayer} - Computer: ${winsComputer}]`);
                } else { 
                    divResults2.textContent = "Game Over. Draw!" + "\n" + `[You: ${winsPlayer} - Computer: ${winsComputer} - Draw: ${draw}]`;
                    //console.log(`Game Over. Draw! \n [You: ${winsPlayer} - Computer: ${winsComputer}]`);
                }
                roundCount = 0;
                winsPlayer = 0;
                winsComputer = 0;
                draw = 0;
            }
        });
    });
    
   
