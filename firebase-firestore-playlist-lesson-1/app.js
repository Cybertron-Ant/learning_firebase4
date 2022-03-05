



//grab a reference to 'players', which will be used as the name to create a collection later
var ref = db.ref('players');


// I can update the Firebase data. Notice how I amusing the 'players/john' path
var johnRef = db.ref("players/John");


//call the 'update' method and set the 'number' key to a new value
johnRef.update ({
   "number": 10
});