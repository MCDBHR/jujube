import React, { useState, useEffect, useRef}  from 'react';
import Overview from './Overview'
import axios from 'axios';
import { Nav, Navheader,NavList } from './style/NavStyle.js';
import FlexContainer from './style/Flexbox.js';
import AppContainer from './style/AppContainer.js';
import RatingsAndReviews from './Reviews/RatingsAndReviews.jsx';
import RelatedProduct from './RelatedProducts/RelatedProduct.jsx';
import FavoriteProduct from './RelatedProducts/FavoriteProduct.jsx';
import Modal from './RelatedProducts/Modal.jsx';
import {useParams} from 'react-router-dom';

export const SetFavItemsContext = React.createContext();
export const HandleCompareContext = React.createContext();

const App = (props) => {
  const [product, setProduct] = useState([]);
  const [favItems, setFavItems] = useState([]);
  const [compareProduct, setCompareProduct] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [overview, related, styles, reviews, metaReview] = product;
  const {id} = useParams();

  useEffect(() => {
    axios.get(`/api/products/${id}/all`)
    .then((res) => {
      //returns an array of all URL calls
      setProduct(res.data);
      window.scrollTo(0, 0);
    }).catch(err => console.log(err, 'error in api'));
    const parsedItems = JSON.parse(localStorage.getItem('favItems'));
    setFavItems(parsedItems);
  }, [id]);

  useEffect(() => {
    localStorage.setItem('favItems', JSON.stringify(favItems));
  }, [favItems])

  const addFavProduct = () => {
    const overviewWithImg = {...overview, thumbnailURL: styles.results[0].photos[0].url}

    if(!favItems.length) {
      localStorage.setItem('favItems', JSON.stringify([overviewWithImg]));
      setFavItems([overviewWithImg]);
    } else {
      let hasDuplicateItem = false;
      for(let i = 0; i < favItems.length; i++) {
        if(favItems[i].id === overview.id) {
          hasDuplicateItem = true;
          break;
        }
      }

      if(!hasDuplicateItem) {
        setFavItems((prevState) => {
          return prevState.concat(overviewWithImg);
        });
      }
    }
  }

  const deleteFavProduct = (id) => {
      const removedProduct = favItems.filter(product => (product.id !== id));
      setFavItems(removedProduct);
  }

  const handleCompare = (relatedProduct) => {
    setCompareProduct(relatedProduct);
    setShowModal(true);
  }

  return (
    <div style={{ position: 'relative' }}>
      <Nav>
        <Navheader>
          <img src='https://res.cloudinary.com/thejoebro/image/upload/v1654208478/rli7stbb7rwvyv0tya1x.png' height='100'></img>
        </Navheader>
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
            <HandleCompareContext.Provider value={handleCompare}>
            {Object.keys(overview).length && <RelatedProduct id='related' mainProduct={overview} relatedItems={related}/>}
            </HandleCompareContext.Provider>
            {showModal && <Modal showModal={showModal} setShowModal={setShowModal} relatedProduct={compareProduct} mainProduct={overview}/>}
          {<FavoriteProduct addFavProduct={addFavProduct} deleteFavProduct={deleteFavProduct} favItems={favItems}/>}
        </SetFavItemsContext.Provider>
        </div>
        <RatingsAndReviews product_id={overview.id} name={overview.name}/>
        </FlexContainer>
      </AppContainer>
      }
    </div>
  )
}
export default App;