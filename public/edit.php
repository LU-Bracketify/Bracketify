


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="Create your free bracket today!">
    <meta name="keywords" content="Bracket, Tournament, Round Robin">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="manifest" href="manifest.json">
    <link rel="apple-touch-icon" type="image/png" href="images/apple-touch-icon.png">
    <link rel="icon" type="image/png" href="images/apple-touch-icon.png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
        integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
    <script src="./edit.js"></script>
    <title>Bracketify | Edit</title>
</head>

<body>
    <ul class="nav p-2 justify-content-center bg-dark" id="navbar">
        <li class="nav-item">
            <a class="nav-link" href="index.html" title="Home">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-house"
                    viewBox="0 0 16 16">
                    <path
                        d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                </svg>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="newBracket.html" title="New">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                    class="bi bi-plus-square" viewBox="0 0 16 16">
                    <path
                        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="settings.html" title="Settings">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-gear"
                    viewBox="0 0 16 16">
                    <path
                        d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                    <path
                        d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                </svg>
            </a>
        </li>
    </ul>

    <div class="mainContainer" onload="generatePage()">
        <div class="container text-center pb-3">
            <h2 class="p-3 border-top border-bottom" id="title">Edit</h2>
        </div>
        <!-- <div class="cardContainer">
            <div class="row row-cols-1 row-cols-md-4" id="form">
                <div class="card-deck">
                    <h2 class="p-3 border-top border-bottom">Round 1</h2>
                    <div class="card p-2 mb-3 text-center">
                        <div class="row p-2 m-2">
                            <div class="col m-2">
                                <h1 class="small-view" id="r1 g1 a0">Team 1</h1>
                                <p class="bigger-view" id ="r1 g1 a1">Score</p>
                            </div>
                            <div class="col m-2">
                                <h1 class="small-view" id="r1 g1 a2">Team 2</h1>
                                <p class="bigger-view" id="r1 g1 a3">Score</p>
                            </div>
                            <div class="col m-2 p-2 d-flex flex-column justify-content-center align-items-center">
                                <button class="btn btn-primary p-3" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">Open</button>
                            </div>
                        </div>
                    </div>
                    <div class="card p-2 mb-3 text-center">
                        <div class="row p-2 m-2">
                            <div class="col m-2">
                                <h1 class="small-view" id="r1 g2">Team 3</h1>
                                <p class="bigger-view" id="r1 g2">Score</p>
                            </div>
                            <div class="col m-2">
                                <h1 class="small-view" id="r1 g2">Team 4</h1>
                                <p class="bigger-view" id="r1 g2">Score</p>
                            </div>
                            <div class="col m-2 p-2 d-flex flex-column justify-content-center align-items-center">
                                <button type="button" class="btn btn-primary p-3" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">Open</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-deck">
                    <h2 class="p-3 border-top border-bottom">Round 2</h2>
                    <div class="card p-2 mb-3 text-center">
                        <div class="row p-2 m-2">
                            <div class="col m-2">
                                <h1 class="small-view" id="r2 g1">Team 1</h1>
                                <p class="bigger-view" id="r2 g1">Score</p>
                            </div>
                            <div class="col m-2">
                                <h1 class="small-view" id="r2 g1">Team 4</h1>
                                <p class="bigger-view" id="r2 g1">Score</p>
                            </div>
                            <div class="col m-2 p-2 d-flex flex-column justify-content-center align-items-center">
                                <button type="button" class="btn btn-primary p-3" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">Open</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-deck">
                    <h2 class="p-3 border-top border-bottom">Winner</h2>
                    <div class="card p-2 mb-3 text-center">
                        <div class="row p-2 m-2">
                            <div class="col m-2 p-2 d-flex flex-column justify-content-center align-items-center">
                                <h1 class="small-view" id="r3 g1">Team 1</h1>
                            </div>
                            <div class="col m-2 p-2 d-flex flex-column justify-content-center align-items-center">
                                <button type="button" class="btn btn-primary p-3" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">Open</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="top">
                                <label>Team Name</label>
                                <input type="text" name="Team Name" id="team1" required>
                                <label>Score</label>
                                <input type="text" name="Score" id="score1" required>
                            </div>
                            <div class="bottom">
                                <label>Team Name</label>
                                <input type="text" name="Team Name" id="team2" required>
                                <label>Score</label>
                                <input type="text" name="Score" id="score2" required>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button
                                onclick="changeElemModal(document.getElementById('team1').value,document.getElementById('score1').value,document.getElementById('team2').value,document.getElementById('score2').value)"
                                type="button" class="btn btn-primary" data-bs-dismiss="modal" id="save">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="scrollbar">
                    <div class="handle"></div>
                </div>
            </div>
        </div>
    </div>
    <script>

        // window.onload = generatePage();
        //     // Parse url params
        //     //const queryStr = window.location.search;
        //     //console.log(queryStr.split('='));
        //     //let params = queryStr.split('=');
        //     //let id = params[1];
        //     //console.log(id);

        //     //Get last id stored in database



        // }
    </script>
    <script>
        // Register SW
        if ('serviceWorker' in navigator) {
            window.addEventListener("load", () => {
                navigator.serviceWorker.register('sw.js').then(reg => {
                    console.log("sw registered");
                }).catch(error => {
                    console.log("err");
                });
            });
        }
    </script>
</body>

</html>
<!-- ======= -->
        <?php 

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $name = $_POST["nameInput"];
            $size = $_POST["size"];
            $type = $_POST["type"];
            $seeded = isset($_POST["seeded"]);
            $scored = isset($_POST["scored"]);
            $author = $_POST["author"];
            $desc = $_POST["desc"];


            if ($scored == "") {
                $scored = false;
            }

            if ($seeded == "") {
                $seeded = false;
            } 

            $formData = json_encode(
                array("name"    => $name, 
                      "size"    => $size,
                      "type"    => $type,
                      "seeded"  => $seeded,
                      "scored"  => $scored,
                      "author"  => $author,
                      "desc"    => $desc
            ));

            // Insert data
            echo "<script>
                function upload(bracketData) {
                    let id = generateId();
                    document.write(bracketData.name);
                    document.write(bracketData.size);
                    document.write(bracketData.seeded);
                    document.write(bracketData.scored);
                    document.write(bracketData.author);
                    document.write(bracketData.desc);
                    console.log(generateId());
                    
                    dbConnect(id, bracketData.name, bracketData.size, bracketData.type, bracketData.seeded, bracketData.scored, bracketData.author, bracketData.desc);
                }
                upload($formData);
                </script>";
        } 

        ?>

<!-- >>>>>>> cfbdf653ea45b64b132eaac06066336264ec7739:public/edit.php -->
</body>

</html>