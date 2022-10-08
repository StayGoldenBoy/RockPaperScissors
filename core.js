function getComputerChoice(){
    let computerChoice = ['Rock', 'Scissors', 'Paper'];
    let randomSelect = computerChoice[Math.floor((Math.random()) * computerChoice.length)];
    randomSelect = randomSelect.toLowerCase();
    console.log("Computer chose " + randomSelect);
    return randomSelect;
    }

    //creating test funciton for random playerselection
    //created solely to speed up the process of testing all outcomes.
//function getPlayerChoice(){
    //let computerChoice = ['Rock', 'Scissors', 'Paper'];
    //let randomPlayerSelect = computerChoice[Math.floor((Math.random()) * computerChoice.length)];
    //randomPlayerSelect = randomPlayerSelect.toLowerCase();
   // console.log("Player chose " + randomPlayerSelect);
   // return randomPlayerSelect;
   //}

    // Time to create function that plays 1 round of RPS.
function playGame (playerSelection, computerSelection){
    const tester = playerSelection + computerSelection;
    let result;
        if (playerSelection == computerSelection){
        result = "You tied becuase " + computerSelection + " loves " + playerSelection + ".";
        return result;
                
            } else {
                switch (tester){
                    case "rockpaper": 
                    case "scissorsrock":
                    case "paperscissors":
                        result = "You lost becuase " + computerSelection + " beats " + playerSelection + ".";
                        break;
                        
                    case "scissorspaper":
                    case "paperrock":
                    case "rockscissors":
                        result = "You won! becuase " + playerSelection + " beats " + computerSelection + ".";
                        break;
                    default:
                        window.alert("You input an invalid response. The game will start again.");
                        game();
                        break;
        }
        return result;
    } 
}


function game(){
    let tiescore = 0;
    let playerscore = 0;
    let computerscore = 0;

    for (let i = 0; i < 5; i++) {
    let playerPrompt = window.prompt("Choose: Rock, Paper, or Scissors" , ":)");
    playerSelection = playerPrompt.toLowerCase();
    console.log("Player chose " + playerSelection);
    const computerSelection = getComputerChoice();
    playGame(playerSelection, computerSelection);
    console.log(playGame(playerSelection, computerSelection));
    console.log("");
    if (playGame(playerSelection, computerSelection).charAt(4) == "t" ){ tiescore = tiescore +1;}
    else if (playGame(playerSelection, computerSelection).charAt(4) == "w") { playerscore = playerscore + 1;}
    else (playGame(playerSelection, computerSelection).charAt(4) == "l"); {computerscore = computerscore + 1;}     }

    const finalScore = ( playerscore > computerscore ) ? "Player Wins!"
                    : ( computerscore > playerscore) ? "Computer Wins!"
                    : "Ultimate tie!";
        return "Final Score:\nWins:" + playerscore + " Losses:" + computerscore + " Ties:" + tiescore + "\n" + finalScore;
   
}


console.log(game());

playAgain = window.prompt("Look at your results. Do you want to play again?", "Yes");
const doItAgain = (playAgain == "Yes") ? game() : window.alert("Tchau");
