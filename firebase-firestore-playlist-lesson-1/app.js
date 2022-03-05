



//grab a reference to 'players', which will be used as the name to create a collection later
var ref = db.ref('players');

//The 'set' method will write or replace data on a specified path. create a reference to the "player’s" collection and set two players
ref.set({
  John: {
    number: 1,
    age: 30
  },

  Amanda: {
    number: 2,
    age: 20
  }
});