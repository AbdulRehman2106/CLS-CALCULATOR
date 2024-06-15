#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
// printing a welcome message
console.log(chalk_1.default.rgb(0, 255, 127)("\n\t WELCOME  TO  CLS  CALCULATOR\n"));
let answer = await inquirer_1.default.prompt([
    { message: "\nEnter First Number",
        type: "number",
        name: "firstNumber"
    },
    { message: "\nEnter Second Number",
        type: "number",
        name: "secondNumber"
    },
    {
        message: "\nSelect One Of The Operator To Perform Action \n",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.Operator === "Addition") {
    console.log(chalk_1.default.rgb(0, 255, 255)(`\n\t ${answer.firstNumber} + ${answer.secondNumber} = ${answer.firstNumber + answer.secondNumber}`));
}
else if (answer.Operator === "Subtraction") {
    console.log(chalk_1.default.rgb(255, 255, 0)(`\n\t ${answer.firstNumber} - ${answer.secondNumber} = ${answer.firstNumber - answer.secondNumber}`));
}
else if (answer.Operator === "Multiplication") {
    console.log(chalk_1.default.rgb(255, 20, 147)(`\n\t ${answer.firstNumber} * ${answer.secondNumber} = ${answer.firstNumber * answer.secondNumber}`));
}
else if (answer.Operator === "Division") {
    console.log(chalk_1.default.rgb(210, 105, 30)(`\n\t ${answer.firstNumber} / ${answer.secondNumber} = ${answer.firstNumber / answer.secondNumber}`));
}
else {
    console.log(chalk_1.default.rgb(255, 0, 0)("Invalid Operator"));
}
console.log("\n", answer);
console.log(chalk_1.default.rgb(0, 0, 255)("\n PRESENTING  BY  ABDUL  REHMAN\n"));
