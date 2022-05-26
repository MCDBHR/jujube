import React, {useState, useEffect} from 'react'; // import useState
import axios from 'axios';
import Review from '../Review.jsx';

const CharacteristicBar= ({data}) => {
  // takes in an object as a prop
  // sets an array of the keys
  let characteristicArray = Object.keys(data);

  return (
    //for each of the items
    <div>
      {characteristicArray.map((characteristic) => {
        return (
          <div>
            <p>{characteristic}</p>
            <b>{data[characteristic].value}</b>
          </div>
        )
      })}
    </div>
  )

}

export default CharacteristicBar;