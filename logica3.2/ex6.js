import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite a cor do semaforo: ');
let cor = ler();

if (cor == 'verde') {
    console.log('Pode atravessar!')
}

else if (cor == 'vermelho') {
    console.log('Nao pode atravessar!')
}