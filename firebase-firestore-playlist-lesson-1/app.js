



//grab a reference to 'players', which will be used as the name to create a collection later
var ref = db.ref('players');


//grab a reference to the 'players' that is a child of(nested inside) the 'players' collection
var ref = db.ref('/players/players');


//use the on() method to retrieve data. This method is taking the event type as "value" and then retrieves the snapshot of the data. add the val() method to the snapshot to gets its value 
ref.on("value", function(snapshot) {
  
  console.log(snapshot.val());
  
}, function(error) {
  
  console.log("Error: " + error.code);
  
});//end error callback function