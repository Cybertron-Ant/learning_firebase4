



//grab a reference to the 'root' collection/directory, the database itself
var ref = firebase.database().ref();


//grab a reference to the 'ratings2' collection, will create it if it doesn't exist, and call the 'child' method on it
var ratingsRef = ref.child("ratings2");