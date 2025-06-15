import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe um numero para ver a tabuada');
let n = Number(ler());

for(let c = 1; c <= 10; c++) {
    console.log(`${n} x ${c} = ${n * c}`)
}