// params = id from search params or generated id
function retrieveRecord(id) {
    return new Promise ((resolve, reject)=> {
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
            
            bracketQuery.onsuccess = async function() {
                //console.log(bracketQuery.result["author"]);
                record = bracketQuery.result;
                //console.log(record);
                //return record;
                resolve(record);
            };
        }
    
        //return record;
    });

}

// Modify record
function updateRecord(id) {

}