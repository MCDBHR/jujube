import React, {useState, useContext} from 'react';
import {SetFavItemsContext} from '../App.jsx';

//CSS
import {RelatedCardContainer} from '../style/RelatedproductsStyle/RelatedCardContainer.style.js'

const FavoriteCard = (props) => {
  const setFavItems = useContext(SetFavItemsContext);

  const removeFavItem = () => {
    props.deleteFavProduct(props.favItem.id);
  }

  // Need styles picture to be called from App component
  return(
    <CardContainer id={'slider-' + props.slider}>
      <div style={{width: "250px", height: "325px"}}>
        <img style={{objectFit: "cover", width: "100%", height: "100%"}} src={props.favItem.thumbnailURL} alt=""/>
      </div>
      <div style={{padding: "0px 10px"}}>
         <div>{props.favItem.category}</div>
         <div>{props.favItem.name}</div>
         <div>$ {props.favItem.default_price}</div>
         <button onClick={removeFavItem}>Delete</button>
      </div>
    </CardContainer>
  )
}

export default FavoriteCard;