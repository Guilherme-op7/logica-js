import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite um numero de fim: ');
let fim = Number(ler());

console.log('Digite um numero de inicio: ');
let inicio = Number(ler());

for(let c = fim; c >= inicio; c--){

    console.log(c)
}
