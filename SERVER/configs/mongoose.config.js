const mongoose = require("mongoose") 

const dbName = process.env.ATLAS_DATABASE
const username= process.env.ATLAS_USERNAME
const pw = process.env.ATLAS_PASSWORD

const uri = `mongodb+srv://${username}:${pw}@cluster0.zppu85g.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`It's Time To Duel~ ${dbName}`))
.catch((err) => console.log("Sending You To The Shadow Realm: ", err))