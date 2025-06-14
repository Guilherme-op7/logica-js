import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite seu peso (em kg): ');
let p = Number(ler());

console.log('Digite sua altura (em metros): ');
let a = Number(ler());

let imc = p / (a * a);

console.log(`Seu IMC é: ${imc}`);

if (imc < 18.5) {
    console.log('Você está abaixo do peso.');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal.');
} else if (imc >= 25 && imc < 30) {
    console.log('Sobrepeso.');
} else {
    console.log('Obesidade.');
}
