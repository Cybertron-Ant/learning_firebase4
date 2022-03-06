



//grab a reference to 'players', which will be used as the name to create a collection later
var ref = db.ref('players');


//grab a reference to the 'players' that is a child of(nested inside) the 'players' collection
var playersRef = db.ref('/players/players');


//To order data by 'name'. I will see names in the alphabetic order.
playersRef.orderByChild("name").on("child_added", function(data) {

  //access the value of the 'data' object using the 'val()' method, then access its 'name' property
  console.log(data.val().name);

});