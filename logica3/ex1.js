import prompt from 'prompt-sync';
let ler = prompt();

console.log('Seja bem vindo ao programa da compra: ');

console.log('Digite o valor da compra: ');
let valor = Number(ler());

console.log('Digite o valor do desconto: ');
let desconto = Number(ler());

let total = valor - desconto;

console.log(`Compra finalizada! O total é de R$ ${total}`);

