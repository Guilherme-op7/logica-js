import prompt from 'prompt-sync';
let ler = prompt();

console.log("Digite a primeira cor:");
let cor1 = ler();

console.log("Digite a segunda cor:");
let cor2 = ler();

if ((cor1 == "vermelho" && cor2 == "azul") || (cor1 == "azul" && cor2 == "vermelho")) {
    console.log("A combinação das cores é: Roxo");
} else if ((cor1 == "vermelho" && cor2 == "amarelo") || (cor1 == "amarelo" && cor2 == "vermelho")) {
    console.log("A combinação das cores é: Laranja");
} else if ((cor1 == "azul" && cor2 == "amarelo") || (cor1 == "amarelo" && cor2 == "azul")) {
    console.log("A combinação das cores é: Verde");
} else if (cor1 == "vermelho" && cor2 == "vermelho") {
    console.log("A combinação das cores é: Vermelho");
} else if (cor1 == "azul" && cor2 == "azul") {
    console.log("A combinação das cores é: Azul");
} else if (cor1 == "amarelo" && cor2 == "amarelo") {
    console.log("A combinação das cores é: Amarelo");
} else {
    console.log("A combinação das cores é: Apenas cores primárias são aceitas");
}