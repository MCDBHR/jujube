import React, {useState, useEffect} from 'react'; // import useState
import axios from 'axios';
import CharacteristicBar from './ratingComponents/CharacteristicBar.jsx';
import RatingBar from './ratingComponents/RatingBar.jsx';
import StarRating from './ratingComponents/StarRating.jsx';

const Ratings = ({characteristics, ratings, recommended}) => {

  let [displayRating, setDisplayRating] = useState(0);
  let [recommendedRating, setRecommendedRating] = useState(0)


  //temporary star feature, will later replace with star component
  useEffect(() => {

    let starRating = Object.keys(ratings);
    let total = 0;
    let starTotal = 0;
    for (let stars of starRating) {
      total += parseInt(ratings[stars], 0);
      starTotal += ratings[stars] * stars;
    }
    let number = (Math.round((starTotal / total) * 4) / 4).toFixed(2);
    setDisplayRating(number);

    let recommendYes = parseInt(recommended.true);
    let recommendNo = parseInt(recommended.false);
    let recTotal = recommendNo + recommendYes;
    let recommendedAverage = Math.round((recommendYes / recTotal * 100).toFixed(3));
    setRecommendedRating(recommendedAverage)

  })

  return (
    <div>
      <StarRating data={displayRating}/>
      <div>
        <RatingBar data={ratings}/>
        <CharacteristicBar data={characteristics}/>
      </div>
      <p> {recommendedRating}% recommends this product</p>
    </div>
  )

}

export default Ratings;