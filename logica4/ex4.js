import prompt from 'prompt-sync';
let ler = prompt();

console.log('Vamos escrever o dia da semana por extenso, sabendo que a semana começa no domingo como dia 0');
let dia = Number(ler());

if (dia == 0) {
    console.log('Domingo')
}
else if (dia == 1) {
    console.log('Segunda')
}
else if (dia == 2) {
    console.log('Terça')
}
else if (dia == 3) {
    console.log('Quarta')
}
else if (dia == 4) {
    console.log('Quinta')
}
else if (dia == 5) {
    console.log('Sexta')
}
else if (dia == 6) {
    console.log('Sabado')
}

else {
    console.log('Dia da semana invalido!')
}