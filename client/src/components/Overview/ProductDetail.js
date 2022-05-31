import React, { useEffect, useState } from 'react';
import FlexContainer from '../style/Flexbox';
import StarRatings from '../style/StarRatings.js'
const ProductDetail = ({overview,reviews}) => {
  const { name, category, id,description } = overview;

  return(
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


  )
}

export default ProductDetail;