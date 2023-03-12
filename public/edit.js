window.onload() = generatePage();

function generatePage() {
    var type = "single elim";
    var teamNum = 64;
    var isSeeded = true;
    var isScored = true;
    var is1 = false;
    var count = 1;
    while (is1 == false) {
        teamNum /= 2;
        if (teamNum == 1) {
            is1 = true;
        }
        count++;
    }
    var createPage = document.createElement("div")
    createPage.add()
    var rowCreation = document.getElementById("form");

    rowCreation.classList.add("row-cols-md-4");
}

function changeElemModal(team1, score1, team2, score2) {
    var changeTo = [team1, score1, team2, score2];
    var collection = document.getElementById('r1 g1');
    for (var i=0; i<4; i++) {
        collection[i].innerHTML = changeTo[i].innerHTML;
    }
}