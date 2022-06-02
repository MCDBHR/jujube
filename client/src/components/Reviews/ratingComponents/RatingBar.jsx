import React, { useState, useEffect } from 'react'; // import useState
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`
const BarContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5em 0 0.5em 0;
  align-items: center;
  &:hover {
    background-color: green;
  }
`;

const Bar = styled.div`
  display: flex;
  background-color: #e6e6e6;
  color: white;
  height: 0.9em;
  width: 100%;
`;

const FilledData = styled.div`
  background-color: #9bde90;
  z-index:2;
  width: ${({ width }) => width}%;
  height: 0.9em;
  `
const StarRatingNum = styled.div`
  font-size: .9em;
  width: 20%;
  text-decoration: underline;
`;

const Count = styled.p`
  font-size: 0.8em;
  padding: 0 0 0 0.7em;
`;

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