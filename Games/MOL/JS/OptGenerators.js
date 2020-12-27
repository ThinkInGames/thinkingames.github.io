// SET QUESTION
function setQuestion(l){
	document.getElementById("level").innerHTML="Level: "+l;
	document.getElementById("question").style.lineHeight="150px";
	document.getElementById("btn1").disabled = false;
	document.getElementById("btn2").disabled = false;
	document.getElementById("btn3").disabled = false;
	document.getElementById("btn4").disabled = false;
	
	switch(l){
		case 1:
            checkSlope1()//a/b| a,b>0
		break;
	
	
		
	default: 	
	document.getElementById("question").innerHTML="Congrats! You are done for now. <br>More levels are coming...";
	document.getElementById("btn1").disabled = true;
	document.getElementById("btn2").disabled = true;
	document.getElementById("btn3").disabled = true;
	document.getElementById("btn4").disabled = true;
	
	
	}
			
}

function checkSlope1(){ //y=mx+b
	var coef = Math.floor(Math.random() * 6)-3
	var slope
	if(coef==-1){slope ="-x"}
	else if(coef==1){slope ="x"}
	else if(coef==0){slope = ""}
	else{slope = coef+"x"}
		console.log(slope)
	var constant= Math.floor(Math.random() * 6)-3
	var term
	if(constant > 0){term = "+"+constant}
	else if(constant == 0){term  = ""}
	else if(constant == 0 && coef == 0){term = 0}
	else{term=constant}

	var crt = coef
	var wrong1, wrong2, wrong3
	if(coef == 0 && constant ==0){wrong1 = 1; wrong2 = ""; wrong3 = ""}
	else if(coef == 0 && constant !==0){ wrong2 = constant; wrong3 = -1*constant}
	else if (coef == 1 && constant !==1 && constant !==0){wrong1 = -1; wrong2 = constant; wrong3 = -1*constant}
	else if (constant !==0){wrong1 = -1; wrong2 = constant; wrong3 = -1*constant}
	else if (coef == constant ){wrong1 = ""; wrong2 = ""; wrong3 = -1*constant}
	else if (coef == -1*constant ){wrong1 = ""; wrong2 = ""; wrong3 = constant}
	else{wrong1 = -1*crt; wrong2 = constant; wrong3 = -1*constant}
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	katex.render("y = "+slope+term, question);
	printOpts(options);
}


function hintOptions(crt){//hints to levels 7-12
	var hintOption= Math.floor((Math.random() * 3) +1);
	console.log(hintOption)
	switch(hintOption){
		case 1:
			var sign = Math.random() < 0.5 ? -1 : 1;
			var wrong1 = sign + crt;
			sign = Math.random() < 0.5 ? -1 : 1;
			var wrong2 = 10*sign + crt;
			sign = Math.random() < 0.5 ? -2 : 2;
			var wrong3 = sign + crt;
		break
		case 2: 
			var sign = Math.random() < 0.5 ? -1 : 1;
			var wrong1 = sign+crt;
			sign = Math.random() < 0.5 ? -2 : 2;
			var wrong2 = sign+crt;
			sign = Math.random() < 0.5 ? -3 : 3;
			var wrong3 = sign+crt;
		break 
		case 3:
			var sign = Math.random() < 0.5 ? -1 : 1;
			var wrong1 = sign+crt;
			sign = Math.random() < 0.5 ? -1 : 1;
			var wrong2 = 10*sign+crt;
			var wrong3 = 10*sign+wrong1;
		break;
	}
	var options = [crt, wrong1, wrong2, wrong3];
	return options
}


