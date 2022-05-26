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
    axios.get('/reviews/', {params: {'product_id': product_id, 'sort' : order, 'count': 9999}})
    .then((results) => {
      setReviews(results.data)
    })
    .then(()=> {
      axios.get('/reviews/meta', {params: {'product_id': product_id}})
      .then((metaData) => {
        console.log(metaData, 'this is meta data');
        setCharacteristics(metaData.data.characteristics);
        setRatings(metaData.data.ratings);
        setRecommended(metaData.data.recommended);
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