function show(element) {
    element.style.display = "";
}
function hide(element) {
    element.style.display = "none";
}
function new_game() {
    let gameSelection = document.querySelector("#game_selection")
    let gameOneDiv = document.getElementById("game1");
    let gameTwoDiv = document.getElementById("game2");
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
    let gameOneDiv = document.getElementById("game1");
    let gameTwoDiv = document.getElementById("game2");
    show(gameTwoDiv);
    hide(gameOneDiv);
}

function main(){
    let chooseGameOneBtn = document.getElementById("start_game1");
    chooseGameOneBtn.addEventListener("click", displayGameOne);

    let  chooseGameTwoBtn = document.getElementById("start_game2");
    chooseGameTwoBtn.addEventListener("click", displayGameTwo);

    new_game();
}

document.addEventListener("DOMContentLoaded", main);