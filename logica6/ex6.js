import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe um numero: ');
let n = Number(ler());

for(let c = 1; c <= n; c++) {
    process.stdout.write('*')
}