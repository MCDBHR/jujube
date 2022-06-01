import React, { useState, useEffect}  from 'react';
import Overview from './Overview'
import axios from 'axios';
import { Nav,Navheader,NavList } from './style/NavStyle.js';
import FlexContainer from './style/Flexbox.js';
import AppContainer from './style/AppContainer.js';
import RatingsAndReviews from './Reviews/RatingsAndReviews.jsx';
import RelatedProduct from './RelatedProducts/RelatedProduct.jsx';
import FavoriteProduct from './RelatedProducts/FavoriteProduct.jsx';
export const MainProductContext = React.createContext();
const App = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get('/products/40344').then((res) => {
      //returns an array of all URL calls
      setProduct(res.data);
    });
  }, []);
  const [overview,related,styles,reviews,metaReview] = product;
  return (
    <div style={{ position: 'relative' }}>
      <Nav>
        <Navheader>The Jonas Brothers</Navheader>
        <NavList>
          <li><a href="#overview" >Overview</a></li>
          <li><a href="#related" >Related Products</a></li>
          <li><a href="#ratings-reviews" >Reviews &amp; Ratings</a></li>
        </NavList>
      </Nav>
      {!!product.length &&
      <AppContainer>
        <FlexContainer direction="column" gap="3em">
        <Overview
          overview={overview}
          styles={styles}
          reviews={reviews}
          metaReview={metaReview}

        />
         <div>
        {overview.id} product
        <MainProductContext.Provider value={overview}>
          {Object.keys(overview).length && <RelatedProduct relatedItems={related}/>}
        </MainProductContext.Provider>
          {localStorage.getItem('favItems') && <FavoriteProduct/>}
        </div>
        <RatingsAndReviews product_id={40348}/>
        </FlexContainer>
      </AppContainer>
      }
    </div>
  )
}
export default App;