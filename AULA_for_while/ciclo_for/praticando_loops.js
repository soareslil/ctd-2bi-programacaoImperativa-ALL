let hello = 'Hello World';

for (i = 0; i <=5; i ++){
    console.log('retorno:' + hello);
}

let array = [];

for (i=1; i<10; i  +=2){
    array.push(i);
}
console.log(array);

function tabuada(number){
    for( i =0; i <=10; i++){
        let result = i * number;
       console.log(result)
    }
}

const resultado = tabuada(9);