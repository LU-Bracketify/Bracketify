//window.onload = generatePage();

async function generatePage(id) {

    // Get DB record
    let record = await retrieveRecord(id);

    // Set values
    let title = record.name;
    let type = record.type;
    let teamNumCount = record.size;
    let teamNumEval = teamNum = teamNumSeed = teamNumCount;
    let isSeeded = record.seeded;

    let bracket = {
        seed: [],
        name: [],
        score: [],
        roundNum: [],
    };
    
    let rowCreation = document.createElement("div");
    rowCreation.className = `row row-cols-1`;
    rowCreation.id = "roundRow";
    document.getElementsByClassName('mainContainerForEdit')[0].appendChild(rowCreation);
    
    // Driver
    let roundCount = countingRounds(type, teamNumCount);
    let columns = createBracket(roundCount, rowCreation, teamNum, type);




}

function countingRounds(type, teamNumCount) {
    let roundCount = 1;
    let is1 = false;
    console.log(teamNumCount)
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
        console.log(teamNumCount)
        roundCount = teamNumCount;
    }

    return roundCount;
}

function createBracket(roundCount, rowCreation, teamNum, type) {
    let roundInc = 1;
    let cardCount = 0;
    let gameNum = teamNum/2;
    for (let cb = 0; cb < roundCount; cb++) {
        if (cb === 0) {
            let deck = renderColumn(roundInc, rowCreation);
            console.log("cc0: ", cardCount);
            cardCount = cardPerRound(type, gameNum, cardCount);
            renderFirstContent(deck, cardCount);
        }
        else if (cb === roundCount-1) {
            console.log("cc1: ", cardCount);
            let deck = renderLastColumn(rowCreation);
            cardCount = cardPerRound(type, gameNum, cardCount);
            renderLastContent(deck, cardCount);
        }
        else {
            console.log("cc2: ", cardCount);
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
    colCreation.className = `col mb-4 col-width bg-danger`;
    rowCreation.appendChild(colCreation);
    let round = renderRound(roundInc, colCreation);
    colCreation.appendChild(round);
    let deck = document.createElement("div");
    deck.className = "card-deck";
    colCreation.appendChild(deck);

    return deck;
}

function renderRound(roundInc, colCreation) {
    let round = document.createElement("h2");
    round.className = "p-3 border-top border-bottom";
    round.textContent = `Round ${roundInc}`;
    
    return round;
}

function renderLastColumn(rowCreation) {
    let colCreation = document.createElement("div");
    colCreation.className = `col mb-4 col-width bg-danger`;
    rowCreation.appendChild(colCreation);
    renderLastRound(colCreation);
    let deck = document.createElement("div");
    deck.className = "card-deck";
    colCreation.appendChild(deck);

    return deck;
}

function renderLastRound(colCreation) {
    let round = document.createElement("h2");
    round.className = "p-3 border-top border-bottom";
    round.textContent = `Winner`;
    colCreation.appendChild(round);
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
    nameInput.className = "form-control p-2 m-2";

    return nameInput;
}

// Render score input
function renderNum() {
    let scoreInput = document.createElement('input');

    scoreInput.required = true;
    scoreInput.type = "number";
    scoreInput.min = 0;
    scoreInput.placeholder = "Score";
    scoreInput.className = "form-control p-2 m-2";

    return scoreInput;
}

// Render team seed
function renderSeed() {
    let seed = document.createElement('p');
    seed.textContent = "1"; // TODO
    seed.className = "text-danger justify-content-center align-items-center pt-2 pb-2 mt-2 mb-2 ms-1 me-1";
    return seed;
}

// Render pick a winner button
function renderPickWinnerButton() {
    let pickWinnerButton = document.createElement('button');
    pickWinnerButton.className = "btn btn-primary";
    pickWinnerButton.setAttribute("onclick", `let newValue = pickWinner(); this.setAttribute("value", newValue)`);
    pickWinnerButton.textContent = "Pick a Winner";

    return pickWinnerButton;
}

function pickWinner(buttonId) {
    let team1 = "TEAM 1";
    let team2 = "TEAM 2";

    let pick = Math.floor(Math.random() * 2);
    if (pick == 0) {
        return team1;
    }
    else {
        return team2;
    }
}

function renderSubmitButton(type = 0, roundNum = 0, teams = 0, scores = 0) {
    let submitButton = document.createElement('button');

    submitButton.className = "btn btn-primary p-2 m-2";
    submitButton.setAttribute("onclick", `rerenderNextRound("${type}", "${roundNum}", "${teams}", "${scores}")`); // TODO
    submitButton.textContent = "Submit Column";

    return submitButton;
}

function rerenderNextRound(type, roundNum, teams, scores) {
    return;

}

///////////////////////////
function cardPerRound (type,gameNum, cardCount) {
    cardCount = 0;
    if (type === "single") {
        for (let cc = 0; cc < gameNum; cc++) {
           cardCount++;
        }
    }
    else if (type === "robin") {
        cardCount = teamNum;
    }

    console.log("cards per round:: ", cardCount);
    return cardCount;
}
/////////////////////////////

// Generate first col card and contents
function generateFirstCard() {
    // Set items
    let team1 = renderText();
    let team2 = renderText();
    let score1 = renderNum();
    let score2 = renderNum();
    let seedLabel1 = renderSeed();
    let seedLabel2 = renderSeed();
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
    //deck.appendChild(card);

    return card;
}

// Generate 2nd - last card and contents
function generateSecondCard() {
    // Set items
    let team1 = document.createElement('h6');
    let team2 = document.createElement('h6');
    
    team1.className = "text-nowrap p-2 m-2";
    team2.className = "text-nowrap p-2 m-2";

    team1.textContent = "TEAM 1";
    team2.textContent = "TEAM 2";

    let score1 = renderNum();
    let score2 = renderNum();
    let seedLabel1 = renderSeed();
    let seedLabel2 = renderSeed();
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
    //deck.appendChild(card);

    return card;
}

// Render first round inputs for team names and scores
function renderFirstContent(deck,cardCount) {
    let submitButton = renderSubmitButton();

    // Generate x cards
    for (let i = 0; i < cardCount; i++) {
        let card = generateFirstCard();
        deck.append(card);
    }

    deck.appendChild(submitButton);
}

// Render team names as headers and scores as inputs
//** account for multiple columns */
function renderMidContent(deck, cardCount) {
    let submitButton = renderSubmitButton();
    console.log(cardCount);
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
    winningTeam.textContent = "TEAM 1"; // TODO
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

function addSeeds() {
    
}