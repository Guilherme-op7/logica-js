import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite o valor total de compras: ');
let total = Number(ler());

console.log('Digite a quantidade de parcelas: ');
let parcelas = Number(ler());

let totall = total / parcelas

console.log(`Sua compra de R$${total} em ${parcelas}x de R$ ${totall} foi concluida `)