const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(express.static('.'));
app.use(bodyParser.json());

app.get('/catalogData', (req, res) => {
    fs.readFile('./data/catalog.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.post('/addToCart', (req, res) => {
    fs.readFile('./data/cart.json', 'utf8', (err, data) => {
        const cart = JSON.parse(data);
        const item = req.body;
        cart.push(item);

        fs.writeFile('./data/cart.json', JSON.stringify(cart), (err) => {
            console.log('done');
        });
    });
});

app.listen(3000, () => {
    console.log('server is running on port 3000...');
});