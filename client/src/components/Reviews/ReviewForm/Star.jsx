import React from 'react';
import {useState, useEffect} from 'react'; // import useState
import styled from 'styled-components';
import {FaStar} from 'react-icons/fa';

const starMeaning = [
  'Poor',
  'Fair',
  'Average',
  'Good',
  'Great'
];

const AllStarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StarAndLabelContainer = styled.div`
  flex-direction: column;
`

const RadioStar = styled.input`
  display: none;
`
const CenterStar = styled.label`
  display: flex;
  justify-content: center;
`


const Star = ({rating, setRating}) => {
  const [hover, setHover] = useState(null)

  return (
    <AllStarContainer>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
            <StarAndLabelContainer key={index}>
              <CenterStar>
                <RadioStar type='radio'
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}/>
                <FaStar size={20}
                        onMouseEnter = {() => setHover(ratingValue)}
                        onMouseLeave = {() => setHover(null)}
                        color={ratingValue <= (hover || rating) ? 'yellow' : 'grey'}/>
              </CenterStar>
            <div>
              <small>{starMeaning[index]}</small>
            </div>
          </StarAndLabelContainer>
        );
      })}
    </AllStarContainer>
  );
};

export default Star;