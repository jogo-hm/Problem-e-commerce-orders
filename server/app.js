const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

const homeRoutes = require('./routes/home.routes');
const orderRoutes = require('./routes/orders.routes');

//Using morgan
app.use(morgan('dev'));

//Using express functions to manage data on json format
app.use(express.json());

//Using cors
app.use(cors());

//Using routes from routes module
app.use(homeRoutes)
app.use('/api/orders', orderRoutes)

module.exports = app;