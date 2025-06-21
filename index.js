require('dotenv').config();
const app = require('./app');
const db = require('./config/db');



app.get('/', (req, res)=> {
    res.send("Hello Whatspp!!!!");
});


app.listen(process.env.PORT, () => {
    console.log(`Server is connected on port http://localhost:${process.env.PORT}`);
});