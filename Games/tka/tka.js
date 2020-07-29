document.addEventListener('DOMContentLoaded', theBegin, false);

var variables = ["a", "b", "x", "y", 0];
var interval = 10;
var sound, exp1, exp2, exp3, exp4, expTot, expTot1, expTot2, expTotWrong, expTotWrong1, expTotWrong2, expTotWrong3, expTotWrong4, expTotWrong5, expTotWrong6, expTotWrong7, expTotWrong8, expTotWrong9, expTotWrong10, expTotWrong11, parameter1, parameter2, parameter3, parameter4, wrong, wrong1, wrong2, wrong3, wrong4, wrong5, wrong6, wrong7, wrong8, wrong9, wrong10, wrong11, result, result1, result2, varIndex, varIndex1, varIndex2, sign1, sign2, sign3;
var correctAnsBtn, timer;
var correctAnss = 0;
var time = 10000;
var totalPoints = 0;
var level=1;
var king = 0;
// S T A R T 
function start(){//Starts the time
	timer = setInterval("timing()", interval);
	//sound.play();
}
function stop(a){//Stops the time
	clearInterval(a);
	
}
function timing(){//Runs the clock
	time--
    document.getElementById("time").innerHTML = time;
}
function theBegin(){//View in the beginning
	sound = new sound('music.m4a');
	document.getElementById("question").innerHTML= "The King of Algebra<br><br><br><br><button id='goButton' onclick='doQuestion("+1+"); start()' >START</button>";
	document.getElementById("button1").innerHTML="";
	document.getElementById("button2").innerHTML="";
	document.getElementById("button3").innerHTML="";
	document.getElementById("button4").innerHTML="";
	
}
//äänipois
function changeImage() {
    var image = document.getElementById('sound');
    if (image.src.match("No")) {
        image.src = "pics/Sound.jpg";
		sound.play();
    } else {
        image.src = "pics/NoSound.jpg";
		sound.stop();
    }
}
//ääni
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
	this.sound.loop = true;
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

// T E S T I N G  F U N C T I O N S

function testMonom(a,b){//checks the notation of monom
	if(a==1){
		if(b==0){
			var text = 1;
			return text;
		}
		else{
			var text = String(b);
			return text;
		}
	}
	if(a==0){
		return 0;
	}
	if(b==0){
		return a;
	}
	if(a==-1){
		if(b==0){
			var text = "-1";
			return text;
		}
		else{
			var text = "-" + String(b);
			return text;
		}
	}
	else{
		var text = a+b;
		return text;
	}
}
function testMonomBracket(a,b){
	if(a<0){
		var text="("+testMonom(a,b)+")";
	    return text;
	}
	else{
		var text = testMonom(a,b);
		return text;
	}
}
function testBinom(a,b,c,d){
	if(c==0){
	var text = testMonom(a,b);
	return text;
	}
	else{
		if(a==0){
			var text = testMonom(c,d);
			return text;
		}
		if(a!=0 && c<0){
			var text = testMonom(a,b) + testMonom(c,d);
			return text;
		}
		
		else{
		
			var text = testMonom(a,b)+ "+" +testMonom(c,d);
			return text;
		}
	}		
}
function testExp(a,b){
	if(b==1){
		var text = a;
	    return text;
	}
	if(b==0){
		var text = "";
		return text;		
	}
	if(a==0){
		var text = "";
		return text;
	}
	else{
		var text = a + "<sup>"+b+"</sup>";
		return text;
	}
}
function testFracExp(a,b,c){
	if(c==1){
		var text = testMonom(a,b);
	    return text;
	}
	if(c==0){
		var text = testMonom(a,0);
		return text;		
	}
	if(c==-1){
		var text = doFraction(a,b);
		return text;
	}
	if(c<-1){
		var d = -1*c;
		var denominator = b+"<sup>"+d+"</sup>";
		var text = doFraction(a,denominator);
		return text;
	}
	else{
		var text = testMonom(a,b) + "<sup>"+c+"</sup>";
		return text;
	}
}
function testBinomXBinom(a,b,c,d,e,f,g,i,j,k){//(ab^c+de^f)(gb^i+je^k)
	if(c==i&&f==k){
		if(d*g+j*a<0 && d*j<0){
			var text = testMonom(a*g, testExp(variables[b],c+i))+""+testMonom(d*g+j*a,testExp(variables[b],c))+testExp(variables[e],f)+""+testMonom(d*j, testExp(variables[e],f+k));
			return text;
		}
		if(d*g+j*a<0 && d*j>0){
			var text = testMonom(a*g, testExp(variables[b],c+i))+""+testMonom(d*g+j*a,testExp(variables[b],c))+testExp(variables[e],f)+"+"+testMonom(d*j, testExp(variables[e],f+k));
			return text;
		}
		if(d*g+j*a>0 && d*j<0){
			var text = testMonom(a*g, testExp(variables[b],c+i))+"+"+testMonom(d*g+j*a,testExp(variables[b],c))+testExp(variables[e],f)+""+testMonom(d*j, testExp(variables[e],f+k));
			return text;
		}
		if(d*g+j*a>0 && d*j>0){
			var text = testMonom(a*g, testExp(variables[b],c+i))+"+"+testMonom(d*g+j*a,testExp(variables[b],c))+testExp(variables[e],f)+"+"+testMonom(d*j, testExp(variables[e],f+k));
			return text;
		}
		if(d*g+j*a==0){
			var text = testMonom(a*g, testExp(variables[b],c+i))+""+testMonom(d*j, testExp(variables[e],f+k));
			return text;
		}
	}
	else{
		if(a*j>0 && d*g>0 && d*j>0){
			var text = testMonom(a*g, testExp(variables[b],c+i))+"+"+testMonom(a*j,testExp(variables[b],c))+testExp(variables[e],k)+"+"+testMonom(d*g, testExp(variables[e],f))+testExp(variables[b],i)+"+"+testMonom(d*j,testExp(variables[e],f+k));
			return text;
		}
		if(a*j>0 && d*g>0 && d*j<0){
			var text = testMonom(a*g, testExp(variables[b],c+i))+"+"+testMonom(a*j,testExp(variables[b],c))+testExp(variables[e],k)+"+"+testMonom(d*g, testExp(variables[e],f))+testExp(variables[b],i)+""+testMonom(d*j,testExp(variables[e],f+k));
			return text;
		}
		if(a*j>0 && d*g<0 && d*j<0){
			var text = testMonom(a*g, testExp(variables[b],c+i))+"+"+testMonom(a*j,testExp(variables[b],c))+testExp(variables[e],k)+""+testMonom(d*g, testExp(variables[e],f))+testExp(variables[b],i)+""+testMonom(d*j,testExp(variables[e],f+k));
			return text;
		}
		if(a*j>0 && d*g<0 && d*j>0){
			var text = testMonom(a*g, testExp(variables[b],c+i))+"+"+testMonom(a*j,testExp(variables[b],c))+testExp(variables[e],k)+""+testMonom(d*g, testExp(variables[e],f))+testExp(variables[b],i)+"+"+testMonom(d*j,testExp(variables[e],f+k));
			return text;
		}	
		if(a*j<0 && d*g<0 && d*j<0){
			var text = testMonom(a*g, testExp(variables[b],c+i))+""+testMonom(a*j,testExp(variables[b],c))+testExp(variables[e],k)+""+testMonom(d*g, testExp(variables[e],f))+testExp(variables[b],i)+""+testMonom(d*j,testExp(variables[e],f+k));
			return text;
		}	
		if(a*j<0 && d*g<0 && d*j>0){
			var text = testMonom(a*g, testExp(variables[b],c+i))+""+testMonom(a*j,testExp(variables[b],c))+testExp(variables[e],k)+""+testMonom(d*g, testExp(variables[e],f))+testExp(variables[b],i)+"+"+testMonom(d*j,testExp(variables[e],f+k));
			return text;
		}	
		if(a*j<0 && d*g>0 && d*j>0){
			var text = testMonom(a*g, testExp(variables[b],c+i))+""+testMonom(a*j,testExp(variables[b],c))+testExp(variables[e],k)+"+"+testMonom(d*g, testExp(variables[e],f))+testExp(variables[b],i)+"+"+testMonom(d*j,testExp(variables[e],f+k));
			return text;
		}	
		if(a*j<0 && d*g>0 && d*j<0){
			var text = testMonom(a*g, testExp(variables[b],c+i))+""+testMonom(a*j,testExp(variables[b],c))+testExp(variables[e],k)+"+"+testMonom(d*g, testExp(variables[e],f))+testExp(variables[b],i)+""+testMonom(d*j,testExp(variables[e],f+k));
			return text;
		}	
		else{
			var text = testMonom(a*g, testExp(variables[b],c+i))+"+"+testMonom(a*j,testExp(variables[b],c))+testExp(variables[e],k)+"+"+testMonom(d*g, testExp(variables[e],f))+testExp(variables[b],i)+"+"+testMonom(d*j,testExp(variables[e],f+k));
			return text;
		}
	}
}
function doFraction(a,b){
		var fraction = "<table align='center'><tbody><tr><td style='border-bottom:solid 1px'>"+a+"</td></tr><tr><td>"+b+"</td></tr></tbody></table>";
		return fraction;
}
// H E L P
 
