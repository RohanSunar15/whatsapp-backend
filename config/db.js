require('dotenv').config();
const mongoose = require('mongoose');


const connection = mongoose.createConnection(process.env.MONGO_URI,).on('open', ()=>{
console.log("Mongodb Connected");
}).on('error', () => {
    console.log("Mongodb Connection Error")
});


module.exports = connection;