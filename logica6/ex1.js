import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite um numero a ser contado: ');
let n = Number(ler());

for (let c = 1; c <= n; c++) {
    console.log(c)
}