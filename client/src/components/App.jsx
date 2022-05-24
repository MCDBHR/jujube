import React, {useEffect} from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx'

// class App extends React.Component {
//   constructor(props){
//     super(props);
//   }

//   componentDidMount() {
//     console.log('DID OUR COMPONENT MOUNT TWICE?!')
//     // axios.get('/products')
//     //   .then(result => console.log(result))
//     //   .catch(err => console.log(err));
//   }

//   render() {
//     return(
//       <div>
//         <RelatedProducts/>
//       </div>
//     )
//   }

// }

const App = () => {
  useEffect(() => {
    console.log('App Mounted');
  }, [])

    return (
      <div>
        <RelatedProducts/>
      </div>
    )
}

export default App;
