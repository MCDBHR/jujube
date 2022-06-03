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
  margin: 5px;
`
export const CreateReview = ({characteristics, product_id, name}) =>
{
  const [characteristicArray, setCharacteristicsArray] = useState( Object.keys(characteristics));
  const [rating, setRating] = useState(null);
  const [recommended, setRecommended] = useState(null);
  let [choiceObj, setChoiceObj] = useState({})
  const [summary, setSummary] = useState('');
  let [body, setBody] = useState('');
  let [images, setImages] = useState([]);
  let [username, setUsername] = useState('');
  let [email, setEmail] = useState('');
  let [imagesToPost, setImagesToPost] = useState([]);
  let [isValidToPost, setIsValidToPost] = useState(false);
  let [invalidReasons, setInvalidReasons] = useState([]);

  const handlePostVerification = () => {
    if(images.length === 0) {
      setImagesToPost(null);
    } else {
      setImagesToPost(images)
    }

    const validEmail = (email) => {
      let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (email.match(mailFormat)) {
        return (true)
      } else {
        return (false)
      }
    }

    const setToInvalid = (reason) => {
      setInvalidReasons(invalidReasons.push(reason));
    }
    const checkManditoryfields = () => {
      if (rating === null) {
        setToInvalid('must have a rating');
      }
      if (recommended === null) {
        setToInvalid('recommended must be filled');
      }
      if (Object.keys(choiceObj).length < characteristicArray.length) {
        setToInvalid('must fill out characteristics');
      }
      if (body.length < 50) {
        setToInvalid('minimum characters have not been met');
      }
      if (username.length === 0) {
        setToInvalid('nickname is required to post');
      }
      if (email.length === 0) {
        setToInvalid('email is required to post');
      }
      if (validEmail(email) === false) {
        setToInvalid('email is invalid');
      }
    }
    checkManditoryfields();
    console.log(invalidReasons);
    if(invalidReasons.length === 0) {
      let params = {
        'product_id': product_id,
        'rating': rating,
        'summary': summary,
        'body': body,
        'recommend': recommended,
        'name': username,
        'email': email,
        'photos': imagesToPost,
        'characteristics': choiceObj
      }
      axios.post('/api/reviews', params)
      .then(() => {
        alert('posted!')
      })
    } else {
      let reasons = invalidReasons.toString();
      console.log(reasons);
      alert(`failed to post! missing requirements: ${reasons}`);
    }

  };
  return (
    <div>
      <h2 style={{fontFamily:'Shrikhand'}}>{name}</h2>
      <Container>
        <Star rating={rating} setRating={setRating}/>
      </Container>

      <Recommend setRecommended={setRecommended}/>
      <Container>
        <Characteristics characteristics={characteristics} characteristicArray={characteristicArray} choiceObj={choiceObj} setChoiceObj={setChoiceObj}/>
      </Container>

      <Summary setSummary={setSummary}/>

      <Body setBody={setBody}/>

      <PhotoUpload images={images} setImages={setImages}/>

      <UsernameEmail setUsername={setUsername} setEmail={setEmail}/>

      <button onClick={handlePostVerification}>submit review</button>
    </div>
  );
};
export default CreateReview;