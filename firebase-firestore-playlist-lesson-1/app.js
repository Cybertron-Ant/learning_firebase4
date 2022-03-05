



//grab a reference to 'players', which will be used as the name to create a collection later
var ref = db.ref('players');


//grab a reference to the 'age' of 'Amanda' from the collection
 var amandaAgeRef = ref.child("players").child("-MxQcXJBDbSbE5hTc89O").child('age');console.log(amandaAgeRef)