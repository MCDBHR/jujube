import React, {useState} from 'react';

const FavoriteCard = (props) => {
  return(
    <div style={{border: '1px solid black', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
      <div style={{width: "200px"}}>
        <img style={{objectFit: "cover", width: "100%", height: "100%"}} src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt=""/>
      </div>
      <div style={{padding: "0px 10px"}}>
         <div>{props.favItem.category}</div>
         <div>{props.favItem.name}</div>
         <div>$ {props.favItem.default_price}</div>
      </div>

    </div>
  )
}

export default FavoriteCard;