



//grab a reference to the 'root' collection/directory, the database itself
var ref = firebase.database().ref();


//grab a reference to the 'ratings2' collection, will create it if it doesn't exist, and call the 'child' method on it
var ratingsRef = ref.child("ratings2");


//use the 'set' method will write or replace data on a specified path
ratingsRef.set({
   
      Amanda: 11,
      Bob: 8,
      John: 10  
   
});//end set method