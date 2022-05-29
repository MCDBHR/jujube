// const [favItems, setFavItems] = useState([])
//   useEffect(() => {
//     const parsedItems = JSON.parse(localStorage.getItem('favItems'));

//     setFavItems(parsedItems);
//   }, [])

import React, {useEffect, useContext, useState} from 'react';
import FavoriteCard from './FavoriteCard.jsx';
import axios from 'axios';
//Need to only have the API key in the server / backend side, its not safe anywhere in react


const FavoriteProduct = (props) => {
  // const [favItems, setFavItems] = useState([])
  // useEffect(() => {
  //   const parsedItems = JSON.parse(localStorage.getItem('favItems'));
  //   setFavItems(parsedItems);
  // }, [])

  return (
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
      <h2>Favorite Products</h2>
      {console.log(props.favItems,'favItems being passed down')}
      {props.favItems.map(item => <FavoriteCard key={item.id} deleteFavProduct={props.deleteFavProduct} favItem={item}/>)}
    </div>
  )
}

export default FavoriteProduct;
