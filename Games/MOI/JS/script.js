function startDnD(l){
    document.getElementById("questionFrame").style.lineHeight="14px";
    document.getElementById("questionFrame").innerHTML="<span style='font-size:14px; font-family:arial;'>Combine small boxes below to get the answer on this area. </span>";
    document.getElementById("battlers").style.display="none"
    document.getElementById("buttons").style.display="none"
    document.getElementById("DnDs").style.display=""
    document.getElementById("operatorField").style.display=""
    //level = l;
    //l = chooseLevel()
    setDropAns(l);
    katex.render(document.getElementById("div1").getAttribute("stringData"),div1);
    katex.render(document.getElementById("div2").getAttribute("stringData"),div2);
    katex.render(document.getElementById("div3").getAttribute("stringData"),div3);
    katex.render(document.getElementById("div4").getAttribute("stringData"),div4);
    operatorVisibility(l)      
}
function allowDrop(ev) {
	ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}   
function dragEnd(ev){
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var divDrag = data.substring(0, 4)
    var landing = ev.target.id;
    // DROP IN THE QUESTION ELEMENT
    if(landing=="questionFrame"){
        var term1 = document.getElementById(divDrag).getAttribute("stringData")
        var term2 = document.getElementById("question").getAttribute("stringData")
        if(term1===term2){ 
           if(correct<4){
                correct++   
                startDnD(level)
            } else{
                correct = 0;
                level++ 
                document.getElementById("question").innerHTML="";
			    document.getElementById("questionFrame").style.lineHeight="30px";
                document.getElementById("questionFrame").innerHTML = "Congrats! You are ready to apply your skills!<br><button onclick='launch("+level+")'>Continue</button>";
            }
        }else{
            createOpt(divDrag, level)
        }
    // DROP IN THE OTHER OPTION ELEMENT 
    }else if(landing!="questionFrame"&& landing!=data){
        var divLand = landing.substring(0, 4)
        var term1 = document.getElementById(divDrag).getAttribute("stringData")
        var expres1 = parseInt(term1);
        var term2 = document.getElementById(divLand).getAttribute("stringData")
        var expres2 = parseInt(term2);
        var idx1 = document.getElementById(divDrag).getAttribute("indexData")
        var idx2 = document.getElementById(divLand).getAttribute("indexData")
        
        if(operator == 1){
            if(idx2<idx1){
                var ans=expres2 + expres1
                document.getElementById(divLand).removeAttribute("indexData")
            }
            else{
                var ans=expres1 + expres2
                document.getElementById(divLand).removeAttribute("indexData")
            }
        }
        if(operator == 2){
            if(idx2<=idx1){
                var ans=expres2 - expres1
                ans = algebra.toTex(ans)
                document.getElementById(divLand).removeAttribute("indexData")
            }else{
                var ans=-1*expres1+expres2
                ans = algebra.toTex(ans)
                document.getElementById(divLand).removeAttribute("indexData")
            }
        }
        if(operator == 3){
               var ans=expres2 *expres1
               ans = algebra.toTex(ans)
               ans = ans.replace('{','')
               ans = ans.replace('}','')
               document.getElementById(divLand).removeAttribute("indexData")
        }
        if(operator == 4){
                expres1= new Polynomial(term1)
                expres2 = new Polynomial(term2)
                var ans=expres2.div(expres1)
                ans = ans.toString()
                document.getElementById(divLand).removeAttribute("indexData")
        }
        document.getElementById(divLand).setAttribute("stringData", ans.toString())
       // document.getElementById(divLand).setAttribute("Data", ans.toString())
        katex.render(ans.toString(),hidAns);
        document.getElementById(divLand).innerHTML=document.getElementById("hidAns").innerHTML
        createOpt(divDrag, level)
    }
}
function printDrags(){
    var options = '^^ Try to get this result and drag your answer up here ^^'+
    '<div class="div" id="div1"></div>'+
    '<div class="div" id="div2"></div>'+
    '<div class="div" id="div3"></div>'+
    '<div class="div" id="div4"></div>'+
    '<div class="divFrame" id="div1Frame" draggable="true" ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)" ></div>'+
    '<div class="divFrame" id="div2Frame" draggable="true" ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)" ></div>'+
    '<div class="divFrame" id="div3Frame" draggable="true" ondragstart="drag(event)" ondrop="drop(event)" ondragover="allowDrop(event)" ></div>'+
    '<div class="divFrame" id="div4Frame"  draggable="true" ondragstart="drag(event)"ondrop="drop(event)" ondragover="allowDrop(event)" ></div>'
    document.getElementById("DnDs").innerHTML=options;
}
function createOpt(div, l){
    genData(div, l)
    if(div=="div1"){
        katex.render(document.getElementById("div1").getAttribute("stringData"),div1);
    }
    if(div=="div2"){
        katex.render(document.getElementById("div2").getAttribute("stringData"),div2);
    }
    if(div=="div3"){
        katex.render(document.getElementById("div3").getAttribute("stringData"),div3);
    }
    if(div=="div4"){
        katex.render(document.getElementById("div4").getAttribute("stringData"),div4);
    }
}
function setOperator(o){
    operator = o;
    var elements = document.getElementsByClassName("div");
    switch(o){
        case 1:
            for(var i = 0; i < elements.length; i++){
                elements[i].style.backgroundColor ="#3C6E71"
            }
        break;
        case 2:
            for(var i = 0; i < elements.length; i++){
                elements[i].style.backgroundColor ="#2F6690"
            }
        break;
        case 3:
            for(var i = 0; i < elements.length; i++){
                elements[i].style.backgroundColor = "#483C56"
            }
        break;
        case 4:
            for(var i = 0; i < elements.length; i++){
                elements[i].style.backgroundColor = "#1F2041"
            }
        break;
    }
}