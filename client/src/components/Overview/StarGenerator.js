import React from 'react';
import styled from 'styled-components';
import Flexbox from '../style/Flexbox';
import {AiFillStar,AiOutlineStar} from 'react-icons/Ai'

/*-----------STYLING----------------*/
const RatingBox = styled.div`
  display: inline-block;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 90px;
  line-height: 1;
  + span {
    line-height: 1;
  }
`;

const StarsContainer = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bar = styled.span`
  width: ${(props) => props.width};
  height: 100%;
  background-color: #f5f5f5;
  position: absolute;
  top: 0;
  right: 0;
  white-space: nowrap;
  overflow: hidden;
`;

const StarGenerator= ({ratings}) => {

  const allRatingsArr = Object.values(ratings).reduce((values, rating) => {
    values.push(Number(rating));
    return values;
  }, []);

  const ratingsTotal = allRatingsArr.reduce((sum,rating) => sum+rating, 0)
  const weighted = allRatingsArr.reduce((total,rating,i) =>  total + (rating * (i + 1)), 0)
  const average = weighted / ratingsTotal
  const barWidth = `${100 - (average / 5) * 100}%`;

  return(
    <Flexbox direction="row" justify="flex-start" align="center" gap=".5em">
      <RatingBox >
        <StarsContainer>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </StarsContainer>
      <Bar width={barWidth} id="bar"/>
        <StarsContainer>
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </StarsContainer>
      </RatingBox>
      <span style={{ fontWeight: 'bold',color:'black' }}>Rating: {average.toFixed(1)}</span>
    </Flexbox>
  )
}

export default StarGenerator;