let readlineSync = require('readline-sync');

let metros= readlineSync.questionInt('Digite a quantidade de metros quadrados a serem pintados:\n');
let litros = metros/3
let precoL = 80
let capacidadeL = 18

let latas = litros / capacidadeL;
let total = latas * precoL;

console.log('Você usará', latas, 'latas de tintas');
console.log('o preco total é de :R$',total);


