var config = {
        apiKey: "AIzaSyAIvnlSlkYyfF5VBt9l65BesfA85UFoAqs",
        authDomain: "trainscheduler-17daa.firebaseapp.com",
        databaseURL: "https://trainscheduler-17daa.firebaseio.com",
        projectId: "trainscheduler-17daa",
        storageBucket: "trainscheduler-17daa.appspot.com",
        messagingSenderId: "1063664501973"
};

// $(document).ready(function() {
//console.log('hello');

firebase.initializeApp(config);
var trainData = firebase.database();
console.log(trainData);

$("#add-train-btn").on("click", function () {

    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firstTrain = $("#first-train-input").val().trim();
    var frequency = $("#frequency-input").val().trim();
    console.log(trainName);

    var newTrain = {
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
    };

    trainData.ref().push(newTrain);
    console.log(newTrain.trainName);
    return false;
});

   // database.ref().on("value", function (childSnapshot) {
        //console.log('working', name.val());

      //  $('placetoPutStuff').append('<h1>' + name + '</h1>');
    





    // FUNCTIONS + EVENTS
    // --------------------------------------------------------------------------------

    //$("#click-button").on("click", function() {
      //database.ref().set({
      //});
    //});

    // MAIN PROCESS + INITIAL CODE
    // --------------------------------------------------------------------------------

    //});

//}