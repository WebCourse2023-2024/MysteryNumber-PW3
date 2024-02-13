let computerGeneratedNumber = 0;
let gameSelection;
let gameOneDiv;
let gameTwoDiv;
let gameOneRestartButton;
let gameTwoRestartButton;
let minValue = 0;
let maxValue = 100;
let computerGuessNumber = (minValue + maxValue) / 2;
let gameTwoMessageDiv;

document.addEventListener("DOMContentLoaded", () => {
    gameSelection = document.querySelector("#game_selection");
    gameOneDiv = document.getElementById("game1");
    gameTwoDiv = document.getElementById("game2");
    gameOneRestartButton = document.getElementById("restart_button1");
    gameTwoRestartButton = document.getElementById("restart_button2");
    gameTwoMessageDiv = document.getElementById("message2");
});

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

function startPlayerGuessGame() {
    return new Promise((resolve, reject) => {
        computerGeneratedNumber = Math.floor(Math.random() * 100) + 1;
        gameOneRestartButton.style.display = "none";
        displayGameOne();
        hide(gameSelection);
        resolve();
    });
}

function displayGameOne() {
    show(gameOneDiv);
    hide(gameTwoDiv);
}

function treatPlayerInput() {
    let playerInputElement = document.getElementById("player_input");
    let entryNumber = parseInt(playerInputElement.value);
    let gameOneMessageDiv = document.getElementById("message1");

    if (entryNumber < computerGeneratedNumber) {
        gameOneMessageDiv.innerText = "No, your guessed number is smaller";
    } else if (entryNumber > computerGeneratedNumber) {
        gameOneMessageDiv.innerText = "No, your guessed number is greater";
    } else {
        gameOneMessageDiv.style.color = "#00ff00";
        gameOneMessageDiv.innerText = "Congrats, You made the right guess " + computerGeneratedNumber;
        gameOneRestartButton.style.display = "";
        playerInputElement.value = "";
    }
}

function startComputerGuessGame() {
    return new Promise((resolve, reject) => {
        displayGameTwo();
        hide(gameSelection);
        gameTwoRestartButton.style.display = "none";
        gameTwoMessageDiv.innerText = "" + computerGuessNumber;
        gameTwoMessageDiv.style.color = "white";
        resolve();
    });
}

function displayGameTwo() {
    show(gameTwoDiv);
    hide(gameOneDiv);
}

function computerGuess_isSmaller() {
    minValue = computerGuessNumber;
    computerGuessNumber = Math.floor((minValue + maxValue) / 2);
    gameTwoMessageDiv.innerText = "" + computerGuessNumber;
}

function computerGuess_isGreater() {
    maxValue = computerGuessNumber;
    computerGuessNumber = Math.floor((minValue + maxValue) / 2);
    gameTwoMessageDiv.innerText = "" + computerGuessNumber;
}

function numberFound() {
    gameTwoMessageDiv.style.color = "#00ff00";
    gameTwoMessageDiv.innerText = "Congrats, You found " + computerGuessNumber;
    gameTwoRestartButton.style.display = "";
}

function main() {
    let chooseGameOneBtn = document.getElementById("start_game1");
    chooseGameOneBtn.addEventListener("click", async () => {
        await startPlayerGuessGame();
    });

    let chooseGameTwoBtn = document.getElementById("start_game2");
    chooseGameTwoBtn.addEventListener("click", async () => {
        await startComputerGuessGame();
    });

    let tryButton = document.getElementById("try_button");
    tryButton.addEventListener("click", treatPlayerInput);
    gameOneRestartButton.addEventListener("click", newGame);

    // Game Two functionalities
    let smallerButton = document.getElementById("smaller_button");
    smallerButton.addEventListener("click", computerGuess_isSmaller);

    let greaterButton = document.getElementById("bigger_button");
    greaterButton.addEventListener("click", computerGuess_isGreater);

    let numberFoundButton = document.getElementById("found_button");
    numberFoundButton.addEventListener("click", numberFound);
    gameTwoRestartButton.addEventListener("click", newGame);

    newGame();
}

document.addEventListener("DOMContentLoaded", main);
