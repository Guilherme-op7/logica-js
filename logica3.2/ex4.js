import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite um numero para verificar se é par: ');
let n1 = Number(ler());

if (n1 % 2 === 0) {
    console.log('é par')
}

else {
    console.log('Nao é par!')
}