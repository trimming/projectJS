const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser')


const app = express();

// create application/json parser
app.use(express.static('./dist'));
app.use(bodyParser.json())

app.get('/api/good', (req, res) => {
    fs.readFile('./server/data/goodsList.json', 'utf8', (err, data) => {
        res.send(data);
    });
});
app.get('/api/cart', (req, res) => {
    fs.readFile('./server/data/cart.json', 'utf8', (err, data) => {
        res.send(data);
    });
});

app.post('/api/cart', (req, res) => {
    fs.readFile('./server/data/cart.json', 'utf8', (err, data) => {
      const cart = JSON.parse(data);
      const item = req.body;
    
      cart.push(item);

      fs.writeFile('./server/data/cart.json', JSON.stringify(cart), (err) => {
        console.log('done');
        res.send('ok')
      });
    });
});

app.post('/api/closeCard', (req, res) => {
    fs.readFile('./server/data/cart.json', 'utf8', (err, data) => {
        const cart = JSON.parse(data);
        const list = cart.filter(good =>
            good.id_product !== req.body.id_product);

        fs.writeFile('./server/data/cart.json', JSON.stringify(list), (err) => {            
            res.end();
        });
    });
});

app.post('/api/clearCartHandler', (req, res) => {
    fs.readFile('./server/data/cart.json', 'utf8', (err, data) => {
        const cart = JSON.parse(data);
        const list = [];

        fs.writeFile('./server/data/cart.json', JSON.stringify(list), (err) => {            
            res.end();
        });
    });
});

app.listen(3000, () => {
    console.log('server is running on port 3000...');
});