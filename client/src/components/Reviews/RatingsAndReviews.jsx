import React from 'react';
import {useState, useEffect} from 'react'; // import useState
import CreateReview from './ReviewForm/CreateReview.jsx';
import Reviews from './Reviews.jsx';
import Ratings from './Ratings.jsx';
import styled from 'styled-components';
import axios from 'axios';



const RatingsAndReviews = ({product_id}) => {
  //------------REVIEWS STATE---------------
  const [reviews, setReviews] = useState(null);
  const [order, setOrder] = useState("relevant");

  //------------RATINGS STATE ----------------
  const [characteristics, setCharacteristics] = useState({});
  const [ratings, setRatings] = useState({});
  const [recommended, setRecommended] = useState({});

  useEffect(() => {
    let config = {
      headers: {'Authorization': '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'},
      params: {'product_id': product_id,
                    'sort' : order,
                    'count': 9999}
    };
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews', config)
      .then((reviews) => {
        console.log(reviews);
        let reviewsList = reviews.data.results;
        setReviews(reviewsList);
      })
      .then(() => {
        axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/meta', config)
          .then((reviews) => {
            console.log(reviews);
            setCharacteristics(reviews.data.characteristics);
            setRatings(reviews.data.ratings);
            setRecommended(reviews.data.recommended)
          })
      })
  }, [order]);


  if (reviews && characteristics !== {}) {
    return (
      <div>
        <div>
          <Ratings characteristics={characteristics} ratings={ratings} recommended={recommended}/>
        </div>
        <div>
          <Reviews reviews={reviews} order={order} setOrder={setOrder}/>
        </div>
          <CreateReview characteristics={characteristics} />
      </div>
    )
  } else {
    return (
      <div>
        loading...
      </div>
    )
  }

}

export default RatingsAndReviews;