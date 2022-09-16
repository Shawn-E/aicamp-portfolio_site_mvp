const express = require('express');
// Import Config
const cfg = require('./config.json')
//initialize express app
const app = express();
app.use(express.static('public'));
app.use('/assets', express.static(__dirname + 'public/assets'))
app.set('views', './src/views');
app.set('view engine', 'ejs');
// run the routing file
require("./src/routing.js")(app, cfg)
app.listen(cfg.port)
console.log('MVP Started - Port: ' + cfg.port);
// Rejection Handler
process.on('unhandledRejection', (err) => { 
    console.log(err);
});