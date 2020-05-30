//Dependencies
const inquirer = require("inquirer");
const fs = require("fs");

//Function to write the ReadMe file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
  });
}
//User prompts and questions
inquirer
  .prompt([
    {
      name: "title",
      type: "input",
      message: "Give your project a title.",
    },
    {
      name: "table",
      type: "checkbox",
      message:
        "What does your table of contents consist of? (Please chose all that apply)",
      choices: [
        "Getting Started",
        "Installing",
        "Running Test",
        "Deployment",
        "Built With",
        "Contributing",
        "Usage",
        "Questions",
        "Licencees",
        "Description",
      ],
    },
    {
      name: "para",
      type: "input",
      message: "Please write a one paragraph of project description.",
    },
    {
      name: "install",
      type: "input",
      message:
        "Please write a brief description on how to install your application.",
    },
    {
      name: "usage",
      type: "input",
      message: "Please explain what your app is to be used for.",
    },
    {
      name: "license",
      type: "checkbox",
      message: "What type of license do you have?",
      choices: [
        "None",
        "![GitHub](https://img.shields.io/github/license/quackenstien/repo-node-building)",
      ],
    },
    {
      name: "contribute",
      type: "input",
      message: "Who contributed to the repo?",
    },
    {
      name: "test",
      type: "input",
      message: "Explain how to run the automated tests for this system.",
    },
    {
      name: "questions",
      type: "input",
      message: "Write contact info here.",
    },
  ])

  //Collecting the data and displaying it on the read me in the proper format.
  //Also destructuring the objects.
  .then((results) => {
    const {
      title,
      para,
      table,
      install,
      usage,
      license,
      contribute,
      test,
      questions,
    } = results;
    let readMe = ` 
# ${title}
${para}

## Table of Contents
${table}

## Installation
${install}

## Usage
${usage}

## License
${license}

## Contributing
${contribute}

## Test
${test}

## Questions
If you have any questions please contact me at ${questions}`;

    writeToFile("ReadMe.md", readMe);
  });
