
import React, { useRef } from "react";
import ReactDom from "react-dom";
import Star from './Star.jsx';
import Recommend from './Recommend.jsx';
import Characteristics from './Characteristics.jsx';
import Summary from './Summary.jsx';
import Body from './Body.jsx';
import PhotoUpload from './PhotoUpload.jsx';
import UsernameEmail from './UsernameEmail.jsx';

export const CreateReview = ({characteristics}) => {
<<<<<<< HEAD
  //should pass an setState to children, so when onSubmit, it passes all the data to the onSubmit handler

  //render the modal JSX in the portal div.
=======
>>>>>>> main
  return (
    <div>
      <Star/>
      <Recommend/>
      <Characteristics characteristics={characteristics}/>
      <Summary />
      <Body />
      <PhotoUpload/>
      <UsernameEmail />
      <button>submit review</button>
    </div>
  );
};

export default CreateReview;