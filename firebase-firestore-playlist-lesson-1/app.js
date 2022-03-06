



//grab a reference to 'players', which will be used as the name to create a collection later
var ref = db.ref('players');


//grab a reference to the 'players' that is a child of(nested inside) the 'players' collection
var playersRef = firebase.database().ref("/players/players");


//use the startAt method and chain the on() method to retrieve data. This method is taking the event type as "value" and then retrieves the snapshot of the data. order elements by name and filter from the player with the name Amanda, and end at John, alphabetically.
playersRef.orderByChild("name").startAt("Amanda").on("child_added", function(data) {

  //access the value of the 'data' object using the 'val()' method, then access its 'name' property
  console.log("Start at filter: " + data.val().name);

});