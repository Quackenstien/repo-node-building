const inquirer = require("inquirer");
const fs = require("fs");

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
  });
}

inquirer
  .prompt([
    {
      name: "user",
      type: "input",
      message: "What is your name?",
    },
    {
      name: "aboutMe",
      type: "input",
      message: "Tell us about yourself.",
    },
    {
      name: "contact",
      type: "input",
      message: "What is your email?",
    },
  ])

  .then((results) => {
    const { user, aboutMe, contact } = results;
    let readMe = ` 
# ${user}

## About Me
${aboutMe}

## Contact Me
${contact}`;

    writeToFile("ReadMe.md", readMe);
  });
