import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite uma frase para ser soletrada:');
let frase = ler();

let contador = 1;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] === ' ') {
        console.log(`Espaço`);
    } else {
        console.log(`${contador}º caractere: ${frase[i]}`);
        contador++;
    }
}
