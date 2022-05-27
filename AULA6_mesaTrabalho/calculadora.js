function adicionar(num1, num2){
    return num1 + num2;
}
adicionar(4,6);
console.log(adicionar(4,6));

function subtrair(num1, num2){
    return num1 - num2;
}
subtrair(10,4);
console.log(subtrair(10,4));

function multiplicar(num1, num2){
    return num1 * num2;
}
multiplicar(100,6);
console.log(multiplicar(100,6));

function dividir(num1, num2){
    return num1 / num2;
}
dividir(100,0);
console.log('essa é a funcao de dividir:', dividir(10,0))


function quadradoDoNumero(num){
    return multiplicar(num,num)
}
console.log('funcao quadrado do numero é:', quadradoDoNumero(4));

function mediaDeTresNumeros(num1,num2,num3){
    let resultadoSomar = adicionar(num1,num2);
    return adicionar(resultadoSomar,num3) /3;
}
console.log('funcao media de 3 numeros, resultado é :', mediaDeTresNumeros(5,5,5))

function calculaPorcentagem(num, por){
    return multiplicar(num,por)/100;
}
console.log('aqui é a funcao calcula porcentagem: ', calculaPorcentagem(300, 15))

function geradorDePorcentagem(par1, par2){
    let primeiroPor100 = multiplicar(par1, 100);
    return dividir(primeiroPor100, par2);
}
console.log('aqui é o gerador de porcentagem: ', geradorDePorcentagem(2,200))