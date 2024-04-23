let computerGeneratedNumber = 0;
let minValue = 0;
let maxValue = 100;
let computerGuessNumber = (minValue + maxValue) / 2;
const gameSelection = document.querySelector("#game_selection");
const gameOneDiv = document.getElementById("game1");
const gameTwoDiv = document.getElementById("game2");
const gameOneRestartButton = document.getElementById("restart_button1");
const gameTwoRestartButton = document.getElementById("restart_button2");
const gameTwoMessageDiv = document.getElementById("message2");
const smallerButton = document.getElementById("smaller_button");
const greaterButton = document.getElementById("bigger_button");
const numberFoundButton = document.getElementById("found_button");
const tryButton = document.getElementById("try_button");



function show(element) {
    element.style.display = "";
}

function hide(element) {
    element.style.display = "none";
}

function disable(element) {
    element.disabled = true
}

function newGame() {
    show(gameSelection);
    hide(gameOneDiv);
    hide(gameTwoDiv);
}

function startPlayerGuessGame() {
    return new Promise((resolve, reject) => {
        computerGeneratedNumber = Math.floor(Math.random() * 100) + 1;
        displayGameOne();
        hide(gameOneRestartButton);
        hide(gameSelection);
        resolve();
    });
}

function displayGameOne() {
    show(gameOneDiv);
    hide(gameTwoDiv);
}

function treatPlayerInput() {
    const playerInputElement = document.getElementById("player_input");
    const entryNumber = parseInt(playerInputElement.value);
    const gameOneMessageDiv = document.getElementById("message1");

    if (entryNumber < computerGeneratedNumber) {
        gameOneMessageDiv.innerText = "No, your guessed number is smaller";
    } else if (entryNumber > computerGeneratedNumber) {
        gameOneMessageDiv.innerText = "No, your guessed number is greater";
    } else {
        gameOneMessageDiv.style.color = "#00ff00";
        gameOneMessageDiv.innerText = "Congrats, You made the right guess " + computerGeneratedNumber;
        disable(tryButton);
        show(gameOneRestartButton);
        playerInputElement.value = "";
    }
}

function startComputerGuessGame() {
    return new Promise((resolve, reject) => {
        displayGameTwo();
        hide(gameSelection);
        hide(gameTwoRestartButton);
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
    disable(greaterButton);
    disable(smallerButton);
    disable(numberFoundButton);
    show(gameTwoRestartButton);
}

function main() {
    const chooseGameOneBtn = document.getElementById("start_game1");
    chooseGameOneBtn.addEventListener("click", async () => {
        await startPlayerGuessGame();
    });

    const chooseGameTwoBtn = document.getElementById("start_game2");
    chooseGameTwoBtn.addEventListener("click", async () => {
        await startComputerGuessGame();
    });

    tryButton.addEventListener("click", treatPlayerInput);
    gameOneRestartButton.addEventListener("click", newGame);

    // Game Two functionalities
    smallerButton.addEventListener("click", computerGuess_isSmaller);
    greaterButton.addEventListener("click", computerGuess_isGreater);
    numberFoundButton.addEventListener("click", numberFound);
    gameTwoRestartButton.addEventListener("click", newGame);

    newGame();
}

main();
