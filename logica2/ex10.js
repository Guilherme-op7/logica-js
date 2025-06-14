import prompt from 'prompt-sync';
let ler = prompt();

console.log('Seja bem vindo a Lanchonete do frei!');

console.log('Digite quantos salgados voce vai querer: ');
let salgados = Number(ler());

console.log('Digite quantos sucos voce vai querer: ');
let sucos = Number(ler());

console.log('Digite qual a quantidade de doces voce vai querer: ');
let doces = Number(ler());

let valor = (salgados * 8) + (sucos * 4) + (doces * 6);

console.log(`O valor total da sua compra é de R$ ${valor}`);