function bmi(peso,altura){
    var imc=peso/(altura**2)
    return imc;
}

console.log(bmi(65, 1.8));
console.log(bmi(72, 1.6));
console.log(bmi(52, 1.75));