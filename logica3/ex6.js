import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite a capacidade do tanque em litros: ');
let cap = Number(ler());

console.log('Digite o consumo de litros por km: ');
let consumo = Number(ler());

console.log('Digite a distancia em km`s da viagem: ');
let distancia = Number(ler());

let autonomia = cap * consumo;

let paradas = parseInt(distancia / autonomia); 
let sobra = distancia % autonomia;


if (sobra > 0 || distancia % autonomia === 0) {
    paradas += 1;
}

console.log(`Você precisará fazer ${paradas} parada(s) para abastecer.`);