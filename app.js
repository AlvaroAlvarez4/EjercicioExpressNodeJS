const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')

const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
    //crea una ruta estatica desde el disco hasta la carpeta que le indiquemos en este caso la de css
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/img'));


app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))

});

app.post('/formulario1', function(req, res) {

    console.log(req.body)
    let email = req.body.email;
    let password = req.body.password;
    let repitPassword = req.body.repitPassword
    let enviar = email + ' ' + password + ' ' + repitPassword
    res.send(enviar)
});

app.post('/formulario2', function(req, res) {
    console.log(req.body)

});
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});