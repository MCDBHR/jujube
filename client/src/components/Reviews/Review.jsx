import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { format, parseISO } from "date-fns";


const StyledReview = styled.div`
  padding 10px;
  border: 2px solid #ed424c;
  border-radius: 8px;
  background: white;
  box-shadow: 20px 20px 10px #f9d4d3;
  margin: 6px;
`;
const Header = styled.section`
  display: flex;
  justify-content:space-between;
`;

const Review = ({review}) => {
  const [fullBody, setFullBody] = useState(null);
  const [defaultBody, setDefaultBody] = useState(null);
  const [hideFullBody, setHideFullBody] = useState(true);
  const [hasPhotos, setHasPhotos] = useState(false);

  const {review_id,
        rating,
        summary,
        recommend,
        response,
        body,
        date,
        reviewer_name,
        helpfulness,
        photos} = review;

    if (rating) {
      var difference = 5 - rating;
      let solidStars = ('★').repeat(rating);
      var clearStars = ('☆').repeat(difference);
      var starRender = solidStars + clearStars;
    }

    useEffect (() => {
      if(photos.length !== 0) {
        setHasPhotos(true);
      }
      if (body.length > 250) {
        let sliced = body.slice(0, 251);
        setDefaultBody(sliced);
        setFullBody(body);
        setHideFullBody(true);
      } else {
        setFullBody(body);
        setHideFullBody(false);
      }
    }, [fullBody])

  return (
    <StyledReview>
        <div>
          <Header>
            <section>{starRender}</section>
            <section> <b style={{fontFamily:"Patrona"}}>{reviewer_name}</b> {format(parseISO(date), 'PPP')}</section>
          </Header>
        </div>
        <h3 style={{fontFamily:"Patrona"}}> {summary} </h3>
        <div>
          {hideFullBody ?
            <div>
              {defaultBody}
              <p onClick={() => setHideFullBody(false)}><u>Show more</u></p>
            </div>
              :
            <div>
              {fullBody}
            </div>
          }
          {hasPhotos ?
            photos.map((photo)=> {
              return (
                <img key={photo.id} src={photo.url} height='70'></img>
              )
            })
            :
            <div></div>

          }
        </div>

        <p>{recommend ? "✓ I recommend this product" : "no"}</p>
        <p>{response ? {response} : ''}</p>
        <p>helpful: {helpfulness}</p>

    </StyledReview>
  )

}

export default Review;