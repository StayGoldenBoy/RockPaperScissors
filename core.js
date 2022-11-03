let playerSelection;
let result;
let tiescore = 0;
let playerscore = 0;
let computerscore = 0;


function individualPlay(){
    computerSelection = getComputerChoice();
    playGame (playerSelection, computerSelection);
    roundDescription();
    keepScore();
    updateScore();
}

//initialize game, once parameter used to prevent buttons being added endlessly
const yesPlay = document.querySelector('#yes')
    yesPlay.addEventListener('click', () => {
        letsPlay(); }, {
        once: true
    });

function letsPlay() {

    const playRock = document.createElement("button");
    playRock.id = "playRock";
    playRock.innerText = "ROCK";
    playRock.addEventListener('click',() => {
        playerSelection = "rock";
        individualPlay();
    });

    const playPaper = document.createElement("button");
    playPaper.id = "playPaper";
    playPaper.innerText = "PAPER";
    playPaper.addEventListener('click',() => {
        playerSelection = "paper";
        individualPlay();
     });

    const playScissors = document.createElement("button");
    playScissors.id = "playScissors";
    playScissors.innerText = "SCISSORS";
    playScissors.addEventListener('click',() => {
        playerSelection = "scissors";
        individualPlay();
      });

      const reload = document.createElement('button');
      reload.innerText = "Start Over";
    reload.addEventListener('click', () => {
        location.reload();
        tiescore = 0;
        playerscore = 0;
        computerscore = 0;
        updateScore();
    })

    const container = document.querySelector('#gameDiv');
      container.appendChild(playRock);
      container.appendChild(playPaper);
      container.appendChild(playScissors);
      container.appendChild(reload);
      
    }
//randomized computer selection
function getComputerChoice(){
    let computerChoice = ['rock', 'scissors', 'paper'];
    let randomSelect = computerChoice[Math.floor((Math.random()) * computerChoice.length)];
    console.log("Computer chose " + randomSelect);
    return randomSelect;
    }


// 1 round of RPS.
function playGame (playerSelection, computerSelection){
    const tester = playerSelection + computerSelection;
    if (playerSelection == computerSelection){
    result = "You tied becuase " + computerSelection + " loves " + playerSelection + ".";
    return result;     
        } else {
            switch (tester){
                case "rockpaper": case "scissorsrock": case "paperscissors":
                    result = "You lost because " + computerSelection + " beats " + playerSelection + ".";
                    break;
                case "scissorspaper": case "paperrock": case "rockscissors":
                    result = "You won! because " + playerSelection + " beats " + computerSelection + ".";
                    break;
                default:
                    window.alert("You input an invalid response. The game will start again.");
                    game();
                    break;
        }
        return result;
    } 
}

    //Create score keeping function.
function keepScore(){
    if (playGame(playerSelection, computerSelection).charAt(4) == "t" ){ tiescore = tiescore +1;}
    else if (playGame(playerSelection, computerSelection).charAt(4) == "w") { playerscore = playerscore + 1;}
    else {computerscore = computerscore + 1;}  
        
        if (playerscore > 4){
            const finalResultWin = document.querySelector('#playerWins');
            finalResultWin.textContent = "Parabens! You won! \n To play again hit the 'Start over' button.";
            document.querySelector('#playRock').disabled = true;
            document.querySelector('#playPaper').disabled = true;
            document.querySelector('#playScissors').disabled = true;
        }
        else if (computerscore > 4){
            const finalResultLose = document.querySelector('#playerLost');
            finalResultLose.textContent = "Too bad! You lost! \n To play again hit the 'Start over' button.";
            document.querySelector('#playRock').disabled = true;
            document.querySelector('#playPaper').disabled = true;
            document.querySelector('#playScissors').disabled = true;
        }
            return;}

    

function updateScore(){ 

    const playerChooses = document.querySelector('#playerChose');
    playerChooses.textContent = " " + playerSelection;

    const computerChooses = document.querySelector('#computerChose');
    computerChooses.textContent = " " + computerSelection;
    
    const playerScore = document.querySelector('#playerScore');
    playerScore.textContent = playerscore;

    const computerScore = document.querySelector('#computerScore');
    computerScore.textContent = computerscore;

    const tieScore = document.querySelector('#tiesScore');
    tieScore.textContent = tiescore;
    
}

function roundDescription(){
const roundWinner = document.querySelector('#eachGameResult');
    roundWinner.textContent = result;}