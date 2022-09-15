let numeros = [5,7,16];

let resultado = numeros.reduce(function(acm,umNum){
    return acm + umNum;
})

console.log('resultado soma', resultado);

let resultadoSub = numeros.reduce(function(acm,umNum){
    return acm - umNum;
})

console.log('resultado subtração:' ,resultadoSub);


let resultadDiv = numeros.reduce(function(acm,umNum){
    return acm % umNum;
})

console.log('resultado divisão:' ,resultadDiv);
