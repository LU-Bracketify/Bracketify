var lastRoundNum = 0;
var winner = "";

async function generatePage(id) {

    // Get DB record
    let record = await retrieveRecord(id);

    // Set values
    let title = record.name;
    let type = record.type;
    let teamNumCount = record.size;
    let teamNum = teamNumSeed = teamNumCount;
    let seedType = record.seed;

     let bracket = {
         seed: [],
         name: [],
         score: [],
         roundNum: [],
    };

    let saveDiv = document.createElement("div");
    saveDiv.className = "container text-center pb-3";

    let saveButton = document.createElement("button");
    saveButton.className = "btn btn-primary";
    saveButton.textContent = "Save Bracket";
    saveButton.onclick = () => {
        updateDataStore(record);
    }
    
    saveDiv.appendChild(saveButton);
    document.getElementsByClassName('mainContainerForEdit')[0].appendChild(saveDiv);

    let rowCreation = document.createElement("div");
    rowCreation.className = `row row-cols-1`;
    rowCreation.id = "roundRow";
    document.getElementsByClassName('mainContainerForEdit')[0].appendChild(rowCreation);
    let editTitle = document.getElementById("title");
    editTitle.textContent = `Edit - ${title}`
    
    // Driver
    let roundCount = countingRounds(type, teamNumCount);
    lastRoundNum = roundCount - 1;
    let columns = createBracket(roundCount, rowCreation, teamNum, type, seedType, bracket);
}

function countingRounds(type, teamNumCount) {
    let roundCount = 1;
    let is1 = false;
    if (type === "single") {
        while (is1 === false) {
            teamNumCount /= 2;
            if (teamNumCount === 1) {
                is1 = true;
            }
            roundCount++;
        }
    }
    else if (type === "robin") {
        roundCount = teamNumCount;
    }

    return roundCount;
}

function createBracket(roundCount, rowCreation, teamNum, type, seedType) {
    let roundInc = 1;
    let cardCount = 0;
    let gameNum = teamNum/2;
    let seedArr = [];
    if (seedType === "normal") {
        for (let s = 0; s < teamNumSeed; s++) {
            seedArr.push(s+1);
        }
    }
    else if (seedType === "randomized") {
        for (let s = 0; s < teamNumSeed; s++) {
            seedArr.push(s+1);
        }
        let randArr = shuffle(seedArr);
        seedArr = randArr;
    }
    var index = 0;
    for (let cb = 0; cb < roundCount; cb++) {
        if (cb === 0) {
            let deck = renderColumn(roundInc, rowCreation);
            cardCount = cardPerRound(type, gameNum, cardCount);
            renderFirstContent(deck, cardCount, seedArr, index);
        }
        else if (cb === roundCount-1) {
            let deck = renderLastColumn(rowCreation);
            cardCount = cardPerRound(type, gameNum, cardCount);
            renderLastContent(deck, cardCount);
        }
        else {
            let deck = renderColumn(roundInc, rowCreation);
            cardCount = cardPerRound(type, gameNum, cardCount);
            renderMidContent(deck,cardCount);
        }
        roundInc++;
        if (type === "single") {
            gameNum /= 2;
        }
    }
} 

function renderColumn(roundInc, rowCreation) {
    let colCreation = document.createElement("div");
    colCreation.className = `col mb-4 col-width`;
    rowCreation.appendChild(colCreation);
    let round = renderRound(roundInc);
    colCreation.appendChild(round);
    let deck = document.createElement("div");
    // Add round count to deck
    deck.className = `card-deck ${roundInc}`;
    colCreation.appendChild(deck);

    return deck;
}

function renderRound(roundInc) {
    let round = document.createElement("h2");
    round.className = "p-3 border-top border-bottom";
    round.textContent = `Round ${roundInc}`;
    
    return round;
}

