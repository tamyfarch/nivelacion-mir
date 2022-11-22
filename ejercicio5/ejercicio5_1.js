function sum(arreglo){
    var suma=0;
    var i=0;
    for (i=0;i<arreglo.length;i++) {
        suma+=arreglo[i]
    }
    return suma;
}
console.log(sum([1,2,3]));
console.log(sum([10,8,12,5]));
console.log(sum([]));