function showInfo(){
	
 $(function() {
            $( "#dialog" ).dialog({
				autoOpen: false, 
               	width:350,
				modal: true,
				hide: "clip",
				show: "clip",
				title: "H E L P!"
            });
			$( "#dialog" ).dialog( "open" );           
         }); 
	var pic;
	if(level==0){pic= "Info/info.jpg";} 
	if(level==1){pic= "Info/doAdding.jpg";} 
	if(level==2){pic= "Info/doSub.jpg";}
	if(level==3){pic= "Info/doClause.jpg";}
	if(level==4){pic= "Info/doClause1.jpg";}
	if(level==5){pic= "Info/doClause2.jpg";}
	if(level==6){pic= "Info/doClause3.jpg";}
	if(level==7){pic= "Info/doClause4.jpg";}
	if(level==8){pic= "Info/doClause5.jpg";}
	if(level==9){pic= "Info/doConstXmonom.jpg";}
	if(level==10){pic= "Info/doConstXmonomNeg.jpg";}
	if(level==11){pic= "Info/doMonomXMonom.jpg";}
	if(level==12){pic= "Info/doMonomXMonom1.jpg";}
	if(level==13){pic= "Info/doMonomXMonom2.jpg";}
	if(level==14){pic= "Info/doMonomXMonomNeg.jpg";}
	if(level==15){pic= "Info/Div.jpg";}
	if(level==16){pic= "Info/Div1.jpg";}
	if(level==17){pic= "Info/Div2.jpg";}
	if(level==18){pic= "Info/Div3.jpg";}
	if(level==19){pic= "Info/powerOfPower.jpg";}
	if(level==20){pic= "Info/powerOfPower1.jpg";}
	if(level==21){pic= "Info/powerOfPower2.jpg";}
	if(level==22){pic= "Info/powerRules.jpg";}
	if(level==23){pic= "Info/powerRules1.jpg";}
	if(level==24){pic= "Info/powerRules2.jpg";}
	if(level==25){pic= "Info/constXBinom.jpg";}
	if(level==26){pic= "Info/constXBinom1.jpg";}
	if(level==27){pic= "Info/constXBinom2.jpg";}
	if(level==28){pic= "Info/monomXBinom.jpg";}
	if(level==29){pic= "Info/monomXBinom1.jpg";}
	if(level==30){pic= "Info/multiMonoms.jpg";}
	if(level==31){pic= "Info/multiMonoms1.jpg";}
	if(level==32){pic= "Info/multiMonoms2.jpg";}
	if(level==33){pic= "Info/binomXBinom.jpg";}
	if(level==34){pic= "Info/binomXBinom1.jpg";}
	if(level==35){pic= "Info/binomXBinom2.jpg";}
	if(level==36){pic= "Info/binomXBinom3.jpg";}
	if(level==37){pic= "Info/binomXBinom4.jpg";}
	if(level==38){pic= "Info/binomXBinom5.jpg";}
	if(level==39){pic= "Info/binomXBinom6.jpg";}
	if(level==40){pic= "Info/binomXBinom7.jpg";}
	if(level==41){pic= "Info/binomXBinom8.jpg";}
	if(level==42){pic= "Info/factPolyDivMonom.jpg";}
	if(level==43){pic= "Info/factPolyDivBinom.jpg";}
	if(level==44){pic= "Info/factPolyDivBinom1.jpg";}
	if(level==45){pic= "Info/factPolyDivBinom2.jpg";}
	if(level>45){pic= "Info/NoHelp.jpg";}
	
document.getElementById("dialog").innerHTML="<img src="+pic+">";
}
// D O   Q U E S T I O N S
function doQuestion(l){//Calls the needed question function
	if(l==1){doAdding();}
	if(l==2){doSub();}
	if(l==3){doClause();}
	if(l==4){doClause1();}
	if(l==5){doClause2();}
	if(l==6){doClause3();}
	if(l==7){doClause4();}
	if(l==8){doClause5();}
	if(l==9){doConstXmonom();}
	if(l==10){doConstXmonomNeg();}
	if(l==11){doMonomXMonom();}
	if(l==12){doMonomXMonom1();}
	if(l==13){doMonomXMonom2();}
	if(l==14){doMonomXMonomNeg();}
	if(l==15){div();}
	if(l==16){div1();}
	if(l==17){div2();}
	if(l==18){div3();}
	if(l==19){powerOfPower();}
	if(l==20){powerOfPower1();}
	if(l==21){powerOfPower2();}
	if(l==22){powerRules();}
	if(l==23){powerRules1();}
	if(l==24){powerRules2();}
	if(l==25){consXBinom();}
	if(l==26){consXBinom1();}
	if(l==27){consXBinom2();}
	if(l==28){monomXBinom();}
	if(l==29){monomXBinom1();}
	if(l==30){multiMonoms();}
	if(l==31){multiMonoms1();}
	if(l==32){multiMonoms1();}
	if(l==33){BinomXBinom();}
	if(l==34){BinomXBinom1();}
	if(l==35){BinomXBinom2();}
	if(l==36){BinomXBinom3();}
	if(l==37){BinomXBinom4();}
	if(l==38){BinomXBinom5();}
	if(l==39){BinomXBinom6();}
	if(l==40){BinomXBinom7();}
	if(l==41){BinomXBinom8();}
	if(l==42){factPolyDivMonom();}
	if(l==43){factPolyDivBinom();}
	if(l==44){factPolyDivBinom1();}
	if(l==45){factPolyDivBinom2();}
	if(l==46){factPolyDivBinom3();}
	if(l==47){factPolyDivBinom4();}
	if(l==48){factPolyDivBinom5();}
	buttonContent(l);
}
// L E V E L S
function doAdding(){//Does Adding calculation, with 2 monomials and 1 variable (ax + bx || a&b small)
	level = 1;
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=varIndex;
	varIndex2=varIndex;
	parameter1 = Math.floor((Math.random() * 10)+1);
	parameter2 = Math.floor((Math.random() * 10)+1);
	result = parameter1+parameter2;
	wrong =  result + Math.floor((Math.random() * 2)+1);
	wrong1 = result - Math.floor((Math.random() * 2)+1);
	wrong2 = wrong + 1;
		document.getElementById("question").innerHTML=testBinom(parameter1,variables[varIndex],0,0) + " + " + testBinom(parameter2,variables[varIndex],0,0);
		document.getElementById("level").innerHTML="Level "+level;
	
		
}
function doSub(){//Does Adding calculation, with 2 monomials and 1 variable (ax + bx || a&b small)
	varIndex = Math.floor((Math.random() * 4));
	varIndex1=varIndex;
	varIndex2=varIndex;
	parameter1 = Math.floor((Math.random() * 10)+1);
	parameter2 = Math.floor((Math.random() * 10)+1);
	result = parameter1-parameter2;
	wrong =  result + Math.floor((Math.random() * 2)+1);
	wrong1 = result - Math.floor((Math.random() * 2)+1);
	wrong2 = wrong + 1;

		document.getElementById("question").innerHTML=testBinom(parameter1,variables[varIndex],0,0) + " - " +testMonom(parameter2,variables[varIndex],0,0);
		document.getElementById("level").innerHTML="Level "+level;
		
}
function doClause(){//Does adding or subtraction with 2 monomial and 1 variable, 1st positive
	varIndex = Math.floor((Math.random() * 4));
	varIndex1=varIndex;
	varIndex2=varIndex;
	sign1=Math.round(Math.random()) * 2 - 1;
	Math.round(Math.random()) * 2 - 1;
	parameter1 = Math.floor((Math.random() * 14)+1);
	parameter2 = sign1*Math.floor((Math.random() * 14)+1);
	result = parameter1+parameter2;
	wrong =  result + Math.floor((Math.random() * 2)+1);
	wrong1 = result - Math.floor((Math.random() * 2)+1);
	wrong2 = wrong + 1;
	document.getElementById("question").innerHTML=testBinom(parameter1,variables[varIndex],parameter2,variables[varIndex]);
	document.getElementById("level").innerHTML="Level "+level;

} 
function doClause1(){//Does clause with 2 monomials and 1 variable, both can be negative
	varIndex = Math.floor((Math.random() * 4));
	varIndex1=varIndex;
	varIndex2=varIndex;
	sign1=Math.round(Math.random()) * 2 - 1;
	sign2=Math.round(Math.random()) * 2 - 1;
	parameter1 = sign1*Math.floor((Math.random() * 10)+1);
	parameter2 = sign2*Math.floor((Math.random() * 10)+1);
	result = parameter1+parameter2;
	wrong =  result + Math.floor((Math.random() * 2)+1);
	wrong1 = result - Math.floor((Math.random() * 2)+1);
	wrong2 = wrong + 1;
	
	document.getElementById("question").innerHTML=testMonom(parameter1,variables[varIndex])+"+"+testMonomBracket(parameter2,variables[varIndex]);
	document.getElementById("level").innerHTML="Level "+level;
	
}
function doClause2(){//Does clause with 3 monomials and 1 variable, only adding
	varIndex = Math.floor((Math.random() * 4));
	varIndex1=varIndex;
	varIndex2=varIndex;
	parameter1 = Math.floor((Math.random() * 10)+1);
	parameter2 = Math.floor((Math.random() * 10)+1);
	parameter3 = Math.floor((Math.random() * 10)+1);
	
	result = parameter1+parameter2+parameter3;
	wrong =  result + Math.floor((Math.random() * 2)+1);
	wrong1 = result - Math.floor((Math.random() * 2)+1);
	wrong2 = wrong + 1;
	document.getElementById("question").innerHTML=testMonom(parameter1,variables[varIndex])+"+"+testMonomBracket(parameter2,variables[varIndex])+"+"+testMonomBracket(parameter3,variables[varIndex]);
	document.getElementById("level").innerHTML="Level "+level;

}
function doClause3(){//Does clause with 3 monomials and 1 variable, adding and subtractionn
	varIndex = Math.floor((Math.random() * 4));
	varIndex1=varIndex;
	varIndex2=varIndex;
	sign1=Math.round(Math.random()) * 2 - 1;
	sign2=Math.round(Math.random()) * 2 - 1;
	sign3=Math.round(Math.random()) * 2 - 1;
	parameter1 = sign1*Math.floor((Math.random() * 10)+1);
	parameter2 = sign2*Math.floor((Math.random() * 10)+1);
	parameter3 = sign3*Math.floor((Math.random() * 10)+1);
	
	result = parameter1+parameter2+parameter3;
	wrong =  result + Math.floor((Math.random() * 2)+1);
	wrong1 = result - Math.floor((Math.random() * 2)+1);
	wrong2 = wrong + 1;
	document.getElementById("question").innerHTML=testMonom(parameter1,variables[varIndex])+"+"+testMonomBracket(parameter2,variables[varIndex])+"+"+testMonomBracket(parameter3,variables[varIndex]);
	document.getElementById("level").innerHTML="Level "+level;
	
}
function doClause4(){//Does clause with 3 monomials and 2 variables
	varIndex = Math.floor((Math.random() * 4));
	varIndex1 = 3-varIndex;
	varIndex2=varIndex;
	sign1=Math.round(Math.random()) * 2 - 1;
	parameter1 = Math.floor((Math.random() * 10)+1);
	parameter2 = Math.floor((Math.random() * 10)+1);
	parameter3 = sign1*Math.floor((Math.random() * 10)+1);
	result1 = parameter1+parameter3;
	result2 = parameter2;
	expTot1 = 1;
	expTot2 = 1;
	expTotWrong = 1;
	expTotWrong1 = 1;
	expTotWrong2 = 1;
	expTotWrong3 = 1;
	expTotWrong4 = 1;
	expTotWrong5 = 1;
	wrong =  result1;
	wrong1 = parameter2 + sign1;
	wrong2 = result1+sign1;
	wrong3 = result2;
	wrong4 = parameter1+sign1+parameter3;
	wrong5 = -1*parameter2;
	document.getElementById("question").innerHTML=testBinom(parameter1,variables[varIndex],0,0) + "+" +testBinom(parameter2,variables[varIndex1],parameter3,variables[varIndex]);
	document.getElementById("level").innerHTML="Level "+level;
	
}
function doClause5(){//Does clause with 4 monomials and 2 variables
	varIndex = Math.floor((Math.random() * 4));
	varIndex1 = 3 - varIndex;
	varIndex2=varIndex;
	sign1=Math.round(Math.random()) * 2 - 1;
	sign2=Math.round(Math.random()) * 2 - 1;
	parameter1 = Math.floor((Math.random() * 10)+1);
	parameter2 = Math.floor((Math.random() * 10)+1);
	parameter3 = sign1*Math.floor((Math.random() * 10)+1);
	parameter4 = sign2*Math.floor((Math.random() * 10)+1);
	result1 = parameter1+parameter3;
	result2 = parameter2+parameter4;
	expTot1 = 1;
	expTot2 = 1;
	expTotWrong = 1;
	expTotWrong1 = 1;
	expTotWrong2 = 1;
	expTotWrong3 = 1;
	expTotWrong4 = 1;
	expTotWrong5 = 1;
	wrong =  result1;
	wrong1 = parameter2 + sign1;
	wrong2 = result1+sign1;
	wrong3 = result2;
	wrong4 = parameter1+sign1+parameter3;
	wrong5 = -1*parameter2;
	if( parameter3>0){
		document.getElementById("question").innerHTML=testBinom(parameter1,variables[varIndex],parameter2,variables[varIndex1]) + "+"+ testBinom(parameter3,variables[varIndex],parameter4,variables[varIndex1]);
		}
	if( parameter3<0){
		document.getElementById("question").innerHTML=testBinom(parameter1,variables[varIndex],parameter2,variables[varIndex1]) + ""+ testBinom(parameter3,variables[varIndex],parameter4,variables[varIndex1]);
	}
	
	document.getElementById("level").innerHTML="Level: "+level;
	
} 
function doConstXmonom(){//Does constant X monomial, only positive
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=varIndex;
	varIndex2=varIndex;
	parameter1 = Math.floor((Math.random() * 10)+1);
	parameter2 = Math.floor((Math.random() * 10)+1);
	result = parameter1*parameter2;
	wrong = result + Math.floor((Math.random() * 2)+1);
	wrong1 = result - Math.floor((Math.random() * 2)+1);
	wrong2 = wrong + 1;
		document.getElementById("question").innerHTML=parameter1 + " &#9747 " + testBinom(parameter2, variables[varIndex],0,0);
		document.getElementById("level").innerHTML="Level "+level;
		
}
function doConstXmonomNeg(){//Does constant X monomial, also negative
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=varIndex;
	varIndex2=varIndex;
	sign1 =Math.round(Math.random()) * 2 - 1; 
	sign2 =Math.round(Math.random()) * 2 - 1;
	parameter1 = sign1 * Math.floor((Math.random() * 10)+1);
	parameter2 = sign2 * Math.floor((Math.random() * 10)+1);
	result = parameter1*parameter2;
	wrong = result + Math.floor((Math.random() * 2)+1);
	wrong1 = result - Math.floor((Math.random() * 2)+1);
	wrong2 = wrong + 1;
	document.getElementById("question").innerHTML=parameter1 + " &#9747 " + testMonomBracket(parameter2, variables[varIndex]);
	document.getElementById("level").innerHTML="Level "+level;
	
}
function doMonomXMonom(){//Does 1st degree monom X any monom with same base
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=varIndex;
	varIndex2=varIndex;
	exp1 = Math.floor((Math.random() * 4)+1);
	sign1 =Math.round(Math.random()) * 2 - 1; 	
	parameter1 = Math.floor((Math.random() * 6)+1);
	parameter2 = Math.floor((Math.random() * 6)+1);
	expTot = exp1 + 1;
	expTotWrong = expTot;
	expTotWrong1 = exp1*exp1;
	expTotWrong2 = expTot+sign1;
	result= parameter1*parameter2;
	wrong = result;
	wrong1 = result - Math.floor((Math.random() * 2)+1);
	wrong2 = wrong + 1;

		document.getElementById("question").innerHTML=testMonom(parameter1, testExp(variables[varIndex],1)) + " &#9747 " + testMonomBracket(parameter2, testExp(variables[varIndex],exp1));
		document.getElementById("level").innerHTML="Level "+level;
	
}
function doMonomXMonom1(){//Does 1st degree monom X any monom with same base
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=varIndex;
	varIndex2=varIndex;
	exp1 = Math.floor((Math.random() * 4)+1);
	exp2 = Math.floor((Math.random() * 4)+1);
	sign1 =Math.round(Math.random()) * 2 - 1; 	
	parameter1 = 1
	parameter2 = 1
	expTot = exp1 + exp2;
	expTotWrong = expTot;
	expTotWrong1 = exp1*exp2;
	expTotWrong2 = expTot+sign1;
	result= parameter1*parameter2;
	wrong = result;
	wrong1 = result - Math.floor((Math.random() * 2)+1);
	wrong2 = wrong + 1;

		document.getElementById("question").innerHTML=testMonom(parameter1, testExp(variables[varIndex],exp1)) + " &#9747 " + testMonomBracket(parameter2, testExp(variables[varIndex],exp2));
		document.getElementById("level").innerHTML="Level "+level;
		
}
function doMonomXMonom2(){//Does monom X monom with all degrees
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=varIndex;
	varIndex2=varIndex;
	exp1 = Math.floor((Math.random() * 4)+1);
	exp2 = Math.floor((Math.random() * 4)+1);
	sign1 =Math.round(Math.random()) * 2 - 1;	
	parameter1 = Math.floor((Math.random() * 6)+1);
	parameter2 = Math.floor((Math.random() * 6)+1);
	expTot = exp1+exp2;
	expTotWrong = expTot;
	expTotWrong1 = exp1*exp2;
	expTotWrong2 = expTot+sign1;
	result= parameter1*parameter2;
	wrong = result;
	wrong1 = result - Math.floor((Math.random() * 2)+1);
	wrong2 = wrong + 1;

		document.getElementById("question").innerHTML=testMonom(parameter1, testExp(variables[varIndex],exp1)) + " &#9747 " + testMonomBracket(parameter2, testExp(variables[varIndex],exp2));
		document.getElementById("level").innerHTML="Level "+level;
		
}
function doMonomXMonomNeg(){//Monom x monom, can be negative
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=varIndex;
	varIndex2=varIndex;
	sign1 =Math.round(Math.random()) * 2 - 1; 
	sign2 =Math.round(Math.random()) * 2 - 1;
	exp1 = Math.floor((Math.random() * 4)+1);
	exp2 = Math.floor((Math.random() * 4)+1);	
	parameter1 = sign1 * Math.floor((Math.random() * 6)+1);
	parameter2 = sign2 * Math.floor((Math.random() * 6)+1);
	expTot = exp1+exp2;
	expTotWrong = expTot;
	expTotWrong1 = exp1*exp2;
	expTotWrong2 = expTot+sign1;
	result= parameter1*parameter2;
	wrong = result;
	wrong1 = result - Math.floor((Math.random() * 2)+1);
	wrong2 = wrong + 1;

		document.getElementById("question").innerHTML=testMonom(parameter1, testExp(variables[varIndex],exp1)) + " &#9747 " + testMonomBracket(parameter2, testExp(variables[varIndex],exp2));
		document.getElementById("level").innerHTML="Level "+level;
		
}
function div(){//Monom / constant, both positive
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=varIndex;
	varIndex2=varIndex;
	parameter1 = Math.floor((Math.random() * 9)+1);
	result = Math.floor((Math.random() * 9)+1);
	parameter2 = parameter1 * result;
	wrong = result + Math.floor((Math.random() * 2)+1);
	wrong1 = result - Math.floor((Math.random() * 2)+1);
	wrong2 = wrong + 1;
	document.getElementById("question").innerHTML=doFraction(testMonom(parameter2, variables[varIndex]), parameter1);
	document.getElementById("level").innerHTML="Level "+level;

}
function div1(){//Monom / constant, can be negative
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=varIndex;
	varIndex2=varIndex;
	sign1 =Math.round(Math.random()) * 2 - 1; 
	sign2 =Math.round(Math.random()) * 2 - 1; 
	
	parameter1 = sign1 * Math.floor((Math.random() * 14)+1);
	result = sign2 * Math.floor((Math.random() * 9)+1);
	parameter2 = parameter1 * result;
	wrong = result + Math.floor((Math.random() * 2)+1);
	wrong1 = result - Math.floor((Math.random() * 2)+1);
	wrong2 = wrong + 1;
	document.getElementById("question").innerHTML=doFraction(testMonom(parameter2, variables[varIndex]), parameter1);
	document.getElementById("level").innerHTML="Level "+level;

}
function div2(){//Monom / monom, can be negative
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=varIndex;
	varIndex2=varIndex;
	sign1 =Math.round(Math.random()) * 2 - 1; 
	sign2 =Math.round(Math.random()) * 2 - 1; 
	parameter1 = sign1 * Math.floor((Math.random() * 14)+1);
	result = sign2 * Math.floor((Math.random() * 9)+1);
	exp1 = Math.floor((Math.random() * 4)+1);
	exp2 = Math.floor((Math.random() * 4)+1);
	expTot = exp2-exp1;
	expTotWrong = expTot + sign1;
	expTotWrong1 = expTot + sign2;
	expTotWrong2 = expTot + sign1;
	parameter2 = parameter1 * result;
	wrong = result + Math.floor((Math.random() * 2)+1);
	wrong1 = result - Math.floor((Math.random() * 2)+1);
	wrong2 = wrong + 1;
	document.getElementById("question").innerHTML=doFraction(testMonom(parameter2, testExp(variables[varIndex],exp2)), testMonom(parameter1, testExp(variables[varIndex],exp1)));
	document.getElementById("level").innerHTML="Level "+level;
	
}
function div3(){//Monom / monom, can be negative, neg exp -> fraction
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=varIndex;
	varIndex2=varIndex;
	sign1 =Math.round(Math.random()) * 2 - 1; 
	sign2 =Math.round(Math.random()) * 2 - 1; 
	parameter1 = sign1 * Math.floor((Math.random() * 14)+1);
	result = sign2 * Math.floor((Math.random() * 9)+1);
	exp1 = Math.floor((Math.random() * 4)+1);
	exp2 = Math.floor((Math.random() * 4)+1);
	expTot = exp2-exp1;
	expTotWrong = expTot + sign1;
	expTotWrong1 = expTot + sign2;
	expTotWrong2 = expTot + sign1;
	parameter2 = parameter1 * result;
	wrong = result + Math.floor((Math.random() * 2)+1);
	wrong1 = result - Math.floor((Math.random() * 2)+1);
	wrong2 = result;
	document.getElementById("question").innerHTML=doFraction(testMonom(parameter2, testExp(variables[varIndex],exp2)), testMonom(parameter1, testExp(variables[varIndex],exp1)));
	document.getElementById("level").innerHTML="Level "+level;
	
}
function powerOfPower(){//Power of Power, no constant
	varIndex= Math.floor((Math.random() * 4)); 
	varIndex1=varIndex;
	varIndex2=varIndex;
	exp1 = Math.floor((Math.random() * 4)+1);
	exp2 = Math.floor((Math.random() * 4)+2);
	sign1 =Math.round(Math.random()) * 2 - 1; 
	expTot = exp2*exp1;
	expTotWrong = exp1+exp2;
	expTotWrong1 = expTot + 1;
	expTotWrong2 = expTot+sign1;
	result = Math.pow(1,exp2);
	wrong = result + exp1;
	wrong1 = result;
	wrong2 = exp1*exp2;
	document.getElementById("question").innerHTML="("+testMonom(1, testExp(variables[varIndex],exp1))+")<sup>"+exp2+"</sup>";
	document.getElementById("level").innerHTML="Level "+level;	
	
}
function powerOfPower1(){//Power of Power with  positive constant
	varIndex= Math.floor((Math.random() * 4)); 
	varIndex1=varIndex;
	varIndex2=varIndex;
	parameter1= Math.floor((Math.random() * 4)+1);
	exp1 = Math.floor((Math.random() * 3)+1);
	exp2 = Math.floor((Math.random() * 2)+2);
	sign1 =Math.round(Math.random()) * 2 - 1; 
	expTot = exp2*exp1;
	expTotWrong = exp1+exp2;
	expTotWrong1 = expTot + 1;
	expTotWrong2 = expTot+sign1;
	result = Math.pow(parameter1,exp2);
	wrong = result + exp1;
	wrong1 = result;
	wrong2 = wrong + 1;
	document.getElementById("question").innerHTML="("+testMonom(parameter1, testExp(variables[varIndex],exp1))+")<sup>"+exp2+"</sup>";
	document.getElementById("level").innerHTML="Level "+level;
	
}
function powerOfPower2(){//Power of Power with constant, negative constant possible
	varIndex= Math.floor((Math.random() * 4)); 
	varIndex1=varIndex;
	varIndex2=varIndex;
	sign1 =Math.round(Math.random()) * 2 - 1;
	parameter1= sign1 * Math.floor((Math.random() * 4)+1);
	exp1 = Math.floor((Math.random() * 3)+1);
	exp2 = Math.floor((Math.random() * 2)+2);
	expTot = exp2*exp1;
	expTotWrong = exp1+exp2;
	expTotWrong1 = expTot + 1;
	expTotWrong2 = expTot+sign1;
	result = Math.pow(parameter1,exp2);
	wrong = result + exp1;
	wrong1 = result;
	wrong2 = wrong + 1;
	document.getElementById("question").innerHTML="("+testMonom(parameter1, testExp(variables[varIndex],exp1))+")<sup>"+exp2+"</sup>";
	document.getElementById("level").innerHTML="Level "+level;	
	
}
function powerRules(){//Simplify all type of monomials (multi, div, power), no constant
	varIndex= Math.floor((Math.random() * 4)); 
	varIndex1=varIndex;
	varIndex2=varIndex;
	exp1 = Math.floor((Math.random() * 3)+1);
	exp2 = Math.floor((Math.random() * 3)+1);
	exp3 = Math.floor((Math.random() * 3)+1);
	sign1 =Math.round(Math.random()) * 2 - 1; 
	expTot = exp2+exp1-exp3;
	expTotWrong = exp1*exp2-exp3;
	expTotWrong1 = expTot + 1;
	expTotWrong2 = expTot+sign1;
	result = 1;
	result1 = testExp(variables[varIndex],exp1)+" &#9747 "+testExp(variables[varIndex],exp2);
	result2 = testExp(variables[varIndex],exp3);
	wrong = result + exp1;
	wrong1 = result;
	wrong2 = result + exp2;
	document.getElementById("question").innerHTML=doFraction(result1, result2);
	document.getElementById("level").innerHTML="Level "+level;	
	
}
function powerRules1(){//Simplify all type of monomials (multi, div, power), with positive coefficients
	varIndex= Math.floor((Math.random() * 4)); 
	varIndex1=varIndex;
	varIndex2=varIndex;
	parameter1= Math.floor((Math.random() * 4)+1);
	parameter3= Math.floor((Math.random() * 4)+1);
	parameter2= parameter1*parameter3
	exp1 = Math.floor((Math.random() * 3)+1);
	exp2 = Math.floor((Math.random() * 3)+1);
	exp3 = Math.floor((Math.random() * 3)+1);
	sign1 =Math.round(Math.random()) * 2 - 1; 
	expTot = exp2+exp1-exp3;
	expTotWrong = exp1*exp2-exp3;
	expTotWrong1 = expTot + 1;
	expTotWrong2 = expTot+sign1;
	result = parameter1*parameter2/parameter3;
	result1 = testMonom(parameter1,testExp(variables[varIndex],exp1))+" &#9747 "+testMonom(parameter2, testExp(variables[varIndex],exp2));
	result2 = testMonom(parameter3,testExp(variables[varIndex],exp3));
	wrong = result;
	wrong1 = result + exp2;
	wrong2 = wrong + exp1;
	document.getElementById("question").innerHTML=doFraction(result1, result2);
	document.getElementById("level").innerHTML="Level "+level;	
	
}
function powerRules2(){//Simplify all type of monomials (multi, div, power), negative ccoefficients allowed
	varIndex= Math.floor((Math.random() * 4)); 
	varIndex1=varIndex;
	varIndex2=varIndex;
	sign1 =Math.round(Math.random()) * 2 - 1;
	sign2 =Math.round(Math.random()) * 2 - 1;
	parameter1= sign1 * Math.floor((Math.random() * 4)+1);
	parameter3= sign2 * Math.floor((Math.random() * 4)+1);
	parameter2= parameter1*parameter3
	exp1 = Math.floor((Math.random() * 3)+1);
	exp2 = Math.floor((Math.random() * 3)+1);
	exp3 = Math.floor((Math.random() * 3)+1);
	expTot = exp2+exp1-exp3;
	expTotWrong = exp1*exp2-exp3;
	expTotWrong1 = expTot + 1;
	expTotWrong2 = expTot+sign1;
	result = parameter1*parameter2/parameter3;
	result1 = testMonom(parameter1,testExp(variables[varIndex],exp1))+" &#9747 "+testMonomBracket(parameter2, testExp(variables[varIndex],exp2));
	result2 = testMonom(parameter3,testExp(variables[varIndex],exp3));
	wrong = result;
	wrong1 = result + exp2;
	wrong2 = -1 * result;
	document.getElementById("question").innerHTML=doFraction(result1, result2);
	document.getElementById("level").innerHTML="Level "+level;	

}
function consXBinom(){//constant X monom, all positive
	varIndex= Math.floor((Math.random() * 4));
	varIndex1 = 3-varIndex;
	varIndex2=varIndex;
	sign1 =Math.round(Math.random()) * 2 - 1; 
	parameter1 = Math.floor((Math.random() * 6)+2);
	parameter2 = Math.floor((Math.random() * 6)+1);
	parameter3 = sign1 * Math.floor((Math.random() * 6)+1);
	result1 = parameter1*parameter2;
	result2 = parameter1*parameter3;
	expTot1 = 1;
	expTot2 = 1;
	expTotWrong = 1;
	expTotWrong1 = 1;
	expTotWrong2 = 1;
	expTotWrong3 = 1;
	expTotWrong4 = 1;
	expTotWrong5 = 1;
	wrong =  result1;
	wrong1 = result2 + sign1;
	wrong2 = result1+sign1;
	wrong3 = result2;
	wrong4 = parameter1+sign1*parameter2;
	wrong5 = -1*parameter3;
	document.getElementById("question").innerHTML=parameter1+"("+testBinom(parameter2,variables[varIndex], parameter3, variables[varIndex1])+")";
	document.getElementById("level").innerHTML="Level "+level;

}
function consXBinom1(){//constant x binom, negatives in binom allowed
	varIndex= Math.floor((Math.random() * 4));
	varIndex1 = 3-varIndex;
	varIndex2=varIndex;
	sign1 =Math.round(Math.random()) * 2 - 1; 
	sign2 =Math.round(Math.random()) * 2 - 1;
	parameter1 = Math.floor((Math.random() * 6)+2);
	parameter2 = sign1 * Math.floor((Math.random() * 6)+1);
	parameter3 = sign2 * Math.floor((Math.random() * 6)+1);
	result1 = parameter1*parameter2;
	result2 = parameter1*parameter3;
	expTot1 = 1;
	expTot2 = 1;
	expTotWrong = 1;
	expTotWrong1 = 1;
	expTotWrong2 = 1;
	expTotWrong3 = 1;
	expTotWrong4 = 1;
	expTotWrong5 = 1;
	wrong =  result1;
	wrong1 = result2 + sign1;
	wrong2 = result1+sign1;
	wrong3 = result2;
	wrong4 = parameter1+sign1*parameter2;
	wrong5 = -1*parameter3;
	document.getElementById("question").innerHTML=parameter1+"("+testBinom(parameter2,variables[varIndex], parameter3, variables[varIndex1])+")";
	document.getElementById("level").innerHTML="Level "+level;

}
function consXBinom2(){//constant x binom, all can be negative
	varIndex= Math.floor((Math.random() * 4));
	varIndex1 = 3-varIndex;
	varIndex2 = varIndex;
	sign1 =Math.round(Math.random()) * 2 - 1; 
	sign2 =Math.round(Math.random()) * 2 - 1;
	sign3 =Math.round(Math.random()) * 2 - 1;
	parameter1 = sign1 * Math.floor((Math.random() * 6)+2);
	parameter2 = sign2 * Math.floor((Math.random() * 6)+1);
	parameter3 = sign3 * Math.floor((Math.random() * 6)+1);
	result1 = parameter1*parameter2;
	result2 = parameter1*parameter3;
	expTot1 = 1;
	expTot2 = 1;
	expTotWrong1 = 1;
	expTotWrong1 = 1;
	expTotWrong2 = 1;
	expTotWrong3 = 1;
	expTotWrong4 = 1;
	expTotWrong5 = 1;
	wrong =  result1;
	wrong1 = result2 + sign1;
	wrong2 = result1+sign1;
	wrong3 = result2;
	wrong4 = parameter1+sign1*parameter2;
	wrong5 = -1*parameter3;
	document.getElementById("question").innerHTML=parameter1+"("+testBinom(parameter2,variables[varIndex], parameter3, variables[varIndex1])+")";
	document.getElementById("level").innerHTML="Level "+level;
	
}
function monomXBinom(){//1st degree monom x (1st degree monom + constant)
	varIndex= Math.floor((Math.random() * 4));
	varIndex1 = varIndex;
	varIndex2 = varIndex;
	sign1 =Math.round(Math.random()) * 2 - 1; 
	parameter1 = Math.floor((Math.random() * 6)+2);
	parameter2 = Math.floor((Math.random() * 6)+1);
	parameter3 = sign1 * Math.floor((Math.random() * 6)+1);
	result1 = parameter1*parameter2;
	result2 = parameter1*parameter3;
	exp1 = Math.floor((Math.random() * 4)+1);
	expTot1 = exp1+1;
	expTot2 = 1;
	expTotWrong = expTot1+sign1;
	expTotWrong1 = 1;
	expTotWrong2 = 1;
	expTotWrong3 = expTot1-sign1;
	expTotWrong4 = expTot1;
	expTotWrong5 = 1;
	wrong =  result1;
	wrong1 = result2 + sign1;
	wrong2 = result1+sign1;
	wrong3 = result2;
	wrong4 = parameter1+sign1*parameter2;
	wrong5 = -1*parameter3;
	document.getElementById("question").innerHTML=testMonom(parameter1,variables[varIndex])+"("+testBinom(parameter2,testExp(variables[varIndex],exp1), parameter3, 0)+")";
	document.getElementById("level").innerHTML="Level "+level;
	
}
function monomXBinom1(){// monom x (monom + constant)
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=varIndex;
	varIndex2=varIndex;
	sign1 =Math.round(Math.random()) * 2 - 1; 
	parameter1 = Math.floor((Math.random() * 6)+2);
	parameter2 = Math.floor((Math.random() * 6)+1);
	parameter3 = sign1 * Math.floor((Math.random() * 6)+1);
	result1 = parameter1*parameter2;
	result2 = parameter1*parameter3;
	exp1 = Math.floor((Math.random() * 4)+1);
	exp2 = Math.floor((Math.random() * 4)+1);
	expTot1 = exp1+exp2;
	expTot2 = exp1;
	expTotWrong = expTot1+sign1;
	expTotWrong1 = 1;
	expTotWrong2 = 1;
	expTotWrong3 = expTot1-sign1;
	expTotWrong4 = expTot1;
	expTotWrong5 = 1;
	wrong =  result1;
	wrong1 = result2 + sign1;
	wrong2 = result1+sign1;
	wrong3 = result2;
	wrong4 = parameter1+sign1*parameter2;
	wrong5 = -1*parameter3;
	document.getElementById("question").innerHTML=testMonom(parameter1,testExp(variables[varIndex], exp1))+"("+testBinom(parameter2,testExp(variables[varIndex],exp2), parameter3, 0)+")";
	document.getElementById("level").innerHTML="Level "+level;
	
}
function multiMonoms(){//Multiply monomials with different variables, constant = 1
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=3-varIndex;
	varIndex2=varIndex;
	exp1 = Math.floor((Math.random() * 4)+1);
	exp2 = Math.floor((Math.random() * 4)+1);
	exp3 = Math.floor((Math.random() * 4)+1);	
	sign1 =Math.round(Math.random()) * 2 - 1; 
	expTot1 = exp1+exp3;
	expTot2 = exp2;
	expTotWrong = expTot1;
	expTotWrong1 = exp1*exp2;
	expTotWrong2 = expTot2+sign1;
	result= 1;
	wrong = result;
	wrong1 = 2;
	wrong2 = 3;
	document.getElementById("question").innerHTML=testMonom(1,testExp(variables[varIndex], exp1))+ " &#9747 " +testMonomBracket(1,testExp(variables[varIndex1], exp2))+ " &#9747 " +testMonomBracket(1,testExp(variables[varIndex], exp3));
	document.getElementById("level").innerHTML="Level "+level;
	
}
function multiMonoms1(){//Multiply monomials with different variables, positive constants
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=3-varIndex;
	varIndex2=varIndex;
	exp1 = Math.floor((Math.random() * 4)+1);
	exp2 = Math.floor((Math.random() * 4)+1);
	exp3 = Math.floor((Math.random() * 4)+1);	
	parameter1 = Math.floor((Math.random() * 4)+1);
	parameter2 = Math.floor((Math.random() * 4)+1);
	parameter3 = Math.floor((Math.random() * 4)+1);
	sign1 =Math.round(Math.random()) * 2 - 1; 
	expTot1 = exp1+exp3;
	expTot2 = exp2;
	expTotWrong = expTot1;
	expTotWrong1 = exp1*exp2;
	expTotWrong2 = expTot2+sign1;
	result= parameter1*parameter2*parameter3;
	wrong = result;
	wrong1 = result - Math.floor((Math.random() * 2)+1);
	wrong2 = wrong + 1;
	document.getElementById("question").innerHTML=testMonom(parameter1,testExp(variables[varIndex], exp1))+ " &#9747 " +testMonomBracket(parameter2,testExp(variables[varIndex1], exp2))+ " &#9747 " +testMonomBracket(parameter3,testExp(variables[varIndex], exp3));
	document.getElementById("level").innerHTML="Level "+level;
	
}
function multiMonoms2(){//Multiply monomials with different variables, any constants
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=4;
	varIndex2=varIndex;
	sign1 =Math.round(Math.random()) * 2 - 1; 
	sign2 =Math.round(Math.random()) * 2 - 1;
	sign3 =Math.round(Math.random()) * 2 - 1;
	exp1 = Math.floor((Math.random() * 6)+1);
	exp2 = Math.floor((Math.random() * 6)+1);
	exp3 = Math.floor((Math.random() * 6)+1);	
	parameter1 = sign1 * Math.floor((Math.random() * 6)+1);
	parameter2 = sign2 * Math.floor((Math.random() * 6)+1);
	parameter3 = sign3 * Math.floor((Math.random() * 6)+1);
	expTot1 = exp1+exp3;
	expTot2 = exp2;
	expTotWrong = expTot1;
	expTotWrong1 = exp1*exp2;
	expTotWrong2 = expTot2+sign1;
	result= parameter1*parameter2*parameter3;
	wrong = result;
	wrong1 = result - Math.floor((Math.random() * 2)+1);
	wrong2 = wrong + 1;
	document.getElementById("question").innerHTML=testMonom(parameter1,testExp(variables[varIndex], exp1))+ " &#9747 " +testMonomBracket(parameter2,testExp(variables[varIndex1], exp2))+ " &#9747 " +testMonomBracket(parameter3,testExp(variables[varIndex], exp3));
	document.getElementById("level").innerHTML="Level "+level;
	
}
function BinomXBinom(){// (x+b)(x-b)
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=4;
	parameter1 = 1;
	parameter2 = Math.floor((Math.random() * 6)+1);
	parameter3 = parameter1;
	parameter4 = -1*parameter2;
	exp1 = 1;
	exp2 = 0;
	exp3 = 1;
	exp4 = 0;
	document.getElementById("question").innerHTML="("+testBinom(parameter1, testExp(variables[varIndex],exp1), parameter2, testExp(variables[varIndex1],exp2))+")("+testBinom(parameter3, testExp(variables[varIndex],exp3), parameter4, testExp(variables[varIndex1],exp4))+")";
	document.getElementById("level").innerHTML="Level "+level;
	
}
function BinomXBinom1(){// (x+a)^2
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=4;
	parameter1 = 1;
	parameter2 = Math.floor((Math.random() * 6)+1);
	parameter3 = parameter1;
	parameter4 = parameter2;
	exp1 = 1;
	exp2 = 0;
	exp3 = 1;
	exp4 = 0;
	expTotWrong = 1;
	expTotWrong1 =0;	
	expTotWrong2 =1;
	expTotWrong3 =0;
	expTotWrong4 =1;
	expTotWrong5 =0;
	expTotWrong6 =1;
	expTotWrong7 =0;
	wrong = parameter1;
	wrong1 =parameter2;
	wrong2 =parameter1;
	wrong3 =parameter2 + Math.floor((Math.random() * 2)+1);
	wrong4 =parameter1;
	wrong5 =parameter2;
	wrong6 =2;
	wrong7 =parameter2;
	document.getElementById("question").innerHTML="("+testBinom(parameter1, testExp(variables[varIndex],exp1), parameter2, testExp(variables[varIndex1],exp2))+")<sup>2</sup>";
	document.getElementById("level").innerHTML="Level "+level;
	
}
function BinomXBinom2(){// (x-b)^2
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=4;
	parameter1 = 1;
	parameter2 = -1*Math.floor((Math.random() * 6)+1);
	parameter3 = parameter1;
	parameter4 = parameter2;
	exp1 = 1;
	exp2 = 0;
	exp3 = 1;
	exp4 = 0;
	expTotWrong = 1;
	expTotWrong1 =0;	
	expTotWrong2 =1;
	expTotWrong3 =0;
	expTotWrong4 =1;
	expTotWrong5 =0;
	expTotWrong6 =1;
	expTotWrong7 =0;
	expTotWrong8 =1;
	expTotWrong9 =0;
	expTotWrong10 =1;
	expTotWrong11 =0;
	wrong = parameter1;
	wrong1 =parameter2;
	wrong2 =parameter1;
	wrong3 =parameter2*-1;
	wrong4 =parameter1;
	wrong5 =parameter2;
	wrong6 =parameter1 + Math.floor((Math.random() * 2)+1);
	wrong7 =parameter2;
	wrong8 =parameter1;
	wrong9 =parameter2;
	wrong10 =parameter1;
	wrong11 =parameter2 - Math.floor((Math.random() * 2)+1);
	document.getElementById("question").innerHTML="("+testBinom(parameter1, testExp(variables[varIndex],exp1), parameter2, testExp(variables[varIndex1],exp2))+")<sup>2</sup>";
	document.getElementById("level").innerHTML="Level "+level;
	
}
function BinomXBinom3(){// (ax+b)(ax-b)
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=4;
	parameter1 = Math.floor((Math.random() * 6)+1);
	parameter2 = Math.floor((Math.random() * 6)+1);
	parameter3 = parameter1;
	parameter4 = -1*parameter2;
	exp1 = 1;
	exp2 = 0;
	exp3 = 1;
	exp4 = 0;
	expTotWrong = 1;
	expTotWrong1 =0;	
	expTotWrong2 =1;
	expTotWrong3 =0;
	expTotWrong4 =1;
	expTotWrong5 =0;
	expTotWrong6 =1;
	expTotWrong7 =0;
	expTotWrong8 =1;
	expTotWrong9 =0;
	expTotWrong10 =1;
	expTotWrong11 =0;
	wrong = parameter1;
	wrong1 =parameter2;
	wrong2 =parameter1;
	wrong3 =parameter2*-1;
	wrong4 =parameter1;
	wrong5 =parameter2;
	wrong6 =parameter1 + Math.floor((Math.random() * 2)+1);
	wrong7 =parameter2;
	wrong8 =parameter1;
	wrong9 =parameter2;
	wrong10 =parameter1;
	wrong11 =parameter2 - Math.floor((Math.random() * 2)+1);
	document.getElementById("question").innerHTML="("+testBinom(parameter1, testExp(variables[varIndex],exp1), parameter2, testExp(variables[varIndex1],exp2))+")("+testBinom(parameter3, testExp(variables[varIndex],exp3), parameter4, testExp(variables[varIndex1],exp4))+")";
	document.getElementById("level").innerHTML="Level "+level;
	
}
function BinomXBinom4(){// (ax+b)^2
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=4;
	parameter1 = Math.floor((Math.random() * 6)+1);
	parameter2 = Math.floor((Math.random() * 6)+1);
	parameter3 = parameter1;
	parameter4 = parameter2;
	exp1 = 1;
	exp2 = 0;
	exp3 = 1;
	exp4 = 0;
	expTotWrong = 1;
	expTotWrong1 =0;	
	expTotWrong2 =1;
	expTotWrong3 =0;
	expTotWrong4 =1;
	expTotWrong5 =0;
	expTotWrong6 =1;
	expTotWrong7 =0;
	wrong = parameter1;
	wrong1 =parameter2;
	wrong2 =parameter1;
	wrong3 =parameter2 + Math.floor((Math.random() * 2)+1);
	wrong4 =parameter1;
	wrong5 =parameter2;
	wrong6 =parameter1 + Math.floor((Math.random() * 2)+1);
	wrong7 =parameter2;
	document.getElementById("question").innerHTML="("+testBinom(parameter1, testExp(variables[varIndex],exp1), parameter2, testExp(variables[varIndex1],exp2))+")<sup>2</sup>";
	document.getElementById("level").innerHTML="Level "+level;
	
}
function BinomXBinom5(){// (ax-b)^2
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=4;
	varIndex2=varIndex;	
	parameter1 = Math.floor((Math.random() * 6)+1);
	parameter2 = -1*Math.floor((Math.random() * 6)+1);
	parameter3 = parameter1;
	parameter4 = parameter2;
	exp1 = 1;
	exp2 = 0;
	exp3 = 1;
	exp4 = 0;
	expTotWrong = 1;
	expTotWrong1 =0;	
	expTotWrong2 =1;
	expTotWrong3 =0;
	expTotWrong4 =1;
	expTotWrong5 =0;
	expTotWrong6 =1;
	expTotWrong7 =0;
	expTotWrong8 =1;
	expTotWrong9 =0;
	expTotWrong10 =1;
	expTotWrong11 =0;
	wrong = parameter1;
	wrong1 =parameter2;
	wrong2 =parameter1;
	wrong3 =parameter2*-1;
	wrong4 =parameter1;
	wrong5 =parameter2;
	wrong6 =parameter1 + Math.floor((Math.random() * 2)+1);
	wrong7 =parameter2;
	wrong8 =parameter1;
	wrong9 =parameter2;
	wrong10 =parameter1;
	wrong11 =parameter2 - Math.floor((Math.random() * 2)+1);
	document.getElementById("question").innerHTML="("+testBinom(parameter1, testExp(variables[varIndex],exp1), parameter2, testExp(variables[varIndex1],exp2))+")<sup>2</sup>";
	document.getElementById("level").innerHTML="Level "+level;
	
}
function BinomXBinom6(){// (ax+b)(cx+d)
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=4;
	sign1 =Math.round(Math.random()) * 2 - 1; 
	sign2 =Math.round(Math.random()) * 2 - 1;
	sign3 =Math.round(Math.random()) * 2 - 1; 
	sign4 =Math.round(Math.random()) * 2 - 1;
	parameter1 = sign1 * Math.floor((Math.random() * 6)+1);
	parameter2 = sign2 * Math.floor((Math.random() * 6)+1);
	parameter3 = sign3 * Math.floor((Math.random() * 6)+1);
	parameter4 = sign4 * Math.floor((Math.random() * 6)+1);
	exp1 = 1;
	exp2 = 0;
	exp3 = 1;
	exp4 = 0;
	expTotWrong = 1;
	expTotWrong1 =0;	
	expTotWrong2 =1;
	expTotWrong3 =0;
	expTotWrong4 =1;
	expTotWrong5 =0;
	expTotWrong6 =1;
	expTotWrong7 =0;
	expTotWrong8 =1;
	expTotWrong9 =0;
	expTotWrong10 =1;
	expTotWrong11 =0;
	wrong = parameter1;
	wrong1 =parameter2;
	wrong2 =parameter3;
	wrong3 =parameter4*-1;
	wrong4 =parameter1*-1;
	wrong5 =parameter2;
	wrong6 =parameter3;
	wrong7 =parameter4;
	wrong8 =parameter1;
	wrong9 =parameter2*2;
	wrong10 =parameter3;
	wrong11 =parameter4;
	document.getElementById("question").innerHTML="("+testBinom(parameter1, testExp(variables[varIndex],exp1), parameter2, testExp(variables[varIndex1],exp2))+")("+testBinom(parameter3, testExp(variables[varIndex],exp3), parameter4, testExp(variables[varIndex1],exp4))+")";
	document.getElementById("level").innerHTML="Level "+level;
	
}
function BinomXBinom7(){// binom x binom, second monom is constant
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=4;
	sign1 =Math.round(Math.random()) * 2 - 1; 
	sign2 =Math.round(Math.random()) * 2 - 1;
	sign3 =Math.round(Math.random()) * 2 - 1; 
	sign4 =Math.round(Math.random()) * 2 - 1;
	parameter1 = sign1 * Math.floor((Math.random() * 6)+1);
	parameter2 = sign2 * Math.floor((Math.random() * 6)+1);
	parameter3 = sign3 * Math.floor((Math.random() * 6)+1);
	parameter4 = sign4 * Math.floor((Math.random() * 6)+1);
	exp1 = Math.floor((Math.random() * 4)+1);
	exp2 = 0;
	exp3 = Math.floor((Math.random() * 4)+1);
	exp4 = 0;
	expTotWrong = exp1;
	expTotWrong1 =0;	
	expTotWrong2 =exp3;
	expTotWrong3 =0;
	expTotWrong4 =exp1;
	expTotWrong5 =0;
	expTotWrong6 =exp3;
	expTotWrong7 =0;
	expTotWrong8 =exp1;
	expTotWrong9 =0;
	expTotWrong10 =exp3;
	expTotWrong11 =0;
	wrong = parameter1;
	wrong1 =parameter2;
	wrong2 =parameter3;
	wrong3 =parameter4*-1;
	wrong4 =parameter1*-1;
	wrong5 =parameter2;
	wrong6 =parameter3;
	wrong7 =parameter4;
	wrong8 =parameter1;
	wrong9 =parameter2*2;
	wrong10 =parameter3;
	wrong11 =parameter4;
	document.getElementById("question").innerHTML="("+testBinom(parameter1, testExp(variables[varIndex],exp1), parameter2, testExp(variables[varIndex1],exp2))+")("+testBinom(parameter3, testExp(variables[varIndex],exp3), parameter4, testExp(variables[varIndex1],exp4))+")";
	document.getElementById("level").innerHTML="Level "+level;
	
}
function BinomXBinom8(){// binom x binom, all parameters can be whatever
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=3-varIndex;
	sign1 =Math.round(Math.random()) * 2 - 1; 
	sign2 =Math.round(Math.random()) * 2 - 1;
	sign3 =Math.round(Math.random()) * 2 - 1; 
	sign4 =Math.round(Math.random()) * 2 - 1;
	parameter1 = sign1 * Math.floor((Math.random() * 6)+1);
	parameter2 = sign2 * Math.floor((Math.random() * 6)+1);
	parameter3 = sign3 * Math.floor((Math.random() * 6)+1);
	parameter4 = sign4 * Math.floor((Math.random() * 6)+1);
	exp1 = Math.floor((Math.random() * 4)+1);
	exp2 = Math.floor((Math.random() * 4)+1);
	exp3 = Math.floor((Math.random() * 4)+1);
	exp4 = Math.floor((Math.random() * 4)+1);
	expTotWrong = exp1;
	expTotWrong1 =exp2;	
	expTotWrong2 =exp3;
	expTotWrong3 =exp4;
	expTotWrong4 =exp1;
	expTotWrong5 =exp2;
	expTotWrong6 =exp3;
	expTotWrong7 =exp4;
	expTotWrong8 =exp1;
	expTotWrong9 =exp2;
	expTotWrong10 =exp3;
	expTotWrong11 =exp4;
	wrong = parameter1;
	wrong1 =parameter2;
	wrong2 =parameter3;
	wrong3 =parameter4*-1;
	wrong4 =parameter1*-1;
	wrong5 =parameter2;
	wrong6 =parameter3;
	wrong7 =parameter4;
	wrong8 =parameter1;
	wrong9 =parameter2*2;
	wrong10 =parameter3;
	wrong11 =parameter4;
	document.getElementById("question").innerHTML="("+testBinom(parameter1, testExp(variables[varIndex],exp1), parameter2, testExp(variables[varIndex1],exp2))+")("+testBinom(parameter3, testExp(variables[varIndex],exp3), parameter4, testExp(variables[varIndex1],exp4))+")";
	document.getElementById("level").innerHTML="Level "+level;
	
}
function factPolyDivMonom(){// Binom/constant
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=4;
	varIndex2=varIndex;
	sign1 =Math.round(Math.random()) * 2 - 1; 
	sign2 =Math.round(Math.random()) * 2 - 1; 
	sign3 =Math.round(Math.random()) * 2 - 1; 
	parameter1 = sign1*Math.floor((Math.random() * 6)+2);
	parameter2 = sign2*Math.floor((Math.random() * 6)+1);
	parameter3 = sign3*Math.floor((Math.random() * 6)+1);
	exp1 = 1
	exp2 = 0
	result = testBinom(parameter1*parameter2, testExp(variables[varIndex], exp1), parameter1*parameter3, testExp(variables[varIndex1],exp2));
	expTot1=exp1;
	expTot2=exp2;
	result1 =parameter2;
	result2 =parameter3;
	expTotWrong = 1;
	expTotWrong1 = 0;
	expTotWrong2 = 1;
	expTotWrong3 = 0;
	expTotWrong4 = 1;
	expTotWrong5 = 0;
	wrong =  sign3* result1;
	wrong1 = 0;
	wrong2 = -1*result1;
	wrong3 = result2;
	wrong4 = result1;
	wrong5 = -1*result2;
	document.getElementById("question").innerHTML=doFraction(result,parameter1);
	document.getElementById("level").innerHTML="Level "+level;
	
}
function factPolyDivBinom(){// Binom/binom=constant
	varIndex= Math.floor((Math.random() * 4));
	sign1 =Math.round(Math.random()) * 2 - 1; 
	sign2 =Math.round(Math.random()) * 2 - 1; 
	sign3 =Math.round(Math.random()) * 2 - 1; 
	parameter1 = sign1*Math.floor((Math.random() * 6)+2);
	parameter2 = sign2*Math.floor((Math.random() * 6)+1);
	parameter3 = sign3*Math.floor((Math.random() * 6)+1);
	exp1 = Math.floor((Math.random() * 4)+1);
	result1 = testBinom(parameter1*parameter2, testExp(variables[varIndex], exp1), parameter1*parameter3,0);
	expTot=0;
	expTotWrong = exp1;
	expTotWrong1 =0;	
	expTotWrong2 =0;
	wrong = -1*parameter1;
	wrong1 =parameter1+sign1;
	wrong2=sign2*parameter1;
	result =parameter1;
	document.getElementById("question").innerHTML=doFraction(result1,testBinom(parameter2, testExp(variables[varIndex], exp1), parameter3,0));
	document.getElementById("level").innerHTML="Level "+level;
	
}
function factPolyDivBinom1(){// division with binomial formulas
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=4;
	varIndex2=varIndex;
	sign1 =Math.round(Math.random()) * 2 - 1; 
	parameter1 = Math.floor((Math.random() * 6)+1);
	parameter2 = sign1*Math.floor((Math.random() * 6)+1);
	parameter3 = parameter1
	parameter4 = parameter2;
	exp1 = 1
	exp2 = 0
	exp3 = 1
	exp4 = 0
	result = testBinomXBinom(parameter1, varIndex, exp1, parameter2, varIndex1, exp2, parameter3, exp3, parameter4, exp4);
	result1 =parameter3;
	result2 =parameter4;
	expTot1=exp1;
	expTot2=exp2;
	expTotWrong = 1;
	expTotWrong1 = 0;
	expTotWrong2 = 1;
	expTotWrong3 = 0;
	expTotWrong4 = 1;
	expTotWrong5 = 0;
	wrong =  sign1*result1;
	wrong1 = 0;
	wrong2 = -1*result1;
	wrong3 = result2;
	wrong4 = result1;
	wrong5 = -1*result2;
	
	document.getElementById("question").innerHTML=doFraction(result,testBinom(parameter3, testExp(variables[varIndex], exp3),parameter4, testExp(variables[varIndex1], exp4)));
	document.getElementById("level").innerHTML="Level "+level;
	
}
function factPolyDivBinom2(){// division with binomial formulas
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=4;
	varIndex2=varIndex;
	sign1 =Math.round(Math.random()) * 2 - 1; 
	parameter1 = Math.floor((Math.random() * 6)+1);
	parameter2 = sign1*Math.floor((Math.random() * 6)+1);
	parameter3 = parameter1
	parameter4 = -1*parameter2;
	exp1 = 1
	exp2 = 0
	exp3 = 1
	exp4 = 0
	result = testBinomXBinom(parameter1, varIndex, exp1, parameter2, varIndex1, exp2, parameter3, exp3, parameter4, exp4);
	expTot1=exp1;
	expTot2=exp2;
	result1 =parameter1;
	result2 =parameter2;
	expTotWrong = 1;
	expTotWrong1 = 0;
	expTotWrong2 = 1;
	expTotWrong3 = 0;
	expTotWrong4 = 1;
	expTotWrong5 = 0;
	wrong =  sign1*result1;
	wrong1 = 0;
	wrong2 = -1*result1;
	wrong3 = result2;
	wrong4 = result1;
	wrong5 = -1*result2;
	
	document.getElementById("question").innerHTML=doFraction(result,testBinom(parameter3, testExp(variables[varIndex], exp3),parameter4, testExp(variables[varIndex1], exp4)));
	document.getElementById("level").innerHTML="Level "+level;
	
}
function factPolyDivBinom3(){// Poly/binom, 1st monom 1st degree, second monom is constant
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=4;
	varIndex2=varIndex;
	sign1 =Math.round(Math.random()) * 2 - 1; 
	sign2 =Math.round(Math.random()) * 2 - 1;
	sign3 =Math.round(Math.random()) * 2 - 1; 
	sign4 =Math.round(Math.random()) * 2 - 1;
	parameter1 = sign1 * Math.floor((Math.random() * 6)+1);
	parameter2 = sign2 * Math.floor((Math.random() * 6)+1);
	parameter3 = sign3 * Math.floor((Math.random() * 6)+1);
	parameter4 = sign4 * Math.floor((Math.random() * 6)+1);
	exp1 = 1
	exp2 = 0
	exp3 = 1
	exp4 = 0
	result = testBinomXBinom(parameter1, varIndex, exp1, parameter2, varIndex1, exp2, parameter3, exp3, parameter4, exp4);
	expTot1=exp1;
	expTot2=exp2;
	result1 =parameter1;
	result2 =parameter2;
	expTotWrong = 1;
	expTotWrong1 = 0;
	expTotWrong2 = 1;
	expTotWrong3 = 0;
	expTotWrong4 = 1;
	expTotWrong5 = 0;
	wrong =  sign2*result1;
	wrong1 = 0;
	wrong2 = -1*result1;
	wrong3 = result2;
	wrong4 = result1;
	wrong5 = -1*result2;
	
	document.getElementById("question").innerHTML=doFraction(result,testBinom(parameter3, testExp(variables[varIndex], exp3),parameter4, testExp(variables[varIndex1], exp4)));
	document.getElementById("level").innerHTML="Level "+level;
	
}
function factPolyDivBinom4(){// Poly/binom, second monom is constant
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=4;
	varIndex2=varIndex;
	sign1 =Math.round(Math.random()) * 2 - 1; 
	sign2 =Math.round(Math.random()) * 2 - 1;
	sign3 =Math.round(Math.random()) * 2 - 1; 
	sign4 =Math.round(Math.random()) * 2 - 1;
	parameter1 = sign1 * Math.floor((Math.random() * 6)+1);
	parameter2 = sign2 * Math.floor((Math.random() * 6)+1);
	parameter3 = sign3 * Math.floor((Math.random() * 6)+1);
	parameter4 = sign4 * Math.floor((Math.random() * 6)+1);
	exp1 = Math.floor((Math.random() * 4)+1);
	exp2 = 0;
	exp3 = Math.floor((Math.random() * 4)+1);
	exp4 = 0;
	result = testBinomXBinom(parameter1, varIndex, exp1, parameter2, varIndex1, exp2, parameter3, exp3, parameter4, exp4);
	result1 =parameter1;
	result2 =parameter2;
	expTot1=exp1;
	expTot2=exp2;
	expTotWrong = exp1;
	expTotWrong1 =0;	
	expTotWrong2 =exp1+sign1;
	expTotWrong3 = exp2;
	expTotWrong4 = exp1;
	expTotWrong5 = exp2+sign2;
	wrong =  sign2*result1;
	wrong1 = 0;
	wrong2 = -1*result1;
	wrong3 = result2;
	wrong4 = result1;
	wrong5 = -1*result2;
	
	document.getElementById("question").innerHTML=doFraction(result,testBinom(parameter3, testExp(variables[varIndex], exp3),parameter4, testExp(variables[varIndex1], exp4)));
	document.getElementById("level").innerHTML="Level "+level;
	
}
function factPolyDivBinom5(){// Polynom/binom, with all kind of values
	varIndex= Math.floor((Math.random() * 4));
	varIndex1=3-varIndex;
	varIndex2=varIndex;
	sign1 =Math.round(Math.random()) * 2 - 1; 
	sign2 =Math.round(Math.random()) * 2 - 1;
	sign3 =Math.round(Math.random()) * 2 - 1; 
	sign4 =Math.round(Math.random()) * 2 - 1;
	parameter1 = sign1 * Math.floor((Math.random() * 6)+1);
	parameter2 = sign2 * Math.floor((Math.random() * 6)+1);
	parameter3 = sign3 * Math.floor((Math.random() * 6)+1);
	parameter4 = sign4 * Math.floor((Math.random() * 6)+1);
	exp1 = Math.floor((Math.random() * 4)+1);
	exp2 = Math.floor((Math.random() * 4)+1);
	exp3 = Math.floor((Math.random() * 4)+1);
	exp4 = Math.floor((Math.random() * 4)+1);
	result = testBinomXBinom(parameter1, varIndex, exp1, parameter2, varIndex1, exp2, parameter3, exp3, parameter4, exp4);
	result1 = parameter1;
	result2 = parameter2;
	expTot1=exp1;
	expTot2=exp2;
	expTotWrong = exp1;
	expTotWrong1 =0;	
	expTotWrong2 =exp1+sign1;
	expTotWrong3 = exp2;
	expTotWrong4 = exp1;
	expTotWrong5 = exp2+sign2;
	wrong =  sign2*result1;
	wrong1 = 0;
	wrong2 = -1*result1;
	wrong3 = result2;
	wrong4 = result1;
	wrong5 = -1*result2;
	

	document.getElementById("question").innerHTML=doFraction(result,testBinom(parameter3, testExp(variables[varIndex], exp3),parameter4, testExp(variables[varIndex1], exp4)));
	document.getElementById("level").innerHTML="Level "+level;
	
}
	// B U T T O N S 
