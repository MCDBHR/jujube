import React, {useState, useEffect} from 'react'; // import useState
import axios from 'axios';
import Review from './Review.jsx';

const Reviews = ({product_id}) => {
  console.log(product_id);
  const [reviews, setReviews] = useState([]);
  const [order, setOrder] = useState("relevant");
  let [numberToRender, setNumberToRender] = useState(2);



  useEffect(() => {
    let config = {
      headers: {'Authorization': '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'},
      params: {'product_id': product_id,
                    'sort' : order,
                    'count': 9999}
    };
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews', config)
      .then((reviews) => {
        console.log(reviews);
        let reviewsList = reviews.data.results;
        setReviews(reviewsList);
      })
  }, [order]);



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