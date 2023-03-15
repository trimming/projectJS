const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(express.static('./dist'));
app.use(bodyParser.json());

app.get('/api/catalog', (req, res) => {
    fs.readFile('./server/data/catalog.json', 'utf8', (err, data) => {
        res.send(data);
        
    });
});

app.get('/api/cart', (req, res) => {
    fs.readFile('./server/data/cart.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get('/api/removeFromCart', (req, res) => {
    fs.readFile('./server/data/cart.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.get('/api/stats', (req, res) => {
    fs.readFile('./server/data/stats.json', 'utf8', (err, data) => {
        res.send(data);
    });
});


app.post('/api/cart', (req, res) => {
    fs.readFile('./server/data/cart.json', 'utf8', (err, data) => {
        const cart = JSON.parse(data);
        cart.push(req.body);
        console.log(req.body);
        fs.writeFile('./server/data/cart.json', JSON.stringify(cart), (err) => {
            console.log('done');
            res.end();
        });
    });
});

app.post('/api/removeFromCart', (req, res) => {
    fs.readFile('./server/data/cart.json', 'utf8', (err, data) => {
        const cart = JSON.parse(data);
        const list = cart.filter(good =>
            good.id_product !== req.body.id_product);

        fs.writeFile('./server/data/cart.json', JSON.stringify(list), (err) => {
            console.log('done');
            res.end();
        });
    });
});

app.post('/api/stats', (req, res) => {
    fs.readFile('./server/data/stats.json', 'utf8', (err, data) => {        
        const stat = JSON.parse(data);        
        stat.push({...req.body, date: new Date()});                                   
        fs.writeFile('./server/data/stats.json', JSON.stringify(stat), (err) => {
            res.end();
        });
    });
});


app.listen(3000, () => {
    console.log('server is running on port 3000...');
});