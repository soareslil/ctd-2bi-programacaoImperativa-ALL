function podeSubir(altura, acompanhada) {
  let alturaMinima = 1.4;
  let alturaInsuficiente = 1.2;
  let alturaMaxima = 2.0;

  if (altura > alturaMinima && altura < alturaMaxima) {
    console.log("Acesso Autorizado111!");
  } else if (altura <= alturaInsuficiente) {
    console.log(
      "Acesso negado, sua altura não é suficiente mesmo acompanhado!"
    );
  } else if (altura >= alturaMaxima) {
    console.log("Acesso negado, infelizmente você é muito alto!");
  } else if (altura <= alturaMinima && acompanhada == true) {
    console.log("Acesso Autorizado222!");
  } else {
    console.log("Acesso negado333!");
  }
}
podeSubir(1.50, false);
