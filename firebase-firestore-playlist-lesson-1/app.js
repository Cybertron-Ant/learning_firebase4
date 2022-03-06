



//grab a reference to 'players', which will be used as the name to create a collection later
//var ref = db.ref('players');


//define variables to hold email and password
var email = "myemail@email.com";
var password = "mypassword";


//To authenticate a user, we can use the createUserWithEmailAndPassword(email, password) method
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  
   console.log(error.code);
   console.log(error.message);
   
});

