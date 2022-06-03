import React, { useState, useEffect } from 'react'; // import useState
//import axios from 'axios';
import Review from './Review.jsx';
import Ratings from './Ratings.jsx';
import styled from 'styled-components';

const ReviewContainer = styled.div`
  max-height: 620px;
  overflow: scroll;
  margin-right:20px;
  scrollbar-width: thin;
  scrollbar-color: #f9d4d3 #f35a64;
`
const Container = styled.div`
  padding: 20px;
`
const Button = styled.button`
  margin-right: 10px;
  background-color: #f9d4d3;
  border: 2px solid #f35a64;
  border-radius: 30px;
  box-shadow: #cf2b2a 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 10px;
  padding: 5 15px;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  z-index: 5;

  :hover {
    background-color: #f35a64;
  }
  @media (min-width: 768px) {
    min-width: 120px;
    padding: 0 25px;
  }
`


const Reviews = ({ reviews, order, setOrder, showModal, filter }) => {
  let [numberToRender, setNumberToRender] = useState(2);
  let [showMoreButton, setShowMoreButton] = useState(true);
  let [reviewsToRender, setReviewsToRender] = useState(reviews);
  let [allReviews, setAllReviews] = useState(null);

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  }

  const addToRender = (event) => {
    setNumberToRender(numberToRender += 2);
    if (numberToRender >= reviews.length) {
      setShowMoreButton(false);
    }
  }
  useEffect(() => {
    setReviewsToRender(reviews);
  }, [reviews])

  useEffect (() => {
    if (filter.length !== 0 ) {
      const selectedReviews = reviews.filter((review) => filter.includes(review.rating.toString()));
      setReviewsToRender(selectedReviews)
      if (selectedReviews.length < 2) {
        setShowMoreButton(false);
      } else {
        setShowMoreButton(true);
      }
    } else {
      setReviewsToRender(reviews);
    }
  }, [filter])

  return (
    <Container>
      <div>
          <h3 style={{fontFamily:'Shrikhand'}}> {reviewsToRender.length} Reviews   --- sort by:</h3>
          <select value={order} onChange={handleOrderChange}>
            <option value="relevant">relevance</option>
            <option value="helpful">helpfulness</option>
            <option value="newest">date</option>
          </select>
      </div>
      <ReviewContainer>
        <div>
          {reviewsToRender.slice(0, numberToRender).map((review) => {
            return <Review key={review.review_id} review={review} />
          })}
        </div>
      </ReviewContainer>
        {showMoreButton ? <Button onClick={addToRender}> See more! </Button> : 'No reviews yet  '}
        <Button onClick={showModal}>Add Review +</Button>
    </Container>
  )

}

export default Reviews;