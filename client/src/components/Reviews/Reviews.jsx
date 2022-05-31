import React, { useState, useEffect } from 'react'; // import useState
//import axios from 'axios';
import Review from './Review.jsx';
import Ratings from './Ratings.jsx';
import styled from 'styled-components';

const ReviewContainer = styled.div`
  height: 750px;
  overflow: scroll;
  scrollbar-width: thin;
`
const Container = styled.div`
  padding: 10px;
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
        <label>
          <b> {reviewsToRender.length} Reviews   --- sort by:</b>
          <select value={order} onChange={handleOrderChange}>
            <option value="relevant">relevance</option>
            <option value="helpful">helpfulness</option>
            <option value="newest">date</option>
          </select>
        </label>
      </div>
      <ReviewContainer>
        <div>
          {reviewsToRender.slice(0, numberToRender).map((review) => {
            return <Review key={review.review_id} review={review} />
          })}
        </div>
        {showMoreButton ? <button onClick={addToRender}> See more! </button> : 'No reviews yet  '}
        <button onClick={showModal}>Add Review +</button>
      </ReviewContainer>
    </Container>
  )

}

export default Reviews;