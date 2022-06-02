// const [favItems, setFavItems] = useState([])
//   useEffect(() => {
//     const parsedItems = JSON.parse(localStorage.getItem('favItems'));

//     setFavItems(parsedItems);
//   }, [])

import React, {useEffect, useContext, useState, useRef} from 'react';
import FavoriteCard from './FavoriteCard.jsx';
import axios from 'axios';

//Import CSS
import {FlexContainer, H2} from '../style/RelatedProductsStyle/FlexContainer.style.js'
import {RelatedCardContainer, AddOutfitContainer} from '../style/RelatedproductsStyle/RelatedCardContainer.style.js'

const FavoriteProduct = (props) => {
  // const [favItems, setFavItems] = useState([])
  const [slider, setSlider] = useState(0);
  // useEffect(() => {
  //   const parsedItems = JSON.parse(localStorage.getItem('favItems'));
  //   setFavItems(parsedItems);
  // }, [])
  const [forwardLast, setForwardLast] = useState(false);
  const cardOffset = useRef(4);

  const nextSlider = () => {
    if(slider < props.favItems.length) {
      if(!forwardLast) {
        setSlider(prevState => prevState + cardOffset.current);
        setForwardLast(true);
      } else {
        setSlider(prevState => prevState + 1);
        setForwardLast(true);
      }

    }
  }

  const prevSlider = () => {
    if(slider > 0) {
      if(forwardLast) {
        setSlider(prevState => prevState - cardOffset.current);
        setForwardLast(false);
      } else {
        setSlider(prevState => prevState - 1);
        setForwardLast(false);
      }
    }

  }
  // It needs to add the product that we are currently on
  return (
    <div>
      <H2>Your Outfit</H2>
      <FlexContainer>
        {
          !!props.favItems.length &&
          props.favItems.map((item, index) =>
          <FavoriteCard key={item.id} slider={index} deleteFavProduct={props.deleteFavProduct} favItem={item}/>)
        }
        <CardContainer id={`slider-${props.favItems.length}`}>
          <AddOutfitContainer>
            <div>
               <h1 onClick={props.addFavProduct}>+</h1>
               <p>Add to Outfit</p>
            </div>
          </AddOutfitContainer>
        </CardContainer>
      </FlexContainer>
      <a onClick={prevSlider} href={`#slider-${slider}`}>Prev</a>
      <a onClick={nextSlider} href={`#slider-${slider}`}>Next</a>

    </div>

  )
}

export default FavoriteProduct;
