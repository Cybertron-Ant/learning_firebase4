



//grab a reference to 'players', which will be used as the name to create a collection later
var ref = db.ref('players');


//grab a reference to the last player in the 'players' that is a child of(nested inside) the 'players' collection
var lastPlayerRef = firebase.database().ref("/players/players").limitToLast(1);


//use the on() method to retrieve data. This method is taking the event type as "value" and then retrieves the snapshot of the data
lastPlayerRef.on("value", function(data) {

  //access the value of the 'data' object using the 'val()' method
  console.log(data.val());

}, function(error) {

  console.log("Error: " + error.code);

});