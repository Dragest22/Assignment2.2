function updateText(){
    document.getElementById("heading").innerHTML = "JavaScript is awesome!";
}

const choices = ["Rock", "Paper", "Scissors"];
let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You win!";
        userScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }

    document.getElementById("result").innerText = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
    document.getElementById("score").innerText = `User: ${userScore} - Computer: ${computerScore}`;
}