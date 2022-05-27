// let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];

// function maiuscula(arg){
//     for(let i = 0; i < arg.length; i++){
//         console.log(arg[i].toUpperCase())
//     }
// }
// maiuscula(filmes);

// let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];
// let filme = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

// function concat(arg, argm){
//    return array3 = arg.concat(argm);
// }
// const resulto = concat(filmes, filme);
// console.log(resulto)
// const removeUltimo = resulto.pop()
// console.log(removeUltimo);
// console.log(resulto)

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

const array1String = JSON.stringify(asiaScores);
const array2String = JSON.stringify(euroScores);
array1String === array2String ? console.log('true') : console.log('false')