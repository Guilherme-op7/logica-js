import prompt from 'prompt-sync';
let ler = prompt();

console.log("Digite a capacidade total do tanque (em litros):");
let capacidade = Number(ler());

console.log("Digite a quantidade atual de combustível (em litros):");
let atual = Number(ler());


let limite = capacidade / 4;

if (atual <= limite) {
  console.log("É recomendado abastecer o carro.");
} else {
  console.log("Ainda não é necessário abastecer.");
}
