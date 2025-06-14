import prompt from 'prompt-sync';
let ler = prompt();

console.log("Seja bem vindo a açaiteria");

console.log('Digite a quantidade de açais pequenos: ');
let qtdp = Number(ler());
console.log('Digite a quantidade de açais medios: ');
let qtdm = Number(ler());
console.log('Digite a quantidade de açais grandes: ');
let qtdg = Number(ler());

let preco = (qtdp * 13) + (qtdm * 15) + (qtdg * 17.50);

console.log(`O preço total a se pagar pelos açais são de: ${preco} `)