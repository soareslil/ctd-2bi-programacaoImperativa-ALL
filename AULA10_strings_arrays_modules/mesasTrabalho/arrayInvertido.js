let lista = [1,2,3];

function imprimirInverso(arg){
    return arg.slice();
}

let resultadoImprimir = imprimirInverso(lista).reverse();
console.log(resultadoImprimir);
console.log(lista);

function inverter(arg){
    return arg.reverse();
}
let resultadoInverter = inverter(lista);
console.log('resultado invertendo de fato o array: ', resultadoInverter);
console.log('lista original agora invertida: ', lista);
