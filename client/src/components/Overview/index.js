import React, { useState, useEffect } from 'react';

import Gallery from './Gallery.js';
import ProductsInfo from './ProductsInfo.js'

import Flexbox from '../style/Flexbox.js';
import GalleryContainer from '../style/GalleryStyle.js';
import OverviewContainer from '../style/OverviewStyle.js';
import ProductDetailContainer from '../style/ProductStyle.js';


/*------------------MAIN FUNCTION -----------------*/
const Overview = ({overview,styles,reviews,metaReview}) => {

  //set up default style
  const [defaultStyle, setSelectedStyle] = useState(styles.results[0]);
  useEffect(() => {
    setSelectedStyle(styles.results[0]);
  }, [styles]);

// expanded or not
  const [isExpanded, setExpanded] = useState(false);
  const handleExpand = () => {
    setExpanded(!isExpanded);
  };

  return(
    <main>
<Flexbox direction="column">
<OverviewContainer
  direction="row"
  justify="center"
  >
  <GalleryContainer
  expanded={isExpanded}>
    <Gallery
      defaultStyle={defaultStyle}
      expandedHandler={handleExpand}
      expanded={isExpanded}
    />
  </GalleryContainer>
  <ProductDetailContainer expanded={isExpanded}>
    <ProductsInfo
    overview={overview}
    reviews={reviews}
    styles={styles}
    defaultStyle={defaultStyle}
    metaReview={metaReview}
    handleStyleChange={(style) => setSelectedStyle(style)}
    />
  </ProductDetailContainer>
</OverviewContainer>
</Flexbox>
    </main>
  )
}




export default Overview;

