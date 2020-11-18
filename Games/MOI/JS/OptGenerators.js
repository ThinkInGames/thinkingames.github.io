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
/**************************************************************************************************
			P H A S E   1  E N D S
*************************************************************************************************/
		case 20:
            doMulti1()//a x b
		break;
		case 21:
             doMulti2()//-a x b
		break;
		case 22:
             doMulti3()//a x(-b)
		break;
		case 23:
            doMulti4()//-a x (-b)
		break;
		case 24:
			doCalc10()//+-a x (+-b)
		break;
/**************************************************************************************************
			P H A S E   1  E N D S
*************************************************************************************************/
		/*case 25:
            doCalc15()//ax^n + bx^m + cx^n + dx^m
		break;
		case 26:
            doCalc16()//ax^n + bx^m + cx^n + dx^m
		break;
		case 27:
            monomMulti1()//a*bx| a,b>0
		break;
		case 28:
            monomMulti2()//a*bx| voi olla a,b<0
		break;
		case 29:
            monomMulti3()//ax*bx^n| a,b>0
		break;
		case 30:
            monomMulti4()//x^n*x^m
		break;
		case 31:
            monomMulti5()//ax^n*bx^m| a,b>0
		break;
		case 32:
            monomMulti6()//ax^n*bx^m| voi olla a,b<0
		break;
		case 33:
            doDiv1()//ax/b| a,b>0
        break;
		*/
		
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
    var a = -1*Math.floor((Math.random() * 10) + 1);
    var b = a;
	while(b==a){b = Math.floor((Math.random() * 5) + 5);}
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
/**************************************************************************************************
			P H A S E   1   E N D S
*************************************************************************************************/
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
	var wrong2 = sign+crt;
	var wrong3 = -1*crt+sign;
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
	var wrong2 = sign+crt;
	var wrong3 = -1*crt+sign;
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	katex.render(a+"\\times ("+b+")", question);
	var inner = document.getElementById("question").innerHTML
	printOpts(options);
}
function doMulti4(){//a x(-b)
	var a = Math.floor((Math.random() * 8) + 3);
	var b = Math.floor((Math.random() * 9) + 2);
	a= -1*b
	b = -1*b
	crt = a*b
	var wrong1 = -1*crt;
	var sign = Math.random() < 0.5 ? -1 : 1;
	var wrong2 = sign+crt;
	var wrong3 = -1*crt+sign;
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	katex.render(a+"\\times ("+b+")", question);
	var inner = document.getElementById("question").innerHTML
	printOpts(options);
}


