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
