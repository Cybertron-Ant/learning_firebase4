



//grab a reference to 'players', which will be used as the name to create a collection later
var ref = db.ref('players');


//grab a reference to the 'players' that is a child of(nested inside) the 'players' collection
var playersRef = db.ref('/players/players');


//attach a callback function for the 'value' event
playersRef.on("value", function(data) {

   //access the value of the 'data' object using the 'val()' method
   console.log(data.val());

}, function (error) {

   console.log("Error: " + error.code);

});


//use the off() method. This will remove all callbacks with the 'value' event type
playersRef.off("value");