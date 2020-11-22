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
    message: 'Please list the 1st item in your table of contents',
    name: 'content1',
    },
    {
    type: 'input',
    message: 'Please list the 2nd item in your table of contents',
    name: 'content2',
    },
    {
    type: 'input',
    message: 'Please list the 3rd item in your table of contents',
    name: 'content3',
    },
    {
    type: 'input',
    message: 'Please list the 4th item in your table of contents',
    name: 'content4',
    },
    {
    type: 'input',
    message: 'Please list the 5th item in your table of contents',
    name: 'content5',
    },
    {
    type: 'input',
    message: 'Please list the 6th item in your table of contents',
    name: 'content6',
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
    message: 'Please list the contributors for this project',
    name: 'contributors',
    },
    {
    type: 'input',
    message: 'What are the test instructions?',
    name: 'test',
    },   
    {
    type:'multiple choice',
    message: 'Which license are you using?',
    choice1: 'Apache License 2.0',
    choice2: 'MIT License',
    choice3: 'Mozilla Public License 2.0',  
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

]).then((data) => {
    const { title, content1, content2, content3, content4, content5, content6, description, instructions, usage, contributors, test, license, username, email } = data
    const generateREADME = `

#${title}
##Table of Contents
    *${content1}
    *${content2}
    *${content3} 
    *${content4} 
    *${content5}
    *${content6}
##Description
${description}
##Instructions 
${instructions}
##Usage
${usage}
##Contributors
${contributors}
##Test
${test}
##License
${license}
##Github Username
${username}
##E-mail
${email}        
    `
    
      fs.writeFile("README.md", generateREADME, (err) =>  
      err ? console.log(err) : console.log('success!')
      );  
  });



