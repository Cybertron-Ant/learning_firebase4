



//grab a reference to 'players', which will be used as the name to create a collection later
//var ref = db.ref('players');


//grab a reference to the 'players' that is a child of(nested inside) the 'players' collection, or a valid collection of my choice
var connectedRef = firebase.database().ref("players/players");