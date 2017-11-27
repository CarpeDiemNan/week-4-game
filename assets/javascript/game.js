var random_result;
var lost = 0;
var win = 0;
var previous = 0;

// function to start game and reset game after a round
var startGame = function () {
	// empty crystals on page - important for resetting
	$(".crystals").empty();
	// array to hold crystal images
	var images = [		
		'https://jaysanalysis.files.wordpress.com/2014/11/fantasy-crystal2.jpg',
		'https://img0.etsystatic.com/213/0/7455514/il_340x270.1352292784_8rgm.jpg',
		'https://i.pinimg.com/564x/05/99/0d/05990d860dafb3b913d05c81d249f088--meditation-art-yoga-art.jpg',
		'https://i.pinimg.com/736x/1e/bd/7c/1ebd7cffea9db0fbd1726828fdb6896f--gems-and-minerals-crystals-minerals.jpg'
		];
	// get a goal number to play with
	random_result = Math.floor(Math.random() * 101) +19;
	// console.log("The random result is " + random_result);
	// display the new number
	$("#result").html("Number in Play: " + random_result);
	// generate the crystals each with a random number as their data
	for(var i = 0; i < 4; i++ ){

		var random = Math.floor(Math.random() * 11) + 1;
		console.log(random);

		var crystal = $("<div>");
		crystal.attr({
			// class crystal for CSS styling
			"class": 'crystal',
			// set value of crystal to value in random set above
			"data-random": random
		});
			// Load images of crystals to display
		crystal.css({
			"background-image":"url('" + images[i] + "')"
		});
		
		// for testing see what number crystal has
		// crystal.html(random); 

		$(".crystals").append(crystal);
	 
		}
	$("#previous").html("Total Score: ", previous);
		}  

	// start game

startGame();

// $(".crystal").on('click', function() {
	// when page first loads everything with the crystals loads
	// but after the first round and running startGame, must use
	// EVENT DELEGATION - because I emptied/deleted the old
	// crystals, the onclick doesn't work (jQuery but ok in javascript)
	// listen to document, on click look for .crystal, perform function
	$(document).on('click', ".crystal", function() {
	// get value of crystal
	var num = parseInt($(this).attr('data-random'));
	previous += num;
	$("#previous").html("Total Score: " + previous);

	console.log(previous);
	if(previous > random_result){
		console.log("you lost");
		lost ++;
		// display number of losses
		$("#lost").html("You Lost " + lost);
		// reset number guesses aka previous
		previous = 0;
		$("#previous").html("Total Score: " + previous);
		startGame();
	}

	else if(previous == random_result){
		console.log("you win");
		win ++;
		// display number of wins
		$("#win").html("You won " + win);
		// reset number gueses aka previous
		previous = 0;
		$("#previous").html("Total Score: " + previous);
		startGame();
	}

	console.log(previous);
	 
});