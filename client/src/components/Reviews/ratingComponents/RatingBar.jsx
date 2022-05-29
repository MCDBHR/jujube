import React, {useState, useEffect} from 'react'; // import useState
import axios from 'axios';
import styled from 'styled-components';

// styled bar
// const bar = styled.div`
//   width: 50px
//   height: 10px
//   border: 1px
// `

// styled data in bar

const RatingBar = ({data}) => {
  // takes in an object as a prop
  // sets an array of the keys
  let ratingArray = Object.keys(data);

  return (
    //for each of the items
    <div>
      {ratingArray.map((rating, index) => {
        return (
          <div key={index}>
            <div className="row">
            <div className="data">
            <div>{rating} star</div>
            </div>
            </div>
            <div className="progressBar">
            <div className="progressContainer">
            </div>
            </div>
            <div className="data right">
            <div>{data[rating]}</div>
            </div>
          </div>
        )
      })}
    </div>
  )

}

export default RatingBar;