function join(arreglo){
    var i=0;
    var texto="";
    for(i=0;i<arreglo.length;i++){
        texto=texto + " " + arreglo[i];
    }
    return texto;
}
console.log(join(["Hola","Mundo"]))
console.log(join(["Make","It","Real"]))
console.log(join([""]))