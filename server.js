require('./config/config')

const express = require("express");
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())



app.get('/persona/:id', function (req, res) {
    
    let id = req.params.id;
    
    res.send(id);
});

app.post('/persona', function (req, res) {
    let data = req.body;
    console.log(data);
    res.status(201).json(data)
});


app.post('/persona')

app.listen(process.env.PORT);