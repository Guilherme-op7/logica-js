import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite o diametro do primeiro cilindro: ')
let d1 = Number(ler());
console.log('Digite a altura do primeiro cilindro: ')
let a1 = Number(ler());

console.log('Digite o diametro do primeiro cilindro: ')
let d2 = Number(ler());
console.log('Digite a altura do primeiro cilindro: ')
let a2 = Number(ler());

let r1 = d1 / 2;
let volume1 = PI * r1 * r1 * a1;

let r2 = d2 / 2;
let volume2 = PI * r2 * r2 * a2;

console.log(`Volume do primeiro cilindro: ${volume1} unidades cúbicas`);
console.log(`Volume do segundo cilindro: ${volume2} unidades cúbicas`);

if (volume1 <= volume2) {
  console.log('É possível transferir o volume do primeiro cilindro para o segundo.');
} else {
  console.log('Não é possível transferir o volume do primeiro cilindro para o segundo.');
}