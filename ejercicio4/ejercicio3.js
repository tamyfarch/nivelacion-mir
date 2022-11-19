function sum(number){
    var i=1;
    var adicion=0;
    while(i<=number){
        adicion=adicion+i
        i++;
    }
    return adicion;
}
console.log(sum(4));
console.log(sum(10));
console.log(sum(15));