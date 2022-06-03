import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledBodyContainer = styled.input`
  width: 100%;
  height: 35px;
  word-wrap:break-word;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 5px;
  resize: none;
  `;

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