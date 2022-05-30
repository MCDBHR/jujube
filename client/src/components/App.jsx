import React, { useState, useEffect, useRef}  from 'react';
import Overview from './Overview'
import axios from 'axios';
import { Nav } from './style/NavStyle.js';
import FlexContainer from './style/Flexbox.js';
import AppContainer from './style/AppContainer.js';
import RatingsAndReviews from './Reviews/RatingsAndReviews.jsx';
import RelatedProduct from './RelatedProducts/RelatedProduct.jsx';
import FavoriteProduct from './RelatedProducts/FavoriteProduct.jsx';


export const SetFavItemsContext = React.createContext();

const App = (props) => {
  const [product, setProduct] = useState([]);
  const [favItems, setFavItems] = useState([]);

  const [overview, related, styles, reviews] = product;


  useEffect(() => {
    console.log(props, 'PROPS HERE')
    axios.get('/products/40347').then((res) => {
      //returns an array of all URL calls
      setProduct(res.data);
    });
    //Setting Favorite Item state
    const parsedItems = JSON.parse(localStorage.getItem('favItems'));
    setFavItems(parsedItems);
  }, []);

  //Every time favItem state changes, also update localStorage to reflect
  useEffect(() => {
    localStorage.setItem('favItems', JSON.stringify(favItems));
  }, [favItems])

  const addFavProduct = () => {

    const overviewWithImg = {...overview, thumbnailURL: styles.results[0].photos[0].thumbnail_url}

    if(!favItems.length) {
      localStorage.setItem('favItems', JSON.stringify([overviewWithImg]));
      setFavItems([overviewWithImg]);
    } else {
      //We need to check if the item has already been favorited
      //If had a large data structure we could use a hash table
      let hasDuplicateItem = false;
      for(let i = 0; i < favItems.length; i++) {
        if(favItems[i].id === overview.id) {
          hasDuplicateItem = true;
          break;
        }
      }

      if(!hasDuplicateItem) {
        //Re-renders state with new product
        console.log("WE ARE REDOING")
        setFavItems((prevState) => {
          console.log(prevState, 'prev State');
          return prevState.concat(overviewWithImg);
        });
        //localStorage.setItem('favItems', JSON.stringify(parsedItems));
      }

    }


  }

  const deleteFavProduct = (id) => {
    try {
      const removedProduct = favItems.filter(product => (product.id !== id));
      setFavItems(removedProduct);
    } catch(err) {
      console.log(err, "error here")
    }
  }



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
        <SetFavItemsContext.Provider value={setFavItems}>
          {Object.keys(overview).length && <RelatedProduct relatedItems={related}/>}
          {<FavoriteProduct addFavProduct={addFavProduct} deleteFavProduct={deleteFavProduct} favItems={favItems}/>}
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
