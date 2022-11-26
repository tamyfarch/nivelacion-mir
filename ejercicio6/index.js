/*
Paso 1: cd ejercicios(asegurarse estar en la carpeta ejercicios), git branch ejercicio6, git checkout ejercicio6
Paso 2: mkdir ejercicio6, cd ejercicio6(para ubicarnos en esa carpeta)
Paso 3: touch index.js
*/
//Paso 4
var Pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"],
    //Paso 9
    saluda: function Saluda(){
        console.log("Hola, me llamo " + Pedro.nombre);
    }
}
//Paso 5
//console.log(Pedro.edad)

//Paso 6
Pedro.estatura = 1.8

//Paso 7
delete Pedro.activo 

//Paso 8
//Forma 1 de recorrer un objeto, imprimir la llave y el valor separados por :
for (var llave in Pedro){
    if(Pedro.hasOwnProperty(llave)){
        console.log(llave + " : " + Pedro[llave])
    }
}

//Forma 2 de recorrer un objeto, imprimir la llave y el valor separados por :
var llaves = Object.keys(Pedro);
for(var i=0; i<llaves.length;i++){
    var llave = llaves[i]
    console.log(llaves[i] + " : " + Pedro[llave])
}
//Forma 3 de recorrer un objeto, imprimir la llave y el valor separados por :
for (const property in Pedro){
    console.log(`${property}:${Pedro[property]}`)
}

//Paso 10
Pedro.saluda();

//console.log(Pedro)
//console.log(Pedro.estatura)

/*
//Forma 1 de recorrer un objeto, imprimir solo el valor
for (var llave in Pedro){
    if(Pedro.hasOwnProperty(llave)){
        console.log(Pedro[llave])
    }
}

//Forma 2 de recorrer un objeto, imprimir solo el valor
var llaves = Object.keys(Pedro);
for(var i=0; i<llaves.length;i++){
    var llave = llaves[i]
    console.log(Pedro[llave])
}
//Forma 3 de recorrer un objeto, imprimir la llave y el valor separados por :
for (const property in Pedro){
    console.log(`${Pedro[property]}`)
}
*/



