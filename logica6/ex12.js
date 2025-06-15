import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite a altura do triângulo:');
let altura = Number(ler());

for (let i = 1; i <= altura; i++) {
    let linha = '';
    for (let j = 1; j <= i; j++) {
        linha += '*';
    }
    console.log(linha);
}
