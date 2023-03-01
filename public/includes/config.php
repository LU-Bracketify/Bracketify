<?php
$path = $_SERVER["SCRIPT_NAME"]; 
$page=basename($path);
switch($page) {
    case "bracket.php":
        $CURRENT_PAGE = "Bracket"; 
        $PAGE_TITLE = "Bracketify | Create Bracket";
        break;
    default:
        $CURRENT_PAGE = "Index";
        $PAGE_TITLE = "Bracketify | Home";
}
?>