import React from 'react';
import styled from 'styled-components';
import Flexbox from '../style/Flexbox';
import { useState, useEffect } from 'react';
import StarRating from '../Reviews/ratingComponents/StarRating.jsx';

const StarGenerator = ({ratings}) => {
  let [displayRating, setDisplayRating] = useState(0);
  let [displayText, setDisplayText] = useState(0);

   useEffect(() => {
    let starRating = Object.keys(ratings);

    let total = 0;
    let starTotal = 0;
    for (let stars of starRating) {
      total += parseInt(ratings[stars], 0);
      starTotal += ratings[stars] * stars;
    }
    let number = (Math.round((starTotal / total) * 4) / 4).toFixed(2);
    setDisplayRating(number);
    let recommendedAverageDisplay = Math.round(number * 10) / 10;
    setDisplayText(recommendedAverageDisplay);
  }, []);

  return(
    <div>
      {StarRating(displayRating)}
      {displayText}
    </div>
  )
}

export default StarGenerator;