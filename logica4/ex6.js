import prompt from 'prompt-sync'
let ler = prompt();

console.log('Seja bem vindo a sorveteria!');

console.log('Digite a quantidade de gramas que voce deseja');
let gramas = parseFloat(ler());

if (gramas >= 1000) {
    let valor = (gramas / 100) * 3.00
    console.log(`O total a se pagar é de R$ ${valor}`)
}

else if (gramas < 1000) {
    let valor = (gramas / 100) * 3.50
    console.log(`O total a se pagar é de R$ ${valor}`)
}

else if (gramas == 0) {
    console.log('Peso invalido')
}