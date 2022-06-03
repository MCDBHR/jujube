import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import App from './components/App.jsx';
import Storefront from './components/Storefront/Storefront.jsx';
import GlobalStyle from './components/style/RelatedProductsStyle/GlobalStyle.style.js';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
<Router>
  <GlobalStyle/>
  <Routes>
    <Route path='/' exact element={<Storefront/>} />
    <Route path='/products/:id' exact element={<App/>}/>
  </Routes>
</Router>
)
