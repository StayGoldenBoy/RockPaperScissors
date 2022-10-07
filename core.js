//Since there isn't a better way to select a random item from
//an array, we will use the Math.random

//First lets create an array of our strings
let computerChoice = ['Rock', 'Scissors', 'Paper'];
let randomSelect;
//Now we define getComputerChoice as a function that pulls
//from the array

function getComputerChoice(){
    let randomSelect = computerChoice[Math.floor((Math.random()) * computerChoice.length)];
    randomSelect = randomSelect.toLowerCase();
    console.log(randomSelect);
    return randomSelect;
    }

    //creating test funciton for randome playerselection
function getPlayerChoice(){
    let randomPlayerSelect = computerChoice[Math.floor((Math.random()) * computerChoice.length)];
    randomPlayerSelect = randomPlayerSelect.toLowerCase();
    console.log(randomPlayerSelect);
    return randomPlayerSelect;
    }

    // Time to create function that plays 1 round of RPS.
function playGame (playerSelection, computerSelection){
    const tester = playerSelection + computerSelection;
        if (playerSelection == computerSelection){
        console.log("You tied");
        return "You tied";
        
    } else {
        switch (tester){
            case "rockpaper":  
            case "scissorsrock":
            case "paperscissors":
                console.log("You lost becuase " + computerSelection + " beats " + playerSelection);
                return "You lost becuase " + computerSelection + " beats " + playerSelection;
                break;
            case "scissorspaper":
            case "paperrock":
            case "rockscissors":
                console.log("You won becuase " + playerSelection + " beats " + computerSelection);
                return "You won becuase " + playerSelection + " beats " + computerSelection;
                break;
            default:
                console.log("something bad happened");
                break;
        }
    }
}
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playGame(playerSelection, computerSelection));