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

function main(){
    new_game();
}

document.addEventListener("DOMContentLoaded", main);