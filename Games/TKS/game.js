var crtSpot, soundCrt;
var score=0;
var level=1;

//This function is used to call those functions what we need when the page is loaded.
function launch(){
	setQuestion();	
}
//This function sets up the question
function setQuestion(){
	document.getElementById("btn1").style.backgroundColor ="#8EA4D2";
	document.getElementById("btn2").style.backgroundColor ="#97ADD7";
	document.getElementById("btn3").style.backgroundColor ="#A0B6DB";
	document.getElementById("btn4").style.backgroundColor ="#AABFE0";

		var var1 = Math.floor(Math.random() * 19)+2; 
		var crt = var1*var1
		var question = var1+"<sup>2</sup>"
		document.getElementById("question").innerHTML=question;
		var options = [crt, (var1-1)*(var1-1), (var1+1)*(var1+1), (var1+2)*(var1+1)];
		printOpts(options)

}
function checkAns(opt){
	if(opt==crtSpot){
			score++;
		document.getElementById("score").innerHTML="Score: "+score;
		setQuestion();
	}
	else{
		var wrongbtn= "btn"+opt;
		document.getElementById(wrongbtn).style.backgroundColor ="#49516F";
		document.getElementById(wrongbtn).innerHTML="wrong, sorry";
	}
	
}
//This is a very simple way to shuffle answers
function printOpts(a){
	crtSpot = Math.floor(Math.random() * 4)+1 //Choose the spot for correct answer
	var crtBtnID = "btn"+ crtSpot; //define the button ID for correct answer
	document.getElementById(crtBtnID).innerHTML=a[0];
	if(crtSpot==1){
		document.getElementById("btn2").innerHTML=a[1];
		document.getElementById("btn3").innerHTML=a[2];
		document.getElementById("btn4").innerHTML=a[3];
	}
	if(crtSpot==2){
		document.getElementById("btn1").innerHTML=a[2];
		document.getElementById("btn3").innerHTML=a[1];
		document.getElementById("btn4").innerHTML=a[3];
	}
	if(crtSpot==3){
		document.getElementById("btn1").innerHTML=a[3];
		document.getElementById("btn2").innerHTML=a[1];
		document.getElementById("btn4").innerHTML=a[2];
	}
	if(crtSpot==4){
		document.getElementById("btn1").innerHTML=a[2];
		document.getElementById("btn2").innerHTML=a[1];
		document.getElementById("btn3").innerHTML=a[3];
	}
}
