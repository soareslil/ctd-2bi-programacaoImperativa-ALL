let pessoa = {
    nome: 'liliane',
    idade: 22,
    signo: 'escorpiao'
}

let json = JSON.stringify(pessoa);

console.log('esse é o stringfy:  ' , json);

let objetoLiteral = JSON.parse(json);

console.log('esse é o parse:  ', objetoLiteral);
console.log(objetoLiteral.nome);