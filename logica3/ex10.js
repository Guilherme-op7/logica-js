import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite seu salario base: ');
let base = Number(ler());

console.log('Digite o bonus em porcentagem: ');
let bonus = Number(ler());

console.log('Agora digite o total de desconto em reais: ');
let desconto = Number(ler());

let salario = (base * bonus) / 100;

let bonuss = base + salario;

let final = bonuss - desconto;

console.log(`Seu salario liquido é de R$ ${final}!`);