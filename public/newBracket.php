<?php
session_start();
$_SESSION['id'] = uniqid();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="Create your free bracket today!">
    <meta name="keywords" content="Bracket, Tournament, Round Robin">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" type="image/png" href="media/icon512.png">
    <link rel="apple-touch-icon" type="image/png" href="media/icon180.png">
    <link rel="manifest" href="manifest.webmanifest">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <script src="js/storeData.js" defer></script>
    <script src="js/preferences.js"></script>
    <title>Bracketify | New</title>
</head>
<body>

    <ul class="nav p-2 justify-content-center bg-dark">
        <li class="nav-item">
            <a class="nav-link" href="index.html" title="Home">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                </svg>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" href="newBracket.php" title="New">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="settings.html" title="Settings">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                </svg>
            </a>
        </li>
    </ul>
    <div class="mainContainer">
        <div class="contentCard">
            <div class="container text-center pb-3">
                <h2 class="p-3 border-top border-bottom">New Bracket</h2>
            </div>
            <form method="post" action="edit.php">
                <div class="mb-3">
                    <label class="form-label" for="nameInput">Bracket Name:</label>
                    <input type="text" class="form-control" name="nameInput" id="nameInput" required>
                </div>

                <div class="mb-3">
                    <label class="form-label" for="sizeInput">Bracket Size:</label>
                    <select class="form-select" name="size" id="sizeInput" required>
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="8" selected>8</option>
                        <option value="16">16</option>
                        <option value="32">32</option>
                        <option value="64">64</option>
                        <option value="128">128</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label class="form-label" for="typeInput">Bracket Type:</label>
                    <select class="form-select" name="bType" id="typeInput" required>
                        <option value="single" selected>Single Elimination</option>
                        <option value="double">Double Elimination</option>
                        <option value="robin">Round Robin</option>
                        <option value="group">Group Stage</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label class="form-label" for="seedInput">Seed Type:</label>
                    <select class="form-select" name="seedType" id="seedInput" required>
                        <option value="none" selected>None</option>
                        <option value="normal">Seed</option>
                        <option value="randomized">Randomized Seed</option>
                    </select>
                </div>

                <hr>

                <div class="mb-3">
                    <label class="form-label" for="authorInput">Author (optional):</label>
                    <input type="text" class="form-control" name="author" id="authorInput">
                </div>

                <div class="mb-3">
                    <label class="form-label" for="descriptionInput">Description (optional):</label>
                    <textarea class="form-control" name="desc" id="descriptionInput" rows="4" cols="30"></textarea>
                </div>
                <!---dbConnect()-->
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
    <script>
        window.onload =() => {
            readPreferencesCache();
            //generateId();
        }
    </script>
</body>
</html>