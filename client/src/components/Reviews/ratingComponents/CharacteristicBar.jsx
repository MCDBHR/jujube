import React, {useState, useEffect} from 'react'; // import useState
import axios from 'axios';
import Review from './Review.jsx';

const CharacteristicBar= ({product_id}) => {
  console.log(product_id);
  const [reviews, setReviews] = useState([]);
  const [order, setOrder] = useState("relevant");
  let [numberToRender, setNumberToRender] = useState(2);


  return (
    <div>

    </div>
  )

}

export default CharacteristicBar;