import prompt from 'prompt-sync';
let ler = prompt();

console.log('Vamos calcular uma media de 3 notas: ');

console.log('Digite o primeiro numero: ');
let num = Number(ler());
console.log('Digite o segundo numero: ');
let num2 = Number(ler());
console.log('Digite o terceiro numero: ');
let num3 = Number(ler());

let media = (num + num2 + num3) / 3;

console.log(`A média final é de ${media}`);