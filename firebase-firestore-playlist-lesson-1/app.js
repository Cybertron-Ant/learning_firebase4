



//grab a reference to 'players', which will be used as the name to create a collection later
var ref = db.ref('players');


//grab a reference to the 'players' that is a child of(nested inside) the 'players' collection
var playersRef = db.ref('/players/players');


//I must manually hange "Bob" to "Maria" in Firebase to get the update. 'child_changed' event type is triggered when the data has changed
playersRef.on("child_changed", function(data) {
  
  //access the value of the 'data' object using the 'val()' method
  var player = data.val();
  
  console.log("The updated player name is " + player.name);
  
});