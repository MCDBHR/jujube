import React, {useEffect, useContext, useState} from 'react';
import {MainProductContext} from '../App.jsx';
import RelatedCard from './RelatedCard.jsx'
import FavoriteCard from './FavoriteCard.jsx'
import axios from 'axios';
//Need to only have the API key in the server / backend side, its not safe anywhere in react


const RelatedProduct = (props) => {
  const mainProduct = useContext(MainProductContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
      //     axios.get(`/products/${mainProduct.id}/related`)
      // .then(results => {
      //   const relatedProductsId = results.data;

      //   const relatedProductsPromise =
      //   relatedProductsId.map(id => axios.get(`/products/${id}`))

      //   //Promise returns all related objects
      //   Promise.all(relatedProductsPromise)
      //   .then(results => {
      //     const relatedProductsData = results.map(result => result.data);
      //     setRelatedProducts(relatedProductsData);
      //   })
      //   .catch(err => console.log(err))


      // })
      // .catch(err => console.log(err))

      //[1234,1234,1234,1234]
      const relatedProductsPromise =
      props.relatedItems.map(id => axios.get(`/products/${id}/`));
      [[[],[],[]],[[],[],[]]]
      Promise.all(relatedProductsPromise)
        .then(results => {
          //[[['overview'],[],[]],[],[]]
          //const [product] = results.data;
          console.log(results)
          const arrayOverview = results.map(productArray => {
            return productArray.data[0]
          })
          setRelatedProducts(arrayOverview);

          console.log(arrayOverview, 'arrayOverview');

        })

  }, [])

  return (
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
      <h2>Related Products</h2>
      {relatedProducts.map(item =>  <RelatedCard relatedProduct={item} key={item.id}/>)}
    </div>
  )
}

export default RelatedProduct;
