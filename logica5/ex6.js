import prompt from 'prompt-sync';
let ler = prompt();

console.log("Digite o curso (SI, ADS, CS, EC ou ES):");
let curso = ler().toUpperCase();

console.log("O aluno é isento? (true ou false):");
let isento = ler();
let isentoBoolean = (isento == "true");

console.log("Digite o percentual de desconto (exemplo: 50 para 50%):");
let desconto = parseFloat(ler());

let valor = 0;

if (curso == "SI") {
    valor = 550;
} else if (curso == "ADS") {
    valor = 750;
} else if (curso == "CS") {
    valor = 1150;
} else if (curso == "EC") {
    valor = 1300;
} else if (curso == "ES") {
    valor = 950;
}

if (isentoBoolean) {
    valor = 0;
} else {
    valor = valor - (valor * (desconto / 100));
}

console.log(valor);
