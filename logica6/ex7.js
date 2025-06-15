import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite um numero para fazer um quadrado');
let q = Number(ler());

for(let c = 1; c <= q; c++) {
    for(let col = 1; col <= q; col++) {
        process.stdout.write('*')
    }
    process.stdout.write(`\n`)
}