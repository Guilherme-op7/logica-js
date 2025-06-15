import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite a cor do semaforo: (vermelho ou verde) ');
let cor = ler();

if (cor == 'verde') {
    console.log('Atravesse')
}

else if (cor == 'vermelho') {
    console.log('Espere')
}

else {
    console.log('Farol inoperante')
}
