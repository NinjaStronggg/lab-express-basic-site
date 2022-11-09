const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

require('./db/ddbb_conection')

const Product = require('./models/products.model')

app.get('/', (req, res) => {
    res.render('welcome-view')
})

app.get('/store', (req, res) => {
    // console.log('this is our store')

    Product
        .find()
        .sort({ price: 1 })
        .select({ title: 1, description: 1, price: 1, discountPercentage: 1, stock: 1, thumbnail: 1})
        .then(elem => {
            console.log(elem)
            res.render('store-view', {product:elem})
        })
        .catch(err => console.log('Se produjo un error:', err))
    
    // res.render('store-view', )
})


app.listen(5005, () => console.log("Listening on port 5005"))
