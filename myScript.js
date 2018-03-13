var quoteArray = ["\"Start by doing what's necessary, then do what's possible, and suddenly you are doing the impossible.\"",
				  "\"Believe you can and you're halfway there.\"",
				  "\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"",
				  "\"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.\"",
				  '"Be yourself, everyone else is already taken."',
				  "\"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.\"",
				  "\"Do not take life too seriously. You will never get out of it alive.\"",
				  "\"Hapiness is not something ready made. It comes from your own actions.\"",
				  "\"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.\"",
				  "\"Life isn't about finding yourself. Life is about creating yourself.\""];

var index = Math.floor(Math.random()*9) + 1;
document.getElementById("quote").innerHTML = quoteArray[index];

function goRed(){
	document.getElementById("quote").style.color = "red";
	document.getElementById("quote").style.backgroundColor = "black";
	document.getElementById("quote").style.borderColor = "red";
	document.getElementById("quote").style.fontFamily = "Impact";
	document.getElementById("quote").style.fontSize = "35px";
}

function goBlue(){
	document.getElementById("quote").style.color = "#09c";
	document.getElementById("quote").style.backgroundColor = "white";
	document.getElementById("quote").style.borderColor = "#09c";
	document.getElementById("quote").style.fontFamily = "Vivaldi";
	document.getElementById("quote").style.fontSize = "45px";
}

function goGreen(){
	document.getElementById("quote").style.color = "#00cc44";
	document.getElementById("quote").style.backgroundColor = "#ffe6e6";
	document.getElementById("quote").style.borderColor = "#00cc44";
	document.getElementById("quote").style.fontFamily = "Times";
	document.getElementById("quote").style.fontSize = "35px";
}

function goBrown(){
	document.getElementById("quote").style.color = "#666699";
	document.getElementById("quote").style.backgroundColor = "AliceBlue";
	document.getElementById("quote").style.borderColor = "#666699";
	document.getElementById("quote").style.fontFamily = "Comic sans ms";
	document.getElementById("quote").style.fontSize = "42px";
}