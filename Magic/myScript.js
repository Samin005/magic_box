var str = document.getElementById("tArea").value;
var res = str.split("\n");

function clearAll(){
	document.getElementById("tArea").value = null;
}

function capitalize(){

			if(document.getElementById("tArea").value!=document.getElementById("tArea").value.toUpperCase()){

				document.getElementById("tArea").value=document.getElementById("tArea").value.toUpperCase();

			}

			else{

				document.getElementById("tArea").value=document.getElementById("tArea").value.toLowerCase();

			}	

		}
		
function stripBlank(){
		var str = document.getElementById("tArea").value;
		var res = str.split("\n");
		var lines = [];
		for(var i=0;i<res.length;i++)
		{
			if(res[i]!=""){
				// console.log(res);
				var v = ""+res[i].trim();
				lines.push(v);
			}
			 //else{
			//	 lines[i] = "";
			 //}
		}
		var st = "";
		for(var j=0;j<lines.length;j++)
		{	
			if(j == lines.length-1)
				st = st+lines[j];
			else	
				st = st+lines[j]+"\n";
		}
		document.getElementById("tArea").value = st;	
}

function addNumber(){
	var str = document.getElementById("tArea").value;
	var res = str.split("\n");
	
	for(i=0;i<res.length;i++){
		res[i]= (i+1)+". "+res[i];
		}
	var st = "";
	for(i=0;i<res.length;i++){
		if(i == (res.length-1)){
			st = st+res[i];
		}
		else{
			st = st+res[i]+"\n";
		}
	}
	document.getElementById("tArea").value = st;
}

function reverse(){
	var str = document.getElementById("tArea").value;
	var res = str.split("\n");
	var rev = [];
	for(i=0;i<res.length;i++)
		rev[i]= res[res.length-(i+1)];
	var st = "";
	for(i=0;i<res.length;i++){
		if(i == (res.length-1)){
			st = st+rev[i];
		}
		else{
			st = st+rev[i]+"\n";
		}
	}
	document.getElementById("tArea").value = st;
}

function sortAlpha(){
	var str = document.getElementById("tArea").value;
	var res = str.split("\n");
	var sorted = res.sort();
	var st = "";
	for(i=0;i<res.length;i++){
		if(i == (res.length-1)){
			st = st+res[i];
		}
		else{
			st = st+res[i]+"\n";
		}
	}
	document.getElementById("tArea").value = st;
}

function shuffle(){
	var str = document.getElementById("tArea").value;
	var res = str.split("\n");
	var st = "";
	for(i=res.length-1;i>0;i--)
	{
		var ran = Math.floor(Math.random()*(i+1));
		var temp = res[i];
		res[i] = res[ran];
		res[ran] = temp;
	
	}
	for(i=0;i<res.length;i++){
		
		if(i == (res.length-1)){
			st = st+res[i];
		}
		else{
			st = st+res[i]+"\n";
		}
	}
	document.getElementById("tArea").value = st;
}