import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite a area do primeiro retangulo: ')
let r1 = Number(ler())
console.log('Digite a area do segundo retangulo: ')
let r2 = Number(ler());

if(r1 == r2) {
    console.log(`O primeiro retangulo possui area de ${r1}`)
    console.log(`O primeiro retangulo possui area de ${r2}`)
    console.log('Eles sao iguais!')
}
else {
    console.log(`O primeiro retangulo possui area de ${r1}`)
    console.log(`O primeiro retangulo possui area de ${r2}`)
    console.log('Eles nao sao iguais!')
}