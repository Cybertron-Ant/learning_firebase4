



//grab a reference to 'players', which will be used as the name to create a collection later
var ref = db.ref('players');


//grab a reference to the 'players' that is a child of(nested inside) 'players', using the 'child' method
var playersRef = ref.child("players");


// I can get any key from Firebase by using the key() method. if I want to get the collection name
var playersKey = playersRef.key();

console.log(playersKey);