import React, {useState, useEffect} from 'react'; // import useState
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
  width: ${({width}) => width}%;
  height: 0.9em;
  `
const StarRatingNum = styled.div`
  font-size: .7em;
  width: %;
  text-decoration: underline;
`;

const RatingBar = ({data}) => {
  let [largestRating, setLargestRating] = useState(0)

  let dataValues = Object.values(data);
  let dataKeys = Object.keys(data);

  for (let value of dataValues) {
    value = parseInt(value);
    if (largestRating < value) {
      setLargestRating(value);
    }
  }

  return (

    <Container>
      {dataKeys.map((key) => {
        return (
          <BarContainer>
            <StarRatingNum>{`${key} stars`} </StarRatingNum>
            <Bar>
              <FilledData width={(data[key]) / largestRating * 100}></FilledData>
            </Bar>
          </BarContainer>


        )
      })}

    </Container>
  )

}

export default RatingBar;