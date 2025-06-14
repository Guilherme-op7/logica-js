import prompt from 'prompt-sync'
let ler = prompt();

console.log("programa de boas vindas!");

console.log("Digite seu nome: ");
let nome = ler();

console.log(`Olá ${nome}! Seja bem vindo ao nosso programa!`)