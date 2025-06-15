import prompt from 'prompt-sync';
let ler = prompt();

let n1 = parseFloat(ler());
let n2 = parseFloat(ler());
let operacao = ler();

let resultado;

if (operacao == "Soma") {
    resultado = n1 + n2;
} else if (operacao == "Subtração") {
    resultado = n1 - n2;
} else if (operacao == "Multiplicação") {
    resultado = n1 * n2;
} else if (operacao == "Divisão") {
    resultado = n1 / n2;
} else if (operacao == "Resto da Divisão") {
    resultado = n1 % n2;
} else if (operacao == "Potência") {
    resultado = Math.pow(n1, n2);
} else {
    console.log("Operação não suportada");
    resultado = null;
}

if (resultado != null) {
    console.log("Resultado é " + resultado);
}
