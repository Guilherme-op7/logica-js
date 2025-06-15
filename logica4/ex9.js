import prompt from 'prompt-sync';
let ler = prompt();

console.log("Digite sua altura (em metros):");
let altura = parseFloat(ler());

console.log("Digite seu peso (em kg):");
let peso = parseFloat(ler());

let imc = peso / (altura * altura);
let classificacao = "";

if (imc >= 40) {
    classificacao = "Obesidade Grau III";
} else if (imc >= 35) {
    classificacao = "Obesidade Grau II";
} else if (imc >= 30) {
    classificacao = "Obesidade Grau I";
} else if (imc >= 25) {
    classificacao = "Sobrepeso";
} else if (imc >= 18.5) {
    classificacao = "Peso Normal";
} else {
    classificacao = "Abaixo do Peso";
}

console.log(`Seu IMC é ${imc}`);
console.log(`Sua classificação é ${classificacao}`);
