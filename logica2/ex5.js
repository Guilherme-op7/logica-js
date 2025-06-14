import prompt from 'prompt-sync';
let ler = prompt();

console.log('Seja bem vindo ao programa da multiplicação: ');

console.log('Digite o primeiro numero: ')
let n1 = Number(ler());

console.log('Digite o segundo numero: ');
let n2 = Number(ler());

let multi = n1 * n2;

console.log(`A multiplicação entre os dois numeros é igual a: ${multi}`)