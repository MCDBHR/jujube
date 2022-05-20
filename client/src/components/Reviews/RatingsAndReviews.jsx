import React from 'react';
import Reviews from './Reviews.jsx';
import Ratings from './Ratings.jsx';
import styled from 'styled-components';

const RatingsAndReviews = ({product_id}) => {

  const Container = styled.div`
    display: inline-block;
    width: fit-content;
  `

  return (
    <Container>
      <div>
        <Ratings product_id={product_id}/>
      </div>
      <div>
        <Reviews product_id={product_id}/>
      </div>
    </Container>
  )

}

export default RatingsAndReviews;