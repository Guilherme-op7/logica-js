import prompt from 'prompt-sync';
let ler = prompt();

console.log('Seja bem vindo ao programa da febre!');

console.log('Qual a temperatura da pessoa? ');
let temp = Number(ler());

if (temp > 37.2) {
    console.log('Esta com febre!')
}

else if (temp < 37.2) {
    console.log('Nao esta com febre!')
}