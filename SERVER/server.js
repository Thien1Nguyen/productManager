const express = require("express")
const cors = require("cors")

require("dotenv").config()

const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

require('./configs/mongoose.config')

//option 1
const Routes = require('./routes/product.routes')
Routes(app)


app.listen(port, () => console.log(`Docked into Port: ${port}`))