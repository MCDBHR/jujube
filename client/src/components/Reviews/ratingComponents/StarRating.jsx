import React, {useState, useEffect} from 'react';
import {
  Container,
  InnerStar,
  OuterStar
} from '../../style/ReviewAndRatingStyle/StarRatingStyle.js';

const StarRating = (data) => {
  let num = parseFloat(data);
  let dataToShow = (num / 5 * 100);
  return (
    <div>
      <Container>
        <OuterStar></OuterStar>
        <InnerStar style={{ width: num / 5 * 100  }}></InnerStar>
      </Container>
    </div>
  )
}

export default StarRating;