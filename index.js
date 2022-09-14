// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your project about? Provide a short description explaining the what, why, and how of your project."
    },
    {
        type: "input",
        name: "install",
        message: "what is requried to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use"
    },
    {
        type: "input",
        name: "credits",
        message: "List your collaborators or and third-party assets"
    },
    {
        type: "input",
        name: "github",
        message: "what is your github username?"
    },
    {
        type: "list",
        name: "license",
        message: "what kind of license shoud your project have?",
        choices: ["MIT","BSD","GLP","None"]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const readMeMaker = generateMarkdown({...data});
        writeToFile("README.md",readMeMaker)
    });
}
    

// Function call to initialize app
init();
