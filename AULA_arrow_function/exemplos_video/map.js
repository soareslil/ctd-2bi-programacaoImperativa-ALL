let numeros = [2,4,6];

let dobroNum = numeros.map(function(umNumero){
    return umNumero *2;
})

console.log(dobroNum);

let listaNum = [1,2,3,4,5,6];
let listaDobro = listaNum.map(function(valor,index){
    console.log(valor);
    return valor * 2;
})
console.log('novo valor apos return', listaDobro);

//para ver o resultado final é preciso adicionar uma variavel 'listaDobro'