//funcao declarada
function darOi(){
    console.log('hello world');
}
darOi();


//funcao expressa ou anonima
let somar = function(){
    console.log(1+4);
}

somar();

let subtrair = function(n1, n2){
    console.log(n1 - n2);
}
subtrair();

subtrair(20, 5);

let resultadoSubtrair = subtrair(200, 2);
console.log(resultadoSubtrair);

let multiplicar = function(n1, n2){
    return n1 * n2;
}
multiplicar();

let resultadoMultiplicar = multiplicar(200, 2);
console.log(resultadoMultiplicar);