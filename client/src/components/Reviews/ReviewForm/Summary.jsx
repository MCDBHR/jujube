import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {StyledSummaryContainer} from '../../style/ReviewAndRatingStyle/FormStyle/BodyAndSummaryStyle.js';

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