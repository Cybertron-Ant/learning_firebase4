



//grab a reference to 'players', which will be used as the name to create a collection later
//var ref = db.ref('players');


//grab a reference to the 'players' that is a child of(nested inside) the 'players' collection
var playersRef = firebase.database().ref("/players/players");


//use the startAt method and chain the on() method to retrieve data ordered by "age". This method is taking the event type as "child_added" and then retrieves the snapshot of the data. Instead of string, I am passing the number inside the startAt() method since age is represented by a number value
playersRef.orderByChild("age").startAt(22).on("child_added", function(data) {

  //access the value of the 'data' object using the 'val()' method, then access its 'name' property
  console.log("Age filter: " + data.val().name);

});