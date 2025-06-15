import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite a base do retângulo:');
let base = Number(ler());

console.log('Digite a altura do retângulo:');
let altura = Number(ler());

for (let i = 0; i < altura; i++) {
    let linha = '';
    for (let j = 0; j < base; j++) {
        linha += '*';
    }
    console.log(linha);
}