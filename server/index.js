require('dotenv').config();
const express = require('express');
const path = require('path');
const getAtelier = require('./helpers/atelier.js')


const app = express();
//should be client/dist, right now dist is outside
const publicPath = path.join(__dirname, '../client', 'dist');
app.use(express.static(publicPath));
app.use(express.json());

app.get('/products', (req, res) => {
  console.log('we are in controller')
  getAtelier()
    .then(results => res.status(200).send(results.data))
    .catch(err => res.status(400).send(err))
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`We have connected the server to Port: ${port}` )
})

