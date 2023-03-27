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
app.get('/api/sendDataForm', (req, res) => {
    fs.readFile('./server/data/subscribe.json', 'utf8', (err, data) => {
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

app.post('/api/sendDataForm', (req, res) => {
    fs.readFile('./server/data/subscribe.json', 'utf8', (err, data) => {
        const form = JSON.parse(data);
        const userObject = req.body;
        form.push(userObject);
        fs.writeFile('./server/data/subscribe.json', JSON.stringify(form), (err) => {            
            res.end();
        });
    });
});
app.get('/api/stat', (req, res) => {
    fs.readFile('./server/data/stat.json', 'utf8', (err, data) => {
        res.send(data);
    });
  });

app.post('/api/stat', (req, res) => {
    fs.readFile('./server/data/stat.json', 'utf8', (err, data) => {
      const stat = JSON.parse(data);

      const item = {...req.body, date: new Date()};
    
      stat.push(item);

      fs.writeFile('./server/data/stat.json', JSON.stringify(stat), (err) => {
        console.log('done');
        res.send('ok')
      });

  });

}); 
app.listen(3000, () => {
    console.log('server is running on port 3000...');
});