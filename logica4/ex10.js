import prompt from 'prompt-sync';
let ler = prompt();

console.log("Digite o dia:");
let dia = parseInt(ler());

console.log("Digite o dia da semana (0 = Domingo, 1 = Segunda, ..., 6 = Sábado):");
let diaSemanaNum = parseInt(ler());

console.log("Digite o mês (1 a 12):");
let mesNum = parseInt(ler());

console.log("Digite o ano:");
let ano = parseInt(ler());

let diaSemana = "";
if (diaSemanaNum == 0) {
    diaSemana = "Domingo";
} else if (diaSemanaNum == 1) {
    diaSemana = "Segunda";
} else if (diaSemanaNum == 2) {
    diaSemana = "Terça";
} else if (diaSemanaNum == 3) {
    diaSemana = "Quarta";
} else if (diaSemanaNum == 4) {
    diaSemana = "Quinta";
} else if (diaSemanaNum == 5) {
    diaSemana = "Sexta";
} else if (diaSemanaNum == 6) {
    diaSemana = "Sábado";
}

let mes = "";
if (mesNum == 1) {
    mes = "Janeiro";
} else if (mesNum == 2) {
    mes = "Fevereiro";
} else if (mesNum == 3) {
    mes = "Março";
} else if (mesNum == 4) {
    mes = "Abril";
} else if (mesNum == 5) {
    mes = "Maio";
} else if (mesNum == 6) {
    mes = "Junho";
} else if (mesNum == 7) {
    mes = "Julho";
} else if (mesNum == 8) {
    mes = "Agosto";
} else if (mesNum == 9) {
    mes = "Setembro";
} else if (mesNum == 10) {
    mes = "Outubro";
} else if (mesNum == 11) {
    mes = "Novembro";
} else if (mesNum == 12) {
    mes = "Dezembro";
}

console.log(`Enviado ${diaSemana}, ${dia} de ${mes} de ${ano}`);