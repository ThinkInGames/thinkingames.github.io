function chooseLevel(){
	level = parseInt(prompt("Level",""))
	return level
}
function launch(l){
	document.getElementById("questionFrame").innerHTML="";
	document.getElementById("battlers").style.display=""
    document.getElementById("buttons").style.display=""
	document.getElementById("DnDs").style.display="none"
	document.getElementById("operatorField").style.display="none"
	hit = new sound("Audio/PuustinenHit.mp3")
	shoot = new sound("Audio/PuustinenShoots.mp3")
	win = new sound("Audio/Win.mp3")
	lost = new sound("Audio/Lost.mp3")
	//l = chooseLevel()
	setQuestion(l);
	document.getElementById('opponent').style.marginRight="50px"
	document.getElementById('alfred').style.marginLeft="60px"
	document.getElementById('opponent').style.opacity=1
	document.getElementById('opponent').style.transition = "opacity 2s";
	document.getElementById('alfred').style.opacity=1
	document.getElementById('alfred').style.transition = "opacity 2s";
	timeOppMove = setInterval(moveOpp, 1000);
}
// CHARACTER CONTROLS
function moveOpp(){
	var oppMarginRight = document.getElementById("opponent").style.marginRight
	oppMarginRight = parseInt( oppMarginRight, 10 ) + 1 + "px";
	document.getElementById("opponent").style.marginRight=oppMarginRight
	var oppPos = document.getElementById('opponent').offsetLeft;
	var linePos = document.getElementById('line').offsetLeft;
	if(oppPos<linePos-10){
			document.getElementById("question").style.lineHeight="30px";
			lost.play()
			document.getElementById("alfred").style.opacity = "0";
			document.getElementById("alfred").style.transition = "opacity 2s";
			document.getElementById("question").innerHTML="";
			document.getElementById("questionFrame").style.lineHeight="30px";
			document.getElementById("questionFrame").innerHTML = "Ouch!<br> Opponent managed to come to your side<br><button onclick='launch("+level+")'>Try again</button>";
			clearInterval(timeOppMove);
			document.getElementById("btn1").disabled = true;
			document.getElementById("btn2").disabled = true;
			document.getElementById("btn3").disabled = true;
			document.getElementById("btn4").disabled = true;
	}
}
function alfShoots(){
		var weaponMarginLeft = document.getElementById("weapon").style.marginLeft
	weaponMarginLeft = parseInt( weaponMarginLeft, 10 ) + 5 + "px";
	document.getElementById("weapon").style.marginLeft=weaponMarginLeft
	var weaponPos = document.getElementById('weapon').offsetLeft+20;
	var oppPos = document.getElementById('opponent').offsetLeft;
	
	if(weaponPos > oppPos){
		clearInterval(timeAlfW);
		document.getElementById("weapon").style.marginLeft = "-7px";
		document.getElementById("opponent").style.marginRight = parseInt(document.getElementById("opponent").style.marginRight,10)-20+"px";
	document.getElementById("weapon").style.visibility="hidden";
	}
}
function oppShoots(){
	var weaponMarginRight = document.getElementById("weaponOpp").style.marginRight
	weaponMarginRight = parseInt( weaponMarginRight, 10 ) + 5 + "px";
	document.getElementById("weaponOpp").style.marginRight=weaponMarginRight
	var alfPos = document.getElementById('alfred').offsetLeft+80;
		var oppWepPos = document.getElementById('weaponOpp').offsetLeft;
	if(alfPos > oppWepPos){
		clearInterval(timeOppW);
		document.getElementById("weaponOpp").style.marginRight = "-30px";
		document.getElementById("alfred").style.marginLeft = parseInt(document.getElementById("alfred").style.marginLeft,10)-20+"px";
		document.getElementById("weaponOpp").style.visibility="hidden";
	}
}
class sound {
	constructor(src) {
		this.sound = document.createElement("audio");
		this.sound.src = src;
		this.sound.setAttribute("preload", "auto");
		this.sound.setAttribute("controls", "none");
		this.sound.style.display = "none";
		this.sound.loop = false;
		document.body.appendChild(this.sound);
		this.play = function () {
			this.sound.play();
		};
		this.stop = function () {
			this.sound.pause();
		};
	}
}
function stringOpts(a){
	let strOpts = [a[0].toString(),a[1].toString(),a[2].toString(),a[3].toString()];
	return strOpts;
}
function printOpts(a){
	crt = Math.floor((Math.random() * 4) + 1);

	if(crt == 1){
		katex.render(a[0], btn1);
		katex.render(a[1], btn2);
		katex.render(a[2], btn3);
		katex.render(a[3], btn4);
	}
	if(crt == 2){
		katex.render(a[2], btn1);
		katex.render(a[0], btn2);
		katex.render(a[1], btn3);
		katex.render(a[3], btn4);
	}
	if(crt == 3){
		katex.render(a[3], btn1);
		katex.render(a[2], btn2);
		katex.render(a[0], btn3);
		katex.render(a[1], btn4);
		
	}
	if(crt == 4){
		katex.render(a[1], btn1);
		katex.render(a[2], btn2);
		katex.render(a[3], btn3);
		katex.render(a[0], btn4);
		
	}
}
function checkAns(opt){
	var oppPos = document.getElementById('opponent').offsetLeft;
	var arenaLeft = document.getElementById('battleArena').offsetLeft;
	var arenaRight = arenaLeft+330;
	var alfPos = document.getElementById('alfred').offsetLeft;
	if(opt==crt){
		shoot.play()
		katex.render(options[0], weapon);
		document.getElementById("weapon").style.visibility="visible";
		timeAlfW = setInterval(alfShoots, 10);
		if(oppPos>arenaRight){
			win.play()
			document.getElementById("opponent").style.opacity = "0";
			document.getElementById("opponent").style.transition = "opacity 2s";
			document.getElementById("question").innerHTML="";
			document.getElementById("questionFrame").style.lineHeight="30px";
			document.getElementById("questionFrame").innerHTML = "Congrats! You are ready to apply your skills!<br><button onclick='startDnD("+level+")'>Continue</button>";
			clearInterval(timeOppMove);
			document.getElementById("btn1").disabled = true;
			document.getElementById("btn2").disabled = true;
			document.getElementById("btn3").disabled = true;
			document.getElementById("btn4").disabled = true;
		}else{setQuestion(level);}
	}else{
		hit.play()
		document.getElementById("weaponOpp").style.visibility="visible";
		timeOppW = setInterval(oppShoots, 10);
		document.getElementById("btn"+opt).innerHTML= "Wrong";
		if(crt==1){
			opt=opt-1;
		}
		if(crt==2){
			if(opt == 3 || opt ==4){
				opt=opt-1;
			}
		}
		if(crt==3){
			if(opt ==4){
				opt=opt-1;
			}
		}
		katex.render(options[opt], weaponOpp);
		
		if(alfPos<arenaLeft){
			lost.play()
			document.getElementById("alfred").style.opacity = "0";
			document.getElementById("alfred").style.transition = "opacity 2s";
			document.getElementById("question").innerHTML="";
			document.getElementById("questionFrame").style.lineHeight="30px";
			document.getElementById("questionFrame").innerHTML = "Ouch! Too many errors. <br><button onclick='launch("+level+")'>Try again</button>";
			clearInterval(timeOppMove);
			document.getElementById("btn1").disabled = true;
			document.getElementById("btn2").disabled = true;
			document.getElementById("btn3").disabled = true;
			document.getElementById("btn4").disabled = true;
		}
	}
}
