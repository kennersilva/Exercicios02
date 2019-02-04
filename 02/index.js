let readlineSync = require('readline-sync');

let salarioHora = readlineSync.questionInt('Quanto você ganha por hora trabalhada?\n');
let horasMes = readlineSync.questionInt('Quantas horas você trabalha no mês?\n');
let salarioB = salarioHora * horasMes;
console.log('Seu salário Bruto é:', salarioB);

let ir = (11/100.0 * salarioB);
let inss = (8/100.0 * salarioB);
let sindicato = (5/100.0* salarioB);
let vTI = ir + inss + sindicato;

console.log('Valor imposto de renda:', ir);
console.log('Valor inss:', inss);
console.log('Valor do sindicato:', sindicato);

console.log('Seu salário líquido é:',salarioB - vTI );




