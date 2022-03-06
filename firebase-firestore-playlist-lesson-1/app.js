



//grab a reference to 'players', which will be used as the name to create a collection later
//var ref = db.ref('players');


//grab a reference to the 'ratings2' collection, will create it if it doesn't exist, and call the 'child' method on it
var ratingsRef = ref.child("/ratings2");