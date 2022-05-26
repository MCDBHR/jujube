require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const axios = require('axios');
const bodyParser = require('body-parser');
const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/';
const apiHeaders = { headers: {'Authorization': process.env.TOKEN}}
app.use(express.static('client/dist'));
app.use(express.json());
app.use(bodyParser.json());
//app.use(express.urlencoded({extended: true}))
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

/*Overview*/
//get all products
app.get('/products', async (req, res) => {
 try {
   const response = await axios.get(`${apiURL}products`,apiHeaders);
   res.status(200).send(response.data)
 } catch(err){res.send(err)}
});


//get one products
//We should split it into multiple get controllers?
app.get('/products/:product_id', async (req, res) => {
  const id = req.params.product_id;
  try {
    const overview = await axios.get(`${apiURL}products/${id}`, apiHeaders);
    const related = await axios.get(`${apiURL}products/${id}/related`, apiHeaders);
    const styles = await axios.get(`${apiURL}products/${id}/styles`, apiHeaders);
    const reviews = await axios.get(`${apiURL}reviews/?product_id=${id}`, apiHeaders);
    const metaReview = await axios.get(`${apiURL}reviews/meta/?product_id=${id}`, apiHeaders)
    const combined = [];
    await combined.push(overview.data,related.data,styles.data,reviews.data,metaReview.data)
    res.status(200).send(combined)
  } catch(err) {
    res.status(400).send(err)
  }
})

// app.get('/products/:product_id/related', async (req, res) => {
//   const id = req.params.product_id;
//   try {
//     const related = await axios.get(`${apiURL}products/${id}/related`, apiHeaders);
//   }
// })

//add To Cart
app.post('/cart', async (req, res) => {
  try {
    const response = await axios.post(`${apiURL}cart`, req.body, apiHeaders);
    res.status(201).send(response)
  }catch(err) {
    res.send(err)
  }
})

/*Reviews */
//reviews meta
app.get('/reviews/:product_id', (req, res) => {
  const id = req.params.product_id
  axios.get(`${apiURL}reviews/meta/?product_id=${id}`, apiHeaders)
  .then((results)=> {res.status(200).send(results.data)})
  .catch((err) => { res.status(500).send(err);});
});


//review_id:1135681
//from client end: axios.put('/report/review/?id=1135681')
app.put('/report/review/:id', (req, res) => {
  var id =  req.params.id;
  axios.put(`${apiURL}reviews/${id}/report`, id,  apiHeaders)
  .then((data)=> { res.status(200).send(data.data)})
  .catch((err) => {res.status(500).send(err);});
});





