import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  BarContainer,
  Bar,
  FilledData,
  StarRatingNum,
  Count
} from '../../style/ReviewAndRatingStyle/RatingBarStyle.js';

const RatingBar = ({ data, setDisplayRatingFilter, displayRatingFilter }) => {
  let [total, setTotal] = useState(0)
  let dataValues = Object.values(data);
  let dataKeys = Object.keys(data);

  useEffect(() => {
    let totalRatings = 0
    for (let value of dataValues) {
      value = parseInt(value);
      totalRatings += value;
    }
    setTotal(totalRatings)
  })

  return (
    <Container>
      {dataKeys.map((key, i) => {
        return (
          <BarContainer key={i} onClick={() => {
            let index = displayRatingFilter.indexOf(key);
            if (index === -1) {
              setDisplayRatingFilter([...displayRatingFilter, key])
            } else {
              let modified = [...displayRatingFilter];
              modified.splice(index, 1);
              setDisplayRatingFilter(modified);
            }
          }}>
            <StarRatingNum>{`${key} stars`} </StarRatingNum>
            <Bar>
              <FilledData width={(data[key]) / total * 100}></FilledData>
            </Bar>
            <Count>
              {data[key]}
            </Count>
          </BarContainer>
        )
      })}
    </Container>
  )

}

export default RatingBar;