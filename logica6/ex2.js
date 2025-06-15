import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite um numero a ser contado ate 1: ');
let num = Number(ler());

for (let c = 1; c <= num; num--) {
    console.log(num)
}