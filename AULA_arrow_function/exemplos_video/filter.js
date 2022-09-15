let idades = [1,2,10,15,39,18,23,10];

let maiores = idades.filter(function(umaIdade){
    return umaIdade >=18;
})

console.log('retorno dos maiores de idade:', maiores);

let listaFiltrados = idades.filter(function(valor,index){
    return valor > 6;
});
console.log('retorno dos num maiores que 6:', listaFiltrados);
