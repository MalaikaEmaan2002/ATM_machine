#!/usr/bin/env node
import inquirer from "inquirer"

let myBalance = 10000;
const myPin = 9876;

let pinAnswer = await inquirer.prompt([
    {
        name : "pin",
        message :"enter your pin",
        type : "number",

    }
]);
if (pinAnswer.pin === myPin){
    console.log (" Pin is correct!")
    let operatorAns = await inquirer.prompt([
        {
            name : "operator",
            message : "please select option",
            type : "list",
            choices :["withdraw", "check balance","fast cash"]
                }
    ]);
    console.log(operatorAns);
    if (operatorAns.operator === "withdraw")
    {
        let amountAns = await inquirer.prompt ([
            {
                name : "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        if (amountAns.amount <myBalance){
            myBalance -=amountAns.amount
            console.log (`your remaining balance is ${myBalance}`)
        } else if (amountAns.amount > myBalance){
            console.log ("insufficient amount");
        }}
        if (operatorAns.operator === "check balance"){
            console.log(`your balance is ${myBalance}`)
        }
      else if (operatorAns.operator === "fast cash"){
          let  fastcashAmountAns = await inquirer.prompt([
            {
              name: "fastcash",
              message: "select your amount",
              type: "list",
              choices: ["2000", "5000","8000"],  
            }
          ]); 
          
            myBalance -=fastcashAmountAns.fastcash 
            console.log(`your remaning balance is ${myBalance}`)
          
        }
    }else {
        console.log ("incorrect pin code")
    }

