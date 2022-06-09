let x=5;
let y = x++ + ++x;
console.log("y=" +y);
x=3;
y=x*(x+1)*x++;
x=5;
y=3;
y*= x+1;
console.log("x="+ x);
console.log("y="+ y);

function soletrar(texto){
    console.log(texto.replace('-','').toLocaleUpperCase().split("").join("-"));
}

soletrar("digital-house");
soletrar("ctd");


var z=0;
for(var i=20; i<50; i+=10){
    z+=i;
}

console.log("zzzz=",z);

for(var i=0; i<50; i+=10){
    console.log("S",i);
}
console.log("i",i);

function soma(a=1, b=3)
{return a+b;}

console.log(soma());
console.log(soma(3));
console.log(soma(1,2));

let xx=50;
let resto=50%2;
resposta = resto==0 ? 'Par' : 'Impar';
console.log(resposta);


let teste = 10;
if(teste <4){
  resultado = "Bom dia"
}


let valor = 5;
let fatorial = 1;
for(let i = valor; i > 1; i--){
    fatorial*=i;
}
console.log("Fatorial ="+ fatorial);