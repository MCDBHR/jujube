import React, {useState, useEffect} from 'react'; // import useState
//import axios from 'axios';
import Review from './Review.jsx';
import Ratings from './Ratings.jsx';


const Reviews = ({reviews, order, setOrder}) => {
  let [numberToRender, setNumberToRender] = useState(2);

  const handleOrderChange = (event) => {
    setOrder(event.target.value)
  }

  const addToRender = (event) => {
    setNumberToRender(numberToRender += 2);
  }
  return (
    <div>
       <div>
        <label>
          <b> {reviews.length} Reviews   --- sort by:</b>
          <select value={order} onChange={handleOrderChange}>
            <option value="relevant">relevance</option>
            <option value="helpful">helpfulness</option>
            <option value="newest">date</option>
          </select>
        </label>
      </div>

      <div>
        {reviews.slice(0, numberToRender).map((review) => {
          return <Review key={review.review_id} review={review}/>
        })}
      </div>
        <button onClick={addToRender}> See more! </button>
    </div>
  )

}

export default Reviews;