function otherOptions(a){//Prints the wrong options for buttons
	var btn = "button"+a;
	document.getElementById(btn).innerHTML= testBinom(result, variables[varIndex],0,0);
	if(a==1){
		document.getElementById("button2").innerHTML=testBinom(wrong1,variables[varIndex],0,0);
		document.getElementById("button3").innerHTML=testBinom(wrong2,variables[varIndex1],0,0);
		document.getElementById("button4").innerHTML=testBinom(wrong,variables[varIndex2],0,0);
	}
	if(a==2){
		document.getElementById("button1").innerHTML=testBinom(wrong,variables[varIndex],0,0);
		document.getElementById("button3").innerHTML=testBinom(wrong1, variables[varIndex1],0,0);
		document.getElementById("button4").innerHTML=testBinom(wrong2,variables[varIndex2],0,0);
	}
	if(a==3){
		document.getElementById("button2").innerHTML=testBinom(wrong1,variables[varIndex],0,0);
		document.getElementById("button1").innerHTML=testBinom(wrong2,variables[varIndex1],0,0);
		document.getElementById("button4").innerHTML=testBinom(wrong,variables[varIndex2],0,0);
	}
	if(a==4){
		document.getElementById("button2").innerHTML=testBinom(wrong,variables[varIndex],0,0);
		document.getElementById("button3").innerHTML=testBinom(wrong2,variables[varIndex1],0,0);
		document.getElementById("button1").innerHTML=testBinom(wrong1,variables[varIndex2],0,0);
	}
}
function otherOptionsExp(a){//Prints the wrong options for buttons
	var btn = "button"+a;
	document.getElementById(btn).innerHTML= testMonom(result, testExp(variables[varIndex],expTot));
	if(a==1){
		document.getElementById("button2").innerHTML=testMonom(wrong,testExp(variables[varIndex],expTotWrong2));
		document.getElementById("button3").innerHTML=testMonom(wrong2,testExp(variables[varIndex],expTotWrong));
		document.getElementById("button4").innerHTML=testMonom(wrong1,testExp(variables[varIndex],expTotWrong1));
	}
	if(a==2){
		document.getElementById("button1").innerHTML=testMonom(wrong,testExp(variables[varIndex],expTotWrong2));
		document.getElementById("button3").innerHTML=testMonom(wrong1,testExp(variables[varIndex],expTotWrong1));
		document.getElementById("button4").innerHTML=testMonom(wrong2,testExp(variables[varIndex],expTotWrong));
	}
	if(a==3){
		document.getElementById("button2").innerHTML=testMonom(wrong,testExp(variables[varIndex],expTotWrong2));
		document.getElementById("button1").innerHTML=testMonom(wrong2,testExp(variables[varIndex],expTotWrong));
		document.getElementById("button4").innerHTML=testMonom(wrong1,testExp(variables[varIndex],expTotWrong1));
	}
	if(a==4){
		document.getElementById("button2").innerHTML=testMonom(wrong,testExp(variables[varIndex],expTotWrong2));
		document.getElementById("button3").innerHTML=testMonom(wrong2,testExp(variables[varIndex],expTotWrong));
		document.getElementById("button1").innerHTML=testMonom(wrong1,testExp(variables[varIndex],expTotWrong1));
	}
}
function otherOptionsFracExp(a){//Prints the wrong options for buttons
	var btn = "button"+a;
	document.getElementById(btn).innerHTML= testFracExp(result, variables[varIndex],expTot);
	if(a==1){
		
		document.getElementById("button2").innerHTML=testFracExp(wrong1,variables[varIndex],expTotWrong1);
		document.getElementById("button3").innerHTML=testFracExp(wrong2,variables[varIndex],expTotWrong);
		document.getElementById("button4").innerHTML=testFracExp(wrong,variables[varIndex],expTotWrong2);
	}
	if(a==2){
		document.getElementById("button1").innerHTML=testFracExp(wrong,variables[varIndex],expTotWrong1);
		document.getElementById("button3").innerHTML=testFracExp(wrong1,variables[varIndex],expTotWrong);
		document.getElementById("button4").innerHTML=testFracExp(wrong2,variables[varIndex],expTotWrong2);
	}
	if(a==3){
		document.getElementById("button2").innerHTML=testFracExp(wrong1,variables[varIndex],expTotWrong1);
		document.getElementById("button1").innerHTML=testFracExp(wrong2,variables[varIndex],expTotWrong);
		document.getElementById("button4").innerHTML=testFracExp(wrong,variables[varIndex],expTotWrong2);
	}
	if(a==4){
		document.getElementById("button2").innerHTML=testFracExp(wrong,variables[varIndex],expTotWrong1);
		document.getElementById("button3").innerHTML=testFracExp(wrong2,variables[varIndex],expTotWrong);
		document.getElementById("button1").innerHTML=testFracExp(wrong1,variables[varIndex],expTotWrong2);
	}
}
function otherOptionsBinom(a){//Prints the wrong options for buttons
	var btn = "button"+a;
	
	document.getElementById(btn).innerHTML= testBinom(result1, testExp(variables[varIndex],expTot1),result2, testExp(variables[varIndex1],expTot2));
	
	if(a==1){
		document.getElementById("button2").innerHTML=testBinom(wrong, testExp(variables[varIndex], expTotWrong), wrong1, testExp(variables[varIndex2], expTotWrong1));
		document.getElementById("button3").innerHTML=testBinom(wrong2, testExp(variables[varIndex], expTotWrong2), wrong3, testExp(variables[varIndex1], expTotWrong3));
		document.getElementById("button4").innerHTML=testBinom(wrong4, testExp(variables[varIndex], expTotWrong4),wrong5, testExp(variables[varIndex1], expTotWrong5));
	}
	if(a==2){
		document.getElementById("button1").innerHTML=testBinom(wrong, testExp(variables[varIndex], expTotWrong), wrong1, testExp(variables[varIndex2], expTotWrong1));
		document.getElementById("button3").innerHTML=testBinom(wrong2, testExp(variables[varIndex], expTotWrong2), wrong3, testExp(variables[varIndex1], expTotWrong3));
		document.getElementById("button4").innerHTML=testBinom(wrong4, testExp(variables[varIndex], expTotWrong4),wrong5, testExp(variables[varIndex1], expTotWrong5));
	}
	if(a==3){
		document.getElementById("button1").innerHTML=testBinom(wrong, testExp(variables[varIndex], expTotWrong), wrong1, testExp(variables[varIndex2], expTotWrong1));
		document.getElementById("button2").innerHTML=testBinom(wrong2, testExp(variables[varIndex], expTotWrong2), wrong3, testExp(variables[varIndex1], expTotWrong3));
		document.getElementById("button4").innerHTML=testBinom(wrong4, testExp(variables[varIndex], expTotWrong4),wrong5, testExp(variables[varIndex1], expTotWrong5));
	}
	if(a==4){
		document.getElementById("button1").innerHTML=testBinom(wrong, testExp(variables[varIndex], expTotWrong), wrong1, testExp(variables[varIndex2], expTotWrong1));
		document.getElementById("button2").innerHTML=testBinom(wrong2, testExp(variables[varIndex], expTotWrong2), wrong3, testExp(variables[varIndex1], expTotWrong3));
		document.getElementById("button3").innerHTML=testBinom(wrong4, testExp(variables[varIndex], expTotWrong4),wrong5, testExp(variables[varIndex1], expTotWrong5));
	}
}
function otherOptionsMultiVar(a){//Prints the wrong options for buttons
	var btn = "button"+a;
	
	document.getElementById(btn).innerHTML= testMonom(result,testExp(variables[varIndex],expTot1))+testExp(variables[varIndex1],expTot2);
	
	if(a==1){
		document.getElementById("button2").innerHTML=testMonom(wrong,testExp(variables[varIndex],expTotWrong))+testExp(variables[varIndex1],expTotWrong2);
		document.getElementById("button3").innerHTML=testMonom(wrong1,testExp(variables[varIndex1],expTotWrong1))+testExp(variables[varIndex2],expTotWrong);
		document.getElementById("button4").innerHTML=testMonom(wrong2,testExp(variables[varIndex2],expTotWrong2))+testExp(variables[varIndex1],expTotWrong);
	}
	if(a==2){
		document.getElementById("button1").innerHTML=testMonom(wrong,testExp(variables[varIndex],expTotWrong))+testExp(variables[varIndex1],expTotWrong2);
		document.getElementById("button3").innerHTML=testMonom(wrong1,testExp(variables[varIndex1],expTotWrong1))+testExp(variables[varIndex2],expTotWrong);
		document.getElementById("button4").innerHTML=testMonom(wrong2,testExp(variables[varIndex2],expTotWrong2))+testExp(variables[varIndex1],expTotWrong);
	}
	if(a==3){
		document.getElementById("button1").innerHTML=testMonom(wrong,testExp(variables[varIndex],expTotWrong))+testExp(variables[varIndex1],expTotWrong2);
		document.getElementById("button2").innerHTML=testMonom(wrong1,testExp(variables[varIndex1],expTotWrong1))+testExp(variables[varIndex2],expTotWrong);
		document.getElementById("button4").innerHTML=testMonom(wrong2,testExp(variables[varIndex2],expTotWrong2))+testExp(variables[varIndex1],expTotWrong);
	}
	if(a==4){
		document.getElementById("button1").innerHTML=testMonom(wrong,testExp(variables[varIndex],expTotWrong))+testExp(variables[varIndex1],expTotWrong2);
		document.getElementById("button2").innerHTML=testMonom(wrong1,testExp(variables[varIndex1],expTotWrong1))+testExp(variables[varIndex2],expTotWrong);
		document.getElementById("button3").innerHTML=testMonom(wrong2,testExp(variables[varIndex2],expTotWrong2))+testExp(variables[varIndex1],expTotWrong);
	}
}
function otherOptionsBinomXBinom(a){//(ab^c+de^f)(ab^c-de^f)
	var btn = "button"+a;
	document.getElementById(btn).innerHTML= testBinomXBinom(parameter1,varIndex,exp1,parameter2,varIndex1,exp2,parameter3,exp3,parameter4,exp4);
	if(a==1){
		document.getElementById("button2").innerHTML=testBinom(parameter1*parameter3, testExp(variables[varIndex],exp1), parameter2*parameter4, testExp(variables[varIndex1],exp2));
		document.getElementById("button3").innerHTML=testBinomXBinom(parameter1,varIndex,exp1,parameter4,varIndex1,exp2,parameter1,exp3,parameter4,exp4);
		document.getElementById("button4").innerHTML=testBinom(parameter1, testExp(variables[varIndex],exp1+exp3), parameter2, testExp(variables[varIndex1],exp2+exp4));
	}
	if(a==2){
		document.getElementById("button1").innerHTML=testBinom(parameter1*parameter3, testExp(variables[varIndex],exp1), parameter2*parameter4, testExp(variables[varIndex1],exp2));
		document.getElementById("button3").innerHTML=testBinomXBinom(parameter1,varIndex,exp1,parameter4,varIndex1,exp2,parameter1,exp3,parameter4,exp4);
		document.getElementById("button4").innerHTML=testBinom(parameter1, testExp(variables[varIndex],exp1+exp3), parameter2, testExp(variables[varIndex1],exp2+exp4));
	}
	if(a==3){
		document.getElementById("button1").innerHTML=testBinom(parameter1*parameter3, testExp(variables[varIndex],exp1), parameter2*parameter4, testExp(variables[varIndex1],exp2));
		document.getElementById("button2").innerHTML=testBinomXBinom(parameter1,varIndex,exp1,parameter4,varIndex1,exp2,parameter1,exp3,parameter4,exp4);
		document.getElementById("button4").innerHTML=testBinom(parameter1, testExp(variables[varIndex],exp1+exp3), parameter2, testExp(variables[varIndex1],exp2+exp4));
	}
	if(a==4){
		document.getElementById("button1").innerHTML=testBinom(parameter1*parameter3, testExp(variables[varIndex],exp1), parameter2*parameter4, testExp(variables[varIndex1],exp2));
		document.getElementById("button2").innerHTML=testBinomXBinom(parameter1,varIndex,exp1,parameter2,varIndex1,exp2,parameter1,exp3,parameter2,exp4);
		document.getElementById("button3").innerHTML=testBinom(parameter1, testExp(variables[varIndex],exp1+exp3), parameter2, testExp(variables[varIndex1],exp2+exp4));
	}
}
function otherOptionsBinomXBinom1(a){//(ab^c+de^f)^2
	var btn = "button"+a;
	
	document.getElementById(btn).innerHTML= testBinomXBinom(parameter1,varIndex,exp1,parameter2,varIndex1,exp2,parameter3,exp3,parameter4,exp4);
	
	if(a==1){
		document.getElementById("button2").innerHTML=testBinom(parameter1*parameter3, testExp(variables[varIndex],exp1*2), parameter2*parameter4, testExp(variables[varIndex1],exp2));
		document.getElementById("button3").innerHTML=testBinomXBinom(wrong,varIndex,expTotWrong,wrong1,varIndex1,expTotWrong1,wrong2,expTotWrong2,wrong3,expTotWrong3);
		document.getElementById("button4").innerHTML=testBinomXBinom(wrong4,varIndex,expTotWrong4,wrong5,varIndex1,expTotWrong5,wrong6,expTotWrong6,wrong7,expTotWrong7);
	}
	if(a==2){
		document.getElementById("button1").innerHTML=testBinom(parameter1*parameter3, testExp(variables[varIndex],exp1*2), parameter2*parameter4, testExp(variables[varIndex1],exp2));
		document.getElementById("button3").innerHTML=testBinomXBinom(wrong,varIndex,expTotWrong,wrong1,varIndex1,expTotWrong1,wrong2,expTotWrong2,wrong3,expTotWrong3);
		document.getElementById("button4").innerHTML=testBinomXBinom(wrong4,varIndex,expTotWrong4,wrong5,varIndex1,expTotWrong5,wrong6,expTotWrong6,wrong7,expTotWrong7);
	}
	if(a==3){
		document.getElementById("button1").innerHTML=testBinom(parameter1*parameter3, testExp(variables[varIndex],exp1*2), parameter2*parameter4, testExp(variables[varIndex1],exp2));
		document.getElementById("button2").innerHTML=testBinomXBinom(wrong,varIndex,expTotWrong,wrong1,varIndex1,expTotWrong1,wrong2,expTotWrong2,wrong3,expTotWrong3);
		document.getElementById("button4").innerHTML=testBinomXBinom(wrong4,varIndex,expTotWrong4,wrong5,varIndex1,expTotWrong5,wrong6,expTotWrong6,wrong7,expTotWrong7);
	}
	if(a==4){
		document.getElementById("button1").innerHTML=testBinom(parameter1*parameter3, testExp(variables[varIndex],exp1*2), parameter2*parameter4, testExp(variables[varIndex1],exp2));
		document.getElementById("button2").innerHTML=testBinomXBinom(wrong,varIndex,expTotWrong,wrong1,varIndex1,expTotWrong1,wrong2,expTotWrong2,wrong3,expTotWrong3);
		document.getElementById("button3").innerHTML=testBinomXBinom(wrong4,varIndex,expTotWrong4,wrong5,varIndex1,expTotWrong5,wrong6,expTotWrong6,wrong7,expTotWrong7);
	}
}
function otherOptionsBinomXBinom2(a){//(ab^c+de^f)(gb^i+je^k)
	var btn = "button"+a;
	
	document.getElementById(btn).innerHTML= testBinomXBinom(parameter1,varIndex,exp1,parameter2,varIndex1,exp2,parameter3,exp3,parameter4,exp4);
	
	if(a==1){
		document.getElementById("button2").innerHTML=testBinomXBinom(wrong,varIndex,expTotWrong,wrong1,varIndex1,expTotWrong1,wrong2,expTotWrong2,wrong3,expTotWrong3);
		document.getElementById("button3").innerHTML=testBinomXBinom(wrong4,varIndex,expTotWrong4,wrong5,varIndex1,expTotWrong5,wrong6,expTotWrong6,wrong7,expTotWrong7);
		document.getElementById("button4").innerHTML=testBinomXBinom(wrong8,varIndex,expTotWrong8,wrong9,varIndex1,expTotWrong9,wrong10,expTotWrong10,wrong11,expTotWrong11);
	}
	if(a==2){
		document.getElementById("button1").innerHTML=testBinomXBinom(wrong,varIndex,expTotWrong,wrong1,varIndex1,expTotWrong1,wrong2,expTotWrong2,wrong3,expTotWrong3);
		document.getElementById("button3").innerHTML=testBinomXBinom(wrong4,varIndex,expTotWrong4,wrong5,varIndex1,expTotWrong5,wrong6,expTotWrong6,wrong7,expTotWrong7);
		document.getElementById("button4").innerHTML=testBinomXBinom(wrong8,varIndex,expTotWrong8,wrong9,varIndex1,expTotWrong9,wrong10,expTotWrong10,wrong11,expTotWrong11);
	}
	if(a==3){
		document.getElementById("button1").innerHTML=testBinomXBinom(wrong,varIndex,expTotWrong,wrong1,varIndex1,expTotWrong1,wrong2,expTotWrong2,wrong3,expTotWrong3);
		document.getElementById("button2").innerHTML=testBinomXBinom(wrong4,varIndex,expTotWrong4,wrong5,varIndex1,expTotWrong5,wrong6,expTotWrong6,wrong7,expTotWrong7);
		document.getElementById("button4").innerHTML=testBinomXBinom(wrong8,varIndex,expTotWrong8,wrong9,varIndex1,expTotWrong9,wrong10,expTotWrong10,wrong11,expTotWrong11);
	}
	if(a==4){
		document.getElementById("button1").innerHTML=testBinomXBinom(wrong,varIndex,expTotWrong,wrong1,varIndex1,expTotWrong1,wrong2,expTotWrong2,wrong3,expTotWrong3);
		document.getElementById("button2").innerHTML=testBinomXBinom(wrong4,varIndex,expTotWrong4,wrong5,varIndex1,expTotWrong5,wrong6,expTotWrong6,wrong7,expTotWrong7);
		document.getElementById("button3").innerHTML=testBinomXBinom(wrong8,varIndex,expTotWrong8,wrong9,varIndex1,expTotWrong9,wrong10,expTotWrong10,wrong11,expTotWrong11);
	}
}
function buttonContent(b){//Content for the buttons
	correctAnsBtn = Math.floor((Math.random() * 4)+1);	
	if(b<=6|| b ==9 || b==10 || b==15 || b==16){
	otherOptions(correctAnsBtn);
	}
	if(b==7 || b == 8||b>=25&&b<=29||b==42||b>=44&&b<=48){
	otherOptionsBinom(correctAnsBtn);
	}
	if(b>=11&&b<=14 || b==17 || b>=19 && b<=24||b==43){
	otherOptionsExp(correctAnsBtn);
	}	
	if( b==18){
	otherOptionsFracExp(correctAnsBtn);
	}
	if(b>=30&&b<=32){
	otherOptionsMultiVar(correctAnsBtn);
	}
	if(b==33||b==36){
	otherOptionsBinomXBinom(correctAnsBtn);
	}
	if(b==34||b==37){
	otherOptionsBinomXBinom1(correctAnsBtn);
	}
	if(b==35||b>=38&&b<=41){
	otherOptionsBinomXBinom2(correctAnsBtn);
	}
}//end of buttonContent
function checkAnswer(a){ //Checks if the answer in Button "a" is correct
		
	if(correctAnsBtn==a){
		correctAnss++;
		if(correctAnss==3) {
			totalPoints = totalPoints+time;
			stop(timer);
			if(totalPoints < level*10000){
			   tryAgain();
			}
			else if(totalPoints > 480000){
			  startAgain();
			}
			else {
				level++
				nextLevel(level*10000);
			}
			correctAnss=0;
		}		
		else {
				doQuestion(level);
		}
		document.getElementById("points").innerHTML=correctAnss+"/3";
	}
	else{
	  time = time - 2000;
	  document.getElementById("button"+a).innerHTML="Wrong";
	}
}

