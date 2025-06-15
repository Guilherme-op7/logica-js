import prompt from 'prompt-sync';
let ler = prompt();

let nota = parseFloat(ler());
let corte = parseFloat(ler());
let minima = parseFloat(ler());

if (nota < corte) {
    console.log("Candidato não passou");
} else if (nota >= minima) {
    console.log("Candidato aprovado");
} else {
    console.log("Candidato está na lista de espera");
}
