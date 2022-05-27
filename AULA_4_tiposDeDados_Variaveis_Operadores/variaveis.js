var conceitoVar =
  "a variavel do tipo var é global, ou seja, pode ser declarado duas vezes, e com isso alterar o valor da variavel";
// console.log(conceitoVar);
conceitoVar =
  "Também é possivel alterar o valor contido na variavel do tipo var";
// console.log(conceitoVar);

let conceitoLet =
  "as variaveis do tipo let pertencem ao bloco de execução contido entre chaves.Ou seja, NÃO é possivel declarar duas variaveis do tipo let com o mesmo nome, mas o valor da let criada pode ser alterado assim como na var!";
// console.log(conceitoLet);
conceito =
  "alterando o valor contido em let conceito. A variavel let aqui é global";
// console.log(conceitoLet);

if (true) {
  let conceitoLet =
    "É possivel trabalhar com o mesmo nome de variavel do tipo let desde que em blocos de codigos diferentes. Aqui é local";
//   console.log(conceitoLet);
}

const conceitoConst =
  "variaveis do tipo constantes nao podem mudar de valor, ou seja, o valor dela é fixo!";
  console.log(conceitoConst);
// conceitoConst = "será que muda?"; da erro!
