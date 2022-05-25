import React, {useEffect, useState} from 'react';
import axios from 'axios';
import RelatedProduct from './RelatedProducts/RelatedProduct.jsx';
import FavoriteProduct from './RelatedProducts/FavoriteProduct.jsx';

export const MainProductContext = React.createContext();

const App = (props) => {
  const [products, setProducts] = useState({});
  useEffect(() => {
    axios.get('/products/65631')
     .then(result => setProducts(result.data))
     .catch(err => console.log(err));
  }, [])

    return (
      <div>
        {products.id} product
        <MainProductContext.Provider value={products}>
          {Object.keys(products).length && <RelatedProduct/>}
        </MainProductContext.Provider>
          {localStorage.getItem('favItems') && <FavoriteProduct/>}
      </div>
    )
}

export default App;
