import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const BarContainer = styled.div`
  display: flex;
  padding: 3px;
  border-radius: 8px;
  flex-direction: row;
  margin: 0.5em 0 0.5em 0;
  align-items: center;
  &:hover {
    background-color: #f9d4d3;
  }
`;

const Bar = styled.div`
  display: flex;
  border-radius: 4px;
  background-color: #ec9c94;
  color: white;
  height: 1em;
  width: 100%;
`;

const FilledData = styled.div`
  background-color: #cf2b2a;
  z-index:2;
  border-radius: 4px;
  width: ${({ width }) => width}%;
  height: 1em;
  `
const StarRatingNum = styled.div`
  font-size: .9em;
  width: 20%;
  font-weight: bold
  font-family: 'Rubik';
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
  console.log(dataKeys);

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