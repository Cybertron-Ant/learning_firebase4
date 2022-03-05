



//grab a reference to 'players', which will be used as the name to create a collection later
var ref = db.ref('players');


//grab a reference to the 'players' collection and call the 'child' method on it
//the 'child' method will nest the 'players' inside the 'players' collection as a child of it
var playersRef = ref.child('players');