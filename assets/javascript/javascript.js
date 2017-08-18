
$(document).ready(function(){
	
	var targetNumber;
	var random;
	var ghostNumber;
	var wins = 0;
	var losses = 0;


	function gameUpdate(val){
			if(targetNumber === ghostNumber){
				wins++
				alert("youw win");
				$("#wins").html("<h4>" + wins + "</h4>");
				console.log(wins);
		}
			else{(targetNumber !== ghostNumber)
				losses++
				$("#losses").html("<h4>" + losses + "</h4>");
		}
			if(targetNumber === vigoNumber){
				wins++
				$("#wins").html("<h4>" + wins + "</h4>");
		}
			else{(targetNumber !== vigoNumber)
				losses++
				$("#losses").html("<h4>" + losses + "</h4>");
		}
			if(targetNumber === samNumber){
				wins++
				$("#wins").html("<h4>" + wins + "</h4>");
		}
			else{(targetNumber !== samNumber)
				losses++
				$("#losses").html("<h4>" + losses + "</h4>");
		}
			if(targetNumber === greenNumber){
				wins++
				$("#wins").html("<h4>" + wins + "</h4>");
		}
			else{(targetNumber !== greenNumber)
				losses++
				$("#losses").html("<h4>" + losses + "</h4>");
		}
}




	$("#target-score").on("click", function (){
			targetNumber = "";
			for (var i = 0; i <1; i++){
				random = Math.floor(Math.random() *20)+1;
				targetNumber = random + targetNumber;
				$("#target-score").html("Power to be collected " + targetNumber);
			}

		});



		$("#ghostbuster").on("click", function (){
			ghostNumber = "";
			for (var i = 0; i < 1; i++){
				var randomNumber = Math.floor(Math.random() *10) +1;
				ghostNumber = randomNumber + ghostNumber;
				$("#ghostbusterscore").html("Total power " + ghostNumber);
			}
		});
	

		$("#vigo").on("click", function (){
			var vigoNumber = "";
			for (var i = 0; i < 1; i++){
				var randomNumber = Math.floor(Math.random() *10) +1;
				vigoNumber = randomNumber + vigoNumber;
				$("#vigoscore").html("Total power " + vigoNumber);
			}
		});
	

		$("#samhain").on("click", function (){
			var samNumber = "";
			for (var i = 0; i < 1; i++){
				var randomNumber = Math.floor(Math.random() *10) +1;
				samNumber = randomNumber + samNumber;
				$("#samhainscore").html("Total power " + samNumber);
			}
		});

		$("#greenslime").on("click", function (){
			var greenNumber = "";
			for (var i = 0; i < 1; i++){
				var randomNumber = Math.floor(Math.random() *10) +1;
				greenNumber = randomNumber + greenNumber;
				$("#greenslimescore").html("Total power " + greenNumber);
			}
		});

});









