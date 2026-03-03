var res = document.getElementById("res");
var valor;
let ponto = true;

function zero(){
        res.value += "0";
}

function um(){
        res.value += "1";
}
function dois(){
        res.value += "2";
}
function tres(){
        res.value += "3";
}
function quatro(){
        res.value += "4";
}
function cinco(){
        res.value += "5";
}
function seis(){
        res.value += "6";
}
function sete(){
        res.value += "7";
}
function oito(){
        res.value += "8";
}
function nove(){
        res.value += "9";
}
function pon(){
    if(ponto == true){
        res.value += ".";
        ponto = false;
    }      
}
function som(){
    valor = res.value
        if(valor.slice(-1) != "+" && 
            valor.slice(-1) != "-"  && 
            valor.slice(-1) != "*" &&
            valor.slice(-1) != "/" &&
            valor.slice(-1) != "**" &&
            valor.slice(-1) != "." &&
            valor.slice(-1) != " " 
        ){
            res.value += "+";
            ponto = true;
        }
        
}
function sub(){
    valor = res.value
        if(valor.slice(-1) != "+" && 
            valor.slice(-1) != "-"  && 
            valor.slice(-1) != "*" &&
            valor.slice(-1) != "/" &&
            valor.slice(-1) != "**" &&
            valor.slice(-1) != "." &&
            valor.slice(-1) != " " 
        ){
            res.value += "-";
            ponto = true;
        }
        
}
function mul(){
    valor = res.value
        if(valor.slice(-1) != "+" && 
            valor.slice(-1) != "-"  && 
            valor.slice(-1) != "*" &&
            valor.slice(-1) != "/" &&
            valor.slice(-1) != "**" &&
            valor.slice(-1) != "." &&
            valor.slice(-1) != " " 
        ){
            res.value += "*";
            ponto = true;
        }
        
}
function div(){
    valor = res.value
        if(valor.slice(-1) != "+" && 
            valor.slice(-1) != "-"  && 
            valor.slice(-1) != "*" &&
            valor.slice(-1) != "/" &&
            valor.slice(-1) != "**" &&
            valor.slice(-1) != "." &&
            valor.slice(-1) != " " 
        ){
            res.value += "/";
            ponto = true;
        }
        
}
function pot(){
    valor = res.value
        if(valor.slice(-1) != "+" && 
            valor.slice(-1) != "-"  && 
            valor.slice(-1) != "*" &&
            valor.slice(-1) != "/" &&
            valor.slice(-1) != "**" &&
            valor.slice(-1) != "." &&
            valor.slice(-1) != " " 
        ){
            res.value += "**";
            ponto = true;
        }
        
}
function c(){
        res.value = " "
        ponto = true;
}
function mm(){
            res.value = eval(res.value);
            res.value = res.value * -1;

}
function pi(){
        res.value += "3.14159265359";
}
function igual(){
        res.value = eval(res.value);
}
