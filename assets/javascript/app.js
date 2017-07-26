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
  var numberOfPicks = 0;

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

  
if(snapshot.child('playerOne').exists() && snapshot.child('playerTwo').exists()){

  $('#playerOneName').html('Player 1: ' + snapshot.val().playerOne.name);
  $('#playerOneScore').html('wins: ' + snapshot.val().playerOne.wins + '  losses: ' + snapshot.val().playerOne.losses );

  $('#playerTwoName').html('Player 2: ' + snapshot.val().playerTwo.name);
  $('#playerTwoScore').html('wins: ' + snapshot.val().playerTwo.wins + ' losses ' + snapshot.val().playerTwo.losses );
 
  $('#playerOneChoice').html('Pick ' + snapshot.val().playerOne.choice);
  $('#playerTwoChoice').html('Pick ' + snapshot.val().playerTwo.choice);

}




var rock = $('#rock');
var paper = $('#paper');
var scissor = $('#scissor');


$('#rock').on('click', makePicks);
$('#paper').on('click', makePicks);
$('#scissor').on('click', makePicks);


});

function makePicks(){

  if(numberOfPicks === 0){
     playerOne.choice = $(this).val();

     database.ref('players/playerOne').update({
      choice: playerOne.choice

    });

    numberOfPicks++;

  }else if(numberOfPicks === 1){
    playerTwo.choice = $(this).val();

    database.ref('players/playerTwo').update({
      choice: playerTwo.choice

    });
    numberOfPicks++;

    if(numberOfPicks === 2){
      game();
      updateScores();
      
    }

  }

}

function updateScores(){
  database.ref('players/playerOne').update({
        choice: '',
        wins: playerOne.wins,
        losses:playerOne.losses,

      });
      database.ref('players/playerTwo').update({
        choice: '',
        wins: playerTwo.wins,
        losses:playerTwo.losses
      });
}



console.log(numberOfPicks);



//game logic
 function game(){
  console.log('it ran');
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
          $('#ties').html('Ties: ' + ties);
        }
        
      };



























