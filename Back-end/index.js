//require modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//connection to mongo atlas
const url = process.env.ATLAS_URL;
mongoose.connect(url, {useNewUrlParser:true, useCreateIndex:true});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('Connection successfully');
})
const exerciseRouter = require('./routes/exercise');
const usersRouter = require('./routes/user')
//routes
app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);

//server listening
app.listen(port,()=>{
    console.log(`server running on port: ${port}`);
})