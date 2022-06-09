function contaBancaria(numConta, tipoConta, saldo, titular) {
  this.numConta = numConta;
  this.tipoConta = tipoConta;
  this.saldo = saldo;
  this.titular = titular;
}

const abigael = new contaBancaria(
  5486273622,
  "Conta Corrente",
  27771,
  "Abigael Natte"
);
// console.log(abigael);

const ramon = new contaBancaria(
  1183971869,
  "Conta Poupança",
  8675,
  "Ramon Connell"
);
// console.log(ramon);

const jarret = new contaBancaria(
  9582019689,
  "Conta Poupança",
  27363,
  "Jarret Lafuente"
);
// console.log(jarret);

const ansel = new contaBancaria(
  1761924656,
  "Conta Poupança",
  32415,
  "Ansel Ardley"
);
// console.log(ansel);

const jacki = new contaBancaria(
  7401971607,
  "Conta Poupança",
  18789,
  "Jacki Shurmer"
);
// console.log(jacki);

const jobi = new contaBancaria(
  630841470,
  "Conta Corrente",
  28776,
  "Jobi Mawtus"
);
// console.log(jobi);

const thomasin = new contaBancaria(
  4223508636,
  "Conta Corrente",
  2177,
  "Thomasin Latour"
);
// console.log(thomasin);

const lonnie = new contaBancaria(
  185979521,
  "Conta Poupança",
  25994,
  "Lonnie Verheijden"
);
// console.log(lonnie);

const alonso = new contaBancaria(
  3151956165,
  "Conta Corrente",
  7601,
  "Alonso Wannan"
);
// console.log(alonso);

const benedite = new contaBancaria(
  2138105881,
  "Conta Poupança",
  33196,
  "Bendite Huggett"
);
// console.log(benedite);

// let listaObjts = Object.keys(benedite).map(function(index){
//     return benedite[index]
// })
// console.log(listaObjt);

function listaArrayObjt(array) {
  let resultado = [];
  for (let index = 0; index < array.length; index++) {
    resultado.push(array[index]);
  }
  return resultado;
}

const resListArrObj = listaArrayObjt([
  abigael,
  ramon,
  jarret,
  ansel,
  jacki,
  jobi,
  thomasin,
  lonnie,
  alonso,
  benedite,
]);
// console.log('aqui',resListArrObj);

const listaCli = [
  abigael,
  ramon,
  jarret,
  ansel,
  jacki,
  jobi,
  thomasin,
  lonnie,
  alonso,
  benedite,
];

let banco = {
  clientes: listaCli,
  consultarCliente(titular) {
    let resultado = [];
    for (let i = 0; i < this.clientes.length; i++) {
      let titularBuscado = this.clientes[i].titular;
      if (titularBuscado === titular) {
        return this.clientes[i];
      }
    }
    return resultado;
  },
};

console.log("ObjtBanco + array", banco.consultarCliente("Alonso Wannan"));
