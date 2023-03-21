// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of this project?",
    name: "Title"
}, {
    type: "input",
    message: "What is this project about? Please provide a detailed desription.",
    name: "Description"
},
{
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents"
},
{
    type: "input",
    message: "What steps are required to install this project?",
    name: "Installation"
},
{
    type: "input",
    message: "Provide instructions for how to use this project.",
    name: "Usage"
},
{
    type: "input",
    message: "Provide a link to the deplyed project webpage here.",
    name: "Deployed Webpage"
},
{
    type: "input",
    message: "Attach any necessary screenshots here.",
    name: "Screenshot"
},
{
    type: "input",
    message: "List the names and profiles of any project collaborators.",
    name: "Credits"
},
{
    type: "input",
    message: "Enter the license used for this project.",
    name: "License"
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
