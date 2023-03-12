function readPreferencesCache() {
    let request = indexedDB.open("BracketDB");

    request.onerror = function() {
        console.error("err", this.error);
    };

    request.onsuccess = function() {
        const db = request.result;
        const transaction = db.transaction("preferences", "readwrite");
        const preferenceStore = transaction.objectStore("preferences");

        const preferenceQuery = preferenceStore.getAll();
        
        preferenceQuery.onsuccess = function() {
            changeBackground(preferenceQuery.result[0]["background"]);
            changeSort(preferenceQuery.result[0]["sort"]);
            changeSize(preferenceQuery.result[0]["size"]);
        }
    };
}

// change background color
function changeBackground(mode) {
    let sliderBackgroundColor;
    if (mode == "light") {
        sliderBackgroundColor = "#d3d3d3"
        document.documentElement.setAttribute('data-bs-theme', 'light');
    }
    if (mode == "dark") {
        sliderBackgroundColor = "#3d3d3d"
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    }

    if (document.getElementById("backgroundInput") != null) {
        document.getElementById("backgroundInput").value = mode;
    }
    
    if (document.getElementById("rangeInput") != null) {
        document.getElementById("rangeInput").style.background = sliderBackgroundColor;
    }
}

function changeSort(type) {
    if (type == "lastModified") {
        // INSERT
    }
    if (type == "alphabetically") {
        // INSERT
    }

    if (document.getElementById("sortInput") != null) {
        document.getElementById("sortInput").value = type;
    }
}

function changeSize(size) {
    // INSERT

    if (document.getElementById("rangeInput") != null) {
        document.getElementById("rangeInput").value = size;
    }
}