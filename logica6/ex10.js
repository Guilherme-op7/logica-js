import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite uma frase aleatoria para ser soletrada: ');
let frase = ler();

for(let c = 0; c < frase.length; c++) {
    console.log(frase[c])
}