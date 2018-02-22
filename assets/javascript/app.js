$(document).ready(function(){
	var allQuestions = [
		{
			question: "When did California attain statehood?",
			answerChoices: [1848, 1849, 1850, 1851],
			imgUrl: "./assets/images/flag.png"},
		{
			question: "One in _____ Americans is a Californian?",
			answerChoices: [5, 6, 7, 8],
			imgUrl: "./assets/images/people.png"},
		{
			question: "What is the title of California's official state song?",
			answerChoices: ["I Love You, California", "Calfornia Love", "California, My Home", "California Girls"],
			imgUrl: "./assets/images/song.jpg"},
		{
			question: "Before California became known as the Golden State, what was the nickname?",
			answerChoices: ["Great Coast State", "Grizzly Bear State", "Giant Sequoia State", "America's Fruitbasket"],
			imgUrl: "./assets/images/grizzly.jpg"},
		{
			question: "Located in Sequia National Park, what is the name of the largest tree in the world?",
			answerChoices: ["Major Tom", "Howard", "General Grant", "General Sherman"],
			imgUrl: "./assets/images/sherman.jpg"},
		{
			question: "What is unique about the Califonia coastline?",
			answerChoices: ["It's the longest in the world", "It has the most biospheres in the U.S.", "It is a national monument", "It boasts more than 5000 miles of road"],
			imgUrl: "./assets/images/california_coast.jpg"},
		{
			question: "Mount ______________ is the highest peak in the lower 48 states",
			answerChoices: ["Shasta", "Whitney", "Williamson", "Lyell"],
			imgUrl: "./assets/images/whitney.jpg"},
		{
			question: "More of the earth's surface can be seen from ___________ than any other peak except Mt. Kilimanjaro",
			answerChoices: ["Mount Diablo", "Mount Shasta", "Mount Whitney", "Halfdome"],
			imgUrl: "./assets/images/diablo.jpg"}
		]
	

	var correct = 0;
	var incorrect = 0;
	var noInput = 0;
	var questionNumber = -1;
	var running = false
	var gameSound = document.getElementById('finish_sound');


	$(".start_button").on("click", function(){
		$(".game_header").html("<h3>Time Remaining: 30</h3>");
		firstQuestion();
		beginTimer();
	})


	function beginTimer(){
		if (running = false){
			clearInterval(countdown);
		} else if (running){
			var timer = 30;
			countdown = setInterval(function(){
			timer--;
			$(".game_header").html("<h3>Time Remaining: " + timer + "</h3>");
				if (timer === 0){
					noInput++;
					timer = 30;
					moveOn();
				}
			}, 1000);
		}
	}

	function nextQuestion(){
		console.log(noInput);
	}

	function printInformation(){
		$(".game_field").append("<p class='question'></p>");
		$(".question").text(allQuestions[questionNumber].question);
		$(".choices").css("visibility", "visible");
		$(".game_field").append("<p class='choices answer_one'></p>");
		$(".answer_one").text(allQuestions[questionNumber].answerChoices[0]);
		$(".game_field").append("<p class='choices answer_two'></p>");
		$(".answer_two").text(allQuestions[questionNumber].answerChoices[1]);
		$(".game_field").append("<p class='choices answer_three'></p>");
		$(".answer_three").text(allQuestions[questionNumber].answerChoices[2]);
		$(".game_field").append("<p class='choices answer_four'></p>");
		$(".answer_four").text(allQuestions[questionNumber].answerChoices[3]);
	}

	function firstQuestion(){
		$(".game_header").html("<h3>Time Remaining: 30 </h3>");
		$(".game_field").empty()
		var countdown;
		questionNumber++;

		timer();
		function timer(){
			var timer = 30;
			countdown = setInterval(function(){
			timer--;
			$(".game_header").html("<h3>Time Remaining: " + timer + "</h3>");
				if (timer === 0){
					$(".question").html("<h3> Sorry, time's up!</h3><h3>The correct answer was 1850.</h3>")
					noInput++;
					timer = 30;
					moveOn();
				}
			}, 1000);
		}
		console.log("no input " + noInput);
		console.log("correct " +correct);
		console.log("incorrect " + incorrect)
		printInformation();

		$(".answer_one").on("click", function(){
			incorrect++;
			$(".question").html("<h3> Sorry, that's incorrect.</h3><h3>The correct answer was 1850.</h3>");
			moveOn();
		});
		$(".answer_two").on("click", function(){
			incorrect++;
			$(".question").html("<h3> Sorry, that's incorrect.</h3><h3>The correct answer was 1850.</h3>");
			moveOn();
		});
		$(".answer_three").on("click", function(){
			correct++;
			$(".question").html("<h3>That's Correct!</h3>");
			moveOn();
		});
		$(".answer_four").on("click", function(){
			incorrect++;
			$(".question").html("<h3> Sorry, that's incorrect.</h3><h3>The correct answer was 1850.</h3>");
			moveOn();
		});

		function moveOn(){
			$(".choices").css("visibility", "hidden");
			clearInterval(countdown);
			setTimeout(function(){secondQuestion()}, 4000);	
			$(".question").append('<img src=' + allQuestions[0].imgUrl + ' class="after_image">');
		}
	}

	function secondQuestion(){
		$(".game_header").html("<h3>Time Remaining: 30 </h3>");
		$(".game_field").empty()
		var countdown;
		questionNumber++;
		console.log("questionNumber: " + questionNumber);
		timer();
		function timer(){
			var timer = 30;
			countdown = setInterval(function(){
			timer--;
			$(".game_header").html("<h3>Time Remaining: " + timer + "</h3>");
				if (timer === 0){
					$(".question").html("<h3> Sorry, time's up!</h3><h3>The correct answer was 8.</h3>")
					noInput++;
					timer = 30;
					moveOn();
				}
			}, 1000);
		}
		console.log("no input " + noInput);
		console.log("correct " +correct);
		console.log("incorrect " + incorrect)
		
		printInformation();

		$(".answer_one").on("click", function(){
			incorrect++;
			$(".question").html("<h3> Sorry, that's incorrect.</h3><h3>The correct answer was 8.</h3>")
			moveOn();
		});
		$(".answer_two").on("click", function(){
			$(".question").html("<h3> Sorry, that's incorrect.</h3><h3>The correct answer was 8.</h3>")
			incorrect++;
			moveOn();
		});
		$(".answer_three").on("click", function(){
			$(".question").html("<h3> Sorry, that's incorrect.</h3><h3>The correct answer was 8.</h3>")
			incorrect++;
			moveOn();
		});
		$(".answer_four").on("click", function(){
			$(".question").html("<h3>That's Correct!</h3>");
			correct++;
			moveOn();
		});

		function moveOn(){
			$(".choices").css("visibility", "hidden");
			clearInterval(countdown);
			setTimeout(function(){thirdQuestion()}, 4000);
			$(".question").append('<img src=' + allQuestions[1].imgUrl + ' class="after_image">');
		}
	}

	function thirdQuestion(){
		$(".game_header").html("<h3>Time Remaining: 30 </h3>");
		$(".game_field").empty()
		questionNumber++;
		var countdown;
		timer();
		function timer(){
			var timer = 30;
			countdown = setInterval(function(){
			timer--;
			$(".game_header").html("<h3>Time Remaining: " + timer + "</h3>");
				if (timer === 0){
					$(".question").html("<h3> Sorry, time's up!</h3><h3>The correct answer was 'I Love You, California'</h3>");
					noInput++;
					timer = 30;
					moveOn();
				}
			}, 1000);
		}
		console.log("no input " + noInput);
		console.log("correct " +correct);
		console.log("incorrect " + incorrect)
		printInformation();

		$(".answer_one").on("click", function(){
			correct++;
			$(".question").html("<h3>That's Correct!</h3>");
			moveOn();
		});
		$(".answer_two").on("click", function(){
			incorrect++;			
			$(".question").html("<h3> Sorry, that's incorrect.</h3><h3>The correct answer was 'I Love You, California.'</h3>")
			moveOn();
		});
		$(".answer_three").on("click", function(){
			incorrect++;
			$(".question").html("<h3> Sorry, that's incorrect.</h3><h3>The correct answer was 'I Love You, California.'</h3>")		
			moveOn();
		});
		$(".answer_four").on("click", function(){
			incorrect++;
			$(".question").html("<h3> Sorry, that's incorrect.</h3><h3>The correct answer was 'I Love You, California.'</h3>")
			moveOn();
		});

		function moveOn(){
			$(".choices").css("visibility", "hidden");
			clearInterval(countdown);
			setTimeout(function(){fourthQuestion()}, 4000);
			$(".question").append('<img src=' + allQuestions[2].imgUrl + ' class="after_image">');
		}
	}

	function fourthQuestion(){
		$(".game_header").html("<h3>Time Remaining: 30 </h3>");
		$(".game_field").empty()
		questionNumber++;
		var countdown;
		timer();
		function timer(){
			var timer = 30;
			countdown = setInterval(function(){
			timer--;
			$(".game_header").html("<h3>Time Remaining: " + timer + "</h3>");
				if (timer === 0){
					$(".question").html("<h3> Sorry, time's up.</h3><h3>The correct answer was Grizzly Bear State.</h3>")
					noInput++;
					timer = 30;
					moveOn();
				}
			}, 1000);
		}
		console.log("no input " + noInput);
		console.log("correct " +correct);
		console.log("incorrect " + incorrect)
		printInformation();

		$(".answer_one").on("click", function(){
			incorrect++;
			$(".question").html("<h3>Sorry, that's incorrect.</h3><h3>The correct answer was Grizzly Bear State.</h3>")
			moveOn();
		});
		$(".answer_two").on("click", function(){
			correct++;
			$(".question").html("<h3>That's correct!");
			moveOn();
		});
		$(".answer_three").on("click", function(){
			incorrect++;
			$(".question").html("<h3>Sorry, that's incorrect.</h3><h3>The correct answer was Grizzly Bear State.</h3>")
			moveOn();
		});
		$(".answer_four").on("click", function(){
			incorrect++;
			$(".question").html("<h3>Sorry, that's incorrect.</h3><h3>The correct answer was Grizzly Bear State.</h3>")
			moveOn();
		});

		function moveOn(){
			$(".choices").css("visibility", "hidden");
			clearInterval(countdown);
			setTimeout(function(){fifthQuestion()}, 4000);
			$(".question").append('<img src=' + allQuestions[3].imgUrl + ' class="after_image">');

		}
	}

	function fifthQuestion(){
		$(".game_header").html("<h3>Time Remaining: 30 </h3>");
		$(".game_field").empty()
		questionNumber++;
		var countdown;
		timer();
		function timer(){
			var timer = 30;
			countdown = setInterval(function(){
			timer--;
			$(".game_header").html("<h3>Time Remaining: " + timer + "</h3>");
				if (timer === 0){
					noInput++;
					$(".question").html("<h3>Sorry, time's up.</h3><h3>The correct answer was General Sherman.</h3>")
					timer = 30;
					moveOn();
				}
			}, 1000);
		}
		console.log("no input " + noInput);
		console.log("correct " +correct);
		console.log("incorrect " + incorrect)
		printInformation();

		$(".answer_one").on("click", function(){
			incorrect++;
			$(".question").html("<h3>Sorry, that's incorrect.</h3><h3>The correct answer was General Sherman.</h3>")
			moveOn();
		});
		$(".answer_two").on("click", function(){
			incorrect++;
			$(".question").html("<h3>Sorry, that's incorrect.</h3><h3>The correct answer was General Sherman.</h3>")
			moveOn();
		});
		$(".answer_three").on("click", function(){
			incorrect++;
			$(".question").html("<h3>Sorry, that's incorrect.</h3><h3>The correct answer was General Sherman.</h3>")
			moveOn();
		});
		$(".answer_four").on("click", function(){
			correct++;
			$(".question").html("<h3>That's correct!");
			moveOn();
		});

		function moveOn(){
			$(".choices").css("visibility", "hidden");
			clearInterval(countdown);
			setTimeout(function(){sixthQuestion()}, 4000);
			$(".question").append('<img src=' + allQuestions[4].imgUrl + ' class="after_image">');
		}
	}

	function sixthQuestion(){
		$(".game_header").html("<h3>Time Remaining: 30 </h3>");
		$(".game_field").empty()
		questionNumber++;
		var countdown;
		timer();
		function timer(){
			var timer = 30;
			countdown = setInterval(function(){
			timer--;
			$(".game_header").html("<h3>Time Remaining: " + timer + "</h3>");
				if (timer === 0){
					$(".question").html("<h3>Sorry, time's up.</h3><h3>The correct answer was 'It is a national monument.'</h3>")
					noInput++;
					timer = 30;
					moveOn();
				}
			}, 1000);
		}
		console.log("no input " + noInput);
		console.log("correct " +correct);
		console.log("incorrect " + incorrect)
		printInformation();

		$(".answer_one").on("click", function(){
			incorrect++;
			$(".question").html("<h3>Sorry, that's incorrect.</h3><h3>The correct answer was 'It is a national monument.'</h3>")
			moveOn();
		});
		$(".answer_two").on("click", function(){
			incorrect++;
			$(".question").html("<h3>Sorry, that's incorrect.</h3><h3>The correct answer was 'It is a national monument.'</h3>")
			moveOn();
		});
		$(".answer_three").on("click", function(){
			correct++;
			$(".question").html("<h3>That's correct!</h3>")
			moveOn();
		});
		$(".answer_four").on("click", function(){
			incorrect++;
			$(".question").html("<h3>Sorry, that's incorrect.</h3><h3>The correct answer was 'It is a national monument.'</h3>")
			moveOn();
		});

		function moveOn(){
			$(".choices").css("visibility", "hidden");
			clearInterval(countdown);
			setTimeout(function(){seventhQuestion()}, 4000);
			$(".question").append('<img src=' + allQuestions[5].imgUrl + ' class="after_image">');
		}
	}

	function seventhQuestion(){
		$(".game_header").html("<h3>Time Remaining: 30 </h3>");
		$(".game_field").empty()
		questionNumber++;
		var countdown;
		timer();
		function timer(){
			var timer = 30;
			countdown = setInterval(function(){
			timer--;
			$(".game_header").html("<h3>Time Remaining: " + timer + "</h3>");
				if (timer === 0){
					$(".question").html("<h3> Sorry, time's up.</h3><h3>The correct answer was Mount Whitney</h3>")
					noInput++;
					timer = 30;
					moveOn();
				}
			}, 1000);
		}
		console.log("no input " + noInput);
		console.log("correct " +correct);
		console.log("incorrect " + incorrect)
		printInformation();

		$(".answer_one").on("click", function(){
			incorrect++;
			$(".question").html("<h3>Sorry, that's incorrect.</h3><h3>The correct answer was Mount Whitney.</h3>")
			moveOn();
		});
		$(".answer_two").on("click", function(){
			correct++;
			$(".question").html("<h3>That's correct!");
			moveOn();
		});
		$(".answer_three").on("click", function(){
			incorrect++;
			$(".question").html("<h3>Sorry, that's incorrect.</h3><h3>The correct answer was Mount Whitney.</h3>")
			moveOn();
		});
		$(".answer_four").on("click", function(){
			incorrect++;
			$(".question").html("<h3>Sorry, that's incorrect.</h3><h3>The correct answer was Mount Whitney.</h3>")
			moveOn();
		});

		function moveOn(){
			$(".choices").css("visibility", "hidden");
			clearInterval(countdown);
			setTimeout(function(){eighthQuestion()}, 4000);
			$(".question").append('<img src=' + allQuestions[6].imgUrl + ' class="after_image">');	
		}
	}

	function eighthQuestion(){
		$(".game_header").html("<h3>Time Remaining: 30 </h3>");
		$(".game_field").empty()
		questionNumber++;
		var countdown;
		timer();
		function timer(){
			 var timer = 30;
			countdown = setInterval(function(){
			timer--;
			$(".game_header").html("<h3>Time Remaining: " + timer + "</h3>");
				if (timer === 0){
					noInput++;
					timer = 30;
					moveOn();
				}
			}, 1000);
		}
		console.log("no input " + noInput);
		console.log("correct " +correct);
		console.log("incorrect " + incorrect)
		printInformation();

		$(".answer_one").on("click", function(){
			correct++;
			$(".question").html("<h3>That's correct!");
			moveOn();
		});
		$(".answer_two").on("click", function(){
			incorrect++;
			$(".question").html("<h3>Sorry, that's incorrect.</h3><h3>The correct answer was Mount Diablo.</h3>")
			moveOn();
		});
		$(".answer_three").on("click", function(){
			incorrect++;
			$(".question").html("<h3>Sorry, that's incorrect.</h3><h3>The correct answer was Mount Diablo.</h3>")
			moveOn();
		});
		$(".answer_four").on("click", function(){
			incorrect++;
			$(".question").html("<h3>Sorry, that's incorrect.</h3><h3>The correct answer was Mount Diablo.</h3>")
			moveOn();
		});

		function moveOn(){
			$(".choices").css("visibility", "hidden");
			clearInterval(countdown);
			setTimeout(function(){endGame()}, 4000);
			$(".question").append('<img src=' + allQuestions[7].imgUrl + ' class="after_image">');
		}
	}

	function endGame(){
		$(".game_header").html("<h3>How'd you do?</h3>");
		$(".game_field").html("<br><br><p>Correct: " + correct + "</p><p>Incorrect: " + incorrect + "</p><p>Unanswered: " + noInput + "</p>");
		gameSound.play();
		$(".game_field").append("<input class='reset_button' value='Restart'>");
		$(".reset_button").on("click", function(){
			resetGame();
		});
		
	}

	

	function resetGame(){
		questionNumber = -1;
		correct = 0;
		incorrect = 0;
		noInput = 0;

		firstQuestion();
	}
})