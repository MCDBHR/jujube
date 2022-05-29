import React from 'react';
import FlexContainer from '../style/Flexbox';
import ProductDetail from './ProductDetail.js'
import SelectStyle from './SelectStyle'
import SizeAndCarts from './SizeAndCarts.js'


const ProductsInfo = ({overview,reviews,styles,metaReview,defaultStyle,handleStyleChange}) => {
return(
<FlexContainer direction="column" gap="0">
  <ProductDetail
    overview={overview}
    metaReview={metaReview} />
  <FlexContainer direction="column">
    <SelectStyle
      styles={styles}
      defaultStyle={defaultStyle}
      handleStyleChange={handleStyleChange}
    />
    <SizeAndCarts
      defaultStyle={defaultStyle}
    />
  </FlexContainer>
</FlexContainer>)
}

export default ProductsInfo;