import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite a primeira nota do aluno: ')
let n1 = Number(ler())
console.log('Digite a segunda nota do aluno: ')
let n2 = Number(ler())
console.log('Digite a terceira nota do aluno: ')
let n3 = Number(ler());

let media = (n1 + n2 + n3) / 3;

if(media >= 6) {
    console.log(`A media do aluno é ${media}`);
    console.log('O aluno passou!')
}

else {
    console.log(`A media do aluno é ${media}`)
    console.log('O aluno nao passou!')
}