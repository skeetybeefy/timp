let mongoose = require('mongoose')
let express = require('express')
app = express()

// Config

mongoose.connect('mongodb+srv://admin:room133bestroom@cluster0.26cnr.mongodb.net/timp?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

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
            {name: { $regex: req.params.searchString, $options: "i"}},
            {agent: { $regex: req.params.searchString, $options: "i"}},
            {categories: { $regex: req.params.searchString, $options: "i"}}
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
    Product.find({categories: { $regex: req.params.searchString, $options: "i"}}, (err, doc) => {
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