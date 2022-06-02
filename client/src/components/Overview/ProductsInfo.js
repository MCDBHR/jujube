import React from 'react';
import Flexbox from '../style/Flexbox';
import ProductDetail from './ProductDetail.js'
import SelectStyle from './SelectStyle'
import SizeAndCarts from './SizeAndCarts.js'


const ProductsInfo = ({overview,reviews,styles,metaReview,defaultStyle,handleStyleChange}) => {
return(
<Flexbox direction="column" gap="0">
  <ProductDetail
    overview={overview}
    metaReview={metaReview} />
  <Flexbox direction="column">
    <SelectStyle
      styles={styles}
      defaultStyle={defaultStyle}
      handleStyleChange={handleStyleChange}
    />
    <SizeAndCarts
      defaultStyle={defaultStyle}
    />
  </Flexbox>
</Flexbox>)
}

export default ProductsInfo;