const express = require('express');
const body_parser = require('body-parser');
const userRouter = require('./router/user.router');
const authRouter = require('./router/auth.router');
const messageRouter = require('./router/message.router');



const app = express();

app.use(body_parser.json());

//route
app.use(authRouter); 
app.use(userRouter); 
app.use('/message', messageRouter);



module.exports = app;