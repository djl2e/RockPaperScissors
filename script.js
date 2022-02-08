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
function rps(playerSelection, computerSelection) {

    // when player and computer tie
    if (playerSelection == computerSelection) return "Tie!";

    // check first, cases that the player loses. otherwise, player wins
    if ((playerSelection == "Rock" && computerSelection == "Paper") || 
    (playerSelection == "Paper" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Rock")) {
        return "You lose!";
    } else {
        return"You win!";
    }
}

// game of rps, final score printed at the end
function game() {
    let playerScore = 0, computerScore = 0;
    let playerSelection = "", computerSelection = "";
    let winner = "";

    // score and description display
    const userScoreDisplay = document.querySelector(".user .score");
    const computerScoreDisplay = document.querySelector(".computer .score");
    const description = document.querySelector(".description");

    // user and computer choice display
    const userChoice = document.querySelector("#user-choice");
    const computerChoice = document.querySelector("#computer-choice");

    // user clicking a button assigns the selection to the variable playerSelection
    const btns = document.querySelectorAll("button");
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            playerSelection = btn.id;
            computerSelection = computerPlay();

            // change player selection display image
            if (playerSelection == "Rock") {
                userChoice.src = "./img/human-rock.jpg";
            } else if (playerSelection == "Paper") {
                userChoice.src = "./img/human-paper.jpg";
            } else {
                userChoice.src = "./img/human-scissors.jpg";
            }

            // change computer selection display image
            if (computerSelection == "Rock") {
                computerChoice.src = "./img/rock-hand.png";
            } else if (computerSelection == "Paper") {
                computerChoice.src = "./img/paper-hand.png";
            } else {
                computerChoice.src = "./img/scissors-hand.png";
            }

            const answerLog = rps(playerSelection, computerSelection);

            // increment player or computer score based on the result
            if (answerLog.includes("You win")) playerScore++;
            else if (answerLog.includes("You lose")) computerScore++;
            
            // change score display
            userScoreDisplay.textContent = playerScore;
            computerScoreDisplay.textContent = computerScore;
            description.textContent = answerLog;

            if (playerScore == 5) win();
            
            if (computerScore == 5) loss();
        });
    });
}

function win() {
    replay("YOU WIN!");  
}

function loss() {
    replay("YOU LOSE!");
}


function replay(finalResult) {
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
    document.querySelector("#final-result").textContent = finalResult;
    const replayBtn = document.querySelector("#modal-button");
    replayBtn.addEventListener('click', () => location.reload());
}

game();
