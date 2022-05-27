// let pais = {
//     nome: 'brasil',
//     capital: 'brasilia',
//     estados: 27
// };

// console.log(pais['nome']);

// console.log('a capital do ' + pais.nome, 'é', pais.capital);]


// let carro = {
//     marca: '',
//     modelo: '',
// };

// let carroes = {
//     marca: 'hi',
//     modelo: '',
// }

function Xablaus(coisa,outra, aleatorio){
    this.marcax = coisa;
    this.modeloy = outra;
    this.anox = aleatorio;
}
console.log('essa é a instancia que juntou o objeto com a função', new Xablaus('volks', 'gol', 2020));