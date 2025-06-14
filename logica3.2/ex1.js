import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite sua temperatura corporal: ');
let temp = Number(ler());

if(temp > 37.3) {
    console.log('Voce esta com febre!')
}

else if(temp < 37.3) {
    console.log('Voce nao esta com febre!')
}