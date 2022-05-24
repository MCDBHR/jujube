import React, {useEffect} from 'react';

//Need to only have the API key in the server / backend side, its not safe anywhere in react

const RelatedProducts = (props) => {
  useEffect(() => {
      console.log('Related Products mounted once')
  }, [])
  return (
    <div>
      <p>Hello!</p>
    </div>
  )
}

export default RelatedProducts;
