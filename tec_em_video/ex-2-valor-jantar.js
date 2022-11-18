// EXERCÍCIO 2 - Página 41 do Livro Lógica de Programação e Algoritmos com Javascript de Edécio Iepsen

// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
//Exemplo:
// valor do jantar: R$ 80,00
// Taxa do garçom: R$ 8,00
// Total a pagar: R$ 88,00

let dinnerCost = 80;
let serviceCost = dinnerCost * (10 / 100);
let totalCost = dinnerCost + serviceCost;

console.log(`Valor do jantar: R$ ${dinnerCost},00`);
console.log(`Taxa do garçom: R$ ${serviceCost},00`);
console.log(`Total a pagar: R$ ${totalCost},00`);
