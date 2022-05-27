const microondas = (comida,segundos) =>{ 

    if(comida !== 'pipoca' && comida !== 'macarrao' && comida !== 'carne' && comida !== 'feijao' && comida !== 'brigadeiro') console.log('Prato inexistente!');

    const pipocaTempoPadrao = 10;
    const macarraoTempoPadrao = 8;
    const carneTempoPadrao = 15;
    const feijaoTempoPadrao = 12;
    const brigadeiroTempoPadrao = 8;

    if (comida === "pipoca" && segundos === pipocaTempoPadrao) {
        return console.log("Prato pronto, bom apetite!");
    } else if (comida === "pipoca" && segundos >= pipocaTempoPadrao * 3) {
        return console.log("Kabum");
    } else if (comida === "pipoca" && segundos >= pipocaTempoPadrao * 2) {
        return console.log("a comida queimou");
    } else if (comida === "pipoca" && segundos < pipocaTempoPadrao) {
        return console.log("tempo insuficiente");
    }

    if (comida === "carne" && segundos === carneTempoPadrao) {
        return console.log("Prato pronto, bom apetite!");
    } else if (comida === "carne" && segundos >= carneTempoPadrao * 3) {
        return console.log("Kabum");
    } else if (comida === "carne" && segundos >= carneTempoPadrao * 2) {
        return console.log("a comida queimou");
    } else if (comida === "carne" && segundos < carneTempoPadrao) {
        return console.log("tempo insuficiente");
    }

    if (comida === "macarrao" && segundos === macarraoTempoPadrao) {
        return console.log("Prato pronto, bom apetite!");
    } else if (comida === "macarrao" && segundos >= macarraoTempoPadrao * 3) {
        return console.log("Kabum");
    } else if (comida === "macarrao" && segundos >= macarraoTempoPadrao * 2) {
        return console.log("a comida queimou");
    } else if (comida === "macarrao" && segundos < macarraoTempoPadrao) {
        return console.log("tempo insuficiente");
    }

    if (comida === "feijao" && segundos === feijaoTempoPadrao) {
        return console.log("Prato pronto, bom apetite!");
    } else if (comida === "feijao" && segundos >= feijaoTempoPadrao * 3) {
        return console.log("Kabum");
    } else if (comida === "feijao" && segundos >= feijaoTempoPadrao * 2) {
        return console.log("a comida queimou");
    } else if (comida === "feijao" && segundos < feijaoTempoPadrao) {
        return console.log("tempo insuficiente");
    }

    if (comida === "brigadeiro" && segundos === brigadeiroTempoPadrao) {
        return console.log("Prato pronto, bom apetite!");
    } else if (comida === "brigadeiro" && segundos >= brigadeiroTempoPadrao * 3) {
        return console.log("Kabum");
    } else if (comida === "brigadeiro" && segundos >= brigadeiroTempoPadrao * 2) {
        return console.log("a comida queimou");
    } else if (comida === "brigadeiro" && segundos < brigadeiroTempoPadrao) {
        return console.log("tempo insuficiente");
    }
}

microondas("pipoca",30);
