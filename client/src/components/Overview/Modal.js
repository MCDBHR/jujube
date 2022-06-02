import React, { useEffect } from "react";
import styled from 'styled-components';

const CartContainer = styled.div`
   width:300px;
   height:100px;
   z-index:1;
   border-radius:12px;
   border:3px solid black;
   background-color:white;
   display:${(props) => props.shows};
   padding:15px;
`

const Modal = ({setCartShow,msg,cartShow}) => {

  useEffect( ()=> {
    document.addEventListener( 'mousedown', ()=>{
      setCartShow(false)
    })
  })
  let show;
  if(!cartShow) {
    show = 'none';
  } else {
    show = 'flex'
  }
  return(

    <CartContainer shows={show}>
      {msg}
    </CartContainer>
  )
}

export default Modal;