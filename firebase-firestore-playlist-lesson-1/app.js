



//grab a reference to 'players', which will be used as the name to create a collection later
var ref = db.ref('players');


//grab a reference to the 'players' that is a child of(nested inside) the 'players' collection
var playersRef = db.ref('/players/players');


// chain the 'orderByKey' method
playersRef.orderByKey().on("child_added", function(data) {

   //access the 'key' property from the 'data' object
   console.log(data.key);

});