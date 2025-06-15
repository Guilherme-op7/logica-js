import prompt from 'prompt-sync';
let ler = prompt();

let ganhos = parseFloat(ler());
let gastos = parseFloat(ler());

let percentual = (gastos / ganhos) * 100;
let mensagem = "";

if (gastos > ganhos) {
    mensagem = "Orçamento comprometido! Hora de rever seus gastos!";
} else if (percentual >= 81) {
    mensagem = "Cuidado, seu orçamento pode ficar comprometido!";
} else if (percentual >= 51) {
    mensagem = "Atenção, melhor conter os gastos!";
} else if (percentual >= 21) {
    mensagem = "Muito bem, seus gastos não ultrapassam metade dos ganhos!";
} else {
    mensagem = "Parabéns, está gerenciando bem seu orçamento!";
}

console.log(mensagem);
