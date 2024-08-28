const process = require('process');

/* ‘Simple mathematics’ program in node.js */
console.log("Assignment1: Sum of two numbers in Node.js");

let myArgv = process.argv.slice(2);

let operandA = parseInt(myArgv[0]);
let operandB = parseInt(myArgv[1]);

if (isNaN(operandA) || isNaN(operandB)) {
    console.log("Invalid input.");
} else {
    console.log(`${operandA} + ${operandB} = ${operandA + operandB}.`);
}
