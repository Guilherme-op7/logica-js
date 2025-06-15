import prompt from 'prompt-sync';
let ler = prompt();

console.log('Seja bem vindo ao cinema!');

console.log('Informe o tipo de ingresso (meia ou inteira): ');
let tipo = ler();

console.log('Agora informe a quantidade: ');
let qtd = Number(ler());

if (tipo == 'meia') {
    let valor = qtd * 14.25;
    console.log(`O total a se pagar é de R$ ${valor}`)
}

else if (tipo == 'inteira') {
    let valor = qtd * 28.50;
    console.log(`O total a se pagar é de R$ ${valor}`)
}

else {
    console.log('Tipo de ingresso invalido!')
}