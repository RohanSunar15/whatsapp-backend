require('dotenv').config();
const mongoose = require('mongoose');


const connection = mongoose.createConnection(process.env.MONGO_URI,).on('open', ()=>{
console.log("Mongodb Connected");
}).on('error', () => {
    console.log('Mongodb Connection Error:', )
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ MongoDB Connected");
}).catch((err) => {
  console.error("❌ MongoDB Connection Error:", err.message);
});



module.exports = connection;