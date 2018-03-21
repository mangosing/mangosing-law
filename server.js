'use strict'

const express = require('express');
const morgan = require('morgan');

//Globals`
const app = express();
const PORT = process.env.PORT || 5000;

//set templating engine
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.render('pages/landing');
});

// app.get('/about', (req, res) => {
//   res.render('pages/about');
// })
// app.get('/practice', (req, res) => {
//   res.render('pages/practice_areas');
// })

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}.`)
});