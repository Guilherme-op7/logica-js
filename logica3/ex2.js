import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite o valor total da compra: ');
let total = Number(ler());

console.log('Digite o valor total do desconto em porcentagem: ');
let desconto = Number(ler());

let valor = (total * desconto) / 100;
let totall = total - valor

console.log(`Compra finalizada! o total é de ${totall}`)