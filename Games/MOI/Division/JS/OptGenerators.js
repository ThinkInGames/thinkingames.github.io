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
            doDiv1()//a/b| a,b>0
		break;
		case 2:
            doDiv2()//-a/b| 
		break;
		case 3:
            doDiv3()//a/-b| 
		break;
		case 4:
            doDiv4()//-a/-b| 
		break;
		case 5:
            doDivMix()//-+a/-+b| 
        break;
	
		
	default: 	
	document.getElementById("question").innerHTML="Congrats! You are done for now. <br>More levels are coming...";
	document.getElementById("btn1").disabled = true;
	document.getElementById("btn2").disabled = true;
	document.getElementById("btn3").disabled = true;
	document.getElementById("btn4").disabled = true;
	
	
	}
			
}

function doDiv1(){ //a/b
	var crt = Math.floor(Math.random() * 9)+2
	var denom = Math.floor(Math.random() * 9)+2
	var nom = crt * denom
	var sign = Math.random() < 0.5 ? -1 : 1;
	var wrong1 = crt+2
	var wrong2 = crt-1
	var wrong3 = crt+1
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	katex.render(nom +" \\div "+denom, question);
	printOpts(options);
}
function doDiv2(){ //-a/b
	var crt = Math.floor(Math.random() * 9)+2
	crt = -1*crt
	var denom = Math.floor(Math.random() * 9)+2
	var nom = crt * denom
	var sign = Math.random() < 0.5 ? -1 : 1;
	var wrong1 = -1*crt
	var wrong2 = crt+sign
	var wrong3 = -1*wrong2
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	katex.render(nom +" \\div "+denom, question);
	printOpts(options);
}
function doDiv3(){ //a/-b
	var crt = Math.floor(Math.random() * 9)+2
	var denom = Math.floor(Math.random() * 9)+2
	denom = -1*denom
	crt = -1*crt
	var nom = crt * denom
	var sign = Math.random() < 0.5 ? -1 : 1;
	var wrong1 = -1*crt
	var wrong2 = crt+sign
	var wrong3 = -1*wrong2
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	katex.render(nom +" \\div ("+denom+")", question);
	printOpts(options);
}
function doDiv4(){ //-a/-b
	var crt = Math.floor(Math.random() * 9)+2
	var denom = Math.floor(Math.random() * 9)+2
	denom = -1*denom
	var nom = crt * denom
	var sign = Math.random() < 0.5 ? -1 : 1;
	var wrong1 = -1*crt
	var wrong2 = crt+sign
	var wrong3 = -1*wrong2
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	katex.render(nom +" \\div ("+denom+")", question);
	printOpts(options);
}
function doDivMix(){//MIX
	Math.random() < 0.5 ? (Math.random() < 0.5 ? doDiv1() : doDiv2()) : (Math.random() < 0.5 ? doDiv3() : doDiv4())
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


