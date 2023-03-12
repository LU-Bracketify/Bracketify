// Generate a unique id for each bracket
function generateId() {
    let randomNum = Math.floor(Math.random() * 100);
    let id = Date.now() + randomNum;
    return id;
}

function getCurrentDate() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    let dateStr = month + "/" + day + "/" + year;

    return dateStr;
}

function dbConnect(id, name, size, type, seed, scored, author, desc) {
    console.log("clicked");
    console.log(name);
    console.log(size);
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
        const store = db.createObjectStore("brackets", { keyPath: "id" });
        store.createIndex("brackets_type", ["type"], { unique: false });
        store.createIndex("brackets_name", ["name"], { unique: false });
    };

    // Runs after onUpgrade
    request.onsuccess = function() {
        const db = request.result;
        const transaction = db.transaction("brackets", "readwrite");
        const store = transaction.objectStore("brackets");

        // For lookup queries
        const nameIndex = store.index("brackets_name");
        const typeIndex = store.index("brackets_type");

        //console.log(Date.now());
        //let id = generateId();

        // generate unique/random id
        store.put({id: id, name: name, size: size, type: type, seeded: seed, scored: scored, author: author, desc: desc, date: getCurrentDate()});
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

        transaction.oncomplete = function() {
            db.close();
        };
        
    };

}

