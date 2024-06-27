import inquirer from "inquirer";
const output: {
  sentence: string;
} = await inquirer.prompt([
  {
    name: "sentence",
    type: "input",
    message: "Enter your sentence to count words:",
  },
]);
const words = output.sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence word count is ${words.length} words`);
