import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Flexbox from '../style/Flexbox';
import styled,{ css } from 'styled-components';
import Modal from "./Modal";
/*===============Styling======================= */
const Button = styled.button`
  color: black;
  padding: .45em 1.25em;
  background-color: white;
  text-transform: uppercase;
  outline: none;
  border: 1px solid #555555;
  transition: all .25s ease;
  font-weight: bold;
  text-align: center;
  width: 20%;
  border-radius:3px;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
    border-radius: 3px;
  }

  &:focus {
    outline: none;
  }

  ${(props) => props.selected && css`
    background-color: #555555;
    color: white;
    border: 1px solid black;
  `}
`;

const QuantitySelector = styled.select`
  border: 1px solid #555555;
  color: black;
  padding: .45em 1.25em;
  background-color: #f3f3f3;
  font-weight: bold;
  height: 100%;
  width: 45%;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
  &[disabled] {
    cursor: not-allowed;
    opacity: 50%;
  }
`;

const CartButton = styled.button`
  color: white;
  padding: .45em .75em;
  background-color: #555555;
  outline: none;
  border: 1px solid black;
  transition: all .25s ease;
  font-weight: bold;
  text-align: center;
  height: 100%;
  width: 45%;
  text-transform: uppercase;
  position: relative;

  &:not([disabled]) {
    transform: translate(-3px, -3px);
  }

  &::after,
  &::before {
    display: block;
    content: '';
    position: absolute;
    transition: .1s ease;
  }

  &::after {
    height: 100%;
    width: 3px;
    top: 3px;
    right: -3px;
    border-top: 1px solid black;
    border-right: 1px solid black;
  }

  &::before {
    width: 100%;
    height: 3px;
    left: 3px;
    bottom: -3px;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
  }

  &:active {
    transform: translate(0, 0);

    &::after,
    &::before {
      transform: translate(-3px, -3px);
      opacity: 0;
    }
  }

  &:hover {
    cursor: pointer;
    background-color: grey;
    color: white;
  }

  &:focus {
    outline: none;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 50%;
    &::after,
    &::before {
      opacity: 0;
    }
  }

  &[disabled]:hover {
    background-color: #555555;
    color: white;
    border-radius: 0;
  }
`;

const CartWrapper = styled.div`
  position: fixed;
  width: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backgroundColor: white;
  padding: 50px;
  zIndex: 1000
`
/*===============Main Function======================= */
const SizeAndCarts = ({defaultStyle}) => {
  //States
  const [skuIndex, setSkuIndex] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [sizeIndex, setSizeIndex] = useState(null);
  const [postCartStatus, setPostCartStatus] = useState(null);
  const [cartShow, setCartShow] = useState(false);
  //Style List
  const styleSkus = defaultStyle.skus;
    const skuList = Object.keys(styleSkus).reduce((list, skuId) => {
      const sku = { ...styleSkus[skuId], sku_id: skuId };
      list.push(sku);
      return list;
    }, []);

  //Size List
  const sizeList = skuList.map(sku => sku.size)

  //Quantity List
  const quantityList = Array.from(Array(skuList[skuIndex].quantity).keys());
  //{remove index 0}
  quantityList.forEach((quantity, i) => {
    quantityList[i] = quantity + 1;
  });


  //life Cycle
  useEffect(() => {
    setPostCartStatus(null);
  }, [defaultStyle, sizeIndex, quantity]);

  useEffect(() => {
    setQuantity(0);
    setSizeIndex(null);
  }, [defaultStyle]);

  // Cart
  const added = (status) => {
    setPostCartStatus(status);
  }
  const skuID = {
    sku_id: skuList[skuIndex].sku_id
  }
  const addToCart = () => {
    axios.post('/cart', skuID)
    .then((res)=> {
      added(true)
    })
    .catch(()=>{
      added(false)
    })
  }

  //after added
  let msg;
  if(postCartStatus){
    msg = `🎉🎉🎉  Woohoo!  Added ${quantity} ${defaultStyle.name} at Size ${sizeList[sizeIndex]} to your Cart.`
  } else {
    msg = `Nothing in the Cart`
  }

  return (
    <Flexbox direction="column" gap="1em" >
      <span>Current Size: {sizeList[sizeIndex]}</span>
      <Flexbox direction="row" gap=".5em" wrap="wrap">
      {skuList.map((id, index) => (
        <Button
        key={index}
        selected={setSizeIndex === index}
        onClick={() => {
          setSkuIndex(index);
          setSizeIndex(index);
        }}
        >
          {id.size}
        </Button>
      ))
      }
      </Flexbox>
        <Flexbox direction="column" gap="1em">
          <Flexbox
            direction="column"
            gap="1em"
            align="center"
            style={{ position: 'relative' }}
          >
            <Flexbox
              direction="row"
              gap="1em"
              align="center"
            >
              <QuantitySelector
              value={quantity}
              disabled={sizeIndex === null}
              onChange={(e) => setQuantity(e.target.value)}
              >
                <option>Quantity</option>
                {quantityList.map((quan, index) => (
                  <option
                  key={index}
                  value={quan}>
                    {quan}
                  </option>
                ))}
              </QuantitySelector>
              <CartButton
                onClick={() => {
                  if (quantity > 0) {
                    addToCart();
                    setCartShow(true);
                  }
                }}
                disabled={sizeIndex === null || quantity === 0}>
                  Add to Cart
              </CartButton>
            </Flexbox>
            <CartWrapper>
            {cartShow && <Modal
            setCartShow={setCartShow}
            msg={msg}/>}
            </CartWrapper>
          </Flexbox>
        </Flexbox>
    </Flexbox>
  )
}

export default SizeAndCarts;