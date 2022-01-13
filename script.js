// create a function that returns a random result of Rock, Paper, or Scissors
function computerPlay() {
    // random integer between 0 and 2
    let random = Math.floor(Math.random() * 3);
    if (random == 0) {
        return "Rock";
    } else if (random == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// game of rock paper scissors, player vs computer
function rpc(playerSelection, computerSelection) {
    // make sure input is all Capitalized, with all lowercase after
    playerSelection = playerSelection[0].toUpperCase() 
    + playerSelection.slice(1).toLowerCase();

    // when player and computer tie
    if (playerSelection == computerSelection) {
        let tieLog = "Tie! Both gave " + playerSelection;
        if (playerSelection == "Rock" || playerSelection == "Paper") {
            tieLog += 's';
        }
        return tieLog;
    }
    
    let answerLog = "";
    
    // check first, cases that the player loses. otherwise, player wins
    if ((playerSelection == "Rock" && computerSelection == "Paper") || 
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")) {
        answerLog = "You lose! " + computerSelection + " beats " + playerSelection;
    } else {
        answerLog = "You win! " + playerSelection + " beats " + computerSelection;
    }

    return answerLog;
}

// game of rpc, 5 rounds. final score printed at the end
function game() {
    // player, computer score keeper
    let playerScore = 0, computerScore = 0;

    // loop for 5 games
    for (let i = 1; i < 6; i++) {
        // prompt user to give rock, paper or scissors
        let playerSelection = prompt("Rock, Paper, or Scissors?");

        // individual game result
        let answerLog = "Game " + i + " result: ";
        answerLog += rpc(playerSelection, computerPlay());

        // increment player or computer score based on the result
        if (answerLog.includes("You win")) playerScore++;
        else if (answerLog.includes("You lose")) computerScore++;
        
        // log on console the individual game result
        console.log(answerLog);
    }

    // final game result
    let finalAnswerLog = "Final result: ";
    if (playerScore > computerScore) finalAnswerLog += "You win! ";
    else if (playerScore < computerScore) finalAnswerLog += "You lose! ";
    else finalAnswerLog += "A tie! ";

    // final game score
    finalAnswerLog += "Game score of Player: " + playerScore + ", Computer: " + computerScore;
    console.log(finalAnswerLog);
}

game();