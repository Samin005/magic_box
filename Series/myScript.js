function myFunction() {
		    var str = document.getElementById("input").value;
		    var res = str.split(",").map(Number);
		    var mn = res[0];
			mn = Math.min.apply(Math, res);
		var sum = 0; 
		var avg = 0;
		var rev = [];
		var mx = res[0];
		var count = 0;
		var coma = 0;
		var ele = 0;
		for(var i=0;i<res.length;i++){
		    if(res[i]>mx)
		       mx = res[i];
		    sum = sum+res[i];
		    rev[i]=res[i];
		}
		for(var j=0;j<res.length;j++){
		 	rev[j] = res[res.length-(j+1)];
		 	if(res[j]>=0)
		 		count++;
			//else if(res[j]=='a')
			        //alert("NIGGAAAA");
			ele++;
		}
		if(count==res.length){
		    avg = sum/(res.length);
		    document.getElementById("invalid").innerHTML = "";
		    document.getElementById("max").innerHTML = "Max: "+mx;
		    document.getElementById("min").innerHTML = "Min: "+mn;
		    document.getElementById("sum").innerHTML = "Sum: "+sum;
		    document.getElementById("avg").innerHTML = "Average: "+avg;
		    document.getElementById("rev").innerHTML = "Reverse Order: "+rev;
		}
		else
		    document.getElementById("invalid").innerHTML = "Please enter valid Inputs!";
	}
