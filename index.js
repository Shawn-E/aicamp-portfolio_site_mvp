const express = require('express');
//initialize express app
const app = express();

app.use(express.static('public'));

app.use('/assets', express.static(__dirname + 'public/assets'))

app.set('views', './src/views');

app.set('view engine', 'ejs');

// run the routing file
require("./src/routing.js")(app)

