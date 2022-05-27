console.log('trabalhando com modules');

const superheroes = require('./superheroes');

const fs = require('fs');

let moment = require('moment');

let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8');

let data = moment().format('DD MM YY')

console.log(superheroes);