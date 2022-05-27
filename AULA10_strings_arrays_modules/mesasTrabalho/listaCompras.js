console.log('Programação Imperativa: AULA 10 - STRINGS E ARRAYS');

console.log('Mesa de Trabalho: Listas de Compras - Trabalhando com métodos de arrays[]');

let produtos = ['frango', 'jujuba', 'alface', 'feijao', 'arroz'];

let metodoJoin = produtos.join('',produtos);

console.log('O método JOIN retorna uma string com os elementos unidos caso não passe nada como separador, é possivel passar no primeiro parametro -,;, o que for interessante para a operação: ', metodoJoin);


let metodoPop = produtos.pop();
console.log('O método pop elimina o ULTIMO elemento do array, NÃO recebe parâmetros, e retorna o elemento ELIMINADO!!!: ', metodoPop);

let metodoPush = produtos.push('brocolis');

console.log('No método push, é possivel inserir um elemento na ultima posição do array, e ele retorna o length deste array', metodoPush);
console.log('aqui retorna o novo array, após a adição do ultimo elemento, por meio do metodo push', produtos);

let metodoShift = produtos.shift();
console.log('No método shift, é possivel eliminar o PRIMEIRO elemento do array, e o seu retorno é do elemento eliminado. NÃO é preciso passar parâmetro!',metodoShift);

let metodoUnshift = produtos.unshift('gelatina', 'cenoura');
console.log('O método unshift nos permite adicionar elementos no INICIO do array, e ele retorna o tamanho/lenght do array', metodoUnshift);
console.log(produtos);

let metodoLength = produtos.length;
console.log('LENGTH: ',metodoLength);
