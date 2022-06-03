import React, {useState, useEffect} from 'react'; // import useState
import styled from 'styled-components';

const StyledSummaryContainer = styled.input`
    width: 90%;
    height: 30px;
  `;
const Summary = ({setSummary}) => {

  //takes in meta data that is an object.
  //object.keys that metadata to get characteristic

  //for each characteristic, find the key that matches in the CharacteristicDataTable and map out each radio button with the description (index) underneath

  return (
    <div>
      <form>
        <label>
          Summary:
          <StyledSummaryContainer type="text" maxLength = "60" placeholder="Example: Best purchase ever!" onChange={event => setSummary(event.target.value)}/>
        </label>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    </div>
  )
}

export default Summary;