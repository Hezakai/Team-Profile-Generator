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
    console.log(team)
    //testing template
    return `<div class="card col-2 border-light shadow-lg mx-2 my-2">
    <div class="h2 card-header bg-primary font-weight-bold text-white">
    ${team[0].getName()}<br>${team[0].getRole()}
    </div>
    <ul class="list-group p-3">
        <li class="list-group-item">${team[0].getId()}</li>
        <li class="list-group-item">e-mail: <a href="#" class="card-link">${team[0].getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${team[0].getOfficeNumber()}</li>
    </ul>
</div>`
}