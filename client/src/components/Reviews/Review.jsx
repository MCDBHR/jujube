import React, {useState, useEffect} from 'react'; // import useState
import axios from 'axios';
import styled from 'styled-components';
import { format } from 'date-fns';



const StyledReview = styled.div`
  padding 10px;
  border: 2px solid black;
  margin: 4px;
`
const Header = styled.section`
  display: flex;
  color: blue;
  justify-content:space-between;
`
const Review = ({review}) => {
  //const [reviews, setReviews] = useState([]);
  const {review_id,
    rating,
    summary,
    recommend,
    response,
    body,
    date,
    reviewer_name,
    helpfulness,
    photos} = review;

    if (rating) {
      var difference = 5 - rating;
      let solidStars = ('★').repeat(rating);
      var clearStars = ('☆').repeat(difference);
      var starRender = solidStars + clearStars;
    }


  return (
    <StyledReview>
        <div>
          <Header>
            <section>{starRender}</section>
            <section> {reviewer_name}, {date} </section>
          </Header>
        </div>
        <h1> {summary} </h1>
        <p> {body ? body : ''} </p>
        <p>{recommend ? "✓ I recommend this product" : "no"}</p>
        <p>helpful: {helpfulness}</p>

    </StyledReview>
  )

}

export default Review;