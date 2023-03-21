//window.onload = generatePage();

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
    saveButton.setAttribute("onclick", `dbUpdate("${title}", "${type}", "${id}", "${record.author}", "${record.desc}", "${seedType}", "${teamNumCount}", "true", "${bracket.name}", "${bracket.score}", "${bracket.seed}")`);
    
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

function createBracket(roundCount, rowCreation, teamNum, type, seedType, bracket) {
    let roundInc = 1;
    let cardCount = 0;
    let gameNum = teamNum/2;
    let seedArr = [];
    if (seedType === "normal") {
        for (let s = 0; s < teamNumSeed; s++) {
            seedArr.push(s+1);
            bracket.seed.push(s+1);
        }
    }
    else if (seedType === "randomized") {
        for (let s = 0; s < teamNumSeed; s++) {
            seedArr.push(s+1);
            bracket.seed.push(s+1)
        }
        let randArr = shuffle(seedArr);
        seedArr = randArr;
        bracket.seed = randArr;
    }
    for (let s = 0; s < teamNumSeed; s++) {
        console.log(bracket.seed[s])
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
    deck.className = "card-deck";
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
    deck.className = "card-deck";
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
    scoreInput.className = "form-control p-2 m-2 score";

    return scoreInput;
}

// Render team seed
function renderSeed(seedValue) {
    let seed = document.createElement('p');
    seed.textContent = seedValue;
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

function renderSubmitButton() {
    let submitButton = document.createElement('button');

    submitButton.className = "btn btn-primary p-2 m-2";
    //submitButton.setAttribute("onclick", rerenderNextRound(bracket)); // TODO
    submitButton.textContent = "Submit Column";

    submitButton.onclick = () => {
        rerenderNextRound();
    }

    return submitButton;
}

function rerenderNextRound() {
    let names = document.getElementsByClassName("nameInput");
    let scores = document.getElementsByClassName("scoreInput");

    let bracket = {
        seed: [],
        name: [],
        score: [],
        roundNum: [],
    };

    // Only iterate over names/scores for first col

    // Iterate over names
    for (let i = 0; i < names.length; i++) {
        let name = names[i].value;
        bracket.name.push(name);
    }

    // Iterate over scores
    for (let i = 0; i < scores.length; i++) {
        //console.log("score::", scores[i].value);
        let score = scores[i].value;
        bracket.score.push(score);
    }

    // Store values in array
    //console.log(bracket.name);
    //console.log(bracket.score);

    // Determine winner
    let winners = matchWinners(bracket);
    //console.log(winners);

    // Update team names in next round
    let teamName = document.getElementsByClassName("name");
    
    for (let i = 0; i < teamName.length; i++) {
        teamName[i].textContent = winners[i];
    }



}

// Returns winners of previous match (for col)
function matchWinners(bracket) {
    // seperate card array data from col array
    let names = [];

    for (let i = 0; i < bracket.score.length; i++) {      
        if (i % 2 === 0) {
            // Check current value and  next
            let t1 = Number(bracket.score[i]);
            let t2 = Number(bracket.score[i + 1]);
            let winNum = gameWinner(t1, t2).toString();

            // Set to blank str
            if (winNum == -1) {
                winningName = "";
                names.push(winningName);
            } else {
                // wrong index
                let indexPos = bracket.score.indexOf(winNum);
                let winningName = bracket.name[indexPos];
                names.push(winningName); 
            }

        }
    }

   return names;

}

// Returns winning scores of single game
function gameWinner(t1, t2) {
    //console.log("TEST", t1, t2);
    if (t1 > t2) {
        //console.log("greater num is:: ", t1);
        return t1;
    } else if (t2 > t1) {
        //console.log("greater num is::", t2);
        return t2;
    } else if (t1 === t2) {
        console.log("EZ");
        return -1;
    }
}

///////////////////////////
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
    let score1 = renderNum();
    let score2 = renderNum();
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
    //deck.appendChild(card);

    return card;
}

// Generate 2nd - last card and contents
function generateSecondCard() {
    // Set items
    let team1 = document.createElement('h6');
    let team2 = document.createElement('h6');
    
    team1.className = "text-nowrap p-2 m-2 name";
    team2.className = "text-nowrap p-2 m-2 name";

    team1.textContent = "TEAM 1";
    team2.textContent = "TEAM 2";

    let score1 = renderNum();
    let score2 = renderNum();
    // let seedLabel1 = renderSeed();
    // let seedLabel2 = renderSeed();
    let pickWinnerButton = renderPickWinnerButton();

    let card = renderCard();

    // Render team div (2 in each card)
    let teamDiv1 = renderTeamDiv();
    let teamDiv2 = renderTeamDiv();

    
    // Append seeds
    // teamDiv1.appendChild(seedLabel1);
    // teamDiv2.appendChild(seedLabel2);

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
//** account for multiple columns */
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
