import React, {useState, useEffect} from 'react'; // import useState
import axios from 'axios';
import Review from '../Review.jsx';
import styled from 'styled-components';
import CharacteristicDataTable from '../ReviewForm/CharacteristicDataTable.js'


const RatingsBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.6em 0 0.6em 0;
`;

const Bar = styled.div`
  background-color: #ec9c94;
  border-radius: 4px;
  height: 1em;
  margin: 0.1em 0 0.5em 0;
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  position: relative;
  left: ${({ pos }) => (pos / 5) * 100}%;
  border-left: 0.5em solid transparent;
  border-right: 0.5em solid transparent;
  border-top: 1em solid #de4044;

  `
const UnderText = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
  font-family: "Rubik";
`;

const CharacteristicName = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Play&family=Rubik&family=Vollkorn:wght@400;600&display=swap');
  font-size: 1.2em;
  font-weight: bold;
  font-family: "Rubik";
`


const CharacteristicBar= ({data}) => {
  let characteristicArray = Object.keys(data);
  return (
    <div>
      {characteristicArray.map((characteristic, i) => {
        return (
          <RatingsBarContainer key={characteristic.concat(i)}>
<<<<<<< HEAD
              <small>{characteristic}</small>
=======
              <CharacteristicName>{characteristic}</CharacteristicName>
>>>>>>> main
            <Bar>
              <Arrow pos={data[characteristic].value}></Arrow>
            </Bar>
            <UnderText>
              {
                CharacteristicDataTable[characteristic].filter((text, index) => {
                  return index === 0 || index === 4;
                }).map((text) => <div key={text}>{text}</div>)
              }
            </UnderText>
          </RatingsBarContainer>
        )
      })}
    </div>
  )
}

export default CharacteristicBar;