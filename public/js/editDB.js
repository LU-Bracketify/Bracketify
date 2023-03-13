// params = id from search params or generated id
function retrieveRecord(id) {
    let record = "";
    
    let request = indexedDB.open("BracketDB");
    request.onupgradeneeded = function(e) {
        e.target.transaction.abort();
    }

    request.onsuccess = function() {
        
        const db = request.result;

        const transaction = db.transaction("brackets", "readwrite");

        const store = transaction.objectStore("brackets");

        const bracketQuery = store.get(id);
        
        bracketQuery.onsuccess = function() {
            record = bracketQuery.result;
            console.log("RECORD: ", record);

            return record;
        };
    }

    return record;
    
}

// Modify record
function updateRecord(id) {

}