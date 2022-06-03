import React, {useContext, useState} from 'react';
import {SetFavItemsContext, HandleCompareContext} from '../App.jsx';
import {Link} from 'react-router-dom';

//CSS
import {CardContainer, CardButton, CardInfoDiv, ImageContainer, CardElement} from '../style/RelatedProductsStyle/CardContainer.style.js';

const RelatedCard = (props) => {
  const handleCompare = useContext(HandleCompareContext);
  const setFavItems = useContext(SetFavItemsContext);

  const handleOnClickFav = (e) => {

    if(!localStorage.getItem('favItems')) {
      localStorage.setItem('favItems', JSON.stringify([props.relatedProduct]));
    } else {
      const parsedItems = JSON.parse(localStorage.getItem('favItems'));

      let hasDuplicateItem = false;
      for(let i = 0; i < parsedItems.length; i++) {
        if(parsedItems[i].id === props.relatedProduct.id) {
          hasDuplicateItem = true;
          break;
        }
      }

      if(!hasDuplicateItem) {
        const productWithImg = {...props.relatedProduct, thumbnailURL: props.productImg}
        parsedItems.push(productWithImg);

        //Re-renders state with new product
        setFavItems(parsedItems);
        localStorage.setItem('favItems', JSON.stringify(parsedItems));
      }

    }
  }

  return(
    <CardContainer id={"relatedSlider-" + props.slider}>
      <ImageContainer>
        <Link to={`/products/${props.relatedProduct.id}`}>
           <img style={{objectFit: "cover", width: "100%", height: "100%"}} src={props.productImg} alt=""/>
        </Link>
        <CardButton onClick={() => {handleCompare(props.relatedProduct)}}>{"\u2731"}</CardButton>
      </ImageContainer>
      <CardInfoDiv>
         <CardElement>{props.relatedProduct.category}</CardElement>
         <CardElement>{props.relatedProduct.name}</CardElement>
         <CardElement>$ {props.relatedProduct.default_price}</CardElement>
      </CardInfoDiv>
    </CardContainer>
  )
}

export default RelatedCard;