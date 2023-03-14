window.onload = generatePage();

function generatePage() {
    var title = "See Work"
    var type = "single elim";
    var teamNumCount = 4;
    var teamNumEval = 4;
    var teamNum = 4;
    var isSeeded = "randomizedSeed";
    // var isSeeded = "seeded";
    var isScored = true;
    var is1 = false;
    var count = 1;
    var winners = [];
    if (type === "single elim") {
        while (is1 === false) {
            teamNumCount /= 2;
            if (teamNumCount === 1) {
                is1 = true;
            }
            count++;
        }
    }
    else if (type === "double elim") {
        while (is1 === false) {
            if (teamNumCount <= 4) {
                teamNumCount -= 1
            }
            else {
                teamNumCount -= teamNum / 4
            }
            if (teamNumCount === 1) {
                is1 = true;
            }
            count++;
        }
    }
    else if (type === "round robin") {
        count = teamNumCount;
    }
    else if (type === "group") {
        count = 3;
        teamNumCount / 2;
        count++;
        while (is1 === false) {
            teamNumCount /= 2;
            if (teamNumCount === 1) {
                is1 = true;
            }
            count++;
        }
    }
    var titleGet = document.getElementById("title");
    titleGet.innerHTML = `Edit - ${title}`
    if (type === "single elim") {
        var cardCreation = document.createElement("div")
        cardCreation.classList.add("cardContainer")
        document.getElementsByClassName('mainContainerForEdit')[0].appendChild(cardCreation);
        var rowCreation = document.createElement("div")
        rowCreation.classList.add(`row`)
        rowCreation.classList.add(`row-cols-1`)
        rowCreation.id = "roundRow"
        cardCreation.appendChild(rowCreation)
        for (var i = 0; i < count; i++) {
            var colCreation = document.createElement("div")
            colCreation.classList.add(`col`)
            colCreation.classList.add(`mb-4`)
            colCreation.id = `${i}`
            colCreation.style.width = "auto";
            rowCreation.appendChild(colCreation)
            var deck = document.createElement("div")
            deck.classList.add("card-deck")
            colCreation.appendChild(deck)
            if (i === count - 1) {
                var winner = document.createElement("h2")
                winner.classList.add("p-3")
                winner.classList.add("border-top")
                winner.classList.add("border-bottom")
                winner.innerHTML = "Winner"
                deck.appendChild(winner)
                var winCard = document.createElement("div")
                winCard.classList.add("card")
                winCard.classList.add("p-2")
                winCard.classList.add("mb-3")
                winCard.classList.add("text-center")
                deck.appendChild(winCard)
                var winRow = document.createElement("div")
                winRow.classList.add("row")
                winRow.classList.add("p-2")
                winRow.classList.add("m-2")
                winCard.appendChild(winRow)
                var winCol = document.createElement("div")
                winCol.classList.add("col")
                winCol.classList.add("p-2")
                winCol.classList.add("m-2")
                winCol.classList.add("d-flex")
                winCol.classList.add("flex-column")
                winCol.classList.add("justify-content-center")
                winCol.classList.add("align-items-center")
                winRow.appendChild(winCol)
                var winTeam = document.createElement("h1")
                winTeam.classList.add("small-view")
                winTeam.classList.add(`r${i}`)
                winTeam.innerHTML = `Team`
                winCol.appendChild(winTeam)
                var winBut = document.createElement("button")
                winBut.type = "button"
                winBut.classList.add("btn")
                winBut.classList.add("btn-primary")
                winBut.classList.add("p-3")
                winBut.setAttribute("onclick", "window.print()")
                winBut.innerHTML = "Share"
                winCol.appendChild(winBut)
            }
            else {
                var round = document.createElement("h2")
                round.classList.add("p-3")
                round.classList.add("border-top")
                round.classList.add("border-bottom")
                round.innerHTML = `Round ${i + 1}`
                deck.appendChild(round)
                for (var j = 0; j < teamNum / 2; j++) {
                    var card = document.createElement("div")
                    card.classList.add("card")
                    card.classList.add("p-2")
                    card.classList.add("mb-3")
                    card.classList.add("text-center")
                    deck.appendChild(card)
                    var cardFormat = document.createElement("div")
                    cardFormat.classList.add("row")
                    cardFormat.classList.add("p-2")
                    cardFormat.classList.add("m-2")
                    card.appendChild(cardFormat)
                    for (var k = 0; k < 4; k++) {
                        var teamCol = document.createElement("div")
                        teamCol.classList.add("col")
                        teamCol.classList.add("m-2")
                        cardFormat.appendChild(teamCol)
                        if (i === 0) {
                            var teamName = document.createElement("input")
                            teamName.type = "text"
                            teamName.placeholder = "Team"
                            teamName.classList.add(`r${i}`)
                            teamName.classList.add(`g${j}`)
                        }
                        else {
                            var teamName = document.createElement("h1")
                            teamName.classList.add("small-view")
                            teamName.classList.add(`r${i}`)
                            teamName.classList.add(`g${j}`)
                            teamName.innerHTML = "Team"
                        }
                        // var teamName = document.createElement("h1")
                        // teamName.classList.add("small-view")
                        // teamName.classList.add(`r${i}`)
                        // teamName.innerHTML = `Team`
                        teamCol.appendChild(teamName)
                        k++;
                        if (isScored === true) {
                            var pageBreak = document.createElement("br")
                            teamCol.appendChild(pageBreak)
                            var pageBreak2 = document.createElement("br")
                            teamCol.appendChild(pageBreak2)
                            var score = document.createElement("input")
                            score.classList.add(`r${i}`)
                            score.classList.add(`g${j}`)
                            score.classList.add(`a${k}`)
                            score.placeholder = "Score"
                            teamCol.appendChild(score)
                        }
                        else {
                            if (k === 3) {
                                var pageBreak = document.createElement("br")
                                teamCol.appendChild(pageBreak)
                                var pageBreak2 = document.createElement("br")
                                teamCol.appendChild(pageBreak2)
                                var winnerLabel = document.createElement("label")
                                winnerLabel.innerHTML = "Select a Winner:"
                                teamCol.appendChild(winnerLabel)
                                var winnerDropdown = document.createElement("select")
                                var team1 = document.createElement("option")
                                team1.value = "team1"
                                team1.innerHTML = "Left Team"
                                winnerDropdown.appendChild(team1)
                                var team2 = document.createElement("option")
                                team2.innerHTML = "Right Team"
                                winnerDropdown.appendChild(team2)
                                teamCol.appendChild(winnerDropdown)
                            }
                        }
                    }
                }
                teamNum = teamNum / 2;
            }
            if (i !== count - 1) {
                // make button here to call a function to evaluate column scores
                // change team names based on winners
                var columnSubmit = document.createElement("button")
                columnSubmit.type = "button"
                columnSubmit.classList.add("btn")
                columnSubmit.classList.add("btn-primary")
                columnSubmit.classList.add("p-3")
                columnSubmit.setAttribute("onclick", `rerenderPage(${i},${teamNumEval/2},'teamNumEval')`)
                columnSubmit.innerHTML = "Submit Round"
                deck.appendChild(columnSubmit)
            }
        }
    }
    else if (type === "double elim") {
        var cardCreation = document.createElement("div")
        cardCreation.classList.add("cardContainer")
        document.getElementsByClassName('mainContainerForEdit')[0].appendChild(cardCreation);
        var rowCreation = document.createElement("div")
        rowCreation.classList.add(`row`)
        rowCreation.classList.add(`row-cols-1`)
        rowCreation.id = "roundRow"
        cardCreation.appendChild(rowCreation)
        for (var i = 0; i < count; i++) {
            var colCreation = document.createElement("div")
            colCreation.classList.add(`col`)
            colCreation.classList.add(`mb-4`)
            colCreation.id = `${i}`
            colCreation.style.width = "auto";
            rowCreation.appendChild(colCreation)
            var deck = document.createElement("div")
            deck.classList.add("card-deck")
            colCreation.appendChild(deck)
            if (i === count - 1) {
                var winner = document.createElement("h2")
                winner.classList.add("p-3")
                winner.classList.add("border-top")
                winner.classList.add("border-bottom")
                winner.innerHTML = "Winner"
                deck.appendChild(winner)
                var winCard = document.createElement("div")
                winCard.classList.add("card")
                winCard.classList.add("p-2")
                winCard.classList.add("mb-3")
                winCard.classList.add("text-center")
                deck.appendChild(winCard)
                var winRow = document.createElement("div")
                winRow.classList.add("row")
                winRow.classList.add("p-2")
                winRow.classList.add("m-2")
                winCard.appendChild(winRow)
                var winCol = document.createElement("div")
                winCol.classList.add("col")
                winCol.classList.add("p-2")
                winCol.classList.add("m-2")
                winCol.classList.add("d-flex")
                winCol.classList.add("flex-column")
                winCol.classList.add("justify-content-center")
                winCol.classList.add("align-items-center")
                winRow.appendChild(winCol)
                var winTeam = document.createElement("h1")
                winTeam.classList.add("small-view")
                winTeam.classList.add(`r${i}`)
                winTeam.innerHTML = `Team`
                winCol.appendChild(winTeam)
                var winBut = document.createElement("button")
                winBut.type = "button"
                winBut.classList.add("btn")
                winBut.classList.add("btn-primary")
                winBut.classList.add("p-3")
                winBut.setAttribute("onclick", "window.print()")
                winBut.innerHTML = "Share"
                winCol.appendChild(winBut)
            }
            else {
                var round = document.createElement("h2")
                round.classList.add("p-3")
                round.classList.add("border-top")
                round.classList.add("border-bottom")
                round.innerHTML = `Round ${i + 1}`
                deck.appendChild(round)
                for (var j = 0; j < teamNum / 2; j++) {
                    var card = document.createElement("div")
                    card.classList.add("card p-2 mb-3 text-center")
                    deck.appendChild(card)
                    var cardFormat = document.createElement("div")
                    cardFormat.classList.add("row p-2 m-2")
                    card.appendChild(cardFormat)
                    for (var k = 0; k < 4; k++) {
                        var teamCol = document.createElement("div")
                        teamCol.classList.add("col m-2")
                        cardFormat.appendChild(teamCol)
                        var teamName = document.createElement("h1")
                        teamName.classList.add("small-view")
                        teamName.id = `r${i} g${j} a${k}`
                        teamName.innerHTML = `Team`
                        teamCol.appendChild(teamName)
                        if (isScored === true) {
                            k++;
                            var score = document.createElement("p")
                            score.classList.add("bigger-view")
                            score.id = `r${i} g${j} a${k}`
                            score.innerHTML = "Score"
                            teamCol.appendChild(score)
                        }
                    }
                    var butCol = document.createElement("div")
                    butCol.classList.add("col m-2 p-2 d-flex flex-column justify-content-center align-items-center")
                    cardFormat.appendChild(butCol)
                    var but = document.createElement("button")
                    but.type = "button"
                    but.classList.add("btn btn-primary p-3")
                    but.dataset.bsToggle = "modal"
                    but.dataset.bsTarget = "#exampleModal"
                    but.innerHTML = "Open"
                    butCol.appendChild(but)
                }
                if (i === 0) {
                    for (var l = 0; l < team / 2; l++) {
                        var card = document.createElement("div")
                        card.classList.add("card p-2 mb-3 text-center")
                        deck.appendChild(card)
                        var cardFormat = document.createElement("div")
                        cardFormat.classList.add("row p-2 m-2")
                        card.appendChild(cardFormat)
                        for (var k = 0; k < 4; k++) {
                            var teamCol = document.createElement("div")
                            teamCol.classList.add("col m-2")
                            cardFormat.appendChild(teamCol)
                            var teamName = document.createElement("h1")
                            teamName.classList.add("small-view")
                            teamName.id = `r${i} g${j} a${k}`
                            teamName.innerHTML = `L Team`
                            teamCol.appendChild(teamName)
                            if (isScored === true) {
                                k++;
                                var score = document.createElement("p")
                                score.classList.add("bigger-view")
                                score.id = `r${i} g${j} a${k}`
                                score.innerHTML = "Score"
                                teamCol.appendChild(score)
                            }
                        }
                        var butCol = document.createElement("div")
                        butCol.classList.add("col m-2 p-2 d-flex flex-column justify-content-center align-items-center")
                        cardFormat.appendChild(butCol)
                        var but = document.createElement("button")
                        but.type = "button"
                        but.classList.add("btn btn-primary p-3")
                        but.dataset.bsToggle = "modal"
                        but.dataset.bsTarget = "#exampleModal"
                        but.innerHTML = "Open"
                        butCol.appendChild(but)
                    }
                }
                else {
                    for (var l = 0; l < team; l++) {
                        var card = document.createElement("div")
                        card.classList.add("card p-2 mb-3 text-center")
                        deck.appendChild(card)
                        var cardFormat = document.createElement("div")
                        cardFormat.classList.add("row p-2 m-2")
                        card.appendChild(cardFormat)
                        for (var k = 0; k < 4; k++) {
                            var teamCol = document.createElement("div")
                            teamCol.classList.add("col m-2")
                            cardFormat.appendChild(teamCol)
                            var teamName = document.createElement("h1")
                            teamName.classList.add("small-view")
                            teamName.id = `r${i} g${j} a${k}`
                            teamName.innerHTML = `Team`
                            teamCol.appeadChild()
                            if (isScored === true) {
                                k++;
                                var score = document.createElement("p")
                                score.classList.add("bigger-view")
                                score.id = `r${i} g${j} a${k}`
                                score.innerHTML = "Score"
                            }
                        }
                    }
                }
                if (teamNum <= 4) {
                    teamNum -= 1
                }
                else {
                    teamNum -= teamNum / 4
                }
            }
        }
    }
    else if (type === "round robin") {
        var cardCreation = document.createElement("div")
        cardCreation.classList.add("cardContainer")
        document.getElementsByClassName('mainContainerForEdit')[0].appendChild(cardCreation);
        var rowCreation = document.createElement("div")
        rowCreation.classList.add(`row`)
        rowCreation.classList.add(`row-cols-1`)
        rowCreation.id = "roundRow"
        cardCreation.appendChild(rowCreation)
        for (var i = 0; i < count; i++) {
            var colCreation = document.createElement("div")
            colCreation.classList.add(`col`)
            colCreation.classList.add(`mb-4`)
            colCreation.id = `${i}`
            colCreation.style.width = "auto";
            rowCreation.appendChild(colCreation)
            var deck = document.createElement("div")
            deck.classList.add("card-deck")
            colCreation.appendChild(deck)
            if (i === count - 1) {
                var winner = document.createElement("h2")
                winner.classList.add("p-3")
                winner.classList.add("border-top")
                winner.classList.add("border-bottom")
                winner.innerHTML = "Winner"
                deck.appendChild(winner)
                var winCard = document.createElement("div")
                winCard.classList.add("card")
                winCard.classList.add("p-2")
                winCard.classList.add("mb-3")
                winCard.classList.add("text-center")
                deck.appendChild(winCard)
                var winRow = document.createElement("div")
                winRow.classList.add("row")
                winRow.classList.add("p-2")
                winRow.classList.add("m-2")
                winCard.appendChild(winRow)
                var winCol = document.createElement("div")
                winCol.classList.add("col")
                winCol.classList.add("p-2")
                winCol.classList.add("m-2")
                winCol.classList.add("d-flex")
                winCol.classList.add("flex-column")
                winCol.classList.add("justify-content-center")
                winCol.classList.add("align-items-center")
                winRow.appendChild(winCol)
                var winTeam = document.createElement("h1")
                winTeam.classList.add("small-view")
                winTeam.classList.add(`r${i}`)
                winTeam.innerHTML = `Team`
                winCol.appendChild(winTeam)
                var winBut = document.createElement("button")
                winBut.type = "button"
                winBut.classList.add("btn")
                winBut.classList.add("btn-primary")
                winBut.classList.add("p-3")
                winBut.setAttribute("onclick", "window.print()")
                winBut.innerHTML = "Share"
                winCol.appendChild(winBut)
            }
            else {
                var round = document.createElement("h2")
                round.classList.add("p-3")
                round.classList.add("border-top")
                round.classList.add("border-bottom")
                round.innerHTML = `Round ${i + 1}`
                deck.appendChild(round)
                for (var j = 0; j < teamNum - 1; j++) {
                    var card = document.createElement("div")
                    card.classList.add("card p-2 mb-3 text-center")
                    deck.appendChild(card)
                    var cardFormat = document.createElement("div")
                    cardFormat.classList.add("row p-2 m-2")
                    card.appendChild(cardFormat)
                    for (var k = 0; k < 4; k++) {
                        var teamCol = document.createElement("div")
                        teamCol.classList.add("col m-2")
                        var teamName = document.createElement("h1")
                        teamName.classList.add("small-view")
                        teamName.id = `r${i} g${j} a${k}`
                        teamName.innerHTML = `Team`
                        if (isScored === true) {
                            k++;
                            var score = document.createElement("p")
                            score.classList.add("bigger-view")
                            score.id = `r${i} g${j} a${k}`
                            score.innerHTML = "Score"
                        }
                    }
                }
            }
        }
    }
    else if (type === "group") {
        var cardCreation = document.createElement("div")
        cardCreation.classList.add("cardContainer")
        document.getElementsByClassName('mainContainerForEdit')[0].appendChild(cardCreation);
        var rowCreation = document.createElement("div")
        rowCreation.classList.add(`row`)
        rowCreation.classList.add(`row-cols-1`)
        rowCreation.id = "roundRow"
        cardCreation.appendChild(rowCreation)
        for (var i = 0; i < count; i++) {
            var colCreation = document.createElement("div")
            colCreation.classList.add(`col`)
            colCreation.classList.add(`mb-4`)
            colCreation.id = `${i}`
            colCreation.style.width = "auto";
            rowCreation.appendChild(colCreation)
            var deck = document.createElement("div")
            deck.classList.add("card-deck")
            colCreation.appendChild(deck)
            if (i === count - 1) {
                var winner = document.createElement("h2")
                winner.classList.add("p-3")
                winner.classList.add("border-top")
                winner.classList.add("border-bottom")
                winner.innerHTML = "Winner"
                deck.appendChild(winner)
                var winCard = document.createElement("div")
                winCard.classList.add("card")
                winCard.classList.add("p-2")
                winCard.classList.add("mb-3")
                winCard.classList.add("text-center")
                deck.appendChild(winCard)
                var winRow = document.createElement("div")
                winRow.classList.add("row")
                winRow.classList.add("p-2")
                winRow.classList.add("m-2")
                winCard.appendChild(winRow)
                var winCol = document.createElement("div")
                winCol.classList.add("col")
                winCol.classList.add("p-2")
                winCol.classList.add("m-2")
                winCol.classList.add("d-flex")
                winCol.classList.add("flex-column")
                winCol.classList.add("justify-content-center")
                winCol.classList.add("align-items-center")
                winRow.appendChild(winCol)
                var winTeam = document.createElement("h1")
                winTeam.classList.add("small-view")
                winTeam.classList.add(`r${i}`)
                winTeam.innerHTML = `Team`
                winCol.appendChild(winTeam)
                var winBut = document.createElement("button")
                winBut.type = "button"
                winBut.classList.add("btn")
                winBut.classList.add("btn-primary")
                winBut.classList.add("p-3")
                winBut.setAttribute("onclick", "window.print()")
                winBut.innerHTML = "Share"
                winCol.appendChild(winBut)
            }
            else if (i < 3) {
                var round = document.createElement("h2")
                round.classList.add("p-3")
                round.classList.add("border-top")
                round.classList.add("border-bottom")
                round.innerHTML = `Round ${i + 1}`
                deck.appendChild(round)
                deck.appendChild(round)
                for (var j = 0; j < teamNum / 2; j++) {
                    var card = document.createElement("div")
                    card.classList.add("card p-2 mb-3 text-center")
                    deck.appendChild(card)
                    var cardFormat = document.createElement("div")
                    cardFormat.classList.add("row p-2 m-2")
                    card.appendChild(cardFormat)
                    var group = document.createElement("h1")
                    group.innerHTML = `Group ${(i + 1) * groupNum}`
                    for (var k = 0; k < 4; k++) {
                        var teamCol = document.createElement("div")
                        teamCol.classList.add("col m-2")
                        var teamName = document.createElement("h1")
                        teamName.classList.add("small-view")
                        teamName.id = `r${i} g${j} a${k}`
                        teamName.innerHTML = `Team`
                        if (isScored === true) {
                            k++;
                            var score = document.createElement("p")
                            score.classList.add("bigger-view")
                            score.id = `r${i} g${j} a${k}`
                            score.innerHTML = "Score"
                        }
                    }
                }
            }
            else {
                var round = document.createElement("h2")
                round.classList.add("p-3")
                round.classList.add("border-top")
                round.classList.add("border-bottom")
                round.innerHTML = `Round ${i + 1}`
                deck.appendChild(round)
                for (var j = 0; j < teamNum / 2; j++) {
                    var card = document.createElement("div")
                    card.classList.add("card p-2 mb-3 text-center")
                    deck.appendChild(card)
                    var cardFormat = document.createElement("div")
                    cardFormat.classList.add("row p-2 m-2")
                    card.appendChild(cardFormat)
                    for (var k = 0; k < 4; k++) {
                        var teamCol = document.createElement("div")
                        teamCol.classList.add("col m-2")
                        var teamName = document.createElement("h1")
                        teamName.classList.add("small-view")
                        teamName.id = `r${i} g${j} a${k}`
                        teamName.innerHTML = `Team`
                        if (isScored === true) {
                            k++;
                            var score = document.createElement("p")
                            score.classList.add("bigger-view")
                            score.id = `r${i} g${j} a${k}`
                            score.innerHTML = "Score"
                        }
                    }
                }
                teamNum /= 2;
            }
        }
    }
    // if (isScored === true) {
    //     for (var i = 0; i < count; i++) {
    //         for (var j = 0; j < teamNum / 2; j++)
    //             var data = document.getElementById(`${i}`),
    //                 btn = document.getElementById(`${j}`),
    //                 ps = data.querySelectorAll('p');
    //         btn.addEventListener('click', function (p) {
    //             ps.forEach(function (p) {
    //                 p.toggleAttribute('contenteditable');
    //             });

    //             if (ps[0].hasAttribute('contenteditable')) {
    //                 // Currently editing, change the button
    //                 btn.innerText = 'Save';
    //             } else {
    //                 // We just "saved". run "save functions" here
    //                 btn.innerText = 'Edit';
    //             }
    //         });
    //     }
    // }
    // for (var j = 0;j<teamNum/2;j++) {
    //     var data = document.getElementById("0"),
    //     btn = document.getElementById(`${j}`),
    //     h1s = data.querySelectorAll('h1');
    //     btn.addEventListener('click', function (e) {
    //         h1s.forEach(function (h1) {
    //             h1.toggleAttribute('contenteditable');
    //         });

    //         if (h1s[0].hasAttribute('contenteditable')) {
    //             // Currently editing, change the button
    //             btn.innerText = 'Save';
    //         } else {
    //             // We just "saved". run "save functions" here
    //             btn.innerText = 'Edit';
    //         }
    //     });
    // }

}
// , isScored, isSeeded
function rerenderPage(i, gameNum, teamNumEval) {
    var preRoundTeamArray = [];
    var winningTeamArray = [];
    var preRoundScoresArray = [];
    var index = 0;
    var teamsChange = document.getElementsByClassName(`.r${i + 1}`);
    preRoundTeamArray = document.getElementsByClassName(`.r${i}`);
    for (var j = 0; j < gameNum * 2; j++) {
        for (var k = 1; k < 4; k + 2) {
            preRoundScoresArray.push(document.getElementsByClassName(`.g${j} .a${k}`))
        }
        console.log(preRoundScoresArray[j])
    }
    for (var g = 0; g < gameNum; g + 2) {
        if (preRoundScoresArray[g] > preRoundScoresArray[g + 1]) {
            winningTeamArray[index] = preRoundScoresArray[g].innerHTML
        }
        else if (preRoundScoresArray[g] < preRoundScoresArray[g + 1]) {
            winningTeamArray[index] = preRoundScoresArray[g + 1].innerHTML
        }
        else {
            winningTeamArray[index] = preRoundScoresArray[g].innerHTML
        }
        index++;
    }
    for (var c = 0; c < gameNum; c++) {
        teamsChange[c].innerHTML = winningTeamArray[c]
    }
    return teamNumEval/2;
}