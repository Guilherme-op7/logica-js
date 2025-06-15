import prompt from 'prompt-sync';
let ler = prompt();

console.log('Vamos escrever o mes por extenso, sabendo que o mes começa em janeiro como dia 1');
let dia = Number(ler());

if (dia == 1) {
    console.log('Janeiro')
}
else if (dia == 2) {
    console.log('Fevereiro')
}
else if (dia == 3) {
    console.log('Março')
}
else if (dia == 4) {
    console.log('Abril')
}
else if (dia == 5) {
    console.log('Maio')
}
else if (dia == 6) {
    console.log('Junho')
}
else if (dia == 7) {
    console.log('Julho')
}
else if (dia == 8) {
    console.log('Agosto')
}
else if (dia == 9) {
    console.log('Setembro')
}
else if (dia == 10) {
    console.log('Outubro')
}
else if (dia == 11) {
    console.log('Novembro')
}
else if (dia == 12) {
    console.log('Dezembro')
}

else {
    console.log('Mes invalido!')
}