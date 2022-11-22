function max(arreglo){
    var maximo=0;
    var i=0;
    for(i=0;i<arreglo.length;i++){
        if(maximo<arreglo[i]){
            maximo=arreglo[i];
        }
    }
    if(maximo==0){
        maximo="Undefined";
    }
    return maximo;
}

console.log(max([1,2,3]))
console.log(max([10,9,8,7,6,5,4]))
console.log(max([]))