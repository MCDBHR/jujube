import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import StorefrontCard from './StorefrontCard.jsx'
import {FlexContainer} from '../style/RelatedProductsStyle/FlexContainer.style.js'

const Storefront = () => {
  const [products, setProducts] = useState([]);
  const [styles, setStyles] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`/api/products/?page=${page}`)
      .then(results => {
        setProducts(results.data)
      })
      .catch(err => console.log(err))
  }, [page])

  const status = useRef();
  useEffect(() => {
    //TRICK TO NOT RUN ON MOUNT ONLY AFTER UPDATE
    if(!status.current) {
      status.current = true;
    } else {
      const stylesPromises =
      products.map(product => axios.get(`/api/products/${product.id}/styles`));

      Promise.all(stylesPromises)
        .then(results => {
          const stylesURLs =
          results.map(product => {
            if (product.data.results.length) {
              return product.data.results[0].photos[0].url;
            } else {
              return 'https://images.unsplash.com/photo'
            }
          });
          setStyles(stylesURLs);
        }).catch(err => console.log(err));
    }
  }, [products])

  const prevPage = () => {
    if (page > 1) {
      setPage((prevState) => (prevState - 1))
    }
  }

  const nextPage = () => {
    setPage((prevState) => (prevState + 1))
  }

  return (
    <div>
      <FlexContainer>
        {products.map((product, index) => <StorefrontCard
         stylesImg={styles[index]} key={product.id} product={product}/>)}
       </FlexContainer>
       <button onClick={prevPage}>PREV</button>
       <button onClick={nextPage}>NEXT</button>
    </div>
  )
}

export default Storefront;