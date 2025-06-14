import prompt from 'prompt-sync';
let ler = prompt();

console.log('Seja bem vindo a livraria!');

console.log('Quantas paginas tem o seu livro? ');
let paginas = Number(ler());

console.log('Digite quanto voce leva para ler uma pagina do livro: ');
let temp = Number(ler());

let total = paginas * temp;
let t = total / 60

console.log(`O tempo total é de ${t} horas`);