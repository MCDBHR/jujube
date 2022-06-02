import React, { useState, useEffect, useRef}  from 'react';
import Overview from './Overview'
import axios from 'axios';
import { Nav,Navheader,NavList } from './style/NavStyle.js';
import FlexContainer from './style/Flexbox.js';
import AppContainer from './style/AppContainer.js';
import RatingsAndReviews from './Reviews/RatingsAndReviews.jsx';
import RelatedProduct from './RelatedProducts/RelatedProduct.jsx';
import FavoriteProduct from './RelatedProducts/FavoriteProduct.jsx';
import {useParams} from 'react-router-dom';

export const SetFavItemsContext = React.createContext();

const App = (props) => {
  const [product, setProduct] = useState([]);
  const [favItems, setFavItems] = useState([]);

  const [overview, related, styles, reviews, metaReview] = product;
  const {id} = useParams();


  //Figure out how to make the second comp a componentWillUpdate instead
  //because right now both useEffects are running

  //before our URL links would go into the backend, but now the new URL,
  //serves our react app router, which then calls our comp with the new,
  //param and then it makes the call to the server
  // useEffect(() => {
  //   axios.get(`/products/${props.id}`).then((res) => {
  //     //returns an array of all URL calls
  //     setProduct(res.data);
  //   });
  //   //Setting Favorite Item state
  //   const parsedItems = JSON.parse(localStorage.getItem('favItems'));
  //   setFavItems(parsedItems);
  // }, []);

  useEffect(() => {
    axios.get(`/products/${id}`)
    .then((res) => {
      //returns an array of all URL calls
      console.log('We are in here!')
      setProduct(res.data);
      //Move to top of the page
      window.scrollTo(0, 0);
    }).catch(err => console.log(err, 'error in api'));
    //Setting Favorite Item state
    const parsedItems = JSON.parse(localStorage.getItem('favItems'));
    setFavItems(parsedItems);
  }, [id]);

  // const status = useRef();
  // useEffect(() => {
  //   if(!status.current) {
  //     console.log('IN CURRENT')
  //     axios.get(`/products/${props.id}`).then((res) => {
  //      //returns an array of all URL calls
  //       setProduct(res.data);
  //     });
  //     //Setting Favorite Item state
  //     const parsedItems = JSON.parse(localStorage.getItem('favItems'));
  //     setFavItems(parsedItems);
  //     status.current = true;
  //   } else {
  //      axios.get(`/products/${id}`)
  //       .then((res) => {
  //      //returns an array of all URL calls
  //      console.log('We are in here!')
  //      setProduct(res.data);
  //   }).catch(err => console.log(err, 'error in api'));
  //      //Setting Favorite Item state
  //      const parsedItems = JSON.parse(localStorage.getItem('favItems'));
  //      setFavItems(parsedItems);
  //   }
  // }, [id])

  //Every time favItem state changes, also update localStorage to reflect
  useEffect(() => {
    localStorage.setItem('favItems', JSON.stringify(favItems));
  }, [favItems])

  const addFavProduct = () => {
    const overviewWithImg = {...overview, thumbnailURL: styles.results[0].photos[0].url}

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
        setFavItems((prevState) => {
          console.log(prevState, 'prev State');
          return prevState.concat(overviewWithImg);
        });
        //localStorage.setItem('favItems', JSON.stringify(parsedItems));
      }
    }
  }

  const deleteFavProduct = (id) => {
      const removedProduct = favItems.filter(product => (product.id !== id));
      setFavItems(removedProduct);
  }



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