function renderLastColumn(rowCreation) {
    let colCreation = document.createElement("div");
    colCreation.className = `col mb-4 col-width`;
    rowCreation.appendChild(colCreation);
    let round = renderLastRound();
    colCreation.appendChild(round);
    let deck = document.createElement("div");
    deck.className = `card-deck ${lastRoundNum + 1}`;
    colCreation.appendChild(deck);

    return deck;
}

function renderLastRound() {
    let round = document.createElement("h2");
    round.className = "p-3 border-top border-bottom";
    round.textContent = `Winner`;

    return round
}

// Render team parent div
function renderTeamDiv() {
    // flex contents
    let tDiv = document.createElement('div');
    tDiv.className = "d-flex align-items-left justify-content-left";
    
    return tDiv;
}

// Render card with two teams
function renderCard() {
    let cardDiv = document.createElement('div');

    // Set items
    cardDiv.className = "card p-2 m-2";
    
    return cardDiv;
}

// Render text input
function renderText() {
    let nameInput = document.createElement('input');

    nameInput.required = true;
    nameInput.type = "text";
    nameInput.placeholder = "Team Name";
    nameInput.className = "form-control p-2 m-2 nameInput";

    return nameInput;
}

// Render score input for first col
function renderNumFirst() {
    let scoreInput = document.createElement('input');

    scoreInput.required = true;
    scoreInput.type = "number";
    scoreInput.min = 0;
    scoreInput.placeholder = "Score";
    scoreInput.className = "form-control p-2 m-2 scoreInput";

    return scoreInput;
}

// Render score input for 2nd - last col
function renderNum() {
    let scoreInput = document.createElement('input');

    scoreInput.required = true;
    scoreInput.type = "number";
    scoreInput.min = 0;
    scoreInput.placeholder = "Score";
    scoreInput.className = "form-control p-2 m-2 scoreInput";

    return scoreInput;
}

// Render team seed
function renderSeed(seedValue) {
    let seed = document.createElement('p');
    seed.textContent = seedValue;
    seed.className = "text-danger justify-content-center align-items-center pt-2 pb-2 mt-2 mb-2 ms-1 me-1 seed";
    return seed;
}

// Render pick a winner button
function renderPickWinnerButton() {
    let pickWinnerButton = document.createElement('button');
    pickWinnerButton.className = "btn btn-primary";
    pickWinnerButton.setAttribute("onclick", `let newValue = pickWinner(this.parentElement); this.setAttribute("value", newValue)`);
    pickWinnerButton.textContent = "Pick a Winner";

    return pickWinnerButton;
}

function pickWinner(card) {
    let teams = card.getElementsByClassName("nameInput");
    let scores = card.getElementsByClassName("scoreInput");
    let button = card.getElementsByClassName("btn");
    let firstRound = true;

    if (teams.length == 0) {
        teams = card.getElementsByClassName("name");
        firstRound = false;
    }

    if (scores[0].hidden == false) {
        scores[0].hidden = true;
        scores[1].hidden = true;
        button[0].className = "btn btn-primary active";

        let pick = Math.floor(Math.random() * 2);
        if (pick == 0) {
            if (firstRound == true)
            {
                return teams[0].value;
            }
            else {
                return teams[0].textContent;
            }
        }
        else {
            if (firstRound == true) {
                return teams[1].value;
            }
            else {
                return teams[1].textContent;
            }
        }
    }
    else {
        scores[0].hidden = false;
        scores[1].hidden = false;
        button[0].className = "btn btn-primary";
    }
    return "";
}

