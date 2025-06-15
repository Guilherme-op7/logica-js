import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe o total de ganhos da sua familia: ');
let ganhos = Number(ler());

console.log('Informe o total de gastos da sua familia: ');
let gastos = Number(ler());

if(ganhos >= gastos) {
    console.log('Voce esta dentro do orçamento!')
}

else if (gastos > ganhos) {
    console.log('Voce esta fora do orçamento! Nao gaste mais!')
}