import React, { useRef } from "react";
import ReactDom from "react-dom";
import Star from './Star.jsx';
import Recommend from './Recommend.jsx';
import Characteristics from './Characteristics.jsx';
import Summary from './Summary.jsx';
import Body from './Body.jsx';
import PhotoUpload from './PhotoUpload.jsx';
import UsernameEmail from './UsernameEmail.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`


`
export const CreateReview = ({characteristics, product_id, name}) => {
  const [rating, setRating] = useState(null);
  const [recommended, setRecommended] = useState(null);
  let [choiceObj, setChoiceObj] = useState({})
  const [summary, setSummary] = useState('');
  let [body, setBody] = useState('');
  let [images, setImages] = useState([]);
  let [username, setUsername] = useState('');
  let [email, setEmail] = useState('');
  const handlePostVerification = () => {
    if(images.length === 0) {
      setImages(null);
    }
    let params = {
      'product_id': product_id,
      'rating': rating,
      'summary': summary,
      'body': body,
      'recommend': recommended,
      'name': username,
      'email': email,
      'photos': images,
      'characteristics': choiceObj
    }
    console.log(params);
    axios.post('/api/reviews', params)
  };
  return (
    <div>
      <p>{name}</p>
      <Star rating={rating} setRating={setRating}/>

      <Recommend setRecommended={setRecommended}/>

      <Characteristics characteristics={characteristics} choiceObj={choiceObj} setChoiceObj={setChoiceObj}/>

      <Summary setSummary={setSummary}/>

      <Body setBody={setBody}/>

      <PhotoUpload images={images} setImages={setImages}/>

      <UsernameEmail setUsername={setUsername} setEmail={setEmail}/>

      <button onClick={handlePostVerification}>submit review</button>
    </div>
  );
};
export default CreateReview;