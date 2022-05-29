require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const axios = require('axios');
const bodyParser = require('body-parser');
const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/';
const apiHeaders = { headers: {'Authorization': process.env.AUTH_TOKEN}}
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
   const response = await axios.get(`${apiURL}products`, apiHeaders);
   res.status(200).send(response.data)
 } catch(err){res.send(err)}
});


//get one products
//We should split it into multiple get controllers?
app.get('/products/:product_id', async (req, res) => {
  const id = req.params.product_id;
  try{
    console.log('products with id');
    const overview = await axios.get(`${apiURL}products/${id}`,apiHeaders);
    const related = await axios.get(`${apiURL}products/${id}/related`,apiHeaders);
    const styles = await axios.get(`${apiURL}products/${id}/styles`,apiHeaders);
    const reviews = await axios.get(`${apiURL}reviews/?product_id=${id}`,apiHeaders);

    const combined = [];
    await combined.push(overview.data,related.data,styles.data,reviews.data)
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

/* ===================== REVIEWS AND RATINGS ========================= */
/*Reviews get all and by sort*/
app.get('/reviews/', (req, res) => {
  const id = req.query.product_id
  const sort = req.query.sort
  const count = req.query.count
  let config = {
    headers: {'Authorization': process.env.AUTH_TOKEN},
    params: {
      'product_id': id,
      'sort': sort,
      'count': count
    }
  }
  axios.get(`${apiURL}reviews/`, config)
  .then((results) => {
    res.status(200).send(results.data.results)})

  .catch((err) => {
    res.send(err);
  })
})

// get reviews meta for one product
app.get('/reviews/meta', (req, res) => {
  const id = req.query.product_id
  let config = {
    headers: {'Authorization': process.env.AUTH_TOKEN},
    params: {
      'product_id': id
    }
  }
  axios.get(`${apiURL}reviews/meta`, config)
  .then((results)=> {
    res.status(200).send(results.data)})
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





