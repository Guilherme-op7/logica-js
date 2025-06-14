import prompt from 'prompt-sync';
let ler = prompt();

console.log('Seja bem vindo ao programa da media: ');

console.log('Digite a primeira nota: ')
let n1 = Number(ler())
console.log('Digite a segunda nota: ')
let n2 = Number(ler())
console.log('Digite a terceira nota: ')
let n3 = Number(ler());

let div = (n1 + n2 + n3) / 3;

console.log(`A media final é de é ${div}`)