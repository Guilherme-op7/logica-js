import prompt from 'prompt-sync';
let ler = prompt();

console.log('Seja bem vindo ao programa da divisão!');

console.log("Digite um numero para fazer a divisao: ");
let n1 = Number(ler());

console.log("Digite o segundo numero para fazer a divisao: ");
let n2 = Number(ler());

let divisao = n1 / n2;

console.log(`A divisão dos dois numeros resulta em: ${divisao}`)