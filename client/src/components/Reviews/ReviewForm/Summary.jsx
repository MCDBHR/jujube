import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledSummaryContainer = styled.input`
    width: 90%;
    height: 30px;
  `;
const Summary = ({setSummary}) => {

  return (
    <div>
      <form>
        <label>
          Summary:
          <StyledSummaryContainer type="text" maxLength = "60" placeholder="Example: Best purchase ever!" onChange={event => setSummary(event.target.value)}/>
        </label>
      </form>
    </div>
  )
}

export default Summary;