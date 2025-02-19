console.log("Hello Pumpkin!")

function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3);
    
    if (randInt == 0) {
        return "rock";
    } else if (randInt == 1) {
        return "paper";
    } else if (randInt == 2) {
        return "scissor";
    }
    
}

console.log(getComputerChoice())