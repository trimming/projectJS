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

app.get('/addToCart', (req, res) => {
    fs.readFile('./data/cart.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get('/removeFromCart', (req, res) => {
    fs.readFile('./data/cart.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.post('/addToCart', (req, res) => {
    fs.readFile('./data/cart.json', 'utf8', (err, data) => {
        const cart = JSON.parse(data);
        cart.push(req.body);

        fs.writeFile('./data/cart.json', JSON.stringify(cart), (err) => {
            console.log('done');
            res.end();
        });
    });
});

app.post('/removeFromCart', (req, res) => {
    fs.readFile('./data/cart.json', 'utf8', (err, data) => {
        const cart = JSON.parse(data);
        const list = cart.filter(good =>
            good.id_product !== req.body.id_product);

        fs.writeFile('./data/cart.json', JSON.stringify(list), (err) => {
            console.log('done');
            res.end();
        });
    });
});


app.listen(3000, () => {
    console.log('server is running on port 3000...');
});