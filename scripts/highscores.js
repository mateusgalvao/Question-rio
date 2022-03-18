let highscoresList = document.querySelector("#HSlist");
let highScoreArray = JSON.parse(localStorage.getItem("highScoreArray")) || [];
let clearBth = document.getElementById("clearBtn");

let addUser = JSON.parse(localStorage.getItem("newHighScoreAdded"));

inicio();

if (addUser) {
    saveArray(addUser);
    listItem();
    console.log("novo usuário é " + addUser.userName);
    localStorage.removeItem("newHighScoreAdded");
} else {
    listItem();
}

function saveArray(scoreEntry) {
    highScoreArray.push(scoreEntry);
    highScoreArray.sort(function (a, b) { return b.newScore - a.newScore });
    console.log(highScoreArray);
    localStorage.setItem("highScoreArray", JSON.stringify(highScoreArray));
}

function listItem() {
    for (i = 0; i < highScoreArray.length; i++) {
        let newlistItem = document.createElement("li");
        newlistItem.appendChild(document.createTextNode(`${highScoreArray[i].userName} --- ${highScoreArray[i].newScore}` + " Pontos"));
        highscoresList.appendChild(newlistItem);
    }
}

function inicio() {
    clearBth.addEventListener("click", function (e) {
        localStorage.clear();
        highScoreArray = [];
        highscoresList.textContent = "";
    });

}






