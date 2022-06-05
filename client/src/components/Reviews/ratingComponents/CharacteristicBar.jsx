import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Review from '../Review.jsx';
import CharacteristicDataTable from '../ReviewForm/CharacteristicDataTable.js';
import {
  RatingsBarContainer,
  Bar,
  Arrow,
  UnderText,
  CharacteristicName
} from '../../style/ReviewAndRatingStyle/CharacteristicBarStyle.js';

const CharacteristicBar= ({data}) => {
  let characteristicArray = Object.keys(data);
  return (
    <div>
      {characteristicArray.map((characteristic, i) => {
        return (
          <RatingsBarContainer key={characteristic.concat(i)}>
              <CharacteristicName>{characteristic}</CharacteristicName>
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