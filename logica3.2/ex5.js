import prompt from 'prompt-sync';
let ler = prompt();

console.log('Quem é o maior idolo do gremio?')
let resposta = ler();

if(resposta == 'renato gaucho') {
    console.log('Resposta correta!')
}

else {
    console.log('Resposta incorreta!')
}