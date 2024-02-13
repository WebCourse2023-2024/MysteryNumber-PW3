let computerNumber = 0;
let gameSelection;
let gameOneDiv;
let gameTwoDiv;
let gameOneRestartButton;
let gameTwoRestartButton;
let minValue = 0;
let maxValue = 100;
let computerGuessNumber = (minValue + maxValue) / 2;
let gameTwoMessageDiv;

document.addEventListener("DOMContentLoaded", () =>{
    gameSelection = document.querySelector("#game_selection");
    gameOneDiv = document.getElementById("game1");
    gameTwoDiv = document.getElementById("game2");
    gameOneRestartButton = document.getElementById("restart_button1");
    gameTwoRestartButton = document.getElementById("restart_button2");
    gameTwoMessageDiv = document.getElementById("message2");
})

function show(element) {
    element.style.display = "";
}
function hide(element) {
    element.style.display = "none";
}
function newGame() {
    show(gameSelection);
    hide(gameOneDiv);
    hide(gameTwoDiv);
}

function displayGameOne(){
    let gameOneDiv = document.getElementById("game1");
    let gameTwoDiv = document.getElementById("game2");
    show(gameOneDiv);
    hide(gameTwoDiv);
}

function displayGameTwo(){
    show(gameTwoDiv);
    hide(gameOneDiv);
}

function startPlayerGuessGame(){
    computerNumber = Math.floor(Math.random() * 100) + 1;
    gameOneRestartButton.style.display = "none";
    displayGameOne();
    hide(gameSelection);
}

function treatPlayerInput(){
    let playerInputElement = document.getElementById("player_input");
    let entryNumber = parseInt(playerInputElement.value);
    let messageDiv = document.getElementById("message1");

    if (entryNumber < computerNumber){
        messageDiv.innerText = "Non c'est plus grand";
    }
    else if (entryNumber > computerNumber){
        messageDiv.innerText = "Non c'est plus petit";
    }
    else {
        messageDiv.innerText = "Bravo, vous avez trouvé " + computerNumber;
        gameOneRestartButton.style.display = "";
        playerInputElement.value = "";
    }

}

function startComputerGuessGame(){
    displayGameTwo();
    hide(gameSelection);
    gameTwoRestartButton.style.display = "none";
    gameTwoMessageDiv.innerText = "" + computerGuessNumber;
}

function computerGuess_isSmaller(){
    minValue = computerGuessNumber;
    computerGuessNumber = (minValue + maxValue) / 2;
    gameTwoMessageDiv.innerText = "" + computerGuessNumber;
}

function computerGuess_isGreater(){
    maxValue = computerNumber;
    computerNumber = (minValue + maxValue) / 2;
    gameTwoMessageDiv.innerText = "" + computerGuessNumber;
}


function main(){
    let chooseGameOneBtn = document.getElementById("start_game1");
    chooseGameOneBtn.addEventListener("click", startPlayerGuessGame);

    let  chooseGameTwoBtn = document.getElementById("start_game2");
    chooseGameTwoBtn.addEventListener("click", startComputerGuessGame);

    let tryButton = document.getElementById("try_button");
    tryButton.addEventListener("click", treatPlayerInput);
    gameOneRestartButton.addEventListener("click", newGame);

    //game two functionalities
    let smallerButton = document.getElementById("smaller_button");
    smallerButton.addEventListener("click", computerGuess_isSmaller)

    let greaterButton = document.getElementById("bigger_button");
    greaterButton.addEventListener("click", computerGuess_isGreater)

    newGame();
}

document.addEventListener("DOMContentLoaded", main);