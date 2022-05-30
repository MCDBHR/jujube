import React, {useEffect, useContext, useState} from 'react';
import RelatedCard from './RelatedCard.jsx'
import FavoriteCard from './FavoriteCard.jsx'
import axios from 'axios';


//CSS
import {FlexContainer, H2} from '../style/RelatedProductsStyle/FlexContainer.style.js'

//Need to only have the API key in the server / backend side, its not safe anywhere in react


const RelatedProduct = (props) => {

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    //TEMPORARY we will use this component to call the styles, but will
    //later just pass down the information from App
    const productStylesPromise =
    props.relatedItems.map(id => axios.get(`/products/${id}/styles`));

    Promise.all(productStylesPromise)
      .then(results => {
        //console.log(results, 'STYLES RESULTS')
        //const productStyles = results.map(product => product.data)
        const stylesProductsImg = results.map(product => product.data.results[0].photos[0].thumbnail_url)
        setStyles(stylesProductsImg);
      })
      .catch(err => console.log(err, 'Error in Promise'))
      // const stylesProductsImg = results.map(product => product.data.results[0].photos[0].thumbnail_url)


    const relatedProductsPromise =
    props.relatedItems.map(id => axios.get(`/products/${id}/one`));

    Promise.all(relatedProductsPromise)
      .then(results => {
        const relatedProductsData = results.map(product => product.data)
        setRelatedProducts(relatedProductsData);
      }).catch(err => {
        console.log(err)
      })
  }, [])



  return (
    <div>
      <H2>Related Products</H2>
       <FlexContainer>
         {relatedProducts.map((item, index) =>
            <RelatedCard productImg={styles[index]} relatedProduct={item} key={item.id}/>
         )}
       </FlexContainer>
    </div>

  )
}

export default RelatedProduct;