function renderSubmitButton() {
    let submitButton = document.createElement('button');

    submitButton.className = "btn btn-primary p-2 m-2";
    submitButton.textContent = "Submit Column";

    submitButton.onclick = () => {
        // Get all data from column
        let col = submitButton.parentElement;
        let colClassName = col.className;
        let colList = colClassName.split(" ");
        let colNum = colList[1];

        // Get nameInput if present else get team Name headers
        let names = col.getElementsByClassName("nameInput");
        let scores = col.getElementsByClassName("scoreInput");

        let nameInputClass = col.getElementsByClassName("nameInput");
        let present = classPresent(nameInputClass);

        let bracket = {
            seed: [],
            name: [],
            score: [],
            roundNum: [],
        };
    
        // If present get name inputs
        if (present === true) {
            // Iterate over names
            for (let i = 0; i < names.length; i++) {
                let name = names[i].value;
                bracket.name.push(name);
            }

            // Iterate over scores
            for (let i = 0; i < scores.length; i++) {
                let score = scores[i].value;
                bracket.score.push(score);
            }

            rerenderNextRound(bracket, colNum, col);

        } else if (present === false) {
            let names = col.getElementsByClassName("name");

            // Iterate over names
            for (let i = 0; i < names.length; i++) {
                let name = names[i].textContent;
                bracket.name.push(name);
            }

            // Iterate over scores
            for (let i = 0; i < scores.length; i++) {
                let score = scores[i].value;
                bracket.score.push(score);
            }

            // if not last
            if (Number(colNum) !== lastRoundNum) {
                rerenderNextRound(bracket, colNum, col);
            }

            // Else if last round update header
        } if (Number(colNum) === lastRoundNum) {
            let nextDeck = document.getElementsByClassName(Number(colNum) + 1)[0];
            let winLabel = nextDeck.getElementsByTagName("h3");

            // Determine winner of match
            winner = matchWinners(bracket, col);
            //let winner = matchWinners(bracket, col);

            // Set label to winner
            winLabel[0].textContent = winner;
        }

    }

    return submitButton;
}

// Check to see if class exists
function classPresent(elem) {
    if (elem.length === 0) {
        return false
    } else {
        return true;
    }
}

function rerenderNextRound(bracket, colNum, col) {
    // Determine winner
    let winners = matchWinners(bracket, col);

    // Update team names in next round
    let nextDeck = document.getElementsByClassName(Number(colNum) + 1)[0];
    let teamName = nextDeck.getElementsByClassName("name");
    
    for (let i = 0; i < teamName.length; i++) {
        // set text content
       teamName[i].textContent = winners[i];
    }

}

// Returns winners of previous match (for col)
function matchWinners(bracket, col) {
    let names = [];

    for (let i = 0; i < bracket.score.length; i++) {      
        if (i % 2 === 0) {
            let winName;

            if (col.getElementsByClassName("scoreInput")[i].hidden == true) {
                winName = col.getElementsByClassName("btn")[i/2].value;
            }
            else {
                // Check current value and  next
                let t1Name = bracket.name[i];
                let t1Score = Number(bracket.score[i]);

                let t2Name = bracket.name[i + 1];
                let t2Score = Number(bracket.score[i + 1]);

                winName = gameWinner(t1Name, t1Score, t2Name, t2Score);
            }

            // Set to blank str
            if (winName == -1) {
                names.push("");
            } else {
                names.push(winName); 
            }

        }
    }

   return names;

}

// Returns winning name of single game
function gameWinner(t1Name, t1Score, t2Name, t2Score) {
    if (t1Score > t2Score) {
        return t1Name;
    } else if (t2Score > t1Score) {
        return t2Name;
    } else if (t1Score === t2Score) {
        return -1;
    }
}

function cardPerRound (type, gameNum, cardCount) {
    cardCount = 0;
    if (type === "single") {
        for (let cc = 0; cc < gameNum; cc++) {
           cardCount++;
        }
    }
    else if (type === "robin") {
        cardCount = gameNum;
    }

    return cardCount;
}

