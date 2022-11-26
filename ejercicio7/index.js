/*
Paso 1: cd ejercicios(asegurarse estar en la carpeta ejercicios), git branch ejercicio7, git checkout ejercicio7
Paso 2: mkdir ejercicio7, cd ejercicio7(para ubicarnos en esa carpeta)
Paso 3: touch index.js
*/
//Paso 4
var receta = {}

//Paso 5
receta.nombre = "Sandwich"

//Paso 6
receta.ingredientes = []

//Paso 7
receta.ingredientes.push({
    nombre: "Pan",
    cantidad: 2
})

//Paso 8
receta.ingredientes.push({
    nombre: "Queso",
    cantidad: 1
})

//Paso 9
console.log(receta.ingredientes[0].nombre)

//Paso 10
var cantidad=0
for(var i=0;i<receta.ingredientes.length;i++){
    cantidad+=receta.ingredientes[i].cantidad
}
console.log("La cantidad total de ingredientes es: " + cantidad)