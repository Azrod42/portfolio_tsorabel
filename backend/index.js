const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express()
const port = process.env.PORT
// const site_name = process.env.NODE_ENV === 'DEV' ? process.env.SITE_NAME : process.env.SITE_NAME_P;
const url = process.env.URL_FRONT;

app.use(cors({
  origin: "*",
  allowedHeaders: ['Content-Type', 'Authorization', 'application/json'],
  // credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(port, () => {
  console.log(`backend start on: ${url}:${port}`)
})

const userRoutes = require('./routes/user');

app.use('/api/user', userRoutes);

