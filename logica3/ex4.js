import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite quantos reais voce quer converter para dolar: ');
let reais = Number(ler());

let conversao = reais * 5.16;

console.log(conversao);