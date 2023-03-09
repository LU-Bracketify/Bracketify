function getData() {
    console.log("get data");
    let GET = {};
    let query = window.location.search.substring(1).split("&");
    for (let i = 0, max = query.length; i < max; i++) {
        if (query[i] === "") {
            continue;
        }
    
        var param = query[i].split("=");
        GET[decodeURIComponent(param[0])] = decodeURIComponent(param[1] || "");
    }

    redirect();
}

function redirect() {
    console.log("clicked");
    window.location = "edit.html";
    
    window.onload = () => {
        console.log("redirect");
    }
}



