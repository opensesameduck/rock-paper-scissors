function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3);
    
    if (randInt == 0) {
        return "rock";
    } else if (randInt == 1) {
        return "paper";
    } else if (randInt == 2) {
        return "scissors";
    }
    
}

function getHumanChoice() {
    let userChoice = prompt("Rock, Paper, or Scissors? Enter R for rock, P for paper, or S for scissors");

    if (userChoice.toLowerCase() == "r") {
        return "rock";
    } else if (userChoice.toLowerCase() == "p") {
        return "paper";
    } else if (userChoice.toLowerCase() == "s") {
        return "scissors";
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock") {
            if (computerChoice == "paper") {
                computerScore += 1;
                console.log("You lose! Paper beats rock");
            } else if (computerChoice == "scissors") {
                humanScore += 1;
                console.log("You win! Rock beats scissors");
            } else if (computerChoice == "rock") {
                console.log("It's a tie! You both chose rock");
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "scissors") {
                computerScore += 1;
                console.log("You lose! Scissors beats paper");
            } else if (computerChoice == "rock") {
                humanScore += 1;
                console.log("You win! Paper beats rock");
            } else if (computerChoice == "paper") {
                console.log("It's a tie! You both chose paper");
            }
        } else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                computerScore += 1;
                console.log("You lose! Rock beats scissors");
            } else if (computerChoice == "paper") {
                humanScore += 1;
                console.log("You win! Scissors beats paper");
            } else if (computerChoice == "scissors") {
                console.log("It's a tie! You both chose scissors");
            }
        }
    }

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    if (humanScore > computerScore) {
        console.log("Final Score: Computer - " + computerScore + ". Your Score - " + humanScore + ". You are the winner!")
    } else if (humanScore < computerScore) {
        console.log ("Final Score: Computer - " + computerScore + ". Your Score - " + humanScore + ". The computer is the winner!")
    } else {
        console.log("No winners - you both tied with 2 points.")
    }

}

playGame();