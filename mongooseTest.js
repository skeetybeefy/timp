let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})

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

const Cart = mongoose.model("Cart",
{
    pickUpPointId: String,
    items: Array,
    client: Object
})

/* Product.find({
    categories: 2
}, (err, doc) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(doc)
    }
}) */

 const product1 = new Product({ name: 'Zoloft5', id: "5", agent: "abc" });
product1.save().then(() => console.log('meow')); 
