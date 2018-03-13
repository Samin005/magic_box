document.getElementById("unit").innerHTML = "kg";
function heroStart(){
	var option = document.getElementById("option").value;
	if(option == "kgtolb"){
		document.getElementById("unit").innerHTML = "kg";
		kgtolb();
	}
	else if(option == "lbtokg"){
		document.getElementById("unit").innerHTML = "lb";
		lbtokg();

	}
}

function kgtolb(){
	var x, y;

	x = document.getElementById("num1").value;
	if(x>=0){
		y = x*2.2046;
		document.getElementById("ans").innerHTML = y+" lb";
	}
	else {
		document.getElementById("ans").innerHTML = "Please enter valid Digits!";
	}
}

function lbtokg() {
	var x, y;

	x = document.getElementById("num1").value;
	if(x>=0){
		y = x*0.4536;
		document.getElementById("ans").innerHTML = y+" kg";
	}
	else {
		document.getElementById("ans").innerHTML = "Please enter valid Digits!";
	}
}