const index = require('../index')

module.exports = (team) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <div class= "bg-danger py-3 text-center container-fluid">
            <span class="h1 text-white">My Team</span>
        </div>
        <div class="card-deck d-flex flex-wrap justify-content-around">
        ${createTeamCards(team)}
        </div>
    </body>
    </html>
    `
}

function createTeamCards(team) {
    let cardsHTML = "";
    team.forEach(emp => {
        if (emp.constructor.name === "Manager") {
            cardsHTML += `<div class="card col-2 border-light shadow-lg mx-2 my-2">
            <div class="h2 card-header bg-primary font-weight-bold text-white">
            ${emp.getName()}<br>${emp.getRole()}
            </div>
            <ul class="list-group p-3">
                <li class="list-group-item">${emp.getId()}</li>
                <li class="list-group-item">e-mail: <a href="mailto:${emp.getEmail()}" class="card-link">${emp.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${emp.getOfficeNumber()}</li>
            </ul>
        </div>`
        }
        if (emp.constructor.name === "Engineer") {
            cardsHTML += `<div class="card col-2 border-light shadow-lg mx-2 my-2">
            <div class="h2 card-header bg-primary font-weight-bold text-white">
            ${emp.getName()}<br>${emp.getRole()}
            </div>
            <ul class="list-group p-3">
                <li class="list-group-item">${emp.getId()}</li>
                <li class="list-group-item">e-mail: <a href="mailto:${emp.getEmail()}" class="card-link">${emp.getEmail()}</a></li>
                <li class="list-group-item">e-mail: <a href="https://github.com/${emp.getGithub()}" target="_blank" class="card-link">${emp.getGithub()}</a></li>
            </ul>
        </div>`
        }
        if (emp.constructor.name === "Intern") {
            cardsHTML += `<div class="card col-2 border-light shadow-lg mx-2 my-2">
            <div class="h2 card-header bg-primary font-weight-bold text-white">
            ${emp.getName()}<br>${emp.getRole()}
            </div>
            <ul class="list-group p-3">
                <li class="list-group-item">${emp.getId()}</li>
                <li class="list-group-item">e-mail: <a href="mailto:${emp.getEmail()}" class="card-link">${emp.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${emp.getSchool()}</li>
            </ul>
            </div>`
        }
    })
    return cardsHTML;
}