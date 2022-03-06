



//grab a reference to 'players', which will be used as the name to create a collection later
//var ref = db.ref('players');


//define variables to hold email and password
var email = "myemail@email.com";
var password = "mypassword";


//I can logout the user with the signOut() method.
firebase.auth().signOut().then(function() {
  console.log("Logged out!")
}, function(error) {
  
  console.log(error.code);
  console.log(error.message);
  
});//end sign out