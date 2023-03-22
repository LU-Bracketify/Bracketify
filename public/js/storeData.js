// Generate a unique id for each bracket
function generateId() {
    let randomNum = Math.floor(Math.random() * 100);
    let id = Date.now() + randomNum;
    return id;
}

function getCurrentDate() {
    let today = new Date();
    return today.toLocaleString();
}

function dbConnect(id, name, size, type, seed, author, desc, teams, scores) {
    //console.log("clicked");
    //console.log(name);
    //console.log(size);
    const indexedDB =
        window.indexedDB ||
        window.mozIndexedDB ||
        window.msIndexedDB ||
        window.shimIndexedDB;

    const request = indexedDB.open("BracketDB", 1);

    request.onerror = function() {
        console.error("err", this.error);
    };

    // Runs when modified or first instance
    request.onupgradeneeded = function() {
        const db = request.result;
        const bracketStore = db.createObjectStore("brackets", { keyPath: "id" });
        bracketStore.createIndex("brackets_type", ["type"], { unique: false });
        bracketStore.createIndex("brackets_name", ["name"], { unique: false });
        const preferenceStore = db.createObjectStore("preferences", { keyPath: "exists" });
    };

    // Runs after onUpgrade
    request.onsuccess = function() {
        const bracketDb = request.result;
        const bracketTransaction = bracketDb.transaction("brackets", "readwrite");
        const bracketStore = bracketTransaction.objectStore("brackets");

        // For lookup queries
        const nameIndex = bracketStore.index("brackets_name");
        const typeIndex = bracketStore.index("brackets_type");

        //console.log(Date.now());
        //let id = generateId();

        // generate unique/random id
        bracketStore.put({id: id, name: name, size: size, type: type, seed: seed, author: author, desc: desc, date: new Date().toLocaleString(), modified: "false"});
        //store.put({id: 2, type: "Single Elimination", name: "bracket2"});
        
        /*
        // Query db
        const idQuery = store.get(1);
        const nameQuery = nameIndex.getAll(["bracket1"]);
        const typeQuery = typeIndex.getAll(["Single Elimination"]);

        idQuery.onsuccess = function() {
            console.log('idQuery', idQuery.result);
        };

        nameQuery.onsuccess = function() {
            console.log('nameQuery', nameQuery.result);
        };

        typeQuery.onsuccess = function() {
            console.log('typeQuery', typeQuery.result);
        };
        */

        bracketTransaction.oncomplete = function() {
            bracketDb.close();
        };

        const preferenceDb = request.result;

        const preferenceTransaction = preferenceDb.transaction("preferences", "readwrite");
        const preferenceStore = preferenceTransaction.objectStore("preferences");

        const preferenceQuery = preferenceStore.getAll();

        preferenceQuery.onsuccess = function() {
            if (preferenceQuery.result.length == 0) {
                preferenceStore.put({exists: "true", background: "light", sort: "lastModified", size: "50"});
            }
        }

        preferenceTransaction.oncomplete = function() {
            preferenceDb.close();
        };
        
    };

}

//name, type, id, author, desc, seed, size, teams, scores, seeds
function dbUpdate(record, bracketR) {
    const request = indexedDB.open("BracketDB", 1);

    request.onerror = function() {
        console.error("err", this.error);
    };

    // Runs when modified or first instance
    request.onupgradeneeded = function() {
        const db = request.result;
        const bracketStore = db.createObjectStore("brackets", { keyPath: "id" });
        bracketStore.createIndex("brackets_type", ["type"], { unique: false });
        bracketStore.createIndex("brackets_name", ["name"], { unique: false });
        const preferenceStore = db.createObjectStore("preferences", { keyPath: "exists" });
    };

    // Runs after onUpgrade
    request.onsuccess = function() {
        const bracketDb = request.result;
        const bracketTransaction = bracketDb.transaction("brackets", "readwrite");
        const bracketStore = bracketTransaction.objectStore("brackets");

        //bracketStore.put({id: id, name: name, size: size, type: type, seed: seed, author: author, desc: desc, date: new Date().toLocaleString(), modified: "true", teams: teams, scores: scores, seeds: seeds});
        bracketStore.put({id: record.id, name: record.name, size: record.size, type: record.type, seed: record.seed, author: record.author, desc: record.desc, date: new Date().toLocaleString(), modified: "true", bracket: bracketR});

        bracketTransaction.oncomplete = function() {
            bracketDb.close();
        };
    };

    window.location = ("index.html");
}