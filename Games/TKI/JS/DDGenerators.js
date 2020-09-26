function operatorVisibility(l){
    if(l<3 || l>6&&l<9 || l==14){
        setOperator(1)
        document.getElementById("add").style.visibility="visible"
        document.getElementById("sub").style.visibility="hidden"
        document.getElementById("mul").style.visibility="hidden"
        document.getElementById("division").style.visibility="hidden"
    }
    if(l<5 && l>2 || l>8&&l<11 || l==13 || l==15 || l==16 ){
        setOperator(2)
        document.getElementById("add").style.visibility="hidden"
        document.getElementById("sub").style.visibility="visible"
        document.getElementById("mul").style.visibility="hidden"
        document.getElementById("division").style.visibility="hidden"
    }
    if(l>4&&l<7 || l>10&&l<13 || l>16&&l<27){
        setOperator(1)
        document.getElementById("add").style.visibility="visible"
        document.getElementById("sub").style.visibility="visible"
        document.getElementById("mul").style.visibility="hidden"
        document.getElementById("division").style.visibility="hidden"
    }
    if(l>26&&l<33){
        setOperator(3)
        document.getElementById("add").style.visibility="hidden"
        document.getElementById("sub").style.visibility="hidden"
        document.getElementById("mul").style.visibility="visible"
        document.getElementById("division").style.visibility="hidden"
    }
    if(l>32&&l<34){
        setOperator(4)
        document.getElementById("add").style.visibility="hidden"
        document.getElementById("sub").style.visibility="hidden"
        document.getElementById("mul").style.visibility="visible"
        document.getElementById("division").style.visibility="visible"
    }
}
function genData(div, l){
    switch(l){
        case 1:
            var a = Math.floor((Math.random() * 3) + 1)
            //var aAlg = new algebra.parse(a);
            setAtrributes(a.toString(), div)
        break;
        case 2: case 4: case 5: case 6: case 13:
            var a = Math.floor((Math.random() * 10) + 1)
            //var aAlg = new algebra.parse(a);
            setAtrributes(a.toString(), div)
        break;
        case 3:
            var a = Math.floor((Math.random() * 5) + 1)
           // var aAlg = new algebra.parse(a);
            setAtrributes(a.toString(), div)
        break;
        case 7: case 9: case 11:
            var a = Math.floor((Math.random() * 20) + 1)
            //var aAlg = new algebra.parse(a);
            setAtrributes(a.toString(), div)
        break;
        case 8:
            var a = Math.floor((Math.random() * 10) + 10)
            //var aAlg = new algebra.parse(a);
            setAtrributes(a.toString(), div)
        break;
        case 10: case 12:
            var a = Math.floor((Math.random() * 20) + 10)
            //var aAlg = new algebra.parse(a);
            setAtrributes(a.toString(), div)
        break;
        case 14: case 17: case 18:
            var sign = Math.random() < 0.5 ? -1 : 1;
            var a =sign* Math.floor((Math.random() * 10) + 1)
            //var aAlg = new algebra.parse(a);
            setAtrributes(a.toString(), div)
        break;
        case 19:
            var sign = Math.random() < 0.5 ? -1 : 1;
            var a =sign* Math.floor((Math.random() * 20) + 1)
            //var aAlg = new algebra.parse(a);
            setAtrributes(a.toString(), div)
        break;
        case 15: case 16:
            var a =-1* Math.floor((Math.random() * 10) + 1)
            //var aAlg = new algebra.parse(a);
            setAtrributes(a.toString(), div)
        break;
/**************************************************************************************************
			P H A S E   1
*************************************************************************************************/
        case 20: case 21:
            var a = 0
            while(a==0){a=Math.floor((Math.random() *20) -10)}
            var choose = Math.random() 
            if(choose < 0.5){
                    a+="* x"
                    var aAlg = new algebra.parse(a);
            }else{
                    var aAlg = a;
            }
            setAtrributes(a, aAlg, div)
        break;
        case 22: 
            var a = 0
            while(a==0){a=Math.floor((Math.random() *20) -10)}
            var choose = Math.random() 
            if(choose < 0.5){
                    a+="*"+variable[varIndex1]
                    document.getElementById(div).setAttribute("indexData",varIndex1)
            }else{
                    a+="*"+variable[varIndex2]
                    document.getElementById(div).setAttribute("indexData",varIndex2)
            } 
            var aAlg = new algebra.parse(a);       
            setAtrributes(a, aAlg, div)
        break;
        case 23: 
            var a = 0
            while(a==0){a=Math.floor((Math.random() *20) -10)}
            var choose = Math.random() 
            if(choose < 0.5){
                a+="*"+variable[varIndex1]+"^2"
                var aAlg = new algebra.parse(a);
            }else{
                var aAlg = a;
            }
            setAtrributes(a, aAlg, div)
        break;
        case 24: 
            var a = 0
            while(a==0){a=Math.floor((Math.random() *20) -10)}
            var a = 0
            while(a==0){a=Math.floor((Math.random() *20) -10)}
            var choose = Math.random() 
            if(choose < 0.5){
              a+="*"+variable[varIndex1]+"^2"
            }else{
               a+="*"+variable[varIndex1]
            }
            var aAlg = new algebra.parse(a);
            setAtrributes(a, aAlg, div)
        break;
        case 25: 
            var a = 0
            while(a==0){a=Math.floor((Math.random() *20) -10)}
            var choose = Math.random() 
            if(choose < 0.5){
                a+="*"+variable[varIndex1]+"^"+exp1
            }else{
                a+="*"+variable[varIndex1]+"^"+exp2
            }
            var aAlg = new algebra.parse(a);
            setAtrributes(a, aAlg, div)
        break;
        case 26: 
            var a = 0
            while(a==0){a=Math.floor((Math.random() *20) -10)}
            var a = 0
            while(a==0){a=Math.floor((Math.random() *20) -10)}
            var choose = Math.random() 
            if(choose < 0.5){
                a+="*"+variable[varIndex1]+"^"+exp1
                document.getElementById(div).setAttribute("indexData",varIndex1)
            }else{
                a+="*"+variable[varIndex2]+"^"+exp2
                document.getElementById(div).setAttribute("indexData",varIndex2)
            }
            var aAlg = new algebra.parse(a);
            setAtrributes(a, aAlg, div)
        break;
        case 27:
            var a = 0
            while(a==0){a=Math.floor((Math.random() *4)+2)}
            var choose = Math.random() 
            if(choose < 0.3){
                    a+="*"+variable[varIndex1]
                    var aAlg = new algebra.parse(a);
            }else{
                    var aAlg = a;
            }
            setAtrributes(a, aAlg, div)
        break;
        case 28:
            var a = 0
            while(a==0){a=Math.floor((Math.random() *10)-5)}
            var choose = Math.random() 
            if(choose < 0.3){
                    a+="*"+variable[varIndex1]
                    var aAlg = new algebra.parse(a);
            }else{
                    var aAlg = a;
            }
            setAtrributes(a, aAlg, div)
        break;
        case 29:
            var a = 0
            while(a==0){a=Math.floor((Math.random() *10)-5)}
            var choose = Math.random() 
            if(choose < 0.3){
                    a+="*"+variable[varIndex1]+"^"+exp1
                    var aAlg = new algebra.parse(a);
            }else{
                    var aAlg = a;
            }
            setAtrributes(a, aAlg, div)
        break;
        case 30:
            exp1 = Math.floor((Math.random() *5)+1)
            a =variable[varIndex1]+"^"+exp1
            var aAlg = new algebra.parse(a);
            setAtrributes(a, aAlg, div)
        break;
        case 31:
            exp1 = Math.floor((Math.random() *5)+1)
            var a = 0
            while(a==0){a=Math.floor((Math.random() *4)+1)}
            var choose = Math.random() 
            if(choose < 0.7){
                a+="*"+variable[varIndex1]+"^"+exp1
                var aAlg = new algebra.parse(a);
            }else{
                var aAlg = a;
        }
            setAtrributes(a, aAlg, div)
        break;
        case 32:
            exp1 = Math.floor((Math.random() *3)+1)
            var a = 0
            while(a==0){a=Math.floor((Math.random() *10)-5)}
            var choose = Math.random() 
            if(choose < 0.7){
                a+="*"+variable[varIndex1]+"^"+exp1
                var aAlg = new algebra.parse(a);
            }else{
                var aAlg = a;
        }
            setAtrributes(a, aAlg, div)
        break;
        case 33:
            var a = 0
            while(a==0){a=Math.floor((Math.random() *5)+2)}
            var b = 0
            while(b==0){b=Math.floor((Math.random() *5) +2)}
            var choose = Math.random() 
            if(choose < 0.5){
                    a =a*b+"*"+variable[varIndex1]
                    var aAlg = new algebra.parse(a);
            }else{
                    var aAlg = b;
            }
            setAtrributes(a, aAlg, div)
        break;
    }
}
function setAtrributes(aStr, div){
    document.getElementById(div).setAttribute("stringData",aStr)
    //document.getElementById(div).setAttribute("data",aStr)    
}
function setDropAns(l){
    switch(l){
        case 1: case 5:
            var a = Math.floor((Math.random() * 5) + 3)

            printQuestion(a.toString())
            printDrags()
            for(var i = 1; i<5; i++){
                var div  = "div"+i
                genData(div,l) 
            }
        break
        case 2: case 6:
            var a = Math.floor((Math.random() * 10) + 10)
            printQuestion(a.toString())
            printDrags()
            for(var i = 1; i<5; i++){
                var div = "div"+i
                genData(div,l) 
            }
        break
        case 3:
            var a = Math.floor((Math.random() * 3) + 1)
            printQuestion(a.toString())
            printDrags()
            for(var i = 1; i<5; i++){
                var div = "div"+i
                genData(div,l) 
            }
        break
        case 4:
            var a = Math.floor((Math.random() * 7) + 1)
            printQuestion(a.toString())
            printDrags()
            for(var i = 1; i<5; i++){
                var div = "div"+i
                genData(div,l) 
            }
        break
        case 9: case 10: case 11: case 12: case 15:
            var a = Math.floor((Math.random() * 20) + 1)
            printQuestion(a.toString())
            printDrags()
            for(var i = 1; i<5; i++){
                var div = "div"+i
                genData(div,l) 
            }
        break 
        case 7: case 8:
            var a = Math.floor((Math.random() *20) + 20)
            printQuestion(a.toString())
            printDrags()
            for(var i = 1; i<5; i++){
                var div = "div"+i
                genData(div,l) 
            }
        break 
        case 13:
            var a =-1* Math.floor((Math.random() *10) + 1)
            printQuestion(a.toString())
            printDrags()
            for(var i = 1; i<5; i++){
                var div = "div"+i
                genData(div,l) 
            }
        break 
        case 14: case 16: case 17: case 18:
            var sign = Math.random() < 0.5 ? -1 : 1;
            var a =sign* Math.floor((Math.random() *10) + 1)
            printQuestion(a.toString())
            printDrags()
            for(var i = 1; i<5; i++){
                var div = "div"+i
                genData(div,l) 
            }
        break 
        case 19:
            var sign = Math.random() < 0.5 ? -1 : 1;
            var a =sign* Math.floor((Math.random() *30) + 1)
            printQuestion(a.toString())
            printDrags()
            for(var i = 1; i<5; i++){
                var div = "div"+i
                genData(div,l) 
            }
        break 
/**************************************************************************************************
			P H A S E   1
*************************************************************************************************/

        case 20: case 21:
            var a = 0
            while(a==0){a=Math.floor((Math.random() *20) -10)+"* x"}
            var b = 0
            while(b==0){b=Math.floor((Math.random() *20) -10)}
            if(b<0){
                a+=b
            }
            if(b>0){
                a+="+"+b
            }
            printQuestion(a)
            printDrags()
            for(var i = 1; i<5; i++){
                var div = "div"+i
                genData(div,l) 
            }
        break ;
        case 22:
            var Index1= Math.floor(Math.random() * 4)
            var Index2 = Index1
            while(Index2 == Index1){Index2= Math.floor(Math.random() * 4)}
            if(Index1<Index2){varIndex1 = Index1; varIndex2 = Index2}else{varIndex1 = Index2; varIndex2 = Index1}
            var a = 0
            while(a==0){a=Math.floor((Math.random() *20) -10)+"*"+variable[varIndex1]}
            var b = 0
            while(b==0){b=Math.floor((Math.random() *20) -10)}
            if(b<0){
                a+=b+"*"+variable[varIndex2]
            }
            if(b>0){
                a+="+"+b+"*"+variable[varIndex2]
            }
            printQuestion(a)
            printDrags()
            for(var i = 1; i<5; i++){
                var div = "div"+i
                genData(div,l) 
            }
        break;
        case 23:
            varIndex1= Math.floor(Math.random() * 4)
            var a = 0
            while(a==0){a=Math.floor((Math.random() *20) -10)+"*"+variable[varIndex1]+"^2"}
            var b = 0
            while(b==0){b=Math.floor((Math.random() *20) -10)}
            if(b<0){
                a+=b
            }
            if(b>0){
                a+="+"+b
            }
            printQuestion(a);
            printDrags()
            for(var i = 1; i<5; i++){
                var div = "div"+i
                genData(div,l) 
            }
        break;
        case 24:
            varIndex1= Math.floor(Math.random() * 4)
            var a = 0
            while(a==0){a=Math.floor((Math.random() *20) -10)+"*"+variable[varIndex1]+"^2"}
            var b = 0
            while(b==0){b=Math.floor((Math.random() *20) -10)}
            var term2 = b+"*"+variable[varIndex1]
            if(b<0){
                a+=term2
            }
            if(b>0){
                a+="+"+term2
            }
            printQuestion(a)
            printDrags()
            for(var i = 1; i<5; i++){
                var div = "div"+i
                genData(div,l) 
            }
        break
        case 25:
            varIndex1= Math.floor(Math.random() * 4)
            exp1= Math.floor(Math.random() * 2)+3
            exp2 = Math.floor(Math.random() * 2)+1
            var a = 0
            while(a==0){a=Math.floor((Math.random() *20) -10)+"*"+variable[varIndex1]+"^"+exp1}
            var b = 0
            while(b==0){b=Math.floor((Math.random() *20) -10)}
            var term2 = b+"*"+variable[varIndex1]+"^"+exp2
            if(b<0){
                a+=term2
            }
            if(b>0){
                a+="+"+term2
            }
            printQuestion(a)
            printDrags()
            for(var i = 1; i<5; i++){
                var div = "div"+i
                genData(div,l) 
            }
        break 
        case 26:
            var Index1= Math.floor(Math.random() * 4)
            var Index2 = Index1
            while(Index2 == Index1){Index2= Math.floor(Math.random() * 4)}
            if(Index1<Index2){varIndex1 = Index1; varIndex2 = Index2}else{varIndex1 = Index2; varIndex2 = Index1}
            exp1= Math.floor(Math.random() * 4)+2
            exp2 = Math.floor(Math.random() * 4)+2
            var a = 0
            while(a==0){a=Math.floor((Math.random() *20) -10)+"*"+variable[varIndex1]+"^"+exp1}
            var b = 0
            while(b==0){b=Math.floor((Math.random() *20) -10)}
            var term2 = b+"*"+variable[varIndex2]+"^"+exp2
            if(b<0){
                a+=term2
            }
            if(b>0){
                a+="+"+term2
            }
            printQuestion(a)
            printDrags()
            for(var i = 1; i<5; i++){
                var div = "div"+i
                genData(div,l) 
            }
        break
        case 27:
            varIndex1= Math.floor(Math.random() * 4)
            var a =Math.floor((Math.random() *4) + 2)
            var b =Math.floor((Math.random() *4) + 2)
            printQuestion(a*b+"*"+variable[varIndex1])
            printDrags()
            for(var i = 1; i<5; i++){
                var div = "div"+i
                genData(div,l) 
            }
        break 
        case 28:
            varIndex1= Math.floor(Math.random() * 4)
            var a = 0
            while(a==0){a=Math.floor((Math.random() *10) -5);if(a==1||a==-1){a=0}}
            var b = 0
            while(b==0){b=Math.floor((Math.random() *10) -5);if(b==1||b==-1){b=0}}
            printQuestion(a*b+"*"+variable[varIndex1])
            printDrags()
            for(var i = 1; i<5; i++){
                var div = "div"+i
                genData(div,l) 
            }
        break 
        case 29:
            exp1 = Math.floor(Math.random() * 4)+2
            varIndex1= Math.floor(Math.random() * 4)
            var a = 0
            while(a==0){a=Math.floor((Math.random() *10) -5);if(a==1||a==-1){a=0}}
            var b = 0
            while(b==0){b=Math.floor((Math.random() *10) -5);if(b==1||b==-1){b=0}}
            printQuestion(a*b+"*"+variable[varIndex1]+"^"+exp1)
            printDrags()
            for(var i = 1; i<5; i++){
                var div = "div"+i
                genData(div,l) 
            }
        break 
        case 30:
            exp1 = Math.floor(Math.random() * 6)+3
            varIndex1= Math.floor(Math.random() * 4)
            printQuestion(variable[varIndex1]+"^"+exp1)
            printDrags()
            for(var i = 1; i<5; i++){
                var div = "div"+i
                genData(div,l) 
            }
        break
        case 31:
            exp1 = Math.floor(Math.random() * 6)+3
            varIndex1= Math.floor(Math.random() * 4)
            var a = 0
            while(a==0){a=Math.floor((Math.random() *6)+1);if(a==1){a=0}}
            var b = 0
            while(b==0){b=Math.floor((Math.random() *6)+1);if(b==1){b=0}}
            printQuestion(a*b+"*"+variable[varIndex1]+"^"+exp1)
            printDrags()
            for(var i = 1; i<5; i++){
                var div = "div"+i
                genData(div,l) 
            }
        break  
        case 32:
            exp1 = Math.floor(Math.random() * 6)+3
            varIndex1= Math.floor(Math.random() * 4)
            var a = 0
            while(a==0){a=Math.floor((Math.random() *12)-6);if(a==1||a==-1){a=0}}
            var b = 0
            while(b==0){b=Math.floor((Math.random() *12)-6);if(b==1||a==-1){b=0}}
            printQuestion(a*b+"*"+variable[varIndex1]+"^"+exp1)
            printDrags()
            for(var i = 1; i<5; i++){
                var div = "div"+i
                genData(div,l) 
            }
        break  
        case 33:
            varIndex1= Math.floor(Math.random() * 4)
            var a = Math.floor((Math.random() * 5) + 3)+"*"+variable[varIndex1]
            printQuestion(a)
            printDrags()
            for(var i = 1; i<5; i++){
                var div  = "div"+i
                genData(div,l) 
            }
        break

    }
}
function printQuestion(aStr){
   /* document.getElementById("question").setAttribute("stringData",aStr)
    var aAlg = new algebra.parse(aStr);
    document.getElementById("question").setAttribute("data",aAlg)*/
    katex.render(aStr,question);
}