function doCalc10(){//ax + b + cx 
	Math.random() < 0.5 ? (Math.random() < 0.5 ? doMulti1() : doMulti2()) : (Math.random() < 0.5 ? doMulti3() : doMulti4())
}
function doCalc11(){//ax + b + cx + d
	var a = 0;
	while(a==0){a= Math.floor((Math.random() * 20) - 10);}
	var term1 = new Expression("x").multiply(a)
	var b = 0;
	while(b==0){b = Math.floor((Math.random() * 20) - 10);}
	var c = 0;
	while(c==0){c = Math.floor((Math.random() * 20) - 10);}
	var term2 = new Expression("x").multiply(c)
	var d = 0;
	while(d==0){d = Math.floor((Math.random() * 20) - 10);}
	var crt = term1.add(b).add(term2).add(d);
	var sign = Math.random() < 0.5 ? -1 : 1;
	var wrong1 = new Expression("x").multiply(sign).add(crt);
	var wrong2 = crt.add(sign);
	var wrong3 = new Expression("x").multiply(sign).add(crt).add(sign)
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	var qExpr1 = algebra.toTex(term1.add(b))
	var qExpr2 = algebra.toTex(term2.add(d))
	if(c<0){
		qExpr1  += qExpr2
	}
	if(c>0){
		qExpr1  += "+"+qExpr2
	}
	katex.render(qExpr1 , question);
	printOpts(options);
}
function doCalc12(){//ax + by + cx + dy
	var Index1= Math.floor(Math.random() * 4)
	var Index2 = Index1
	while(Index2 == Index1){Index2= Math.floor(Math.random() * 4)}
	if(Index1<Index2){varIndex1 = Index1; varIndex2 = Index2}else{varIndex1 = Index2; varIndex2 = Index1}
	var a = 0;
	while(a==0){a= Math.floor((Math.random() * 20) - 10)}
	var term1 = new Expression(variable[varIndex1]).multiply(a)
	var b = 0;
	while(b==0){b = Math.floor((Math.random() * 20) - 10);}
	var term2 = new Expression(variable[varIndex2]).multiply(b)
	var c = 0;
	while(c==0){c = Math.floor((Math.random() * 20) - 10);}
	var term3 = new Expression(variable[varIndex1]).multiply(c)
	var d = 0;
	while(d==0){d = Math.floor((Math.random() * 20) - 10);}
	var term4 = new Expression(variable[varIndex2]).multiply(d)
	var crt = term1.add(term2).add(term3).add(term4);
	var sign = Math.random() < 0.5 ? -1 : 1;
	var wrong1 = new Expression(variable[varIndex1]).multiply(sign).add(crt);
	var w2 = new Expression(variable[varIndex2]).multiply(sign)
	var wrong2 = crt.add(w2);
	var wrong3 = new Expression(variable[varIndex1]).multiply(sign).add(crt).add(w2)
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	var qExpr1 = algebra.toTex(term1.add(term2))
	var qExpr2 = algebra.toTex(term3.add(term4))
	if(c<0){
		qExpr1  += qExpr2
	}
	if(c>0){
		qExpr1  += "+"+qExpr2
	}
	katex.render(qExpr1 , question);
	printOpts(options);
}
function doCalc13(){//ax^2 + b + cx^2 + d
	var Index1= Math.floor(Math.random() * 4)
	var a = 0;
	while(a==0){a= Math.floor((Math.random() * 20) - 10);}
	var term1 = new Expression(variable[Index1]).pow(2).multiply(a)
	console.log(algebra.toTex(term1))
	var b = 0;
	while(b==0){b = Math.floor((Math.random() * 20) - 10);}
	var c = 0;
	while(c==0){c = Math.floor((Math.random() * 20) - 10);}
	var term2 = new Expression(variable[Index1]).pow(2).multiply(c)
	var d = 0;
	while(d==0){d = Math.floor((Math.random() * 20) - 10);}
	var crt = term1.add(b).add(term2).add(d);
	var sign = Math.random() < 0.5 ? -1 : 1;
	var wrong1 = new Expression(variable[Index1]).pow(2).multiply(sign).add(crt);
	var wrong2 = crt.add(sign);
	var wrong3 = new Expression(variable[Index1]).pow(2).multiply(sign).add(crt).add(sign)
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	var qExpr1 = algebra.toTex(term1.add(b))
	var qExpr2 = algebra.toTex(term2.add(d))
	console.log(qExpr1)
	if(c<0){
		qExpr1  += qExpr2
	}
	if(c>0){
		qExpr1  += "+"+qExpr2
	}
	katex.render(qExpr1 , question);
	printOpts(options);
}
function doCalc14(){//ax^2 + bx + cx^2 + dx
	var Index1= Math.floor(Math.random() * 4)
	var a = 0;
	while(a==0){a= Math.floor((Math.random() * 20) - 10)}
	var term1 = new Expression(variable[Index1]).pow(2).multiply(a)
	var b = 0;
	while(b==0){b = Math.floor((Math.random() * 20) - 10);}
	var term2 = new Expression(variable[Index1]).multiply(b)
	var c = 0;
	while(c==0){c = Math.floor((Math.random() * 20) - 10);}
	var term3 = new Expression(variable[Index1]).pow(2).multiply(c)
	var d = 0;
	while(d==0){d = Math.floor((Math.random() * 20) - 10);}
	var term4 = new Expression(variable[Index1]).multiply(d)
	var crt = term1.add(term2).add(term3).add(term4);
	var sign = Math.random() < 0.5 ? -1 : 1;
	var wrong1 = new Expression(variable[Index1]).pow(2).multiply(sign).add(crt);
	var w2 = new Expression(variable[Index1]).multiply(sign)
	var wrong2 = crt.add(w2);
	var wrong3 = new Expression(variable[Index1]).pow(2).multiply(sign).add(crt).add(w2)
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	var qExpr1 = algebra.toTex(term1.add(term2))
	var qExpr2 = algebra.toTex(term3.add(term4))
	if(c<0){
		qExpr1  += qExpr2
	}
	if(c>0){
		qExpr1  += "+"+qExpr2
	}
	katex.render(qExpr1 , question);
	printOpts(options);
}
function doCalc15(){//ax^n + bx^m + cx^n + dx^m
	var Index1= Math.floor(Math.random() * 4)
	exp1= Math.floor(Math.random() * 2)+3
	exp2 = Math.floor(Math.random() * 2)+1
	var a = 0;
	while(a==0){a= Math.floor((Math.random() * 20) - 10)}
	var term1 = new Expression(variable[Index1]).pow(exp1).multiply(a)
	var b = 0;
	while(b==0){b = Math.floor((Math.random() * 20) - 10);}
	var term2 = new Expression(variable[Index1]).pow(exp2).multiply(b)
	var c = 0;
	while(c==0){c = Math.floor((Math.random() * 20) - 10);}
	var term3 = new Expression(variable[Index1]).pow(exp1).multiply(c)
	var d = 0;
	while(d==0){d = Math.floor((Math.random() * 20) - 10);}
	var term4 = new Expression(variable[Index1]).pow(exp2).multiply(d)
	var crt = term1.add(term2).add(term3).add(term4);
	var sign = Math.random() < 0.5 ? -1 : 1;
	var wrong1 = new Expression(variable[Index1]).pow(exp1).multiply(sign).add(crt);
	var w2 = new Expression(variable[Index1]).pow(exp2).multiply(sign)
	var wrong2 = crt.add(w2);
	var wrong3 = new Expression(variable[Index1]).pow(exp1).multiply(sign).add(crt).add(w2)
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	var qExpr1 = algebra.toTex(term1.add(term2))
	var qExpr2 = algebra.toTex(term3.add(term4))
	if(c<0){
		qExpr1  += qExpr2
	}
	if(c>0){
		qExpr1  += "+"+qExpr2
	}
	katex.render(qExpr1 , question);
	printOpts(options);
}
function doCalc16(){//ax^n + by^m + cx^n + dy^m
	var Index1= Math.floor(Math.random() * 4)
	var Index2 = Index1
	while(Index2 == Index1){Index2= Math.floor(Math.random() * 4)}
	if(Index1<Index2){varIndex1 = Index1; varIndex2 = Index2}else{varIndex1 = Index2; varIndex2 = Index1}
	exp1= Math.floor(Math.random() * 4)+1
	exp2 = exp1
	while(exp2 == exp1){exp2= Math.floor(Math.random() * 4)+1}
	var a = 0;
	while(a==0){a= Math.floor((Math.random() * 20) - 10)}
	var term1 = new Expression(variable[varIndex1]).pow(exp1).multiply(a)
	var b = 0;
	while(b==0){b = Math.floor((Math.random() * 20) - 10);}
	var term2 = new Expression(variable[varIndex2]).pow(exp2).multiply(b)
	var c = 0;
	while(c==0){c = Math.floor((Math.random() * 20) - 10);}
	var term3 = new Expression(variable[varIndex1]).pow(exp1).multiply(c)
	var d = 0;
	while(d==0){d = Math.floor((Math.random() * 20) - 10);}
	var term4 = new Expression(variable[varIndex2]).pow(exp2).multiply(d)
	var crt = term1.add(term2).add(term3).add(term4);
	var sign = Math.random() < 0.5 ? -1 : 1;
	var wrong1 = new Expression(variable[varIndex1]).pow(exp1).multiply(sign).add(crt);
	var w2 = new Expression(variable[varIndex2]).pow(exp2).multiply(sign)
	var wrong2 = crt.add(w2);
	var wrong3 = new Expression(variable[varIndex1]).pow(exp1).multiply(sign).add(crt).add(w2)
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	var qExpr1 = algebra.toTex(term1.add(term2))
	var qExpr2 = algebra.toTex(term3.add(term4))
	if(c<0){
		qExpr1  += qExpr2
	}
	if(c>0){
		qExpr1  += "+"+qExpr2
	}
	katex.render(qExpr1 , question);
	printOpts(options);
}
function monomMulti1(){//a*bx| a,b>0
	varIndex1= Math.floor(Math.random() * 4)
	var a = 0;
	while(a==0){a= Math.floor((Math.random() * 4)+2)}
	var b = 0;
	while(b==0){b= Math.floor((Math.random() * 4)+2)}
	var term1 = new Expression(variable[varIndex1]).multiply(b)
	var crt = term1.multiply(a)
	var sign = Math.random() < 0.5 ? -1 : 1;
	var error = a + sign
	var wrong1 = term1.multiply(error)
	error = a - sign
	var wrong2 = term1.multiply(error)
	var wrong3 = new Expression(variable[varIndex1]).multiply(sign).add(crt)
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	katex.render(a+"\\times "+algebra.toTex(term1), question);
	printOpts(options);
}
function monomMulti2(){//a*bx| voi olla a,b<0
	varIndex1= Math.floor(Math.random() * 4)
	var a = 0;
	while(a==0){a= Math.floor((Math.random() * 12)-6);if(a==1||a==-1){a=0}}
	var b = 0;
	while(b==0){b= Math.floor((Math.random() * 12)-6);if(b==1||b==-1){b=0}}
	var term1 = new Expression(variable[varIndex1]).multiply(b)
	var crt = term1.multiply(a)
	var sign = Math.random() < 0.5 ? -1 : 1;
	var error = a + sign
	var wrong1 = term1.multiply(error)
	var wrong2 = term1.multiply(error).multiply(-1)
	var wrong3 = crt.multiply(-1)
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	var qExpr = a+"\\times "
	if(b<0){
		qExpr  += "("+algebra.toTex(term1)+")"
	}
	if(b>0){
		qExpr  += algebra.toTex(term1)
	}
	katex.render(qExpr, question);
	printOpts(options);
}
function monomMulti3(){//ax*bx^n| a,b>0
	exp1 = Math.floor(Math.random() * 4)+2
	varIndex1= Math.floor(Math.random() * 4)
	var a = 0;
	while(a==0){a= Math.floor((Math.random() * 12)-6);if(a==1||a==-1){a=0}}
	var b = 0;
	while(b==0){b= Math.floor((Math.random() * 12)-6);if(b==1||b==-1){b=0}}
	var term1 = new Expression(variable[varIndex1]).pow(exp1).multiply(b)
	var crt = term1.multiply(a)
	var sign = Math.random() < 0.5 ? -1 : 1;
	var error = a + sign
	var wrong1 = term1.multiply(error)
	var wrong2 = term1.multiply(error).multiply(-1)
	var wrong3 = crt.multiply(-1)
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	var qExpr = a+"\\times "
	if(b<0){
		qExpr  += "("+algebra.toTex(term1)+")"
	}
	if(b>0){
		qExpr  += algebra.toTex(term1)
	}
	katex.render(qExpr, question);
	printOpts(options);
}
function monomMulti4(){//x^n*x^m
	exp1 = Math.floor(Math.random() * 2)+1
	exp2 = 2
	if(exp1==2){while(exp2==2){exp2 = Math.floor(Math.random() * 4)+1}}
	else{exp2 = Math.floor(Math.random() * 4)+1}
	
	varIndex1= Math.floor(Math.random() * 4)
	var term1 = new Expression(variable[varIndex1]).pow(exp1)
	var term2 = new Expression(variable[varIndex1]).pow(exp2)
	var crt = term1.multiply(term2)
	var expW =exp1*exp2
	var wrong1 = new Expression(variable[varIndex1]).pow(expW)
	var wrong2 = new Expression(variable[varIndex1]).pow(expW).multiply(2)
	var wrong3 = crt.multiply(2)
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);

	katex.render(term1+"\\times "+term2, question);
	printOpts(options);
}
function monomMulti5(){//ax^n*bx^m
	exp1 = Math.floor(Math.random() * 2)+1
	exp2 = 2
	if(exp1==2){while(exp2==2){exp2 = Math.floor(Math.random() * 4)+1}}
	else{exp2 = Math.floor(Math.random() * 4)+1}
	varIndex1= Math.floor(Math.random() * 4)
	var a = 0;
	while(a==0){a= Math.floor((Math.random() * 10)+1);}
	var b = 0;
	while(b==0){b= Math.floor((Math.random() * 10)+1);if(b==2&&a==2){b==0}}
	var term1 = new Expression(variable[varIndex1]).pow(exp1).multiply(a)
	var term2 = new Expression(variable[varIndex1]).pow(exp2).multiply(b)
	var crt = term1.multiply(term2)
	var expW =exp1*exp2
	var expCrt = exp1 + exp2
	var constW =  a+b
	var wrong1 = new Expression(variable[varIndex1]).pow(expW).multiply(a).multiply(b)
	var wrong2 = new Expression(variable[varIndex1]).pow(expW).multiply(constW)
	var wrong3 = new Expression(variable[varIndex1]).pow(expCrt).multiply(constW)
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	katex.render(term1+"\\times "+term2, question);
	printOpts(options);
}
function monomMulti6(){//ax^n*bx^m| voi olla a,b<0
	exp1 = Math.floor(Math.random() * 2)+1
	exp2 = 2
	if(exp1==2){while(exp2==2){exp2 = Math.floor(Math.random() * 4)+1}}
	else{exp2 = Math.floor(Math.random() * 4)+1}
	varIndex1= Math.floor(Math.random() * 4)
	var a = 0;
	while(a==0){a= Math.floor((Math.random() * 20)-10);if(b==2&&a==2){b==0}}
	var b = 0;
	while(b==0){b= Math.floor((Math.random() * 20)-10);if(b==2&&a==2){b==0}}
	var term1 = new Expression(variable[varIndex1]).pow(exp1).multiply(a)
	var term2 = new Expression(variable[varIndex1]).pow(exp2).multiply(b)
	var crt = term1.multiply(term2)
	var expW =exp1*exp2
	var expCrt = exp1 + exp2
	var wrong1 = new Expression(variable[varIndex1]).pow(expW).multiply(a).multiply(b)
	var wrong2 = new Expression(variable[varIndex1]).pow(expW).multiply(a).multiply(b).multiply(-1)
	var wrong3 = crt.multiply(-1)
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	var qExpr = term1+"\\times "
	if(b<0){
		qExpr  += "("+algebra.toTex(term2)+")"
	}
	if(b>0){
		qExpr  += algebra.toTex(term2)
	}
	katex.render(qExpr, question);
	printOpts(options);
}
function doDiv1(){
	varIndex1= Math.floor(Math.random() * 4)
	var crtConst = Math.floor(Math.random() * 9)+2
	var denom = Math.floor(Math.random() * 9)+2
	var nom = new Expression(variable[varIndex1]).multiply(crtConst).multiply(denom)
	var crt = new Expression(variable[varIndex1]).multiply(crtConst)
	var sign = Math.random() < 0.5 ? -1 : 1;
	var wrong1 = new Expression(variable[varIndex1]).multiply(crtConst+2*sign)
	var wrong2 = new Expression(variable[varIndex1]).multiply(crtConst+1)
	var wrong3 = new Expression(variable[varIndex1]).multiply(crtConst-1)
	optionsAlg = [crt, wrong1, wrong2, wrong3];
	options = stringOpts(optionsAlg);
	katex.render("\\frac{"+algebra.toTex(nom)+"}{"+algebra.toTex(denom)+"}", question);
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


