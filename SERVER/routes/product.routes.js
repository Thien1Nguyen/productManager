const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    //list all products
    app.get('/api/products', ProductController.allProducts)

    //get one product
    app.get('/api/products/:id', ProductController.oneProduct)

    //Create Product
    app.post('/api/products/new', ProductController.createProduct)

    //update Product
    app.put('api/products/update/:id', ProductController.updateProduct)

    //delete Product
    app.delete('/api/products/delete/:id', ProductController.deleteProduct)
}