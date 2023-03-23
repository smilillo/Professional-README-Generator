// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// inquirer
//     .prompt 
const questions = [{
    type: "input",
    message: "What is the title of this project?",
    name: "title"
}, {
    type: "input",
    message: "What is this project about? Please provide a detailed desription.",
    name: "description"
},
{
    type: "input",
    message: "Table of Contents",
    name: "toc"
},
{
    type: "input",
    message: "What steps are required to install this project?",
    name: "installation"
},
{
    type: "input",
    message: "Provide instructions for how to use this project.",
    name: "usage"
},
{
    type: "input",
    message: "Provide a link to the deplyed project webpage here.",
    name: "deployed"
},
{
    type: "input",
    message: "Attach any necessary screenshots here.",
    name: "screenshot"
},
{
    type: "input",
    message: "List the names and profiles of any project collaborators.",
    name: "credits"
},
{
    type: "input",
    message: "Enter the license used for this project.",
    name: "license"
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
