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

  //------------RATINGS STATE ----------------
  const [characteristics, setCharacteristics] = useState({});
  const [ratings, setRatings] = useState({});
  const [recommended, setRecommended] = useState({});
  //------------ADD REVIEW ---------------------
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    axios.get('/reviews/', { params: { 'product_id': product_id, 'sort': order, 'count': 9999 } })
      .then((results) => {
        setReviews(results.data)
      })
      .then(() => {
        axios.get('/reviews/meta', { params: { 'product_id': product_id } })
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
      <RRFlexContainer>
        <RatingsStyle>
          <Ratings characteristics={characteristics} ratings={ratings} recommended={recommended} />
        </RatingsStyle>
        <ReviewsStyle>
          <Reviews reviews={reviews} order={order} setOrder={setOrder} showModal={handleShowModal} />
        </ReviewsStyle>

        {showModal ?
          <>
            <ModalBackground onClick={handleShowModal}></ModalBackground>
            <ModalStyle> <CreateReview characteristics={characteristics} />
            </ModalStyle>
          </>
          : null}

      </RRFlexContainer>
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