import React, { useEffect, useState } from 'react';
import Flexbox from '../style/Flexbox';
import ProductDetailsContainer from '../style/ProductDetailStyle'
import styled from 'styled-components';
import StarGenerator from './StarGenerator';
import {AiFillTwitterSquare,AiFillInstagram,AiFillFacebook} from 'react-icons/Ai';
const axios = require('axios');
const LinkStyle = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  &:visited {
    color: grey;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    color:red
  }
`;


const ProductDetail = ({overview,reviews,metaReview}) => {
  const { name, category, id, description } = overview;
  const [reviewsCount, setReviewsCount] = useState(null);
  useEffect(() => {
    axios.get(`/reviews/`,{params:{product_id:id,sort:'relevant',count:10000 }}).then((res) => {
      setReviewsCount(res.data.length);
    });
  }, []);
  const twitterClick = () => {
    window.open('https://twitter.com/intent/tweet', 'Twitter')
  }
  const fbClick = () => {
    window.open('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com', 'Facebook');
  }
  const insClick = () => {
    window.open('https://www.pinterest.com/pin-builder/', 'Pinterest');
  }
  return(
    <ProductDetailsContainer direction="column" gap="1.5em">
      <Flexbox direction="column" gap="0">
        <span style={{
          fontSize: '.85em',
          opacity: '.8',
          textTransform: 'uppercase',
          marginBottom: '-15px',
          letterSpacing: '.2em',
        }}
        >
          {category}
        </span>
        <h1>{name}</h1>
        <span style={{
          fontStyle:'italic'
        }}
        >{description}</span>
      </Flexbox>
      <Flexbox style={{marginRight:"20px"}} direction="column" gap="0">
        <Flexbox direction="row" gap="0">
          <StarGenerator ratings={metaReview.ratings} />
          <AiFillTwitterSquare style={{cursor: "pointer"}} size="30px" onClick={twitterClick}/>
          <AiFillFacebook style={{cursor: "pointer"}} size="30px" onClick={fbClick}/>
          <AiFillInstagram style={{cursor: "pointer"}} size="30px" onClick={insClick}/>
        </Flexbox>
        {!!reviewsCount && <LinkStyle style={{ fontSize: '.8em' }} href="#ratings-reviews">Read {reviewsCount} reviews</LinkStyle>}
      </Flexbox>
    </ProductDetailsContainer>
  )
}

export default ProductDetail;