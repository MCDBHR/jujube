import React from 'react';
import FlexContainer from '../style/Flexbox';
import ProductDetail from './ProductDetail.js'

 const ProductsInfo = ({overview,reviews}) => {

return(
<FlexContainer direction="column" gap="0">
<ProductDetail
overview={overview}
reviews={reviews} />
</FlexContainer>)
}

export default ProductsInfo;