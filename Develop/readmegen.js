// TODO: Create a function to write README file
const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt ([
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
        type: "list",
        name: "license",
        message: "Select a license",
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
]).then((data) => {
    console.log(data);
    let title = data.title;
    let description = data.description;
    let installation = data.instructions;
    let usage = data.usage;
    let contribution = data.contribution;
    let test = data.test;
    let license = data.license;
    let username = data.username;
    let useremail = data.useremail
    let readme = `
# ${data.title}

# Table of Contents

-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[Contribution](#contribution)
-[Test](#test)
-[License](#license)
-[Questions](#questions)

# Description:
![License](https://img.shields.io/badge/License-${data.license}-blue.svg)

* ${description}

# Installation:

* ${instructions}

# Usage:

* ${usage}

# Contribution:

* ${contribution}

# Test:

* ${test}

# License:
Click the link below for licensing information:
 -[License](https://opensource.org/licenses/${license})

# Questions:
Click on the link below to go to my GitHub page, for additional questions:
-[GitHub Portfolio](https:github.com/${username})

Email me at ${useremail} with further questions

`;
    fs.writeFile("README.md", readme, (err)=>
    err?console.log(err): console.log("Success"));
})

