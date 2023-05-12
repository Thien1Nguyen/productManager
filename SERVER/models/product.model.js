const mongooes =  require("mongoose")

const ProductSchema = new mongooes.Schema({
    title:{
        type:String
    },
    price:{
        type:Number
    },
    description:{
        type:String
    }
}, {timestamps: true})

const Product = mongooes.model("Product", ProductSchema)

module.exports = Product