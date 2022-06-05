import React, {useContext} from 'react';
import {SetFavItemsContext} from '../App.jsx';
import {Link} from 'react-router-dom';

//CSS
import {RelatedCardContainer} from '../style/RelatedProductsStyle/CardContainer.style.js';

const StorefrontCard = (props) => {
  return(
    <RelatedCardContainer>
      <div style={{width: "250px", height: "325px"}}>
        <Link to={`/products/${props.product.id}`}>
           <img style={{objectFit: "cover", width: "100%", height: "100%"}}
            src={props.stylesImg} alt=""/>
        </Link>
      </div>
      <div style={{padding: "0px 10px"}}>
         <div>{props.product.category}</div>
         <div>{props.product.name}</div>
         <div>$ {props.product.default_price}</div>
      </div>
    </RelatedCardContainer>
  )
}

export default StorefrontCard;