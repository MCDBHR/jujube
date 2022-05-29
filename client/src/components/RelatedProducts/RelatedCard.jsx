import React, {useContext} from 'react';
import {SetFavItemsContext} from '../App.jsx';


const RelatedCard = (props) => {
  const setFavItems = useContext(SetFavItemsContext);
  const handleOnClickFav = (e) => {
    //To remove localStorage Items
    // localStorage.removeItem('favItems');
    // return;


    if(!localStorage.getItem('favItems')) {
      localStorage.setItem('favItems', JSON.stringify([props.relatedProduct]));
    } else {
      const parsedItems = JSON.parse(localStorage.getItem('favItems'));

      //We need to check if the item has already been favorited
      //If had a large data structure we could use a hash table
      let hasDuplicateItem = false;
      for(let i = 0; i < parsedItems.length; i++) {
        if(parsedItems[i].id === props.relatedProduct.id) {
          hasDuplicateItem = true;
          break;
        }
      }

      if(!hasDuplicateItem) {
        parsedItems.push(props.relatedProduct);
        setFavItems(parsedItems);
        localStorage.setItem('favItems', JSON.stringify(parsedItems));
      }

    }
    console.log(localStorage.getItem('favItems'));
    // localStorage.removeItem('favItems');
    // console.log(localStorage.getItem('favItems'));

  }


  return(
    <div style={{border: '1px solid black', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
      <div style={{width: "200px"}}>
        <img style={{objectFit: "cover", width: "100%", height: "100%"}} src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt=""/>
      </div>
      <div style={{padding: "0px 10px"}}>
         <div>{props.relatedProduct.category}</div>
         <div>{props.relatedProduct.name}</div>
         <div>$ {props.relatedProduct.default_price}</div>
         <button onClick={handleOnClickFav}>Add</button>
      </div>

    </div>
  )
}

export default RelatedCard;