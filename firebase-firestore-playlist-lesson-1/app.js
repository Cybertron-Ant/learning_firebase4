



//grab a reference to 'players', which will be used as the name to create a collection later
var ref = db.ref('players');


//grab a reference to the last player in the 'players' that is a child of(nested inside) the 'players' collection
var lastPlayerRef = firebase.database().ref("/players/players").limitToLast(1);
