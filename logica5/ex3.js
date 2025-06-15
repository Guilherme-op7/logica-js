import prompt from 'prompt-sync';
let ler = prompt();

let nota1 = parseFloat(ler());
let nota2 = parseFloat(ler());
let nota3 = parseFloat(ler());
let faltas = parseInt(ler());

let media = (nota1 + nota2 + nota3) / 3;
let situacao = "";

if (faltas > 30) {
    situacao = "Reprovado";
} else if (media == 0) {
    situacao = "Desistente";
} else if (media < 3) {
    situacao = "Reprovado";
} else if (media < 6) {
    situacao = "Recuperação";
} else if (media < 8) {
    situacao = "Aprovado";
} else {
    situacao = "Aprovado com Sucesso";
}

console.log("Situação do Aluno: " + situacao);
