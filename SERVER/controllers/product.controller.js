const Products = require("../models/product.model")

// get all Products
module.exports.allProducts = (req,res)=>{
    Products.find()
    .then((allProducts) => {res.json({results: allProducts})})
    .catch(err => res.json({err: err}))
}

// get one Product by Id
module.exports.oneProduct = (req,res)=>{
    Products.find({_id: req.params.id})
    .then((oneProduct) => {res.json({results: oneProduct})})
    .catch(err => res.json({err: err}))
}

//create a Product
module.exports.createProduct = (req,res) =>{
    Products.create(req.body)
    .then((newProduct) =>{res.json({results: newProduct})})
    .catch(err=> res.json({err: err}))
}

//update a Product by id
module.exports.updateProduct = (req,res) =>{
    Products.findOneAndUpdate({_id: req.params.id},req.body, {new: true})
    .then(updateProduct => {res.json({results: updateProduct})})
    .catch(err => res.json({err: err}))
}

//delete a Product with id
module.exports.deleteProduct = (req,res) =>{
    Products.deleteOne({_id: req.params.id})
    .then(deleteProduct => {res.json({results: deleteProduct})})
    .catch(err => res.json({err: err}))
}