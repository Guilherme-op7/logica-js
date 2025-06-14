import prompt from 'prompt-sync';
let ler = prompt();

console.log('Seja bem vindo ao programa do açai!')

console.log('Digite a quantidade de voce quer: ')
let p = Number(ler())

let preco = p * 18.50;

console.log(`O preço da sua compra é de ${preco} `);


