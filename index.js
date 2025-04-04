let humanScore = 0;
let computerScore = 0;
// console.log(getComputerChoice())
// console.log(getHumanChoice())

function getComputerChoice() {
    //randomly return one of the three choices
    let choice = Math.random()*3;
    if(choice <1) {
        return "Rock";
    } 
    else if (choice<2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice(){
    return prompt("Your turn!")
}

function playRound(humanChoice, computerChoice){

    if (humanChoice.toLowerCase()=='paper'){
        switch(computerChoice.toLowerCase()){
            case 'paper':
                console.log("You tie! Paper can't beat paper.");
                break;
            case 'rock':
                console.log("You win! Paper beats Rock.");
                break;
            case 'scissors':
                console.log("You lose! Scissors cut Paper.");
                break;
            default:
                console.log("What happened?")
        }
    } else if (humanChoice.toLowerCase()=='rock'){
        switch(computerChoice.toLowerCase()){
            case 'paper':
                console.log("You lose! Paper beats rock.");
                break;
            case 'rock':
                console.log("You tie! Rock on Rock.");
                break;
            case 'scissors':
                console.log("You win! Rock beats scissors.");
                break;
            default:
                console.log("What happened?")
        }
    } else {
        switch(computerChoice.toLowerCase()){
            case 'paper':
                console.log("You win! Scissors beats paper.");
                break;
            case 'rock':
                console.log("You lose! Rock beats scissors.");
                break;
            case 'scissors':
                console.log("You tie! Scissors on scissors.");
                break;
            default:
                console.log("What happened?")
        }
    }
    
}

let computer = getComputerChoice();
let human = getHumanChoice();
console.log(`Computer move: ${computer} | Your move: ${human}.`);

playRound(human, computer);