import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Container} from '../../style/ReviewAndRatingStyle/FormStyle/BodyAndSummaryStyle.js';

const UsernameEmail = ({username, setUsername, email, setEmail}) => {

  return (
    <div>
      <form>
        <label>
          <Container>
            <small><b>Nickname * </b></small>
            <input type="text"
                    maxLength = "60"
                    placeholder="Example: jackson11!"
                    value={username}
                    onChange={event => setUsername(event.target.value)} />
          </Container>
          <Container>
            <small><b>Email * </b></small>
            <input type="text"
                    maxLength = "60"
                    placeholder="Example: jackson11@gmail.com"
                    value={email}
                    onChange={event => setEmail(event.target.value)}/>
          </Container>
          <p>For authentication reasons, you will not be emailed</p>
        </label>
      </form>
    </div>
  )
}

export default UsernameEmail;