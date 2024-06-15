#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

// printing a welcome message

console.log(chalk.rgb(0,255,127)("\n\t WELCOME  TO  CLS  CALCULATOR\n"));

let answer = await inquirer.prompt([



{ message : "\nEnter First Number" ,

type : "number", 

name : "firstNumber"

},

{ message : "\nEnter Second Number",

  type : "number",

  name : "secondNumber"

},

{
    message : "\nSelect One Of The Operator To Perform Action \n",

    type : "list",

    name : "Operator" ,

    choices : ["Addition" , "Subtraction" , "Multiplication" , "Division"],

},

]);


if (answer.Operator === "Addition") {

    console.log(chalk.rgb(0,255,255)(`\n\t ${answer.firstNumber} + ${answer.secondNumber} = ${answer.firstNumber + answer.secondNumber}`))

}

else if (answer.Operator === "Subtraction") {

    console.log(chalk.rgb(255,255,0)(`\n\t ${answer.firstNumber} - ${answer.secondNumber} = ${answer.firstNumber - answer.secondNumber}`));

}

else if (answer.Operator === "Multiplication") {

    console.log(chalk.rgb(255,20,147)(`\n\t ${answer.firstNumber} * ${answer.secondNumber} = ${answer.firstNumber * answer.secondNumber}`));

}

else if (answer.Operator === "Division") {

    console.log(chalk.rgb(210,105,30)(`\n\t ${answer.firstNumber} / ${answer.secondNumber} = ${answer.firstNumber / answer.secondNumber}`));

}

else {
    console.log(chalk.rgb(255,0,0)("Invalid Operator"));
}

 console.log("\n",answer);

 console.log(chalk.rgb(0,0,255)("\n PRESENTING  BY  ABDUL  REHMAN\n"));
 
