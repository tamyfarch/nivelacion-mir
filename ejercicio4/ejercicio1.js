function hola(nombre){
    console.log("Hola "+ nombre +"!")
}
function hola2(nombre){
    return "Hola "+ nombre +"!";
}

hola("Pedro");
hola("Juan");
hola("");

console.log(hola2("Pedro"));
console.log(hola2("Juan"));
console.log(hola2(""));