import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite sua temperatura corporal em graus Celsius:');
let temperatura = parseFloat(ler());

let situacao = '';

if (temperatura < 36) {
    situacao = 'Hipotermia';
} else if (temperatura >= 36 && temperatura <= 37.5) {
    situacao = 'Normal';
} else if (temperatura > 37.5 && temperatura <= 38.5) {
    situacao = 'Febre Leve';
} else if (temperatura > 38.5 && temperatura <= 39.5) {
    situacao = 'Febre Moderada';
} else if (temperatura > 39.5) {
    situacao = 'Hipertermia';
} else {
    situacao = 'Temperatura inválida';
}

console.log(`A situação para sua temperatura é ${situacao}`);
