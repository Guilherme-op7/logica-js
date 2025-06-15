import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite um numero de inicio: ');
let inicio = Number(ler());

console.log('Digite um numero de fim: ');
let fim = Number(ler());

for (let c = inicio; c <= fim; c++) {
    if(c % 2 == 0) {
        console.log(c)
    }
}