// Summary view of saved brackets

window.onload = getRecords();

// Query DB
function getRecords() {
    console.log("running");
    
    let db = true;
    let request = indexedDB.open("BracketDB");
    request.onupgradeneeded = function(e) {
        e.target.transaction.abort();
        db = false;

        console.log("You don't have any saved brackets");
        let historyContainer = document.getElementsByClassName("contentCard")[0];
        historyContainer.setAttribute("style", "display: flex; flex-direction: column; height:100vh;");

        let msg = document.createElement("h5");
        let msgDiv = document.createElement("div");
    
        let msgContainer = document.createElement("div");
        msg.className = "text-center";
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
            let recordCount = bracketQuery.result.length;

            for (let i = 0; i < recordCount; i++) {
                let name = bracketQuery.result[i]["name"];
                let date = bracketQuery.result[i]["date"];
                let type = bracketQuery.result[i]["type"];  
                let id = bracketQuery.result[i]["id"];              
                renderBracket(name, type, date, id);
            }

        };

    }


}

let ids = [];
function renderBracket(name, type, date, id) {
    let historyContainer = document.getElementsByClassName("contentCard")[0];

    ids.push(id);

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
    cardCol2.innerHTML = "<button class='btn btn-primary p-3 open'>Open</button>";

    cardRow.appendChild(cardCol1);
    cardRow.appendChild(cardCol2);
    card.appendChild(cardRow);
    historyContainer.appendChild(card);

    let editLink = document.getElementsByClassName("open");

    for (let i = 0; i < editLink.length; i++)
    editLink[i].addEventListener("click", function() {
        redirect(ids[i]);
    }, false);
}

function redirect(id) {
    console.log("clicked");
    window.location = `edit.php?id=${id}`;
}

