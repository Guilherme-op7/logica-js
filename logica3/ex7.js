import prompt from 'prompt-sync';
let ler = prompt();

console.log('Seja bem vindo a nossa loja!');

console.log('Digite a quantidade de açai que voce deseja comprar: ');
let qtd = Number(ler());

let valor = qtd * 13.50;

console.log(`O valor final da compra foi de: ${valor}!`);