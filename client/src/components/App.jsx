import React, { useState, useEffect }  from 'react';
import Overview from './Overview'
import axios from 'axios';
import { Nav } from './style/NavStyle.js';
import FlexContainer from './style/Flexbox.js';
import AppContainer from './style/AppContainer.js';

const App = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get('/products/40348').then((res) => {
      setProduct(res.data);
    });
  }, []);
  const [overview,related,styles,reviews,reviewsMeta] = product;
  return (
    <div style={{ position: 'relative' }}>
      <Nav>
        Jonas Brother
      </Nav>
      {!!product.length &&
      <AppContainer>
        <FlexContainer direction="column" gap="3em">
        <Overview
          overview={overview}
          styles={styles}
          reviews={reviews}
        />
        </FlexContainer>
      </AppContainer>
      }
    </div>
  )
}

export default App;