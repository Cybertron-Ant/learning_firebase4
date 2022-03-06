



//grab a reference to 'players', which will be used as the name to create a collection later
var ref = db.ref('players');


//grab a reference to the 'players' that is a child of(nested inside) the 'players' collection
var playersRef = db.ref('/players/players');


// chain the 'orderByValue' method
playersRef.orderByValue().on("value", function(data) {

  //call the 'val' method one the 'data' object
  console.log(data.val());

});