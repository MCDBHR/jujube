import React, {useState, useEffect} from 'react'; // import useState
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding: 10px;
`
const InnerStar = styled.div`
  &:before {
    display: absolute;
    content: '\\2605\\2605\\2605\\2605\\2605';
    width: 0;
    font-size: 20px;
  }
  position: absolute;
  color: #de4044;
  overflow: hidden;

`;

const OuterStar = styled.div`
  &:before {
    display: relative;
    content: '\\2605\\2605\\2605\\2605\\2605';
    color: grey;
    font-size: 20px;
  }
  position: relative;
  display: inline-block;
`

const StarRating = ({data}) => {
  return (
    <div>
      <Container>
        <OuterStar></OuterStar>
        <InnerStar style={{ width: data / 5 * 100  }}></InnerStar>
      </Container>
    </div>

  )

}

export default StarRating;