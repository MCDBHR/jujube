import React, { useState, useEffect}  from 'react';
import Overview from './Overview'
import axios from 'axios';
import { Nav } from './style/NavStyle.js';
import FlexContainer from './style/Flexbox.js';
import AppContainer from './style/AppContainer.js';
import RatingsAndReviews from './Reviews/RatingsAndReviews.jsx';
import RelatedProduct from './RelatedProducts/RelatedProduct.jsx';
import FavoriteProduct from './RelatedProducts/FavoriteProduct.jsx';

export const SetFavItemsContext = React.createContext();

const App = () => {
  const [product, setProduct] = useState([]);
  const [favItems, setFavItems] = useState([]);


  useEffect(() => {
    axios.get('/products/40344').then((res) => {
      //returns an array of all URL calls
      setProduct(res.data);
    });
    //Setting Favorite Item state
    const parsedItems = JSON.parse(localStorage.getItem('favItems'));
    setFavItems(parsedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('favItems', JSON.stringify(favItems));
  }, [favItems])
  //Watch video on try catch or use useEffect
  const deleteFavProduct = (id) => {
    try {
      const removedProduct = favItems.filter(product => (product.id !== id));
      setFavItems(removedProduct);
    } catch(err) {
      console.log(err, "error here")
    }
  }


  const [overview,related,styles,reviews] = product;
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
        <SetFavItemsContext.Provider value={setFavItems}>
          {Object.keys(overview).length && <RelatedProduct relatedItems={related}/>}
          {!!favItems.length && <FavoriteProduct deleteFavProduct={deleteFavProduct} favItems={favItems}/>}
        </SetFavItemsContext.Provider>
        </div>

        <RatingsAndReviews product_id={40348}/>
        </FlexContainer>
      </AppContainer>
      }
    </div>
  )
}

export default App;
