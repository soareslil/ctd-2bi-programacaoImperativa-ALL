function contaBancaria(numConta, tipoConta, saldo, titular) {
  this.numConta = numConta;
  this.tipoConta = tipoConta;
  this.saldo = saldo;
  this.titular = titular;
}

const abigael = new contaBancaria(
  '5486273622',
  "Conta Corrente",
  27771,
  "Abigael Natte"
);
// console.log(abigael);

const ramon = new contaBancaria(
  '1183971869',
  "Conta Poupança",
  8675,
  "Ramon Connell"
);
// console.log(ramon);

const jarret = new contaBancaria(
  '9582019689',
  "Conta Poupança",
  27363,
  "Jarret Lafuente"
);
// console.log(jarret);

const ansel = new contaBancaria(
  '1761924656',
  "Conta Poupança",
  32415,
  "Ansel Ardley"
);
// console.log(ansel);

const jacki = new contaBancaria(
  '7401971607',
  "Conta Poupança",
  18789,
  "Jacki Shurmer"
);
// console.log(jacki);

const jobi = new contaBancaria(
  '630841470',
  "Conta Corrente",
  28776,
  "Jobi Mawtus"
);
// console.log(jobi);

const thomasin = new contaBancaria(
  '4223508636',
  "Conta Corrente",
  2177,
  "Thomasin Latour"
);
// console.log(thomasin);

const lonnie = new contaBancaria(
  '185979521',
  "Conta Poupança",
  25994,
  "Lonnie Verheijden"
);
// console.log(lonnie);

const alonso = new contaBancaria(
  '3151956165',
  "Conta Corrente",
  7601,
  "Alonso Wannan"
);
// console.log(alonso);

const benedite = new contaBancaria(
  '2138105881',
  "Conta Poupança",
  33196,
  "Bendite Huggett"
);
// console.log(benedite);

// let listaObjts = Object.keys(benedite).map(function(index){
//     return benedite[index]
// })
// console.log(listaObjt);

// function listaArrayObjt(array) {
//   let resultado = [];
//   for (let index = 0; index < array.length; index++) {
//     resultado.push(array[index]);
//   }
//   return resultado;
// }

// const resListArrObj = listaArrayObjt([
//   abigael,
//   ramon,
//   jarret,
//   ansel,
//   jacki,
//   jobi,
//   thomasin,
//   lonnie,
//   alonso,
//   benedite,
// ]);
// console.log('aqui',resListArrObj);

const listaClientes = [
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
  clientes: listaClientes,
  cadastrarCliente(numConta, tipoConta, saldo, titular){
    let cliente = new contaBancaria(numConta, tipoConta, saldo, titular);
    this.clientes.push(cliente);
  },
  consultarCliente(titular) {
    for (let i = 0; i < this.clientes.length; i++) {
      const cliente = this.clientes[i];
      if (cliente.titular === titular) {
        console.log('cliente encontrado:  '+ cliente.titular)
        return cliente;
      }
    }
    console.log('Cliente não encontrado!');
  },
  deposito(titular,valorDeposito){
    let cliente = this.consultarCliente(titular);
    if(cliente){
    cliente.saldo += valorDeposito;
    console.log('Deposito realizado, seu novo saldo é:  ' + cliente.saldo);
    }else{
   console.log('deposito nao pode ser realizado');
  }
},



// Crie outro método chamado depósito que receberá como parâmetros, 
// o titular da conta e uma quantidade de dinheiro para depositar.
//  O método deve chegar à conta correspondente e, em seguida, adicionar 
//  a quantidade de dinheiro para depositar o saldo da conta, então você deve
//   dar um aviso pelo console com a mensagem "Depósito realizado, seu novo saldo é: xxx" .
