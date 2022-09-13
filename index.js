// TODO: Include packages needed for this application
const fs=require("fs");
const path=require("path")
const inquirer=require("inquirer")
const generateMarkdown=require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "what is your github username?"
    },
    {
        type: "input",
        name: "github",
        message: "what is your github username?"
    },
    {
        type: "input",
        name: "github",
        message: "what is your github username?"
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
        choices: ["MIT","None"]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
