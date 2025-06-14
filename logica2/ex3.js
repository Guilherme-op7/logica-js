import prompt from 'prompt-sync';
let ler = prompt();

console.log('Seja bem vindo ao programa da soma!');

console.log('Digite um numero para calcularmos a soma: ');
let num1 = Number(ler());

console.log('Digite o segundo numero para calcularmos a soma: ');
let num2 = Number(ler());

let soma = num1 + num2;

console.log(`A soma é igual a ${soma}`)