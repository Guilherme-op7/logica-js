import prompt from 'prompt-sync';
let ler = prompt();

console.log('Seja bem vindo ao programa da compra online');

console.log('Digite o valor total do produto: ');
let produto = Number(ler());

console.log('Digite a quantidade de parcelas: ');
let parcelas = Number(ler());

console.log('Digite o valor do desconto: ')
let desconto = Number(ler());

let valor = (produto / parcelas) - desconto

console.log(`O valor final da compra com o desconto é de R$ ${valor}`);