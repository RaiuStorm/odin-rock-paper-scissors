let playerScore = 0, computerScore = 0;
function computerPick(){
    let picks = ["ROCK","PAPER","SCISSORS"];
    return picks[Math.floor(Math.random() * picks.length)];
}
function playRound(playerPick, computerPick){
    if (playerPick == "ROCK"){
        switch(computerPick){
            case "ROCK":
                return "Computer picked ROCK \n===It is a tie!";
                break;
            case "PAPER":
                computerScore++;
                return `Computer picked PAPER\n---The computer won!\nPlayer: ${playerScore} Computer: ${computerScore}`;
                break;
            case "SCISSORS":
                playerScore++;
                return `Computer picked PAPER\n+++You win!\nPlayer: ${playerScore} Computer: ${computerScore}`;
                break;
        }
    }
    else if (playerPick == "PAPER"){
        switch(computerPick){
            case "ROCK":
                playerScore++;
                return `Computer picked PAPER\n+++You win!\nPlayer: ${playerScore} Computer: ${computerScore}`;
                break;
            case "PAPER":
                return "Computer picked PAPER\n===It is a tie!";
                break;
            case "SCISSORS":
                computerScore++;
                return `Computer picked PAPER\n---The computer won!\nPlayer: ${playerScore} Computer: ${computerScore}`;
                break;
        }
    }
    else if (playerPick == "SCISSORS"){
        switch(computerPick){
            case "ROCK":
                computerScore++;
                return `Computer picked PAPER\n---The computer won!\nPlayer: ${playerScore} Computer: ${computerScore}`;
                break;
            case "PAPER":
                playerScore++;
                return `Computer picked PAPER\n+++You win!\nPlayer: ${playerScore} Computer: ${computerScore}`;
                break;
            case "SCISSORS":
                return "Computer picked SCISSORS\n===It is a tie!";
                break;
        }
    }
    else{
        return "You need to choose Rock, Paper or Scissors!!!!";
    }
}
function game(){
    while (playerScore != 5 || computerScore != 5){
        let choice = prompt("Rock, Paper or Scissors?").toUpperCase();
        console.log(playRound(choice, computerPick()));
        if (playerScore == 5){
            console.log("[+++]Player won!\n[+++]\n[+++]");
        } else if (computerScore == 5){
            console.log("[---]Computer won!\n[---]\n[---]");
        }
    }
}
game();