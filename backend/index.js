const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express()
const port = process.env.PORT
// const site_name = process.env.NODE_ENV === 'DEV' ? process.env.SITE_NAME : process.env.SITE_NAME_P;
const url = process.env.URL_FRONT;

const corsOptions = {
  origin: process.env.URL_FRONT, // Remplacez par l'URL de votre application Angular
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'], // Vous n'avez pas besoin d'inclure 'Access-Control-Allow-Headers' ici
  preflightContinue: false,
  credentials: true
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(port, () => {
  console.log(`backend start on: ${url}`)
})

const userRoutes = require('./routes/user');

app.use('/api/user', userRoutes);

