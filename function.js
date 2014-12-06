function compPlay(){
	var rando = Math.random();
	if ( rando < 0.33 ) {
		return "rock";
	}
	else if ( rando >= 0.33 && rando <= 0.66 ) {
		return "paper";
	}
	else {
		 return "scissors";
	}
}

function winOrLose(compChoice, yourChoice){
	if ( compChoice == "rock" && yourChoice == "scissors" ) {
	return "rock beats scissors! you lose!";
	}
	else if ( compChoice == "rock" && yourChoice == "paper" ) {
	return "scissors beats rock! you win!";
	}
	else if ( compChoice == "paper" && yourChoice == "rock" ) {
	return "paper beats rock! you lose!";
	}
	else if ( compChoice == "paper" && yourChoice == "scissors" ) {
	return "scissors beats paper! you win!";
	}
	else if ( compChoice == "scissors" && yourChoice == "paper" ) {
	return "scissors beats paper! you lose!";
	} 
	else if ( compChoice == "scissors" && yourChoice == "rock" ) {
	return "rock beats scissors! you win!";
	}
	else if ( compChoice == yourChoice ) {
	return "you choose the same option! you tie!"; 
	}
}

window.onload = function () {
	document.getElementById("rock").onclick = function chooserock() {
		var result = winOrLose(compPlay(), "rock");
		alert(result);
	};
	document.getElementById("paper").onclick = function choosepaper(){
		var result = winOrLose(compPlay(), "paper");
		alert(result);
	};
	document.getElementById("scissors").onclick = function choosescissors(){
		var result = winOrLose(compPlay(), "scissors");
		alert(result);
	};
}

