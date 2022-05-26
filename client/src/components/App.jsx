import React, { useState, useEffect, useState }  from 'react';
import Overview from './Overview'
import axios from 'axios';
import { Nav } from './style/NavStyle.js';
import FlexContainer from './style/Flexbox.js';
import AppContainer from './style/AppContainer.js';
import RelatedProduct from './RelatedProducts/RelatedProduct.jsx';
import FavoriteProduct from './RelatedProducts/FavoriteProduct.jsx';

export const MainProductContext = React.createContext();

const App = () => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.get('/products/40348').then((res) => {
      setProduct(res.data);
    });
  }, []);
  const [overview, related, styles, reviews, reviewsMeta] = product;
  return (
    <div style={{ position: 'relative' }}>
      <Nav>
        Jonas Brother
      </Nav>
      {!!product.length &&
      <AppContainer>
        <FlexContainer direction="column" gap="3em">
        <Overview
          overview={overview}
          styles={styles}
          reviews={reviews}
        />
         <div>
        {overview.id} product
        <MainProductContext.Provider value={overview}>
          {Object.keys(overview).length && <RelatedProduct/>}
        </MainProductContext.Provider>
          {localStorage.getItem('favItems') && <FavoriteProduct/>}
        </div>
        </FlexContainer>
      </AppContainer>
      }
    </div>
  )
}

export default App;
