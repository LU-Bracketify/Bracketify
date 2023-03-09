
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("serviceWorker.js")
            .then(reg => console.log("service worker registered"))
            .catch(error => console.log("service worker not registered", error))
    })
}
