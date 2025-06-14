import prompt from 'prompt-sync';
let ler = prompt();

console.log('Seja bem vindo ao programa do Dobro: ');

console.log('Digite um numero para calcularmos o dobro dele: ');
let dobro = Number(ler());

let dobroo = dobro * 2;

console.log(`O dobro de ${dobro} é igual a ${dobroo}`)