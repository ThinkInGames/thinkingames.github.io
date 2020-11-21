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
			doAdding1();//a + b, helppo
		break;
		case 2 : 
			doSub1();//a-b| vastaus > 0, helppo
		break;
		case 3 : 
			doCalc1();//a+b, voi olla b<0, helppo
		break;
        case 4 : 
			doSub5();//a-b < 0, keski
        break;
        case 5:
            doAdding5()//a + (-b),keski
		break;
		case 6:
            doCalc5()//a - (-b),keski
		break;
		case 7:
            doCalc6()//-a - (-b),keski
		break;
		case 8:
            doCalc7()//-+a -+ (-+b),keski
		break;
		case 9:
            doCalc8()//ax + bx + cx, helppo
		break;
		case 10:
            doCalc9()//ax + bx + cx, vaikea
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
function doCalc8(){//a + b + c, helppo
	var a = 0;
	while(a==0){a= Math.floor((Math.random() * 20) - 10);}
	var b = 0;
	while(b==0){b = Math.floor((Math.random() * 20) - 10);}
	var c = 0;
	while(c==0){c = Math.floor((Math.random() * 20) - 10);}
	var crt = a + b + c
	var sign = Math.random() < 0.5 ? -1 : 1;
	var wrong1 = sign+crt;
	sign = Math.random() < 0.5 ? -2 : 2;
	var wrong2 = sign+crt;
	sign = Math.random() < 0.5 ? -3 : 3;
	var wrong3 = sign+crt;
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	var qExpr = a
	if(b<0){
		qExpr  += b.toString()
	}
	if(b>0){
		qExpr  += "+"+b.toString()
	}
	if(c<0){
		qExpr  += c.toString()
	}
	if(c>0){
		qExpr  += "+"+c.toString()
	}
	katex.render(qExpr , question);
	printOpts(options);
}
function doCalc9(){//a + b + c, vaikea
	var a = 0;
	while(a==0){a= Math.floor((Math.random() * 40) - 20);}
	var b = 0;
	while(b==0){b = Math.floor((Math.random() * 40) - 20);}
	var c = 0;
	while(c==0){c = Math.floor((Math.random() * 40) - 20);}
	var crt = a + b + c
	var sign = Math.random() < 0.5 ? -1 : 1;
	var wrong1 = sign+crt;
	sign = Math.random() < 0.5 ? -2 : 2;
	var wrong2 = sign+crt;
	sign = Math.random() < 0.5 ? -3 : 3;
	var wrong3 = sign+crt;
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	var qExpr = a
	if(b<0){
		qExpr  += b.toString()
	}
	if(b>0){
		qExpr  += "+"+b.toString()
	}
	if(c<0){
		qExpr  += c.toString()
	}
	if(c>0){
		qExpr  += "+"+c.toString()
	}
	katex.render(qExpr , question);
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


