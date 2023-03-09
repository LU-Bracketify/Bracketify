// Summary view of saved brackets

window.onload = getRecords();

// Query DB
function getRecords() {
    console.log("running");
    
    //const request = indexedDB.open("BracketDB", 1);
    let db = true;
    let request = indexedDB.open("BracketDB");
    request.onupgradeneeded = function(e) {
        e.target.transaction.abort();
        db = false;

        console.log("You don't have any saved brackets");
        let historyContainer = document.getElementsByClassName("contentCard")[0];
        //let msgDiv = document.getElementsByClassName("msgDiv")[0];
        historyContainer.setAttribute("style", "display: flex; flex-direction: column; height:100vh;");

        let msg = document.createElement("h5");
        let msgDiv = document.createElement("div");
    
        let msgContainer = document.createElement("div");
        msgContainer.className = "msgContainer";

        msg.textContent = "You don't have any saved brackets";

        msgDiv.appendChild(msg);
        msgContainer.appendChild(msgDiv);

        historyContainer.appendChild(msgContainer);

        db.close();
    }

    request.onsuccess = function() {
        
        const db = request.result;

        const transaction = db.transaction("brackets", "readwrite");

        const store = transaction.objectStore("brackets");

        // Get all stored bracketss
        const bracketQuery = store.getAll();
        
        bracketQuery.onsuccess = function() {
            //console.log("Logged Brackets", bracketQuery.result)
            // Output brackets
            let recordCount = bracketQuery.result.length;

            for (let i = 0; i < recordCount; i++) {
                //console.log("record: ", bracketQuery.result[i]["type"], bracketQuery.result[i]["name"]);
                let name = bracketQuery.result[i]["name"];
                let date = bracketQuery.result[i]["date"];
                let type = bracketQuery.result[i]["type"];                
                renderBracket(name, type, date);
            }

        };

    }


}

// add edge case msg if no brackets found
// add date, status/time last modified, link to bracket contents (pass id)
// store id of last clicked item/on button click open that bracket
function renderBracket(name, type, date) {
    let historyContainer = document.getElementsByClassName("contentCard")[0];

    let card = document.createElement("div");
    let cardRow = document.createElement("div");
    let cardCol1 = document.createElement("div");
    let cardCol2 = document.createElement("div");

    card.className = "card p-2 mb-3 text-center";
    cardRow.className = "row p-2 m-2";
    cardCol1.className = "col m-2";
    cardCol2.className = "col m-2 p-2 d-flex flex-column justify-content-center align-items-center";

    cardCol1.innerHTML = "<h1>" + name + "</h1>";
    cardCol1.innerHTML += "<p>" + date + " (Created)" + "</p>"
    cardCol2.innerHTML = "<button id='open' class='btn btn-primary p-3'>Open</button>";

    cardRow.appendChild(cardCol1);
    cardRow.appendChild(cardCol2);
    card.appendChild(cardRow);
    historyContainer.appendChild(card);

    //get unique bracket id from database
    //set html id to bracket id
    //then set event listener for each

    document.getElementById("open").addEventListener("click", function() {
        redirect();
    }, false);
}

function redirect() {
    console.log("clicked");
    window.location = "settings.html";
    
    window.onload = () => {
        console.log("name");
    }

    console.log("name");

}