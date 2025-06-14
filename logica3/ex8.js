import prompt from 'prompt-sync';
let ler = prompt();

console.log('Seja bem vindo a nossa loja!');

console.log('Digite a quantidade de açais pequenos voce quer')
let p = Number(ler())
console.log('Digite a quantidade de açais medios voce quer')
let m = Number(ler())
console.log('Digite a quantidade de açais grandes voce quer')
let g = Number(ler());

let total = (p * 13.50) + (m * 15.00) + (g * 17.50);

console.log(`O valor final da compra foi de: ${total}!`)