import prompt from 'prompt-sync';
let ler = prompt();

let lado1 = parseInt(ler());
let lado2 = parseInt(ler());
let lado3 = parseInt(ler());

if (lado1 == lado2 && lado2 == lado3) {
    console.log("Esse é um triângulo Equilátero");
} else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    console.log("Esse é um triângulo Isósceles");
} else {
    console.log("Esse é um triângulo Escaleno");
}
