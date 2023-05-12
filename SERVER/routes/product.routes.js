const ProductController = require('../controllers/product.controller')

module.exports = (app) => {
    //list all songs
    app.get('/api/products', ProductController.allProducts)

    //get one song
    app.get('/api/products/:id', ProductController.oneProduct)

    //Create Song
    app.post('/api/products/new', ProductController.createProduct)

    //update Song
    app.put('api/products/update/:id', ProductController.updateProduct)

    //delete Song
    app.delete('/api/products/delete/:id', ProductController.deleteProduct)
}