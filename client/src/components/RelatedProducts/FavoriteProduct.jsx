// const [favItems, setFavItems] = useState([])
//   useEffect(() => {
//     const parsedItems = JSON.parse(localStorage.getItem('favItems'));

//     setFavItems(parsedItems);
//   }, [])

import React, {useEffect, useContext, useState} from 'react';
import FavoriteCard from './FavoriteCard.jsx';
import axios from 'axios';

//Import CSS
import {FlexContainer, H2} from '../style/RelatedProductsStyle/FlexContainer.style.js'
import {RelatedCardContainer, AddOutfitContainer} from '../style/RelatedproductsStyle/RelatedCardContainer.style.js'

const FavoriteProduct = (props) => {
  // const [favItems, setFavItems] = useState([])
  // useEffect(() => {
  //   const parsedItems = JSON.parse(localStorage.getItem('favItems'));
  //   setFavItems(parsedItems);
  // }, [])


  // It needs to add the product that we are currently on
  return (
    <div>
      <H2>Your Outfit</H2>
      <FlexContainer>
        {
          !!props.favItems.length &&
          props.favItems.map(item =>
          <FavoriteCard key={item.id} deleteFavProduct={props.deleteFavProduct} favItem={item}/>)
        }
        <RelatedCardContainer>
          <AddOutfitContainer>
            <div>
               <h1 onClick={props.addFavProduct}>+</h1>
               <p>Add to Outfit</p>
            </div>
          </AddOutfitContainer>
          </RelatedCardContainer>
      </FlexContainer>
    </div>

  )
}

export default FavoriteProduct;
