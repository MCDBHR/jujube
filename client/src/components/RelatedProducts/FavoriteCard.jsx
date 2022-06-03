import React, {useState, useContext} from 'react';
import {SetFavItemsContext} from '../App.jsx';

//CSS
import {FavoriteCardContainer, CardButton, CardInfoDiv, ImageContainer, CardElement} from '../style/RelatedProductsStyle/CardContainer.style.js'

const FavoriteCard = (props) => {
  const setFavItems = useContext(SetFavItemsContext);

  const removeFavItem = () => {
    props.deleteFavProduct(props.favItem.id);
  }

  // Need styles picture to be called from App component
  return(
    <FavoriteCardContainer id={'slider-' + props.slider}>
      <ImageContainer>
        <img style={{objectFit: "cover", width: "100%", height: "100%"}} src={props.favItem.thumbnailURL} alt=""/>
        <CardButton onClick={removeFavItem}>X</CardButton>
      </ImageContainer>
      <CardInfoDiv>
         <CardElement>{props.favItem.category}</CardElement>
         <CardElement>{props.favItem.name}</CardElement>
         <CardElement>$ {props.favItem.default_price}</CardElement>
      </CardInfoDiv>
    </FavoriteCardContainer>
  )
}

export default FavoriteCard;