// E N D  O F  T H E  L E V E L 
function tryAgain(){
		king = level-1;
		document.getElementById("question").innerHTML= "Good job!<br>You didn't reach "+level*10000+" total points though.<br><br><br>"+
													"<button id='goButton' onclick='start(); doQuestion("+level+")'>Try again!</button>"/*<a href='index.html'><button id='goButton'>MENU</button></a>*/;
		document.getElementById("button1").innerHTML="Total points:";
		document.getElementById("button2").innerHTML=totalPoints;
		document.getElementById("button3").innerHTML="Level points:"
		document.getElementById("button4").innerHTML=time;
		correctAnsBtn = 0;
		correctAnss = 0;
		time = 10000;
		document.getElementById("question").style.backgroundImage =  "url('pics/King"+king+".jpg')";

}
function nextLevel(a){
		king = level-1;
		document.getElementById("question").innerHTML= "C O N G R A T U L A T I O N S!<br> You did the level "+king+"!<br>To reach the next level you need <br>" + a +" total points.<br>"+
													"<button id='goButton' onclick='start();doQuestion("+level+")'>Next level</button>"/*<a href='index.html'><button id='goButton'>MENU</button></a>"*/;
		document.getElementById("button1").innerHTML="Total points:";
		document.getElementById("button2").innerHTML=totalPoints;
		document.getElementById("button3").innerHTML="Level points:"
		document.getElementById("button4").innerHTML=time;
		correctAnsBtn = 0;
		correctAnss = 0;
		time = 10000;
		document.getElementById("question").style.backgroundImage =  "url('pics/King"+king+".jpg')";
}
function startAgain(){
		document.getElementById("question").innerHTML= "That's it! You are the King of Algebra!.<br>"+
												"<button id='goButton' onclick='start(); theBegin()'>Start again!</button>"/*<a href='index.html'><button id='goButton'>MENU</button></a>"*/;
		document.getElementById("button1").innerHTML="Total points:";
		document.getElementById("button2").innerHTML=totalPoints;
		document.getElementById("button3").innerHTML="Level points:"
		document.getElementById("button4").innerHTML=time;
		correctAnsBtn = 0;
		correctAnss = 0;
		time = 10000;
		totalPoints = 0;
		document.getElementById("question").style.backgroundImage =  "url('pics/King"+level+".jpg')";
}
function checkLevel(a,b){
	if(a>=10000*b){
		var text = "<td><a href='tka.html'><button onclick='doQuestion("+b+")'><b>Level "+b+"</b></button></a></td>";
	}
	else{
		var text = "<td><button><i>Level "+b+"</i></button></td>";
	}
	return text;
}
function listOfLevels(){
	var levels = "<table><tr>"+checkLevel(totalPoints,1)+checkLevel(totalPoints,11)+checkLevel(totalPoints,21)+checkLevel(totalPoints,31)+checkLevel(totalPoints,41)+"</tr>"+
				  "<tr>"+checkLevel(totalPoints,2)+checkLevel(totalPoints,12)+checkLevel(totalPoints,22)+checkLevel(totalPoints,32)+checkLevel(totalPoints,42)+"</tr>"+
				    "<tr>"+checkLevel(totalPoints,3)+checkLevel(totalPoints,13)+checkLevel(totalPoints,23)+checkLevel(totalPoints,33)+checkLevel(totalPoints,43)+"</tr>"+
					  "<tr>"+checkLevel(totalPoints,4)+checkLevel(totalPoints,14)+checkLevel(totalPoints,24)+checkLevel(totalPoints,34)+checkLevel(totalPoints,44)+"</tr>"+
					    "<tr>"+checkLevel(totalPoints,5)+checkLevel(totalPoints,15)+checkLevel(totalPoints,25)+checkLevel(totalPoints,35)+checkLevel(totalPoints,45)+"</tr>"+
						  "<tr>"+checkLevel(totalPoints,6)+checkLevel(totalPoints,16)+checkLevel(totalPoints,26)+checkLevel(totalPoints,36)+checkLevel(totalPoints,46)+"</tr>"+
						    "<tr>"+checkLevel(totalPoints,7)+checkLevel(totalPoints,17)+checkLevel(totalPoints,27)+checkLevel(totalPoints,37)+checkLevel(totalPoints,47)+"</tr>"+
							  "<tr>"+checkLevel(totalPoints,8)+checkLevel(totalPoints,18)+checkLevel(totalPoints,28)+checkLevel(totalPoints,38)+checkLevel(totalPoints,48)+"</tr>"+
							    "<tr>"+checkLevel(totalPoints,9)+checkLevel(totalPoints,19)+checkLevel(totalPoints,29)+checkLevel(totalPoints,39)+checkLevel(totalPoints,49)+"</tr>"+
								  "<tr>"+checkLevel(totalPoints,10)+checkLevel(totalPoints,20)+checkLevel(totalPoints,30)+checkLevel(totalPoints,40)+checkLevel(totalPoints,50)+"</tr>"+
				"</table>";
	document.getElementById("welcome").innerHTML="The King of Algebra<br>Choose the level.<br>You have "+totalPoints+" points and you are on level "+level+".";
	document.getElementById("list").innerHTML= levels;
	
}

