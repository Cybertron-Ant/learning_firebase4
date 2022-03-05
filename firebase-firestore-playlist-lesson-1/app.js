



//grab a reference to 'players', which will be used as the name to create a collection later
var ref = db.ref('players');


//grab a reference to the 'players' collection and call the 'child' method on it
//the 'child' method will nest the 'players' inside the 'players' collection as a child of it
var playersRef = ref.child('players');


//The push() method will create a unique id when the data is pushed. If I want to create my players with a unique id, under the nested 'players'
playersRef.push({
  name: "John",
  number: 1,
  age: 30
});

playersRef.push({
  name: "Amanda",
  number: 2,
  age: 20
});