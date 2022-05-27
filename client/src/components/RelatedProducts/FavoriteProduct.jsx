// const [favItems, setFavItems] = useState([])
//   useEffect(() => {
//     const parsedItems = JSON.parse(localStorage.getItem('favItems'));

//     setFavItems(parsedItems);
//   }, [])

import React, {useEffect, useContext, useState} from 'react';
import FavoriteCard from './FavoriteCard.jsx';
import axios from 'axios';
//Need to only have the API key in the server / backend side, its not safe anywhere in react


const FavoriteProduct = () => {
  // const [favItems, setFavItems] = useState([])
  // useEffect(() => {
  //   const parsedItems = JSON.parse(localStorage.getItem('favItems'));
  //   setFavItems(parsedItems);
  // }, [])

  return (
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
      <h2>Favorite Products</h2>
      {favItems.map(item => <FavoriteCard key={item.id} favItem={item}/>)}
    </div>
  )
}

export default FavoriteProduct;
