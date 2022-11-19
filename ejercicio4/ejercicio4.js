function calcularColor(number){
    var color;
    if (number===1){
      color="Black";
    }
    else if(number===2){
        color="White";
    }
    else if(number===3){
        color="Blue";        
    }
    else{
        color="Green";        
    }
    return "El color es "+color;
}
console.log(calcularColor(1));
console.log(calcularColor(2));
console.log(calcularColor(3));
console.log(calcularColor(8));