alert("Aquí ya estoy en el DOM");
var btnEditar = document.getElementById("btn-dom");
btnEditar.style.background = "blue";

var numberlist = document.getElementsByClassName('numberr');
var div;
for(div in numberlist){
    if(numberlist[div].className == "numberr"){
        numberlist[div].style.color = "red";
        numberlist[div].style.width = "300px";
        numberlist[div].style.background= "blue";
        numberlist[div].style.margin = "5px";
        numberlist[div].style.height = "300px";
    }
}