import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite um numero para calcularmos a metade dele: ');
let num = Number(ler());

let metade = num / 2;

console.log(`A metade de ${num} é igual a ${metade}`);