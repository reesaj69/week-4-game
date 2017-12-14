$(document).ready (function(){
	//Initalize variables
	var wins = 0;
	var losses = 0;
	var userTotal=0;
	var computerGuess = Math.floor(Math.random() * 101) +19;

	//linking computer generated number to the 
	$('#computerGeneratedNumber').text(computerGuess);


	var basketball = Math.floor(Math.random() * 11) + 1;
	var golfball = Math.floor(Math.random() * 11) + 1;
	var tennisball = Math.floor(Math.random() * 11) + 1;
	var volleyball = Math.floor(Math.random() * 11) + 1;


	//console.log(basketball);
	//console.log(golfball);
	//console.log(tennisball);
	//console.log(volleyball);

	$('#numberOfWins').text(wins);
	$('#numberOfLosses').text(losses);

function reset(){
	var computerGeneratedNumber=Math.floor(Math.random()*101 +19);
	var basketball = Math.floor(Math.random() * 11) + 1;
	var golfball = Math.floor(Math.random() * 11) + 1;
	var tennisball = Math.floor(Math.random() * 11) + 1;
	var volleyball = Math.floor(Math.random() * 11) + 1;
	userTotal = 0;
	$('#computerGeneratedNumber').text(computerGuess);
	$('#finalResult').text(userTotal);
}

function winner(){
	alert("Hurray! You win!");
	wins++;
	$('#numberOfWins').text(wins);
	reset();

}

function loser(){
	alert("Sorry, You didn't win!");
	losses++;
	$('#numberOfLosses').text(losses);
	reset();

}

$('#basket').on ('click', function(){
	userTotal = userTotal + basketball;
	console.log("New userTotal = " + userTotal);
	$('#finalResult').text(userTotal);
		if (userTotal == computerGuess){
			winner();
		}
		else if (userTotal > computerGuess){
			loser();
		}
		
	})


$('#golf').on ('click', function(){
	userTotal = userTotal + golfball;
	console.log("New userTotal = " + userTotal);
	$('#finalResult').text(userTotal);
		if (userTotal == computerGuess){
			winner();
		}
		else if (userTotal > computerGuess){
			loser();
		}
		
})

$('#tennis').on ('click', function(){
	userTotal = userTotal + tennisball;
	console.log("New userTotal = " + userTotal);
	$('#finalResult').text(userTotal);
		if (userTotal == computerGuess){
			winner();
		}
		else if (userTotal > computerGuess){
			loser();
		}
		
})

$('#volley').on ('click', function(){
	userTotal = userTotal + volleyball;
	console.log("New userTotal = " + userTotal);
	$('#finalResult').text(userTotal);
		if (userTotal == computerGuess){
			winner();
		}
		else if (userTotal > computerGuess){
			loser();
		}
		
})

});

//Pseudocode

//Program needs to reset.


















