import prompt from 'prompt-sync';
let ler = prompt();

let inteiras = parseInt(ler());
let meias = parseInt(ler());
let diaSemana = ler().toLowerCase();
let nacional = ler().toLowerCase() == "true";

let total = 0;

if (nacional) {
    total = (inteiras + meias) * 5;
} else if (diaSemana == "quarta-feira") {
    total = (inteiras + meias) * 14.25;
} else {
    total = (inteiras * 28.50) + (meias * 14.25);
}

console.log(`O total a se pagar pelos ingressos é R$ ${total}`);
