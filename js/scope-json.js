alert("Estamos en el scope");
// SCOPE Y JSON
// var nombre ="Glaydy";
// var age= 10;
// console.log(nombre);

// for(var i=0; i<10; i++){
//     let color = "Blue";
//     console.log(nombre);
//     console.log(age);
//     console.log(color);
// }
// console.log(color);

//JSON

var JSON= [
{
    "name":"Mariana García",
    "age":29,
    "powers":[
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
    ]
},
{
    "name":"Marcos Damián",
    "age":39,
    "powers":[
        "Death vision",
        "Damage resistance",
        "Superhuman reflexes"
    ]
}
];

for(var i in JSON){
    console.log(JSON[i].powers);
     var pDato = JSON[i].powers;
}
