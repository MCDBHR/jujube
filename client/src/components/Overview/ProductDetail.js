import React, { useEffect, useState } from 'react';
const axios = require('axios');
import FlexContainer from '../style/Flexbox';
import StarRatings from '../style/StarRatings.js'
import ProductDetailsContainer from '../style/ProductDetailStyle'
import styled from 'styled-components';
import StarGenerator from './StarGenerator'
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

  return(
    <ProductDetailsContainer direction="column" gap="1.5em">
      <FlexContainer direction="column" gap="0">
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
      </FlexContainer>
      <FlexContainer direction="column" gap="0">
        <div>
          <StarGenerator ratings={metaReview.ratings} />
        </div>
        {!!reviewsCount && <LinkStyle style={{ fontSize: '.8em' }} href="#reviews">Read {reviewsCount} reviews</LinkStyle>}
      </FlexContainer>
    </ProductDetailsContainer>
  )
}

export default ProductDetail;