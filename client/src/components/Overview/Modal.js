import React, { useEffect } from "react";
import styled from 'styled-components';

const CartContainer = styled.div`
   width:300px;
   height:100px;
   z-index:1;
   border-radius:12px;
   border:3px solid black;
   background-color:white;
   display:flex;
   padding:15px;
`

const Modal = ({setCartShow,msg}) => {


useEffect( ()=> {
  document.addEventListener( 'mousedown', ()=>{
    setCartShow(false)
  })
})

return(
  <CartContainer>
    {msg}
  </CartContainer>
)
}

export default Modal;