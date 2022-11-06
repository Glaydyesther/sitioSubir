alert("Ya estoy en funciones");
alert("Otro texto");
//Entrada de datos y una salida o regreso de datos
function calculadora(num1, num2){
    return(num1 + num2);
}

// console.log(calculadora(2,4));

var btnRealiza = document.getElementById("btn-realiza");
btnRealiza.style.background = "blue";
var btnRecibe = document.getElementById("btn-recibe");
btnRecibe.style.background= "red";

btnRealiza.addEventListener("click", cambioColor);

function cambioColor(){
    var btnRecibe = document.getElementById("btn-recibe");
    btnRecibe.style.display = "none";
}