import React, {useEffect, useContext, useState, useRef} from 'react';
import RelatedCard from './RelatedCard.jsx'
import axios from 'axios';

//CSS
import {FlexContainer, H2, CarouselContainer, CarouselBtnContainer, PrevCarouselBtn, NextCarouselBtn, CarouselInner} from '../style/RelatedProductsStyle/FlexContainer.style.js'

const RelatedProduct = (props) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [styles, setStyles] = useState([]);

  const [slider, setSlider] = useState(0);
  const [forwardLast, setForwardLast] = useState(false);
  const cardOffset = useRef(4);

  useEffect(() => {
    const uniqueRelatedItems = [...new Set(props.relatedItems)];
    const productStylesPromise =
    uniqueRelatedItems.map(id => axios.get(`/api/products/${id}/styles`));

    Promise.all(productStylesPromise)
      .then(results => {
        const stylesProductsImg = results.map(product => {
          if(!product.data.results[0].photos[0].url) {
            return 'https://citroen.navigation.com/static/WFS/Shop-CitroenEMEA-Site/-/Shop/en_US/Product%20Not%20Found.png'
          } else {
            return product.data.results[0].photos[0].url
          }
        })
        setStyles(stylesProductsImg);
      })
      .catch(err => console.log(err, 'Error in Promise'))

    const relatedProductsPromise =
    uniqueRelatedItems.map(id => axios.get(`/api/products/${id}`));

    Promise.all(relatedProductsPromise)
      .then(results => {
        const relatedProductsData = results.map(product => product.data)
        setRelatedProducts(relatedProductsData);
      }).catch(err => {
        console.log(err)
      })
  }, [props.relatedItems]);

  const nextSlider = () => {
    if(slider < props.relatedItems.length) {
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
      <H2>Related Products</H2>
      <CarouselInner>
      <PrevCarouselBtn slider={slider} onClick={prevSlider}
       href={`#relatedSlider-${slider}`}>&#8678;</PrevCarouselBtn>
       <FlexContainer>
         {relatedProducts.map((item, index) =>
            <RelatedCard slider={index} productImg={styles[index]} relatedProduct={item} key={item.id}/>
         )}
       </FlexContainer>
        <NextCarouselBtn slider={slider} onClick={nextSlider} length={relatedProducts.length}
        href={`#relatedSlider-${slider}`}>&#8680;</NextCarouselBtn>
      </CarouselInner>
    </CarouselContainer>
  )
}

export default RelatedProduct;
