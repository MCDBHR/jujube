import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
import Ratings from './Ratings.jsx';
import {
  ReviewContainer,
  Container,
  SortingContainer,
  DropDownContainer,
  Button
} from '../style/ReviewAndRatingStyle/AllReviewsStyle.js';


const Reviews = ({ reviews, order, setOrder, showModal, filter, setUpdate }) => {
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
      <SortingContainer>
        <p style={{fontFamily:'Petrona', fontWeight: 'bold'}}> {reviewsToRender.length} Reviews   --- sort by:  </p>
        <DropDownContainer  value={order} onChange={handleOrderChange}>
          <option style={{fontFamily:'Petrona', fontWeight: '500'}} value="relevant">relevance</option>
          <option style={{fontFamily:'Petrona', fontWeight: '500'}} value="helpful">helpfulness</option>
          <option style={{fontFamily:'Petrona', fontWeight: '500'}} value="newest">date</option>
        </DropDownContainer>
      </SortingContainer>
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