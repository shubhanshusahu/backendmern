const express = require('express')
const db = require('./database/local')
const app = express();
const bodyParser = require('body-parser')
const formRoutes = require('./src/routes/form.route')

app.use(express.json());
const cors = require('cors');
app.use(cors());

// middlewares
app.use('/uploads',express.static("./uploads"))
app.use(express.json());
app.use('/form', formRoutes );





module.exports = app;