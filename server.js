let mongoose = require('mongoose')
let express = require('express')
app = express()

// Config

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})

serverPort = 6969

// Models

const Product = mongoose.model("Product", 
{
    id: String,
    name: String,
    imageSrc: String,
    agent: String,
    price: Number,
    brand: String,
    country: String,
    specifications: Array,
    categories: Array
})

// URLs

app.get("/api/products/:productID", (req, res) => {
    console.log(typeof(req.params.productID))

    Product.findOne({id: req.params.productID},(err, doc) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        }
        else {
            res.send(doc)
        }
    })
})

app.get("/api/search/:searchString", (req, res) => {
    Product.find({
        $or: [
            {name: req.params.searchString},
            {agent: req.params.searchString},
            {categories: req.params.searchString}
        ]
    }, (err, doc) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        }
        else {
            res.send(doc)
        }
    })
})

app.get("/api/categories/:categoryName", (req, res) => {
    Product.find({categories: req.params.categoryName}, (err, doc) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        }
        else {
            res.send(doc)
        }
    })
})

app.listen(serverPort, ()=> {
    console.log("Server.js has started")
})