import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite um numero para calcularmos o dobro dele: ');
let nome = Number(ler());

let dobro = nome * 2;

console.log(`O dobro de ${nome} é igual a ${dobro}`);