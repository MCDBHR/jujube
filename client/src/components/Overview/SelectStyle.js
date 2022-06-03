import React from 'react';
import Flexbox from '../style/Flexbox';
import styled from 'styled-components';
import StyleEntry from './StyleEntry'



const SelectStyle = ({styles,defaultStyle,handleStyleChange}) => {
  const styleList = styles.results
  const thumbList = styleList.reduce((imgArr,style) => {
    imgArr.push(style.photos[0].thumbnail_url);
    return imgArr;
  },[])

  const oldPrice = defaultStyle.original_price;
  const currentPrice = defaultStyle.sale_price ?? oldPrice
  const isOnSale = oldPrice !== currentPrice


  const oldPriceStyle = {
    textDecoration: isOnSale ? 'line-through' : 'none',
    color: isOnSale ? 'red' : 'inherit',
    fontSize: isOnSale ? '.8em' : '1.8em',
    marginLeft: isOnSale ? '4px' : '0',
  };

  return(
    <Flexbox direction="column" gap="1em">
      {/* FOR price */}
    <div
        style={{
          borderBottom: '2px solid #f9d4d3', marginTop: '1em', boxShadow:'4px 4px 4px #f9d4d3', fontStyle:'Petrona'
        }}
      >
      {
        isOnSale && (
          <span style={{ fontSize: '1.8em' }}>
              $
              {currentPrice}
            </span>
        )
      }
      <span style={oldPriceStyle}>
        ${oldPrice}
      </span>
    </div>
        {/* FOR Style select name */}
        <span style={{ fontWeight: 'bold',fontFamily:'Petrona',fontStyle:'italic',fontSize:'0.8em' }}>
          STYLE SELECTED :
        {defaultStyle.name}
      </span>

      <Flexbox
        direction="row"
        wrap="wrap"
        gap=".5em"
        id="style-selector"
      >
        {/* FOR thumbnail images */}
        {
        styleList.map((style, index) => {
          if (index === styleList.indexOf(defaultStyle)) {
            return (
              <StyleEntry
                style={style}
                handleStyleChange={handleStyleChange}
                selected
                key={index}
                thumbnailImg={thumbList[index]}
              />
            );
          }
          return (
            <StyleEntry
            style={style}
            key={index}
            handleStyleChange={handleStyleChange}
            thumbnailImg={thumbList[index]}
            />
          )
        })}
      </Flexbox>
    </Flexbox>
  )
};


export default SelectStyle;