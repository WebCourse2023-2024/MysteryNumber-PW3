let computerNumber = 0;
let gameSelection;
let gameOneDiv;
let gameTwoDiv;

document.addEventListener("DOMContentLoaded", () =>{
    gameSelection = document.querySelector("#game_selection");
    gameOneDiv = document.getElementById("game1");
    gameTwoDiv = document.getElementById("game2");
})

function show(element) {
    element.style.display = "";
}
function hide(element) {
    element.style.display = "none";
}
function new_game() {
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
    let restartButton = document.getElementById("restart_button1");
    restartButton.style.display = "none";
    displayGameOne();
    hide(gameSelection);
}

function main(){
    let chooseGameOneBtn = document.getElementById("start_game1");
    chooseGameOneBtn.addEventListener("click", startPlayerGuessGame);

    let  chooseGameTwoBtn = document.getElementById("start_game2");
    chooseGameTwoBtn.addEventListener("click", displayGameTwo);

    new_game();
}

document.addEventListener("DOMContentLoaded", main);