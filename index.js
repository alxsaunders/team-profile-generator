const inquirer = require('inquirer')
const template = require('./src/page-template')
const writeFile = require('./src/writie-file')

// constructor classes and questions for each employee type
const { Manager, managerQuestionsArr } = require('./lib/Manager');
const { Engineer, engineerQuestionsArr } = require('./lib/Engineer');
const { Intern, internQuestionsArr } = require('./lib/Intern');

// stores all team member objects
const employeesArr = []

const init = () => { managerQuestions() }
// prompts manager questions then creates object from user inputs based on Manager class 
const managerQuestions = () => {
    inquirer.prompt(managerQuestionsArr)
    .then(( answers ) => {
        answers = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employeesArr.push(answers);
        return employeePrompt();
    })
}

