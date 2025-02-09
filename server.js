const http = require('http')
const fs= require ('fs')



// ********* creation du fichier *********

fs.writeFile('Welcome.txt', 'Hello node', (err) => {
    err ? console.error ('erreur decriture', err) : console.log('fichier cree avec succes');
})

// ********* lecture *********

fs.readFile("Welcome.txt", "utf-8", (err, data) => {
    err ? console.log ('erreur de lecture', err) : console.log('data');
})


// ****** password-generator *****

const password = require ("./passeword-generator");
console.log(password);


// ****** mon serveur ****

http.createServer((request, response) => {
    Response.end("<h1>Bonjour Node !!</h1>")
}).listen(3000)