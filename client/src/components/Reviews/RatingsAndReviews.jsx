import React from 'react';
import { useState, useEffect } from 'react'; // import useState
import CreateReview from './ReviewForm/CreateReview.jsx';
import Reviews from './Reviews.jsx';
import Ratings from './Ratings.jsx';
import styled from 'styled-components';
import axios from 'axios';

import {
  RRFlexContainer,
  RatingsStyle,
  ReviewsStyle,
  ModalStyle,
  ModalBackground
} from '../style/ReviewsAndRatings.js'


const RatingsAndReviews = ({ product_id }) => {

  //------------REVIEWS STATE---------------
  const [reviews, setReviews] = useState(null);
  const [order, setOrder] = useState("relevant");
  const [displayRatingFilter, setDisplayRatingFilter] = useState([]);

  //------------RATINGS STATE ----------------
  const [characteristics, setCharacteristics] = useState({});
  const [ratings, setRatings] = useState({});
  const [recommended, setRecommended] = useState({});
  //------------ADD REVIEW ---------------------
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {

    axios.get('/api/reviews/', { params: { 'product_id': product_id, 'sort': order, 'count': 9999 } })
      .then((results) => {
        setReviews(results.data)
      })
      .then(() => {
        axios.get('/api/reviews/meta', { params: { 'product_id': product_id } })
          .then((metaData) => {
            setCharacteristics(metaData.data.characteristics);
            setRatings(metaData.data.ratings);
            setRecommended(metaData.data.recommended);
          })
      })
  }, [order]);

  const handleShowModal = (e) => {
    if (showModal === false) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }

  if (reviews && Object.keys(characteristics).length !== 0) {
    return (
      <div id='ratings-reviews'>
        <RRFlexContainer>
          <RatingsStyle>
            <Ratings characteristics={characteristics}
                     ratings={ratings}
                     recommended={recommended}
                     setDisplayRatingFilter={setDisplayRatingFilter}
                     displayRatingFilter={displayRatingFilter}/>
          </RatingsStyle>
          <ReviewsStyle>
            <Reviews reviews={reviews}
                     order={order}
                     setOrder={setOrder}
                     showModal={handleShowModal}
                     filter={displayRatingFilter}
                     />
          </ReviewsStyle>

          {showModal ?
            <>
              <ModalBackground onClick={handleShowModal}></ModalBackground>
              <ModalStyle> <CreateReview characteristics={characteristics} product_id={product_id}/>
              </ModalStyle>
            </>
            : null}

        </RRFlexContainer>

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