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
      type: "input",
      message: "What type of license do you have?",
    },
  ])

  //Collecting the data and displaying it on the read me in the proper format.
  //Also destructuring the objects.
  .then((results) => {
    const { user, aboutMe, contact } = results;
    let readMe = ` 
# Project ${title}
${para}

## Table of Contents
${table}

## Installation
${install}

## Usage
${usage}

## License
${license}`;

    writeToFile("ReadMe.md", readMe);
  });
