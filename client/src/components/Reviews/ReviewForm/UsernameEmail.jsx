import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledSummaryContainer = styled.div`
    margin: 10px 0;
  `;

const UsernameEmail = ({username, setUsername, email, setEmail}) => {

  return (
    <div>
      <form>
        <label>
          <StyledSummaryContainer>
            <small><b>Nickname * </b></small>
            <input type="text"
                    maxLength = "60"
                    placeholder="Example: jackson11!"
                    value={username}
                    onChange={event => setUsername(event.target.value)} />
          </StyledSummaryContainer>
          <StyledSummaryContainer>
            <small><b>Email * </b></small>
            <input type="text"
                    maxLength = "60"
                    placeholder="Example: jackson11@gmail.com"
                    value={email}
                    onChange={event => setEmail(event.target.value)}/>
          </StyledSummaryContainer>
          <p>For authentication reasons, you will not be emailed</p>
        </label>
      </form>
    </div>
  )
}

export default UsernameEmail;