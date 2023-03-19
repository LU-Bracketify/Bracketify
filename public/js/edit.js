//window.onload = generatePage();

async function generatePage(id) {

    // Get DB record
    let record = await retrieveRecord(id);

    // Set values
    let title = record.name;
    let type = record.type;
    let teamNumCount = record.size;
    let teamNumEval = teamNum = teamNumCount;
    // change to str
    let isSeeded = record.seeded;
    let isScored = record.scored;

    //var title = "See Work"
    //var type = "single elim";
    //var teamNumCount = 4;
    //var teamNumEval = 4;
    //var teamNum = 4;
    //var isSeeded = "randomizedSeed";
    // var isSeeded = "seeded";
    //var isScored = true;
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
                ////////////////////////////////////////////
                var roundCount = i
                var gameCount = teamNumEval/2

                columnSubmit.setAttribute("onclick", `rerenderPage(${roundCount},${gameCount},${teamNumEval})`)
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
                        teamName.classList.add(`r${i}`)
                        teamName.classList.add(`g${j}`)
                        teamName.innerHTML = "Team"
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
                if (i === 0) {
                    for (var l = 0; l < team / 2; l++) {
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
                            teamName.classList.add(`r${i}`)
                            teamName.classList.add(`g${j}`)
                            teamName.innerHTML = "L Team"
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
                }
                else {
                    for (var l = 0; l < team; l++) {
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
                            teamName.classList.add(`r${i}`)
                            teamName.classList.add(`g${j}`)
                            teamName.innerHTML = "Team"
                            teamCol.appeadChild()
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
                }
                if (teamNum <= 4) {
                    teamNum -= 1
                }
                else {
                    teamNum -= teamNum / 4
                }
            }
            if (i !== count - 1) {
                // make button here to call a function to evaluate column scores
                // change team names based on winners
                var columnSubmit = document.createElement("button")
                columnSubmit.type = "button"
                columnSubmit.classList.add("btn")
                columnSubmit.classList.add("btn-primary")
                columnSubmit.classList.add("p-3")
                columnSubmit.setAttribute("onclick", `rerenderPage(${i},${teamNumEval / 2},'teamNumEval')`)
                columnSubmit.innerHTML = "Submit Round"
                deck.appendChild(columnSubmit)
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
                        teamName.classList.add(`r${i}`)
                        teamName.classList.add(`g${j}`)
                        teamName.innerHTML = "Team"
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
            }
            if (i !== count - 1) {
                // make button here to call a function to evaluate column scores
                // change team names based on winners
                var columnSubmit = document.createElement("button")
                columnSubmit.type = "button"
                columnSubmit.classList.add("btn")
                columnSubmit.classList.add("btn-primary")
                columnSubmit.classList.add("p-3")
                columnSubmit.setAttribute("onclick", `rerenderPage(${i},${teamNumEval / 2},'teamNumEval')`)
                columnSubmit.innerHTML = "Submit Round"
                deck.appendChild(columnSubmit)
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
                    var group = document.createElement("h1")
                    group.innerHTML = `Group ${(i + 1) * groupNum}`
                    for (var k = 0; k < 4; k++) {
                        var teamCol = document.createElement("div")
                        teamCol.classList.add("col")
                        teamCol.classList.add("m-2")
                        cardFormat.appendChild(teamCol)
                        var teamName = document.createElement("h1")
                        teamName.classList.add("small-view")
                        teamName.classList.add(`r${i}`)
                        teamName.classList.add(`g${j}`)
                        teamName.innerHTML = "Team"
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
                    for (var k = 0; k < 4; k++) {
                        var teamCol = document.createElement("div")
                        teamCol.classList.add("col")
                        teamCol.classList.add("m-2")
                        cardFormat.appendChild(teamCol)
                        var teamName = document.createElement("h1")
                        teamName.classList.add("small-view")
                        teamName.classList.add(`r${i}`)
                        teamName.classList.add(`g${j}`)
                        teamName.innerHTML = "Team"
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
                teamNum /= 2;
            }
            if (i !== count - 1) {
                // make button here to call a function to evaluate column scores
                // change team names based on winners
                var columnSubmit = document.createElement("button")
                columnSubmit.type = "button"
                columnSubmit.classList.add("btn")
                columnSubmit.classList.add("btn-primary")
                columnSubmit.classList.add("p-3")
                columnSubmit.setAttribute("onclick", `rerenderPage(${i},${teamNumEval / 2},'teamNumEval')`)
                columnSubmit.innerHTML = "Submit Round"
                deck.appendChild(columnSubmit)
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
    console.log("button clicked");
    console.log("gameNum: ", gameNum);
    console.log("teamEval: ", teamNumEval);

    // Iterate over team scores for round
    let round = document.getElementsByClassName(`r${i}`);
    let teamNames = [];
    let scores = [];

    // If first round get team names from input boxes
    if (i === 0) {
        console.log("ROUND 1");

        for (let item in round) {
            // Get names
            if (item % 2 === 0 || item == 0) {
                teamNames.push(round[item].value);
            }

            // Get scores
            if (item % 2) {
                scores.push(round[item].value)
            }
        }

        // Select winners
        let winners = nextMatchup(teamNames, scores);

        console.log(winners);

        // Set team names for next round
        let nextRoundNum = i + 1;
        let nextRound = document.getElementsByClassName(`r${nextRoundNum}`);
        let nextHeaders = document.querySelectorAll(`h1.r${nextRoundNum}`);

        for (let item in nextHeaders) {
            // Set names
            nextHeaders[item].textContent = winners.names[item];
        }

    // If not last round
    } else {
        console.log("NOT ROUND 2");

        for (let item in round) {
            // Get Names
            if (item % 2 === 0 || item == 0) {
                teamNames.push(round[item].textContent);
            }

            // Get scores
            if (item % 2) {
                scores.push(round[item].value)
            }
        }

        // Select winners
        let winners = nextMatchup(teamNames, scores);

        console.log(winners);

        // Set team names for next round
        let nextRoundNum = i + 1;
        let nextRound = document.getElementsByClassName(`r${nextRoundNum}`);
        let nextHeaders = document.querySelectorAll(`h1.r${nextRoundNum}`);

        for (let item in nextHeaders) {
            // Set names
            nextHeaders[item].textContent = winners.names[item];
        }

    } 

}

// Returns winners of match
function nextMatchup(teamNames, scores) {

    let winners = [];

    let winnerObj = {
        names: [],
        scores: [],
    }

    for (let i in scores) {
        // if second team
        if (i % 2) {
            let winner = gameWinner(scores[i - 1], scores[i]);
            console.log(winner);

            // Get index pos
            let index = scores.indexOf(winner);

            let tNames = teamNames[index];
            console.log(tNames);

            winnerObj.scores.push(winner);
            winnerObj.names.push(tNames);
        }
    }

    return winnerObj;

}

// Returns winner of game
function gameWinner(t1, t2) {
    if (t1 > t2) {
        return t1;
    } else {
        return t2;
    }
}

