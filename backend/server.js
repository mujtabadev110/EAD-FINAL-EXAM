const express = require('express');
const colors = require('colors');
const { appendFile } = require('fs');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middlewares/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5002;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/bookmars', require('./routes/bookmarkRoutes'))

app.use(errorHandler)

app.listen(port, ()=> console.log(`listening on port ${port}`));