// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAArAFUgibERidxQWsdWRtsXL2ZBSeNZ2c",
    authDomain: "train-schedule-aab80.firebaseapp.com",
    databaseURL: "https://train-schedule-aab80.firebaseio.com",
    projectId: "train-schedule-aab80",
    storageBucket: "train-schedule-aab80.appspot.com",
    messagingSenderId: "995462235338",
    appId: "1:995462235338:web:97d850da16663602"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// Assign the reference to the database to a variable named 'database'
// var database = ...

var database = firebase.database();

//Initial variable paramaters
//Add child snapshots:
database.ref().on("child_added", function(childSnap) {

  var name = childSnap.val().name;
  var destination = childSnap.val().destination;
//  var firstTrain = childSnap.val().firstTrain;
  var frequency = childSnap.val().frequency;
  var min = childSnap.val().min;
  var next = childSnap.val().next;
// Append traintable
  $("#trainTable > tbody").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + next + "</td><td>" + min + "</td></tr>");
});

database.ref().on("value", function(snapshot) {
});
//This is where the values are input from the form
//Kind of like the rock paper scissors game

$("#addTrainBtn").on("click", function() {

  var trainName = $("#trainNameInput").val().trim();
  var destination = $("#destinationInput").val().trim();
  var firstTrain = $("#firstInput").val().trim();
  var frequency = $("#frequencyInput").val().trim();

  //ensures that each input has a value
  if (trainName == "") {
      alert('Enter a train name.');
      return false;
      console.log(trainName);
  }
  if (destination == "") {
      alert('Enter a destination.');
      return false;
      console.log(destination);
  }
 // if (firstTrain == "") {
 //     alert('Enter a first train time.');
 //     return false;
 //     console.log(firstTrain);
 // }
  if (frequency == "") {
      alert('Enter a frequency');
      return false;
      console.log(frequency);
  }


    
});

//Figure out the train frequency calculations here
//See it this works locally

// New Train? :

//  var newTrain = {
//  name: trainName,
//  destination: destination,
//  firstTrain: firstTrain,
//  frequency: frequency,
//  min: minUntilTrain,
//  next: nextTrain
//  }