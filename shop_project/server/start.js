const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser')


const app = express();

// create application/json parser
const jsonParser = bodyParser.json()

app.use(express.static('./dist'));

app.get('/api/good', (req, res) => {
    fs.readFile('./server/data/catalog.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

