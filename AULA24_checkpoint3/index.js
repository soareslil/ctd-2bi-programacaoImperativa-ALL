function aluno(nome, quantidadeFaltas, notas) {

    this.nome = nome;
    this.quantidadeFaltas = quantidadeFaltas;
    this.notas = notas;

    this.calculaMedia = function () {
        const arr = this.notas;
        const average = arr.reduce((a, b) => a + b, 0) / arr.length;
        return average;
    }

    this.faltas = function () {
        return this.quantidadeFaltas += 1;
    }
}

const benedite = new aluno(
    "Bendite Huggett",
    0,
    [6, 2, 1]
);

let benediteMedia = benedite.calculaMedia();

let benediteFaltas = benedite.faltas();
benediteFaltas = benedite.faltas();

const camila = new aluno(
    "Camila Monaco",
    5,
    [6, 8, 6]
);

const liliane = new aluno(
    "Liliane Soares",
    8,
    [10, 10, 9]
);

const listaAlunos = [benedite, camila, liliane];


let curso = {
    nomeDoCurso: "Certified Tech Developer",
    notaDeAprovacao: 6,
    faltasMaximas: 5,
    listaDeEstudantes: listaAlunos,
    adicionarAluno(nome, quantidadeFaltas, notas) {
        let alunoInsert = new aluno(nome, quantidadeFaltas, notas);
        this.listaDeEstudantes.push(alunoInsert);
    },
    verificaAprovacaoIndividual(estudante) {
        let media = estudante.calculaMedia();
        let mediaComAjuste = this.notaDeAprovacao + this.notaDeAprovacao * 0.10;

        if (media >= this.notaDeAprovacao && estudante.quantidadeFaltas < this.faltasMaximas) {
            return true
        } else if ((media >= mediaComAjuste) && estudante.quantidadeFaltas == this.faltasMaximas) {
            return true
        } else {
            return false
        }
    },
    verificaAprovacaoColetiva() {
        let resultado = [];
        for (let i = 0; i < this.listaDeEstudantes.length; i++) {
            resultado.push(this.verificaAprovacaoIndividual(this.listaDeEstudantes[i]));
        }
        return resultado
    }
};

let testandoAprovacaoGeral = curso.verificaAprovacaoColetiva();

const testandoAddAluno = curso.adicionarAluno("Pedro Luiz", 0, [4,7,6]);

let testandoVerificaAprovacaoIndividual = curso.verificaAprovacaoIndividual(liliane);
