let humanScore = 0;
let computerScore = 0;
console.log(getComputerChoice())
console.log(getHumanChoice())

function getComputerChoice() {
    //randomly return one of the three choices
    let choice = Math.random()*3;
    if(choice <1) {
        return "rock";
    } 
    else if (choice<2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("Your turn!")
}

function playRound(humanChoice, computerChoice){
    if (humanChoice=='Paper'){
        switch(computerChoice){
            case 'Paper':
                console.log("You tie! Paper can't beat paper.");
                break;
            case 'Rock':
                console.log("You win! Paper beats Rock.");
                break;
            case 'Scissors':
                console.log("You lose! Scissors cut Paper.");
                break;
            default:
                console.log("What happened?")
        }
    } else if (humanChoice=='Rock'){
        switch(computerChoice){
            case 'Paper':
                console.log("You lose! Paper beats rock.");
                break;
            case 'Rock':
                console.log("You tie! Rock on Rock.");
                break;
            case 'Scissors':
                console.log("You win! Rock beats scissors.");
                break;
            default:
                console.log("What happened?")
        }
    } else {
        switch(computerChoice){
            case 'Paper':
                console.log("You win! Scissors beats paper.");
                break;
            case 'Rock':
                console.log("You lose! Rock beats scissors.");
                break;
            case 'Scissors':
                console.log("You tie! Scissors on scissors.");
                break;
            default:
                console.log("What happened?")
        }
    }
    
}

let computer = getComputerChoice();
let human = getHumanChoice();
playRound(human, computer);