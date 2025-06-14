import prompt from 'prompt-sync';
let ler = prompt();

console.log('Seja bem vindo ao programa da subtração!');

console.log('Digite o primeiro numero: ');
let num1 = Number(ler());

console.log('Digite o segundo numero: ');
let num2 = Number(ler());

let sub = num1 - num2;

console.log(`A subtração dos dois numeros é igual a: ${sub}`)