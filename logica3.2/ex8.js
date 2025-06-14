import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite o nome do livro: ');
let nome = ler();

console.log('Digite o total de paginas do livro: ');
let pag = Number(ler());

console.log('Digite o tempo em segundos que leva para ler uma pagina: ');
let s = Number(ler());

let calculo = pag * s;
let calculoo = calculo / 3600;

console.log(`Voce lera ${nome}, em ${calculoo} horas`);