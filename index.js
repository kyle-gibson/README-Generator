const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
    {
    type: 'input',
    message: 'What is the title of the project?',
    name: 'title',
    },    
    {
    type: 'input',
    message: 'Please enter a description of the project',
    name: 'description',
    },
    {
    type: 'input',
    message: 'Please provide the installation instructions',
    name: 'instructions',
    },
    {
    type: 'input',
    message: 'Please enter the usage information',
    name: 'usage',
    },
    {
    type: 'input',
    message: 'Please explain the contributing guidelines for this project',
    name: 'contributing',
    },
    {
    type: 'input',
    message: 'What are the test instructions?',
    name: 'test',
    },   
    {
    type:'list',
    message: 'Which license are you using?',
    choices: ['Apache License 2.0', 'MIT License', 'Mozillar Public License 2.0', 'GNU Public License'],
    name: 'license',   
    },
    {
    type: 'input',
    message: 'Enter your Github username',
    name:'username',    
    },
    {
    type: 'input',
    message: 'Please enter the e-mail address associated with your Github profile:',
    name: 'email',    
    },

]).then((response)=> {
    const title = response.title.split(" ").join("-");
    fs.writeFile(`${title}-README.md`, `# ${response.title}
![GitHub License](https://img.shields.io/badge/license-${response.license}-blue.svg)
    
## Description

${response.description}
    
## Table of Contents
    
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#test)
* [Questions](#questions)
    
## Installation
    
${response.instructions}
    
## Usage
    
${response.usage}
    
## License
    
This application is covered under the ${response.license} license.
    
## Contributing
    
${response.contributing}
    
## Tests
    
${response.test}
    
## Questions
    
My GitHub profile is located at:
https://github.com/${response.username}
    
For any questions, please email me at:
${response.email}`, (err)=>    
    err ? console.log(err) : console.log("Success"))
});



