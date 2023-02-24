<nav class="navbar navbar-expand-lg navbar-light border border-secondary p-2 m-0">
    <a class="navbar-brand" href="index.html">Bracketify</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item">
            <a <?php if ($CURRENT_PAGE == "Index") {?>class="nav-link active"<?php }?> class="nav-link" href="index.php">Home <span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
            <a <?php if ($CURRENT_PAGE == "Bracket") {?>class="nav-link active"<?php }?> class="nav-link" href="bracket.php">Create Bracket</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Scoring</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Prediction</a>
        </li>
    </div>
</nav>
