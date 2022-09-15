

// let numbers = 1;
// while(numbers <= 100){
//     console.log('voltou:' + numbers);
//     numbers++
// }

//O primeiro conjunto de codigos é para mostrar todos os números ímpares de 1 até 100.
// let number = 0;
// while (number <100) {
//     number ++;
//     if (number%2 !== 0)     console.log(number);
// }

//O segundo conjunto de codigos é para mostrar todos os números pares de 1 até 100.
// let numberPositivo = 0;
// while (numberPositivo < 100) {
//     numberPositivo ++;
//     if (numberPositivo%2 === 0)     console.log(numberPositivo);
// }

// O terceiro conjunto de codigos é para mostrar todos os números pares e ímpares 
// let numInteiro = 0;

// while (numInteiro < 100) {
//     numInteiro ++;
//     console.log(numInteiro);
// }


//n terminei
function media(alunos,notas){
    while(notas < alunos){
        notas++
    }
    return notas / alunos
}

let result = media(20,5);
console.log(result);