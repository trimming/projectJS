const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(express.static('.'));
app.use(bodyParser.json());

app.get('/catalogData', (req, res) => {
    fs.readFile('./server/data/catalog.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get('/addToCart', (req, res) => {
    fs.readFile('./server/data/cart.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get('/removeFromCart', (req, res) => {
    fs.readFile('./data/cart.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get('/stats', (req, res) => {
    fs.readFile('./data/stats.json', 'utf8', (err, data) => {
        res.send(data);
    });
});


app.post('/addToCart', (req, res) => {
    fs.readFile('./server/data/cart.json', 'utf8', (err, data) => {
        const cart = JSON.parse(data);
        cart.push(req.body);

        fs.writeFile('./server/data/cart.json', JSON.stringify(cart), (err) => {
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

app.post('/stats', (req, res) => {
    fs.readFile('./data/stats.json', 'utf8', (err, data) => {
        const stat = JSON.parse(data);
        const time = new Date();
        stat.push({ "operation": req.body.operation, "time": time, "product": req.body.product_name });
        console.log(req.body);

        fs.writeFile('./data/stats.json', JSON.stringify(stat), (err) => {
            res.end();
        });
    });
});


app.listen(3000, () => {
    console.log('server is running on port 3000...');
});