// Generate first col card and contents
function generateFirstCard(seedArr, highest, lowest) {
    // Set items
    let team1 = renderText();
    let team2 = renderText();
    let score1 = renderNumFirst();
    let score2 = renderNumFirst();
    let seedLabel1 = renderSeed(seedArr[highest]);
    let seedLabel2 = renderSeed(seedArr[lowest]);
    let pickWinnerButton = renderPickWinnerButton();

    let card = renderCard();

    // Render team div (2 in each card)
    let teamDiv1 = renderTeamDiv();
    let teamDiv2 = renderTeamDiv();

    // Append seeds
    teamDiv1.appendChild(seedLabel1);
    teamDiv2.appendChild(seedLabel2);

    // Append team names to team div
    teamDiv1.appendChild(team1);
    teamDiv2.appendChild(team2);

    // Append scores to team div
    teamDiv1.appendChild(score1);
    teamDiv2.appendChild(score2);

    // Append team info to parent div
    card.appendChild(teamDiv1);
    card.appendChild(teamDiv2);
    card.appendChild(pickWinnerButton)

    return card;
}

// Generate 2nd - last card and contents
function generateSecondCard() {
    // Set items
    let team1 = document.createElement('h6');
    let team2 = document.createElement('h6');
    
    team1.className = "text-nowrap p-2 m-2 name";
    team2.className = "text-nowrap p-2 m-2 name";

    let score1 = renderNum();
    let score2 = renderNum();
    let pickWinnerButton = renderPickWinnerButton();

    let card = renderCard();

    // Render team div (2 in each card)
    let teamDiv1 = renderTeamDiv();
    let teamDiv2 = renderTeamDiv();

    // Append team names to team div
    teamDiv1.appendChild(team1);
    teamDiv2.appendChild(team2);

    // Append scores to team div
    teamDiv1.appendChild(score1);
    teamDiv2.appendChild(score2);

    // Append team info to parent div
    card.appendChild(teamDiv1);
    card.appendChild(teamDiv2);
    card.appendChild(pickWinnerButton);

    return card;
}

// Render first round inputs for team names and scores
function renderFirstContent(deck, cardCount, seedArr) {
    let submitButton = renderSubmitButton();
    let highest = 0;
    let lowest = seedArr.length-1;
    // Generate x cards
    for (let i = 0; i < cardCount; i++) {
        let card = generateFirstCard(seedArr, highest, lowest);
        highest++;
        lowest--;
        deck.append(card);
    }
    deck.appendChild(submitButton);
}

// Render team names as headers and scores as inputs
function renderMidContent(deck, cardCount) {
    let submitButton = renderSubmitButton();
    // Generate x cards
    for (let i = 0; i < cardCount; i++) {
        let card = generateSecondCard();
        deck.append(card);
    }

    deck.appendChild(submitButton);
}

// Render winning team
function renderLastContent(deck) {
    let winningTeam = document.createElement('h3');

    // Set items
    winningTeam.className = "p-2 m-2";

    let seedLabel = renderSeed();
    
    // Render Card
    let card = renderCard();

    // Render team div
    let teamDiv = renderTeamDiv();

    // Append seed
    teamDiv.appendChild(seedLabel);

    // Append headers to team div
    teamDiv.appendChild(winningTeam);

    // Share button
    let shareButton = document.createElement('button');
    shareButton.className = "btn btn-primary";
    shareButton.setAttribute("onclick", "window.print()");
    shareButton.textContent = "Share Results";
    teamDiv.appendChild(shareButton);

    // Append team info to parent div
    card.appendChild(teamDiv);
    deck.appendChild(card);
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

// Get new bracket data and add to current data store
function updateDataStore(record) {
    let nameInputs = document.getElementsByClassName("nameInput");
    let nameHeaders = document.getElementsByClassName("name");
    let scores = document.getElementsByClassName("scoreInput");

    let bracketR = {
        nameInputs: [],
        nameHeaders: [],
        scores: [],
        winnerName: "",
    }

    for (let i = 0; i < nameInputs.length; i++) {
        bracketR.nameInputs.push(nameInputs[i].value);
    }

    for (let i = 0; i < nameHeaders.length; i++) {
        bracketR.nameHeaders.push(nameHeaders[i].textContent);
    }

    for (let i = 0; i < scores.length; i++) {
        bracketR.scores.push(scores[i].value);
    }

    // Add winner
    bracketR.winnerName = winner;

    // Update db record and insert bracket
    dbUpdate(record, bracketR);
}