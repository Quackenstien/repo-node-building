//Node Dependencies
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

  //Collecting the data and displaying it on the read me in the proper format.
  //Also destructuring the objects.
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
