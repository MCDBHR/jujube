require('dotenv').config();
const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('client/dist'));

const PORT = 3000 || process.env.PORT;

const apiHeaders = { headers: {'Authorization': process.env.AUTH_TOKEN}}
const apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/';

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
app.get('/products/*', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '../client/dist')})
});

app.get('/api/products', async (req, res) => {
 const page = req.query.page || 1;
 try {
   const response = await axios.get(`${apiURL}products/?page=${page}`, apiHeaders);
   res.status(200).send(response.data)
 } catch(err){res.send(err)}
});

app.get('/api/products/:product_id', async (req, res) => {
  const id = req.params.product_id;
  try {
    const product = await axios.get(`${apiURL}products/${id}`, apiHeaders);
    res.status(200).send(product.data);
  } catch (err) {
    res.status(400).send(err);
  }
})

app.get('/api/products/:product_id/all', async (req, res) => {
  const id = req.params.product_id;
  try{
    const overview = await axios.get(`${apiURL}products/${id}`,apiHeaders);
    const related = await axios.get(`${apiURL}products/${id}/related`,apiHeaders);
    const styles = await axios.get(`${apiURL}products/${id}/styles`,apiHeaders);
    const reviews = await axios.get(`${apiURL}reviews/?product_id=${id}`,apiHeaders);
    const metaReview = await axios.get(`${apiURL}reviews/meta/?product_id=${id}`, apiHeaders);
    const combined = [];
    await combined.push(overview.data,related.data,styles.data,reviews.data,metaReview.data)
    res.status(200).send(combined)
  } catch(err) {
    res.status(400).send(err)
  }
})

app.get('/api/products/:product_id/styles', async (req, res) => {
  const id = req.params.product_id;
    try {
    const productStyle = await axios.get(`${apiURL}products/${id}/styles`, apiHeaders);
    res.status(200).send(productStyle.data);
  } catch (err) {
    res.status(400).send(err);
  }
})

app.get('/api/cart', async (req, res) => {
  try {
    const response = await axios.get(`${apiURL}cart`, apiHeaders);
    res.status(201).send(response.data)
  }catch(err) {
    res.send(err)
  }
})

app.get('/api/reviews/', (req, res) => {
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

app.get('/api/reviews/meta', (req, res) => {
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
  .catch((err) => { res.status(500).send(err)});
});

app.post('/api/reviews', (req, res) => {
  axios.post(`${apiURL}reviews`, req.body, apiHeaders)
  .then((result) => {
    res.status(201).send('success');
  })
  .catch((err) => {
    res.status(501).send(err)
  });
});

app.put('/api/report/review/:id', (req, res) => {
  var id =  req.params.id;
  axios.put(`${apiURL}reviews/${id}/report`, id,  apiHeaders)
  .then((data)=> { res.status(200).send(data.data)})
  .catch((err) => {res.status(500).send(err)});
});
