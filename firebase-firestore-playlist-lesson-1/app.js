



//grab a reference to 'players', which will be used as the name to create a collection later
var ref = db.ref('players');


//grab a reference to the 'age' of 'Amanda' from the collection
 var amandaAgeRef = ref.child("players").child("-MxQcXJBDbSbE5hTc89O").child('age');
 
 
// use the 'transaction' method, that takes a function as its argument to return the current age, add one year to it, and update the collection
amandaAgeRef.transaction(function(currentAge) {
   return currentAge + 1;
});

