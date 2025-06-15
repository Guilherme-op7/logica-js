import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite as três notas do aluno:');

let nota1 = parseFloat(ler('Primeira nota: '));
let nota2 = parseFloat(ler('Segunda nota: '));
let nota3 = parseFloat(ler('Terceira nota: '));

let media = (nota1 + nota2 + nota3) / 3;


console.log(`A média do aluno é ${media}`);

if (media === 0) {
    console.log('Situação: Desistente');
} else if (media < 3) {
    console.log('Situação: Reprovado');
} else if (media >= 3 && media < 6) {
    console.log('Situação: Recuperação');
} else if (media >= 6 && media < 8) {
    console.log('Situação: Aprovado');
} else if (media >= 8) {
    console.log('Situação: Aprovado com Sucesso');
}
