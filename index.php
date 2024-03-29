<!DOCTYPE html>
<html>
<head>
    <title>Train Scheduler</title>
    <meta charset="UTF-8">
    <meta name="description" content="Train Scheduler">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<!--Reset css file-->
	<!--<link rel="stylesheet" type="text/css" href="assets/css/reset.css">-->

	<!--Bootstrap CDN link-->
	
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
	<!-- css link file-->
	<link rel='stylesheet' href='assets/css/style.css'>


	<!--Google Fonts-->
    <link href="https://fonts.googleapis.com/css?family=Anton&display=swap" rel="stylesheet">

	<!--JQuery link-->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

           
  	<!-- Added Moment JS -->
	  <script src="https://cdn.jsdelivr.net/momentjs/2.12.0/moment.min.js"></script>
	  
	  
	<!--Firebase Javascript link-->
    <script src="https://www.gstatic.com/firebasejs/6.1.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.1.1/firebase-database.js"></script>

</head>

<body>
    <div class='container'>
        <div class='jumbotron'>
                
                <h3 class='center-align'>Fictitious Train Schedule</h3></div>
        </div>
        <div>
            <!-- Display Panel -->
            <div class='card-panel trainInfo'>
                <h4 class='center-align'>Current Train Schedule</h4>
                <table class="table striped center bordered responsive-table" id='trainTable'>
                    <thead>
                        <tr>
                            <th>Train Name</th>
                            <th>Destination</th>
                            <th>Frequency (minutes)</th>
                            <th>Next Arrival</th>
                            <th>Minutes Away</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- Info Submission Panel -->
        <div>
            <div class='card-panel'>
                <h4 class='center-align'>Add Your Train</h4>
                <form>
                    <div class="input-field col s12">
                        <input type="text" class="validate" id="trainNameInput">
                        <label for="">Train Name</label>
                    </div>
                    <div class="input-field col s12">
                        <input type="text" class="validate" id="destinationInput">
                        <label for="">Destination</label>
                    </div>
                    <div class="input-field col s12">
                        <input type="time" class="validate" id="firstInput">
                        <label class='active' for="">First Train (HH:mm Military Time)</label>
                    </div>
                    <div class="input-field col s12">
                        <input type="number" class="validate" id="frequencyInput">
                        <label for="">Frequency (minutes)</label>
                    </div>
                    <button type="submit" class="btn orange accent-3" id="addTrainBtn">Submit</button>
                </form>
            </div>
        </div>
    </div>
    <script type='text/javascript' src='assets/JavaScript/logic.js'></script>
</body>

</html>