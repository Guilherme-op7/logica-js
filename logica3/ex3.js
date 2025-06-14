import prompt from 'prompt-sync';
let ler = prompt();

console.log('Conversao de kilos para gramas');

console.log('Digite quantos kilos voce deseja converter: ');
let kg = Number(ler());

let conversao = kg * 1000

console.log(conversao)