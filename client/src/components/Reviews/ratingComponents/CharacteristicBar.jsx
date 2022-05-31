import React, {useState, useEffect} from 'react'; // import useState
import axios from 'axios';
import Review from '../Review.jsx';
import styled from 'styled-components';
import CharacteristicDataTable from '../ReviewForm/CharacteristicDataTable.js'


const RatingsBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0 1em 0;
`;

const Bar = styled.div`
  background-color: #e6e6e6;
  height: 0.5em;
  margin: 0.1em 0 0.5em 0;
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  position: relative;
  left: ${({ pos }) => (pos / 5) * 100}%;
  border-left: 0.5em solid transparent;
  border-right: 0.5em solid transparent;
  border-top: 1em solid #525252;

  `
const UnderText = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.5em;
`;


const CharacteristicBar= ({data}) => {
  // takes in an object as a prop
  // sets an array of the keys
  let characteristicArray = Object.keys(data);

  return (
    //for each of the items
    <div>
      {characteristicArray.map((characteristic) => {
        return (
          <RatingsBarContainer>
              <small>{characteristic}</small>
            <Bar>
              <Arrow pos={data[characteristic].value}></Arrow>
            </Bar>
            <UnderText>
              {
                CharacteristicDataTable[characteristic].filter((text, index) => {
                  return index % 2 === 0;
                }).map((text) => <div>{text}</div>)
              }

            </UnderText>
          </RatingsBarContainer>
        )
      })}
    </div>
  )

}

export default CharacteristicBar;