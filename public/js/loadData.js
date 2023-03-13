// Summary view of saved brackets

window.onload = getRecords();

// Query DB
function getRecords() {
    console.log("running");
    
    let request = indexedDB.open("BracketDB");
    request.onupgradeneeded = function(e) {
        e.target.transaction.abort();
        noRecordsFound();
    }

    request.onsuccess = function() {
        
        const db = request.result;

        const transaction = db.transaction("brackets", "readwrite");

        const store = transaction.objectStore("brackets");

        // Get all stored bracketss
        const bracketQuery = store.getAll();
        
        bracketQuery.onsuccess = function() {
            let recordCount = bracketQuery.result.length;

            if (recordCount == 0) {
                noRecordsFound();
            }
            else {
                const preferenceDb = request.result;
                const preferenceTransaction = preferenceDb.transaction("preferences", "readwrite");
                const preferenceStore = preferenceTransaction.objectStore("preferences");
                const preferenceQuery = preferenceStore.getAll();
                preferenceQuery.onsuccess = function() {
                    let type = preferenceQuery.result[0]["sort"];

                    if (type == "alphabetically") {
                        bracketQuery.result.sort(function (a,b) {
                            if (a["name"].toLowerCase() < b["name"].toLowerCase()) return -1;
                            if (a["name"].toLowerCase() > b["name"].toLowerCase()) return 1;
                            return 0;
                        });
                    }
                    else if (type == "lastModified") {
                        bracketQuery.result.sort(function (a,b) {
                            if (a["date"] < b["date"]) return 1;
                            if (a["date"] > b["date"]) return -1;
                            return 0;
                        });
                    }
                    for (let i = 0; i < recordCount; i++) {
                        let name = bracketQuery.result[i]["name"];
                        let date = bracketQuery.result[i]["date"];
                        let type = bracketQuery.result[i]["type"];
                        let id = bracketQuery.result[i]["id"];
                        let author = bracketQuery.result[i]["author"];
                        let desc = bracketQuery.result[i]["desc"];
                        let modified = bracketQuery.result[i]["modified"];
                        renderBracket(name, type, date, id, author, desc, modified);
                    }
                };
            }
        };
    }
}

function noRecordsFound() {
    console.log("You don't have any saved brackets");

    let msg = document.createElement("h5");
    msg.className = "text-center";
    msg.id = "noBracketsMsg"
    msg.textContent = "You don't have any saved brackets";

    let msgDiv = document.createElement("div");
    msgDiv.className = "text-center";
    msgDiv.appendChild(msg);

    let msgContainer = document.createElement("div");
    msgContainer.className = "msgContainer";
    msgContainer.appendChild(msgDiv);

    let historyContainer = document.getElementsByClassName("contentCard")[0];
    historyContainer.setAttribute("style", "display: flex; flex-direction: column; height:100%;");
    historyContainer.appendChild(msgContainer);

}

let ids = [];
function renderBracket(name, type, date, id, author, desc, modified) {
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

    cardCol1.innerHTML = "<h2>" + name + "</h2>";
    if (author != "") {
        cardCol1.innerHTML += "<h5>By " + author + "</h5>";
    }
    if (modified == "true") {
        cardCol1.innerHTML += "<h5>Modified on " + date + "</h5>";
    }
    else {
        cardCol1.innerHTML += "<h5>Created on " + date + "</h5>";
    }
    if (desc != "") {
        cardCol1.innerHTML += "<p>" + desc + "</p>";
    }
    
    cardCol2.innerHTML = "<button class='btn btn-primary p-3 open'>Open</button>";

    cardRow.appendChild(cardCol1);
    cardRow.appendChild(cardCol2);
    card.appendChild(cardRow);
    historyContainer.appendChild(card);

    let editLink = document.getElementsByClassName("open");

    for (let i = 0; i < editLink.length; i++)
    editLink[i].addEventListener("click", function() {
        
        let request = indexedDB.open("BracketDB");
        request.onerror = function() {
            console.error("err", this.error);
        };
        request.onupgradeneeded = function(e) {
            e.target.transaction.abort();
        }
        request.onsuccess = function() {
            const db = request.result;
            const transaction = db.transaction("brackets", "readwrite");
            const store = transaction.objectStore("brackets");
            alert("test?");
            store.put({id: id, name: name, size: size, type: type, seeded: seed, scored: scored, author: author, desc: desc, date: new Date().toLocaleString(), modified: "true"});
            alert("it's not reaching here");
            transaction.oncomplete = function() {
                db.close();
            };
        }

        redirect(ids[i]);
    }, false);
}

function redirect(id) {
    console.log("clicked");
    window.location = `edit.php?id=${id}`;
}