import React, {useState, useEffect} from 'react'; // import useState
import axios from 'axios';
import CharacteristicBar from './ratingComponents/CharacteristicBar.jsx'

const Ratings = ({product_id}) => {
  const [characteristics, setCharacteristics] = useState({});
  const [ratings, setRatings] = useState({});
  const [recommended, setRecommended] = useState({});
  let [displayRating, setDisplayRating] = useState(0);
  let [recommendedRating, setRecommendedRating] = useState(0)
  useEffect(() => {
    let config = {
      headers: {'Authorization': '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'},
      params: {'product_id': product_id}
    };
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/rfp/reviews/meta', config)
      .then((reviews) => {
        console.log(reviews, 'meta data');
        setCharacteristics(reviews.data.characteristics);
        setRatings(reviews.data.ratings);
        setRecommended(reviews.data.recommended)
      })
  }, []);

  useEffect(() => {

    let starRating = Object.keys(ratings);
    let total = 0;
    let starTotal = 0;
    for (var stars of starRating) {
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
  console.log(characteristics, 'there are the characteristics');
  return (
    <div>
      <h1>RATINGS {displayRating}</h1>
      <div>
        {/* {characteristics.Comfort.value} */}
        {/* {characteristics.Fit.value}
        {characteristics.Length.value}
        {characteristics.Quality.value} */}
      </div>
      <p> {recommendedRating}% recommends this product</p>
    </div>
  )

}

export default Ratings;