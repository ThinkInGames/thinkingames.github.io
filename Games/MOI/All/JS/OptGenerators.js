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
            doCalc7()//-+a -+ (-+b),keski
		break;
		case 2:
			doCalc10()//+-a x (+-b)
		break;
		case 3:
            doDivMix()//+-a/+-b
		break;
		case 4:
			doMixOfMix()
		break;

		
	default: 	
	document.getElementById("question").innerHTML="Congrats! You are done for now. <br>More levels are coming...";
	document.getElementById("btn1").disabled = true;
	document.getElementById("btn2").disabled = true;
	document.getElementById("btn3").disabled = true;
	document.getElementById("btn4").disabled = true;
	
	
	}
			
}
//LEVELS
//ADD AND SUBS
function doAdding1(){//a + b, helppo
	var a = Math.floor((Math.random() * 2) + 3);
	var b = Math.floor((Math.random() * 5) + 1);
	
	var crt = a+b;
	var sign = Math.random() < 0.5 ? -1 : 1;
	var wrong1 = sign+crt;
	sign = Math.random() < 0.5 ? -2 : 2;
	var wrong2 = sign+crt;
	sign = Math.random() < 0.5 ? -3 : 3;
	var wrong3 = sign+crt;
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	katex.render(a+"+"+b, question);
	var inner = document.getElementById("question").innerHTML
	printOpts(options);
	
}
function doAdding2(){//a + b, vaikea
	var a = Math.floor((Math.random() * 7) + 3);
	var b = Math.floor((Math.random() * 10) + 1);
	var crt = a+b;
	var sign = Math.random() < 0.5 ? -1 : 1;
	var wrong1 = sign+crt;
	sign = Math.random() < 0.5 ? -2 : 2;
	var wrong2 = sign+crt;
	sign = Math.random() < 0.5 ? -3 : 3;
	var wrong3 = sign+crt;
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	katex.render(a+"+"+b, question);
	var inner = document.getElementById("question").innerHTML
	printOpts(options);
}
function doSub1(){//a-b| vastaus > 0, helppo
	var a = Math.floor((Math.random() * 3) + 3);
	var b = Math.floor((Math.random() * 2) + 1);
	var crt = a-b;
	var sign = Math.random() < 0.5 ? -1 : 1;
	var wrong1 = sign+crt;
	sign = Math.random() < 0.5 ? -2 : 2;
	var wrong2 = sign+crt;
	sign = Math.random() < 0.5 ? -3 : 3;
	var wrong3 = sign+crt;
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	katex.render(a+"-"+b, question);
	var inner = document.getElementById("question").innerHTML
	printOpts(options);
}
function doSub2(){//a-b| vastaus > 0, vaikea
	var a = Math.floor((Math.random() * 3) + 7);
	var b = Math.floor((Math.random() * 5) + 1);
	var crt = a-b;
	var sign = Math.random() < 0.5 ? -1 : 1;
	var wrong1 = sign+crt;
	sign = Math.random() < 0.5 ? -2 : 2;
	var wrong2 = sign+crt;
	sign = Math.random() < 0.5 ? -3 : 3;
	var wrong3 = sign+crt;
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	katex.render(a+"-"+b, question);
	var inner = document.getElementById("question").innerHTML
	printOpts(options);
}
function doCalc1(){//a+-b| vastaus > 0, helppo
	 Math.random() < 0.5 ? doAdding1() : doSub1();
}
function doCalc2(){//a+-b| vastaus > 0, helppo
	Math.random() < 0.5 ? doAdding2() : doSub2();
}
function doAdding3(){////a + b, iso ja pieni 
	var a = Math.floor((Math.random() * 30) + 10);
	var b = Math.floor((Math.random() * 10) + 1);
	crt = a+b
	optionsAlg = hintOptions(crt)
	options = stringOpts(optionsAlg);
	katex.render(a+"+"+b, question);
	printOpts(options);
}
function doAdding4(){////a + b, kaksi isoa
	var a = Math.floor((Math.random() * 30) + 10);
	var b = Math.floor((Math.random() * 30) + 10);
	crt = a + b
	optionsAlg = hintOptions(crt)
	options = stringOpts(optionsAlg);
	katex.render(a+"+"+b, question);
	printOpts(options);
}
function doSub3(){//a-b, Iso ja pieni
	var a = Math.floor((Math.random() * 30) + 7);
	var b = Math.floor((Math.random() * 5) + 1);
	crt = a - b
	optionsAlg = hintOptions(crt)
	options = stringOpts(optionsAlg);
	katex.render(a+"-"+b, question);
	printOpts(options);
}
function doSub4(){//a-b, Iso ja iso
	var a = Math.floor((Math.random() * 20) + 21);
	var b = Math.floor((Math.random() * 10) + 10);
	crt = a - b
	optionsAlg = hintOptions(crt)
	options = stringOpts(optionsAlg);
	katex.render(a+"-"+b, question);
	printOpts(options);
}
function doCalc3(){//a+-b, iso ja pieni
	Math.random() < 0.5 ? doAdding3() : doSub3();
}
function doCalc4(){//a+-b, iso ja iso
	Math.random() < 0.5 ? doAdding4() : doSub4();
}
function doSub5(){//a-b < 0, keski
    var a = Math.floor((Math.random() * 10) + 1);
    var b = a;
    while(b==a){b = Math.floor((Math.random() * 5) + 5);}
    crt = a - b
	var wrong1 = a + b
	var wrong2 = - 1* crt
	var wrong3 = crt-1;
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	katex.render(a+"-"+b, question);
	printOpts(options);
}
function doAdding5(){//a + (-b),keski
    var a = Math.floor((Math.random() * 10) + 1);
    var b = a;
	while(b==a){b = Math.floor((Math.random() * 5) + 5);}
	b=-1*b
    crt = a + b
    var wrong1 = a-b
    var wrong2 = -1*crt;
    var wrong3 = crt-1;
    optionsAlg = [crt, wrong1, wrong2, wrong3];
    options = stringOpts(optionsAlg);
    katex.render(a+"+("+b+")", question);
    printOpts(options);
}
function doCalc5(){//a - (-b),keski
    var a = Math.floor((Math.random() * 10) + 1);
    var b = a;
	while(b==a){b = Math.floor((Math.random() * 5) + 5);}
	b=-1*b
    crt = a - b
    var wrong1 = a+b
    var wrong2 = -1*crt;
    var wrong3 = crt-1;
    optionsAlg = [crt, wrong1, wrong2, wrong3];
    options = stringOpts(optionsAlg);
    katex.render(a+"-("+b+")", question);
    printOpts(options);
}
function doCalc6(){//-a - (-b),keski
    var a = Math.floor((Math.random() * 10) + 1);
    var b = a;
	while(b==a){b = Math.floor((Math.random() * 5) + 5);}
	a= -1*a
	b = -1*b
    crt = a - b
    var wrong1 = a+b
    var wrong2 = -1*crt;
    var wrong3 = crt-1;
    optionsAlg = [crt, wrong1, wrong2, wrong3];
    options = stringOpts(optionsAlg);
    katex.render(a+"-("+b+")", question);
    printOpts(options);
}
function doCalc7(){//-+a -+ (-+b),keski
	Math.random() < 0.5 ? (Math.random() < 0.5 ? doAdding5() : doSub5()) : (Math.random() < 0.5 ? doCalc5() : doCalc6())
}
//MULTIPLICATIONS
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
// DIVISIONS

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
	var wrong1 = crt+2
	var wrong2 = crt-1
	var wrong3 = crt+1
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
	var wrong1 = crt+2
	var wrong2 = crt-1
	var wrong3 = crt+1
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
	var wrong1 = crt+2
	var wrong2 = crt-1
	var wrong3 = crt+1
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	katex.render(nom +" \\div ("+denom+")", question);
	printOpts(options);
}
function doDivMix(){//MIX
	Math.random() < 0.5 ? (Math.random() < 0.5 ? doDiv1() : doDiv2()) : (Math.random() < 0.5 ? doDiv3() : doDiv4())
}
function doMixOfMix(){//-+a -+ (-+b),keski
	Math.random() < 0.5 ? (Math.random() < 0.5 ? doCalc7() : doCalc10()) : (Math.random() < 0.5 ? doDivMix() : doMulti6())
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


