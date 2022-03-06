



//grab a reference to 'players', which will be used as the name to create a collection later
//var ref = db.ref('players');


//define variables to hold email and password
var email = "myemail@email.com";
var password = "mypassword";


//sign-in a user using the signInWithEmailAndPassword(email, password) method  
var login = firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  
  console.log(error.code);
  console.log(error.message);
  
});//end sign in


//check if user has logged in successfully
if (login) {
  console.log('Login Success');
}