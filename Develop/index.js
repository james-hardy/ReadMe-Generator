// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
// const questions = ["What is the project title?", "What is the description?", "What are the installation instructions?", "What is the usage information?", "What are the contribution guidelines?", "What are the test instructions?"];
// for (i=0;i<questions.length;i++){
//     let listQuestions = questions[i];
//     inquirer.prompt([
//         type: "input",
//         name: "title",
//         message: listQuestions,
        
//     ])
// }
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the project title?"
        },
        {
            type: "input",
            name: "description",
            message: "What is the description?"
        },
        {
            type: "input",
            name: "instructions",
            message: "What are the installation instructions?"
        },
        {
            type: "input",
            name: "usage",
            message: "What is the usage information?"
        },
        {
            type: "input",
            name: "contribution",
            message: "What are the contribution guidelines?"
        },
        {
            type: "input",
            name: "test",
            message: "What are the test instructions?"
        },
        {
            type: "checkbox",
            name: "license",
            message: "Select a licens",
            choices: [
                "Apache",
                "MIT",
                "ISC",
                "GNU GPLv3",
            ],
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "useremail",
            message: "What is your email address?"
        },
    ]);
}

function generateMarkdown(response) {
    return `
    # ${response.title}
    # Table of Contents

    -[Description](#description)
    -[Installation](#instructions)
    -[Usage](#usage)
    -[Contribution](#contribution)
    -[Test](#test)
    -[License](#license)
    -[Questions](#questions)

    ## Description:
    ![License](https;img.shields.io/badge/License-${response.license}-blue.svg "License Badge")

        ${response.description}
    ## Installation:
        ${response.installation}
    ## Usage:
        ${response.usage}
    ## Contribution:
        ${response.contribution}
    ## Test:
        ${response.test}
    ## License:
        Click on the link below for licensing information

    -[License](https://opensource.org/licenses/${response.license})

    ## Questions:
        Click on the link belwo to go to my GitHub page, for additional questions:

    -[GitHub Profile](https://github.com/${response.username})

    Email me at ${response.useremail} with further questions.
    `;
}

async function init() {
    try {
        const response = await promptUser();

        const readMe = generateMarkdown(response);

        await writeFileAsync("README.md", readMe);
        console.log("DID IT");
    } catch (err) {
        console.log(err);
    }
}

init();

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// .then((data) => {
//     console.log(data);
//     let title = data.title;
//     let description = data.description;
//     let instructions = data.instructions;
//     let usage = data.usage;
//     let contribution = data.contribution;
//     let test = data.test;
//     let blankReadme = 
//     `
//     <h1>My title of my project is: ${title}</h1>
//     <h2>Table of Contents</h2>
//     <ol>
//         <li> 
//             <a href="#pDescription">## Project Description</a>
//         </li>
//         <li>
//             <a href="#iInstructions">## Installation Instructions</a>
//         </li>
//         <li>
//             <a href="#uInformation">## Usage Information</a>
//         </li>
//         <li>
//             <a href="#cGuidelines">## Contribution Guidelines</a>
//         </li>
//         <li>
//             <a href="#tInstructions">## Test Instructions</a>
//         <li>
//             <a href="#questions"># Questions</a>
//         </li>
//     </ol>

//     <h3 id="pDescription"># Project Description:</h3>
//     <p>* ${description}</p>
//     <br>
//     <h3 id="iInstructions"># Installation Instructions:</h3>
//     <p>* ${instructions}</p>
//     <br>
//     <h3 id="uInformation"># Usage Information:<h3/>
//     <p>* ${usage}</p>
//     <br>
//     <h3 id="cGuidelines"># Contribution Guidelines:</h3>
//     <p>* ${contribution}</p>
//     <br>
//     <h3 id="tInstructions"># Test Instructions:</h3>
//     <p>* ${test}</p>
//     <br>
//     <h3 id="questions"># Questions:</h3>



//     `;
//     fs.writeFile(`${title}.HTML`, blankHTML, (err) =>
//         err ? console.log(err) : console.log("it worked"));
// });


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();








// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title -1
// THEN this is displayed as the title of the README
// WHEN I enter a description -1, installation instructions -1, usage information -1, contribution guidelines 1, and test instructions -1
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README