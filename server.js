const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const lesson1Controller = require('./controllers/lesson1');

app.get('/', lesson1Controller.homeRoute);

app.get('/Jana',lesson1Controller.janaRoute);

// app.get('/', (req, res) => {
//   res.send('Home Page!')
// });

// app.get('/Jana', (req, res) => {
//     res.send('Jana Page!')
//   });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})