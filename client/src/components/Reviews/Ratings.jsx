import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacteristicBar from './ratingComponents/CharacteristicBar.jsx';
import RatingBar from './ratingComponents/RatingBar.jsx';
import StarRating from './ratingComponents/StarRating.jsx';
import styled from 'styled-components';

const RatingAndStarsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const DisplayText = styled.h1`
  font-size: 40px;
  letter-spacing: 3px;
  margin: 0;

`
const Ratings = ({ characteristics, ratings, recommended, setDisplayRatingFilter, displayRatingFilter}) => {


  let [displayRating, setDisplayRating] = useState(0);
  let [displayText, setDisplayText] = useState(0);
  let [recommendedRating, setRecommendedRating] = useState(0)

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

    let recommendYes = parseInt(recommended.true);
    let recommendNo = parseInt(recommended.false);
    let recTotal = recommendNo + recommendYes;
    let recommendedAverage = Math.round((recommendYes / recTotal * 100).toFixed(3));
    setRecommendedRating(recommendedAverage);

  })

  return (
    <div>
      <RatingAndStarsContainer>
        <DisplayText>{displayText}</DisplayText>
        <StarRating data={displayRating} />
      </RatingAndStarsContainer>
      <p style={{fontFamily:'Petrona'}}> {recommendedRating}% recommends this product</p>
      <div>
        <RatingBar data={ratings}
                   setDisplayRatingFilter={setDisplayRatingFilter}
                   displayRatingFilter={displayRatingFilter}/>
        <CharacteristicBar data={characteristics} />
      </div>

    </div>
  )

}

export default Ratings;