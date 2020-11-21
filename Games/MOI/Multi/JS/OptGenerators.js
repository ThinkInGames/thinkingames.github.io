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
            doMulti1()//a x b
		break;
		case 2:
             doMulti2()//-a x b
		break;
		case 3:
             doMulti3()//a x(-b)
		break;
		case 4:
            doMulti4()//-a x (-b)
		break;
		case 5:
			doCalc10()//+-a x (+-b)
		break;
		case 6:
			doCalc10()//+-a x (+-b)
		break;
		case 7:
			doMulti5()//+-a x (+-b) x (+-C)
		break;
		case 8:
			doMulti6()//+-a x (+-b) x (+-C) isompi
		break;

	default: 	
	document.getElementById("question").innerHTML="Congrats! You are done for now. <br>More levels are coming...";
	document.getElementById("btn1").disabled = true;
	document.getElementById("btn2").disabled = true;
	document.getElementById("btn3").disabled = true;
	document.getElementById("btn4").disabled = true;
	
	}
			
}

function doMulti1(){//a x b
	var a = Math.floor((Math.random() * 8) + 3);
	var b = Math.floor((Math.random() * 9) + 2);
	
	var crt = a*b;
	var sign = Math.random() < 0.5 ? -1 : 1;
	var wrong1 = sign+crt;
	sign = Math.random() < 0.5 ? -2 : 2;
	var wrong2 = sign+crt;
	sign = Math.random() < 0.5 ? -3 : 3;
	var wrong3 = sign+crt;
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	katex.render(a+"\\times "+b, question);
	var inner = document.getElementById("question").innerHTML
	printOpts(options);
}
function doMulti2(){//-a x b
	var a = Math.floor((Math.random() * 8) + 3);
	var b = Math.floor((Math.random() * 9) + 2);
	a = -1*a
	var crt = a*b;
	
	var wrong1 = -1*crt;
	var sign = Math.random() < 0.5 ? -1 : 1;
	var wrong2 = a*(sign+b);
	var wrong3 = -1*a*(sign+b);
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	katex.render(a+"\\times "+b, question);
	var inner = document.getElementById("question").innerHTML
	printOpts(options);
}

function doMulti3(){//a x(-b)
	var a = Math.floor((Math.random() * 8) + 3);
	var b = Math.floor((Math.random() * 9) + 2);
	b = -1*b
	var crt = a*b;
	var wrong1 = -1*crt;
	var sign = Math.random() < 0.5 ? -1 : 1;
	var wrong2 = a*(sign+b);
	var wrong3 = -1*a*(sign+b);
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	katex.render(a+"\\times ("+b+")", question);
	var inner = document.getElementById("question").innerHTML
	printOpts(options);
}
function doMulti4(){//-a x(-b)
	var a = Math.floor((Math.random() * 8) + 3);
	var b = Math.floor((Math.random() * 9) + 2);
	a= -1*b
	b = -1*b
	crt = a*b
	var wrong1 = -1*crt;
	var sign = Math.random() < 0.5 ? -1 : 1;
	var wrong2 = a*(sign+b);
	var wrong3 = -1*a*(sign+b);
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	katex.render(a+"\\times ("+b+")", question);
	var inner = document.getElementById("question").innerHTML
	printOpts(options);
}


function doCalc10(){//MIX
	Math.random() < 0.5 ? (Math.random() < 0.5 ? doMulti1() : doMulti2()) : (Math.random() < 0.5 ? doMulti3() : doMulti4())
}
function doMulti5(){//+-a x(-b) x(-c)
	var a = Math.floor((Math.random() * 2) + 2);
	var b = Math.floor((Math.random() * 2) + 2);
	var c = Math.floor((Math.random() * 3) + 2);
	var sign = Math.random() < 0.5 ? -1 : 1;
	a= sign*a
	sign = Math.random() < 0.5 ? -1 : 1;
	b = sign*b
	sign = Math.random() < 0.5 ? -1 : 1;
	c = sign*c
	crt = a*b*c
	var wrong1 = -1*crt;
	var sign = Math.random() < 0.5 ? -1 : 1;
	var wrong2 = a*(sign+b)*c;
	var wrong3 = -1*a*(sign+b)*c;
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	var qExpr = a

	if(b<0){
		qExpr +=  "\\times ("+b+")";
	}
	if(b>0){
		qExpr  += "\\times "+b;
	}
	if(c<0){
		qExpr +=  "\\times ("+c+")";
	}
	if(c>0){
		qExpr  += "\\times "+c;
	}
	katex.render(qExpr , question);
	var inner = document.getElementById("question").innerHTML
	printOpts(options);
}
function doMulti6(){//+-a x(-b) x(-c)
	var a = Math.floor((Math.random() * 3) + 2);
	var b = Math.floor((Math.random() * 3) + 2);
	var c = Math.floor((Math.random() * 3) + 2);
	var sign = Math.random() < 0.5 ? -1 : 1;
	a= sign*a
	sign = Math.random() < 0.5 ? -1 : 1;
	b = sign*b
	sign = Math.random() < 0.5 ? -1 : 1;
	c = sign*c
	crt = a*b*c
	var wrong1 = -1*crt;
	var sign = Math.random() < 0.5 ? -1 : 1;
	var wrong2 = a*(sign+b)*c;
	var wrong3 = -1*a*(sign+b)*c;
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	var qExpr = a

	if(b<0){
		qExpr +=  "\\times ("+b+")";
	}
	if(b>0){
		qExpr  += "\\times "+b;
	}
	if(c<0){
		qExpr +=  "\\times ("+c+")";
	}
	if(c>0){
		qExpr  += "\\times "+c;
	}
	katex.render(qExpr , question);
	var inner = document.getElementById("question").innerHTML
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
