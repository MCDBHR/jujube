import React, {useContext} from 'react';
import {SetFavItemsContext} from '../App.jsx';
import {Link} from 'react-router-dom';

//CSS
import {RelatedCardContainer} from '../style/RelatedproductsStyle/RelatedCardContainer.style.js';

const RelatedCard = (props) => {
  const setFavItems = useContext(SetFavItemsContext);
  const handleOnClickFav = (e) => {

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
        const productWithImg = {...props.relatedProduct, thumbnailURL: props.productImg}
        parsedItems.push(productWithImg);

        //Re-renders state with new product
        setFavItems(parsedItems);
        localStorage.setItem('favItems', JSON.stringify(parsedItems));
      }

    }
    //console.log(localStorage.getItem('favItems'));
    // localStorage.removeItem('favItems');
    // console.log(localStorage.getItem('favItems'));

  }


  return(
    <RelatedCardContainer>
      <div style={{width: "250px", height: "325px"}}>
        <Link to={`/products/${props.relatedProduct.id}`}>
           <img style={{objectFit: "cover", width: "100%", height: "100%"}} src={props.productImg} alt=""/>
        </Link>
      </div>
      <div style={{padding: "0px 10px"}}>
         <div>{props.relatedProduct.category}</div>
         <div>{props.relatedProduct.name}</div>
         <div>$ {props.relatedProduct.default_price}</div>
         <button onClick={handleOnClickFav}>Add</button>
      </div>

    </RelatedCardContainer>
  )
}

export default RelatedCard;