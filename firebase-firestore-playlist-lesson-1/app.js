



//grab a reference to 'players', which will be used as the name to create a collection later
var ref = db.ref('players');


//grab a reference to the 'players' that is a child of(nested inside) the 'players' collection
var playersRef = db.ref('/players/players');


//manually delete "Maria" from Firebase to get notifications in real time
playersRef.on("child_removed", function(data) {
  //access the value of the 'data' object using the 'val()' method
  var deletedPlayer = data.val();

  console.log(deletedPlayer.name + " has been deleted");

});