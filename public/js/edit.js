window.onload = generatePage();

function generatePage() {
    var title = "See Work"
    var type = "single elim";
    var teamNumCount = 16;
    var teamNum = 16;
    var isSeeded = true;
    var isScored = true;
    var is1 = false;
    var count = 1;
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
        document.getElementsByClassName('mainContainer')[0].appendChild(cardCreation);
        var rowCreation = document.createElement("div")
        rowCreation.classList.add(`row`)
        rowCreation.classList.add(`row-cols-1`)
        rowCreation.id = "roundRow"
        cardCreation.appendChild(rowCreation)
        for (var i = 0; i < count; i++) {
            var colCreation = document.createElement("div")
            colCreation.classList.add(`col`)
            colCreation.classList.add(`mb-4`)
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
                winTeam.id = `r${i}`
                winTeam.innerHTML = `Team`
                winCol.appendChild(winTeam)
            }
            else {
                var round = document.createElement("h2")
                round.classList.add("p-3")
                round.classList.add("border-top")
                round.classList.add("border-bottom")
                round.innerHTML = `Round ${i + 1}`
                deck.appendChild(round)
                for (var j = 0; j < teamNum/2; j++) {
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
                    butCol.classList.add("col")
                    butCol.classList.add("m-2")
                    butCol.classList.add("p-2")
                    butCol.classList.add("d-flex")
                    butCol.classList.add("flex-column")
                    butCol.classList.add("justify-content-center")
                    butCol.classList.add("align-items-center")
                    cardFormat.appendChild(butCol)
                    var but = document.createElement("button")
                    but.type = "button"
                    but.classList.add("btn")
                    but.classList.add("btn-primary")
                    but.classList.add("p-3")
                    but.dataset.bsToggle = "modal"
                    but.dataset.bsTarget = "#exampleModal"
                    but.innerHTML = "Open"
                    butCol.appendChild(but)
                }
                teamNum = teamNum/2;
            }
        }
    }
    else if (type === "double elim") {
        var cardCreation = document.createElement("div")
        cardCreation.classList.add("cardContainer")
        document.getElementsByClassName('mainContainer')[0].appendChild(cardCreation);
        var rowCreation = document.createElement("div")
        rowCreation.classList.add(`row row-cols-1 row-cols-md-${count + 1}`)
        cardCreation.appendChild(rowCreation)
        for (var i = 0; i < count; i++) {
            var deck = document.createElement("div")
            deck.classList.add("card-deck")
            rowCreation.appendChild(deck)
            var deck = document.createElement("div")
            deck.classList.add("card-deck")
            rowCreation.appendChild(deck)
            if (i === count - 1) {
                var winner = document.createElement("h2")
                winner.classList.add("p-3 border-top border-bottom")
                winner.innerHTML = "Winner"
                deck.appendChild(winner)
                var winCard = document.createElement("div")
                winCard.classList.add("card p-2 mb-3 text-center")
                deck.appendChild(winCard)
                var winRow = document.createElement("div")
                winRow.classList.add("row p-2 m-2")
                winCard.appendChild(winRow)
                var winCol = document.createElement("div")
                winCol.classList.add("col m-2 p-2 d-flex flex-column justify-content-center align-items-center")
                winRow.appendChild(winCol)
                var winTeam = document.createElement("h1")
                winTeam.classList.add("small-view")
                winTeam.id = `r${i}`
                winTeam.innerHTML = `Team`
                winCol.appendChild(winTeam)
            }
            else {
                var round = document.createElement("h2")
                round.classList.add("p-3 border-top border-bottom")
                round.innerHTML = `Round ${i}`
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
        document.getElementsByClassName('mainContainer')[0].appendChild(cardCreation);
        var rowCreation = document.createElement("div")
        rowCreation.classList.add(`row row-cols-1 row-cols-md-${count + 1}`)
        cardCreation.appendChild(rowCreation)
        for (var i = 0; i < count; i++) {
            var deck = document.createElement("div")
            deck.classList.add("card-deck")
            rowCreation.appendChild(deck)
            var deck = document.createElement("div")
            deck.classList.add("card-deck")
            rowCreation.appendChild(deck)
            if (i === count - 1) {
                var winner = document.createElement("h2")
                winner.classList.add("p-3 border-top border-bottom")
                winner.innerHTML = "Winner"
                deck.appendChild(winner)
                var winCard = document.createElement("div")
                winCard.classList.add("card p-2 mb-3 text-center")
                deck.appendChild(winCard)
                var winRow = document.createElement("div")
                winRow.classList.add("row p-2 m-2")
                winCard.appendChild(winRow)
                var winCol = document.createElement("div")
                winCol.classList.add("col m-2 p-2 d-flex flex-column justify-content-center align-items-center")
                winRow.appendChild(winCol)
                var winTeam = document.createElement("h1")
                winTeam.classList.add("small-view")
                winTeam.id = `r${i}`
                winTeam.innerHTML = `Team`
            }
            else {
                var round = document.createElement("h2")
                round.classList.add("p-3 border-top border-bottom")
                round.innerHTML = `Round ${i}`
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
        }
    }
    else if (type === "group") {
        var groupNum = teamNum / 4;
        var cardCreation = document.createElement("div")
        cardCreation.classList.add("cardContainer")
        document.getElementsByClassName('mainContainer')[0].appendChild(cardCreation);
        var rowCreation = document.createElement("div")
        rowCreation.classList.add(`row row-cols-1 row-cols-md-${count + 1}`)
        cardCreation.appendChild(rowCreation)
        for (var i = 0; i < count; i++) {
            var deck = document.createElement("div")
            deck.classList.add("card-deck")
            rowCreation.appendChild(deck)
            var deck = document.createElement("div")
            deck.classList.add("card-deck")
            rowCreation.appendChild(deck)
            if (i === count - 1) {
                var winner = document.createElement("h2")
                winner.classList.add("p-3 border-top border-bottom")
                winner.innerHTML = "Winner"
                deck.appendChild(winner)
                var winCard = document.createElement("div")
                winCard.classList.add("card p-2 mb-3 text-center")
                deck.appendChild(winCard)
                var winRow = document.createElement("div")
                winRow.classList.add("row p-2 m-2")
                winCard.appendChild(winRow)
                var winCol = document.createElement("div")
                winCol.classList.add("col m-2 p-2 d-flex flex-column justify-content-center align-items-center")
                winRow.appendChild(winCol)
                var winTeam = document.createElement("h1")
                winTeam.classList.add("small-view")
                winTeam.id = `r${i}`
                winTeam.innerHTML = `Team`
            }
            else if (i < 3) {
                var round = document.createElement("h2")
                round.classList.add("p-3 border-top border-bottom")
                round.innerHTML = `Round ${i}`
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
                var round = document.createElement("h2")
                round.classList.add("p-3 border-top border-bottom")
                round.innerHTML = `Round ${i}`
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
                teamNum /= 2;
            }
        }
    }
}

function changeElemModal(team1, score1, team2, score2) {
    var changeTo = [team1, score1, team2, score2];
    var collection = [];
    for (var i = 0; i < 4; i++) {
        colletion[i] = document.getElementById("r1 g1 a${i}");
        collection[i].innerHTML = changeTo[i];
    }
}