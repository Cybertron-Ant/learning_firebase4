



//grab a reference to 'players', which will be used as the name to create a collection later
var ref = db.ref('players');


//grab a reference to the 'players' that is a child of(nested inside) the 'players' collection
var ref = db.ref('/players/players');


// 'child_added' event type will be triggered once for every player and every time a new player is added to my data. It is useful for reading list data because I get access to the currently added player and previous player from the database
ref.on("child_added", function(data, prevChildKey) {
  
  //grab a reference to the 'data' object
  var newPlayer = data.val();
  
  console.log("name: " + newPlayer.name);
  console.log("age: " + newPlayer.age);
  console.log("number: " + newPlayer.number);
  console.log("Previous Player: " + prevChildKey);
  
});// end child_added event