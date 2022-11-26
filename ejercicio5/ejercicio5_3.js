function maxIndex(arreglo){
    var i=0;
    var maximo=0;
    var indiceMax=0;
    for(i=0;i<arreglo.length;i++){
        if(maximo<arreglo[i]){
            maximo=arreglo[i];
            indiceMax=i;
            //indiceMax=arreglo.indexOf(maximo)

        }
    }
    if(indiceMax==0){
        indiceMax=-1;
    }
    return indiceMax;
}

console.log(maxIndex([1,2,3]))
console.log(maxIndex([10,9,8,7,6,5,4]))
console.log(maxIndex([]))