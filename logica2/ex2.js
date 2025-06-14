import prompt from 'prompt-sync';
let ler = prompt();

console.log('Seja bem vindo ao programa do triplo: ');

console.log('Digite um numero para calcularmos o triplo dele: ');
let triplo = Number(ler());

let calculo = triplo * 3;

console.log(`O triplo de ${triplo} é igual a ${calculo}`);