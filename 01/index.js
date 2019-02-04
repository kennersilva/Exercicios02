let readlineSync = require('readline-sync');


let Pesopeixe = readlineSync.questionInt('Quantos quilos de peixe você pegou hoje?\n');
let pesoLimite = 50;
let excesso = (pesoLimite - Pesopeixe); 
let multa = excesso * 4.0; 

console.log('Você excedeu:', excesso,'kilos');

console.log('você deve pagar uma multa de:', multa);

