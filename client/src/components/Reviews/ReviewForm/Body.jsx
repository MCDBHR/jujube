import React, {useState, useEffect} from 'react';
import {StyledBodyContainer} from '../../style/ReviewAndRatingStyle/FormStyle/BodyAndSummaryStyle.js';

const Body = ({setBody}) => {
  let [characterCount, setCharacterCount] = useState('');
  let [minimumReached, setMinimumReached] = useState(false);

  const handleChange = (e) => {
    setCharacterCount(event.target.value);
    setBody(event.target.value);
    if (characterCount.length >= 50) {
      setMinimumReached(true);
    } else if (characterCount.length < 50) {
      setMinimumReached(false);
    }
  }

  return (
    <div>
      <form>
        <label>
          <div>Review body *:</div>

          <StyledBodyContainer type="text" minLength="50" maxLength = "1000" placeholder="Why did you like the product or not?" value={characterCount} onChange={handleChange} required= {true}/>
        </label>
      </form>
      <small><b>{minimumReached ? 'Minimum reached' : `Mininum required characters left: ${50 - characterCount.length}`} </b></small>
    </div>
  )
}

export default Body;