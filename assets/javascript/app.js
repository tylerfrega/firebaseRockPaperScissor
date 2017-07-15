  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBClJFd_hWokAhlKE9ia5LmK4fWkHqiaak",
    authDomain: "rockpaperscissor-2d4bc.firebaseapp.com",
    databaseURL: "https://rockpaperscissor-2d4bc.firebaseio.com",
    projectId: "rockpaperscissor-2d4bc",
    storageBucket: "rockpaperscissor-2d4bc.appspot.com",
    messagingSenderId: "164087897371"
  };
  firebase.initializeApp(config);
 

  var database = firebase.database();
  var ref = database.ref('players');
  var numberOfPlayers = 0;
  var ties = 0;

     var playerOne = {
        
        name: '',
        wins: 0,
        losses: 0,
        choice: ''
    };

      var playerTwo = {
    
        name: '',
        wins: 0,
        losses: 0,
        choice: ''
    };



 $('#submit').on('click', function(){


  if(numberOfPlayers === 0){
      playerOne.name = name = $('.input').val().trim();

      ref.set({

        playerOne: playerOne
      });
     // $('#playerOneDiv').html('player one: ' + playerOne.name)
      numberOfPlayers++;

  }else if(numberOfPlayers === 1){
      playerTwo.name = name = $('.input').val().trim();

      ref.set({
        playerOne: playerOne,
        playerTwo: playerTwo
      });
      
     // $('#playerTwoDiv').html('player two: ' + playerTwo.name)
      numberOfPlayers++;
  }else if (numberOfPlayers > 1){
    alert('there are already 2 players playing');
  }

  });

//  ref.on('value', getKeys)



// function getKeys(data){

//  var players = data.val(); 
//  var keys = Object.keys(players);
//   console.log(keys);


//    }


ref.on('value', function(snapshot){
  console.log(snapshot.val().playerOne)
  
if(snapshot.child('playerOne').exists() && snapshot.child('playerTwo').exists()){

  $('#playerOneName').html('Player 1: ' + snapshot.val().playerOne.name);
  $('#playerOneScore').html('Player 1 wins: ' + snapshot.val().playerOne.wins + ' player 1 losses ' + snapshot.val().playerOne.losses );

  $('#playerTwoName').html('Player 2: ' + snapshot.val().playerTwo.name);
  $('#playerTwoScore').html('Player 2 wins: ' + snapshot.val().playerTwo.wins + ' player 2 losses ' + snapshot.val().playerTwo.losses );

}
if(snapshot.val().playerOne.choice === 'r'){
  console.log('tits');
}
})

$('#win').on('click', function(){
  playerOne.choice = 'r';
  ref.set({
    playerOne:playerOne,
    playerTwo: playerTwo

  })
})

var rock = $('#rock');
var paper = $('#paper');
var scissor = $('#scissor');

$('butt')




//game logic


    if ((playerOne.choice === "r") && (playerTwo.choice === "p")){
          playerTwo.wins++;
        }
        else if ((playerOne.choice === "p") && (playerTwo.choice ==="r")){
          playerOne.wins++;
        }
        else if ((playerOne.choice === "s") && (playerTwo.choice === "p")){
          playerOne.wins++;
        }
        else if ((playerOne.chice === "p") && (playerTwo.choice === "s")){
          playerTwo.wins++;
        }
        else if ((playerOne.choice === "s") && (playerTwo.choice === "r")){
          playerTwo.wins++;
        }
        else if ((playerOne.choice === "r") && (playerTwo.choice === "s")){
          playerOne.wins++;
        }
        else if (playerOne.choice === playerTwo.choice){
          ties++;
        }