import React from 'react';
import {useState, useEffect} from 'react';
import {FaStar} from 'react-icons/fa';
import {
  AllStarContainer,
  StarAndLabelContainer,
  RadioStar,
  CenterStar
} from '../../style/ReviewAndRatingStyle/FormStyle/StarSelectStyle.js';

const starMeaning = [
  'Poor',
  'Fair',
  'Average',
  'Good',
  'Great'
];

const Star = ({rating, setRating}) => {
  const [hover, setHover] = useState(null)

  return (
    <>
      <div>Overall Rating *</div>
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
                          color={ratingValue <= (hover || rating) ? '#cf2b2a' : 'grey'}/>
                </CenterStar>
              <div>
                <small>{starMeaning[index]}</small>
              </div>
            </StarAndLabelContainer>
          );
        })}
      </AllStarContainer>
    </>
  );
};

export default Star;