const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const inquirer = require('inquirer')
const createTeam = require('./src/template.js')

const fs = require('fs')

const team = []

managerData()

function managerData() {
    inquirer.prompt([
        {
            type: "input",
            name: 'managerName',
            message: 'what is your managers name?'
        },
        {
            type: "input",
            name: 'managerId',
            message: 'what is your managers id?'
        },
        {
            type: "input",
            name: 'managerEmail',
            message: 'what is your managers email?'
        },
        {
            type: "input",
            name: 'managerOfficeNumber',
            message: 'what is your managers office number?'
        },

    ])
        .then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
            team.push(manager)
            console.log(team)
            teamData()

        })
}

function engineerData() {
    inquirer.prompt([
        {
            type: "input",
            name: 'engineerName',
            message: 'what is your engineers name?'
        },
        {
            type: "input",
            name: 'engineerId',
            message: 'what is your engineers id?'
        },
        {
            type: "input",
            name: 'engineerEmail',
            message: 'what is your engineers email?'
        },
        {
            type: "input",
            name: 'engineerGithub',
            message: 'what is your engieers github username?'
        },

    ])
        .then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
            team.push(engineer)
            console.log(team)
            teamData()
        })
}

function internData() {
    inquirer.prompt([
        {
            type: "input",
            name: 'internName',
            message: 'what is your interns name?'
        },
        {
            type: "input",
            name: 'internId',
            message: 'what is your interns id?'
        },
        {
            type: "input",
            name: 'internEmail',
            message: 'what is your interns email?'
        },
        {
            type: "input",
            name: 'internSchool',
            message: 'what school is the intern attending?'
        },

    ])
        .then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internGithub)
            team.push(intern)
            console.log(team)
            teamData()
        })
}

function teamData() {
    inquirer.prompt([
        {
            type: "list",
            name: "mainQuestion",
            message: "What would you like to do next?",
            choices: ["Build Engineer", "Build Intern", "Create Team"]
        }
    ]).then(answer => {
        switch (answer.mainQuestion) {
            case "Build Engineer":
                engineerData()
                break;
            case "Build Intern":
                internData()
                break;
            default:
                buildTeam()
        }
    })
}

function buildTeam() {
    fs.writeFile('dist/team.html', createTeam(team), (err) => {
        if (err) throw err;
        console.log("Team has been built!")
    })
}