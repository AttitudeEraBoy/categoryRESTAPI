const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
require('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const songsRoute = require('./routes/songs');
const categoriesRoute = require('./routes/categories');
const popularRoute = require('./routes/popular');
const rateRoute = require('./routes/rate');

app.use('/songs', songsRoute);
app.use('/categories',categoriesRoute);
app.use('/popular',popularRoute);
app.use('/rate',rateRoute);

/*app.get('/', async (req,res) => {
    res.send("Merhabalar!");
});*/

mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true },
() => {
    console.log("Çalışıyooooooor");
});

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(process.env.port || 3000);