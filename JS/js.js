"use strict";

const Termo1 = document.getElementById("Termo1");
const Termo2 = document.getElementById("Termo2");
const btnSomar = document.getElementById("btnSomar");
const btnSub = document.getElementById("btnSub");
const btnMult = document.getElementById("btnMult");
const btnDiv = document.getElementById("btnDiv");
const saida = document.getElementById("saida");

//pegar o numero
function getTermo1(){
    return +Termo1.value;
    }
    function getTermo2(){
       return +Termo2.value;
    }
//soma
    function soma(n1,n2){
        let soma = n1 + n2;
        return soma.toFixed(2);
    }

function Onclicksoma(){
    saida.textContent = soma(getTermo1(), getTermo2());
    Termo1.value=null;
    Termo2.value=null;
}
//sub
function sub(n1,n2){
    let soma = n1 - n2;
    return soma.toFixed(2);
}

function Onclicksub(){
saida.textContent = sub(getTermo1(), getTermo2());
Termo1.value=null;
Termo2.value=null;
}
//div
function div(n1,n2){
    let soma = n1 / n2;
    return soma.toFixed(2);
    
}

function Onclickdiv(){
saida.textContent = div(getTermo1(), getTermo2());
Termo1.value=null;
Termo2.value=null;
}
//mult
function mult(n1,n2){
    let soma = n1 * n2;
    return soma.toFixed(2);
}

function Onclickmult(){
saida.textContent = mult(getTermo1(), getTermo2());
Termo1.value=null;
Termo2.value=null;
}
//validar
    function Validarnumero(n){
        return (n < 0)? true:false;
    }

    function Onchange() {
        Validarnumero(this.value);
        if(Validarnumero(this.value)){
        this.value=null;
        this.focus();
        }
     }
     
btnSomar.addEventListener("click", Onclicksoma);
btnSub.addEventListener("click", Onclicksub);
btnDiv.addEventListener("click", Onclickdiv);
btnMult.addEventListener("click", Onclickmult);
Termo1.addEventListener("change", Onchange);
Termo2.addEventListener("change", Onchange);