let humanScore = 0;
let computerScore = 0;

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

// function getHumanChoice(){
//     return prompt("Your turn!")
// }

function playRound(humanChoice, computerChoice){
    const result = document.getElementById('result');
    const score = document.getElementById('score');   
    if (humanChoice.toLowerCase()=='paper'){
        switch(computerChoice.toLowerCase()){
            case 'paper'://tie
                result.textContent = "You tie! Paper can't beat paper.";
                score.textContent = `Computer: ${computerScore} | Human: ${humanScore}`
                break;
            case 'rock'://human wins
                humanScore++;
                result.textContent = "You win! Paper beats Rock.";
                score.textContent = `Computer: ${computerScore} | Human: ${humanScore}`

                break;
            case 'scissors'://computer wins
                computerScore++;
                result.textContent = "You lose! Scissors cut Paper.";
                score.textContent = `Computer: ${computerScore} | Human: ${humanScore}`

                // console.log("You lose! Scissors cut Paper.");
                break;
            default:
                result.textContent = "OOPS"
                score.textContent = `Computer: ${computerScore} | Human: ${humanScore}`

                // console.log("What happened?")
        }
    } else if (humanChoice.toLowerCase()=='rock'){
        switch(computerChoice.toLowerCase()){
            case 'paper'://human loses
                computerScore++;
                result.textContent = "You lose! Paper beats rock.";
                score.textContent = `Computer: ${computerScore} | Human: ${humanScore}`

                // console.log("You lose! Paper beats rock.");
                break;
            case 'rock': //ties
                result.textContent = "You tie! Rock on Rock.";
                score.textContent = `Computer: ${computerScore} | Human: ${humanScore}`

                // console.log("You tie! Rock on Rock.");
                break;
            case 'scissors'://human wins
                humanScore++;
                result.textContent = "You win! Rock beats scissors.";
                score.textContent = `Computer: ${computerScore} | Human: ${humanScore}`

                // console.log("You win! Rock beats scissors.");
                break;
            default:
                result.textContent = "OOPS"
                score.textContent = `Computer: ${computerScore} | Human: ${humanScore}`

                // console.log("What happened?")
        }
    } else {
        switch(computerChoice.toLowerCase()){
            case 'paper'://human wins
                humanScore++;
                result.textContent = "You win! Scissors beats paper.";
                score.textContent = `Computer: ${computerScore} | Human: ${humanScore}`

                // console.log("You win! Scissors beats paper.");
                break;
            case 'rock'://computer wins
                computerScore++;
                result.textContent = "You lose! Rock beats scissors.";
                score.textContent = `Computer: ${computerScore} | Human: ${humanScore}`

                // console.log("You lose! Rock beats scissors.");
                break;
            case 'scissors'://tie
                result.textContent = "You tie! Scissors on scissors.";
                score.textContent = `Computer: ${computerScore} | Human: ${humanScore}`

                // console.log("You tie! Scissors on scissors.");
                break;
            default:
                result.textContent = "OOPS"
                score.textContent = `Computer: ${computerScore} | Human: ${humanScore}`

                // console.log("What happened?")
        }
    }
    
}

let computer = getComputerChoice();
