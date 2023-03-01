<?php include("includes/config.php"); ?>
<?php include("includes/header.php"); ?>

<?php include("includes/nav.php"); ?>

<div class="d-flex flex-row justify-content-center align-items-center text-center p-2 m-0 bg-dark h-100">
    
    <div class="container d-flex flex-column w-25 h-100 border border-secondary rounded text-white">
        <h1 class="border border-secondary rounded p-2 m-2">Customize</h1>
        <label class="text-white mb-2">Bracket Information</label>
        <label class="text-white mb-2">Bracket Name</label>
        <label class="text-white mb-2"># of teams</label>

        <label class="text-white mb-2">Stats</label>

        <label class="text-white mb-2">Select Theme</label>
        <select class="form-select mb-3">
            <option selected value="1">Dark Mode</option>
            <option value="2">Light Mode</option>
        </select>

        <label class="text-white mb-2">Select Bracket Type</label>
        <select class="form-select mb-3">
            <option value="1">Single Elimination</option>
            <option value="2">Double Elimination</option>
            <option selected value="3">Round Robin</option>
            <option value="4">Group Stage</option>
        </select>

        <div class="p-2 m-2">
            <button type="button" class="btn btn-primary">New Bracket</button>
            <button type="button" class="btn btn-secondary">Export Bracket</button>
        </div>

    </div>

    <div class="container w-75 h-100 border border-secondary rounded text-white m-2">
        <h1 class="border border-secondary rounded p-2 m-2">Live View</h1>
        <div class="row m-2 p-2">
            <div class="col m-0 p-0">
                <div class="border border-secondary rounded p-2 m-2 mt-3">
                    <div class="d-flex flex-column">
                        <p class="bg-secondary"><b>1</b> Team X</p>
                        <p class="bg-primary m-0"><b>2</b> Team X</p>
                    </div>
                </div>
                <div class="border border-secondary rounded p-2 m-2 mt-3">
                    <div class="d-flex flex-column">
                        <p class="bg-secondary"><b>3</b> Team X</p>
                        <p class="bg-primary m-0"><b>4</b> Team X</p>
                    </div>
                </div>
                <div class="border border-secondary rounded p-2 m-2 mt-3">
                    <div class="d-flex flex-column">
                        <p class="bg-secondary"><b>5</b> Team X</p>
                        <p class="bg-primary m-0"><b>6</b> Team X</p>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="border border-secondary rounded p-2 m-2 mt-3">
                    <div class="d-flex flex-column">
                        <p class="bg-secondary"><b>7</b> Team X</p>
                        <p class="bg-primary m-0"><b>8</b> Team X</p>
                    </div>
                </div>
                <div class="border border-secondary rounded p-2 m-2 mt-3">
                    <div class="d-flex flex-column">
                        <p class="bg-secondary"><b>9</b> Team X</p>
                        <p class="bg-primary m-0"><b>10</b> Team X</p>
                    </div>
                </div>
                <div class="border border-secondary rounded p-2 m-2 mt-3">
                    <div class="d-flex flex-column">
                        <p class="bg-secondary"><b>11</b> Team X</p>
                        <p class="bg-primary m-0"><b>12</b> Team X</p>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="border border-secondary rounded p-2 m-2 mt-3">
                    <div class="d-flex flex-column">
                        <p class="bg-secondary"><b>13</b> Team X</p>
                        <p class="bg-primary m-0"><b>14</b> Team X</p>
                    </div>
                </div>
                <div class="border border-secondary rounded p-2 m-2 mt-3">
                    <div class="d-flex flex-column">
                        <p class="bg-secondary"><b>15</b> Team X</p>
                        <p class="bg-primary m-0"><b>16</b> Team X</p>
                    </div>
                </div>
                <div class="border border-secondary rounded p-2 m-2 mt-3">
                    <div class="d-flex flex-column">
                        <p class="bg-secondary"><b>17</b> Team X</p>
                        <p class="bg-primary m-0"><b>18</b> Team X</p>
                    </div>
                </div>
            </div>

        </div>
    </div>

</div>

<?php include("includes/footer.php"); ?>