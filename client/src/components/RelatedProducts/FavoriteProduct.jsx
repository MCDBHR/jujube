import React, {useEffect, useContext, useState, useRef} from 'react';
import FavoriteCard from './FavoriteCard.jsx';
import axios from 'axios';

//Import CSS
import {FlexContainer, H2, CarouselContainer, CarouselBtnContainer, CarouselBtn, CarouselInner} from '../style/RelatedProductsStyle/FlexContainer.style.js'
import {FavoriteCardContainer, AddOutfitContainer, CardButton} from '../style/RelatedProductsStyle/CardContainer.style.js'

const FavoriteProduct = (props) => {
  const [slider, setSlider] = useState(0);
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

  return (
    <CarouselContainer>
      <H2>Your Outfit</H2>
      <CarouselInner>
      <CarouselBtn onClick={prevSlider} href={`#slider-${slider}`}>&#8678;</CarouselBtn>
      <FlexContainer>
        {
          !!props.favItems.length &&
          props.favItems.map((item, index) =>
          <FavoriteCard key={item.id} slider={index} deleteFavProduct={props.deleteFavProduct} favItem={item}/>)
        }
        <FavoriteCardContainer id={`slider-${props.favItems.length}`}>
          <AddOutfitContainer>
            <div>
               <h1 onClick={props.addFavProduct}>+</h1>
               <p>Add to Outfit</p>
            </div>
          </AddOutfitContainer>
        </FavoriteCardContainer>
      </FlexContainer>
        <CarouselBtn onClick={nextSlider} href={`#slider-${slider}`}>&#8680;</CarouselBtn>
      </CarouselInner>
    </CarouselContainer>

  )
}

export default FavoriteProduct;
