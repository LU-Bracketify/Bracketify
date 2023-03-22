// Auto load input and text content
async function renderContent(id) {
    console.log("rendering data");
    // Get DB record
    let record = await retrieveRecord(id);

    console.log("record", record);

    let nameHeadersR = record.bracket.nameHeaders;
    let nameInputsR = record.bracket.nameInputs;
    let scoresR = record.bracket.scores;
    let winnerR = record.bracket.winnerName;
    //console.log(scores);

    let nameInputs = document.getElementsByClassName("nameInput");
    let nameHeaders = document.getElementsByClassName("name");
    let scores = document.getElementsByClassName("scoreInput");

    for (let i = 0; i < nameInputs.length; i++) {
        nameInputs[i].value = nameInputsR[i];
    }

    for (let i = 0; i < nameHeaders.length; i++) {
        nameHeaders[i].textContent = nameHeadersR[i];
    }

    for (let i = 0; i < scores.length; i++) {
        scores[i].value = scoresR[i];
    }

    let winLabel = document.getElementsByTagName("h3")[0];
    winLabel.textContent = winnerR;

}
